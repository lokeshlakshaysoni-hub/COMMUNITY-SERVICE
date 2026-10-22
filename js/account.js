// Bharat Nursery - User Account and Address API Integration
// Handles profile picture upload, account details, and address fetching via APIs

document.addEventListener("DOMContentLoaded", function () {
  loadUserProfile();
  setupPfpUpload();
  setupPasswordToggle();
  setupAccountForm();
  setupAddressApis();
});

// Load existing profile from localStorage
function loadUserProfile() {
  const savedData = localStorage.getItem("bharat_user_profile");
  if (!savedData) return;

  try {
    const profile = JSON.parse(savedData);
    if (document.getElementById("acc-username")) document.getElementById("acc-username").value = profile.username || "";
    if (document.getElementById("acc-password")) document.getElementById("acc-password").value = profile.password || "";
    if (document.getElementById("acc-fullname")) document.getElementById("acc-fullname").value = profile.name || "";
    if (document.getElementById("acc-phone")) document.getElementById("acc-phone").value = profile.phone || "";
    if (document.getElementById("acc-address")) document.getElementById("acc-address").value = profile.address || "";
    if (document.getElementById("acc-city")) document.getElementById("acc-city").value = profile.city || "";
    if (document.getElementById("acc-state")) document.getElementById("acc-state").value = profile.state || "";
    if (document.getElementById("acc-pincode")) document.getElementById("acc-pincode").value = profile.pincode || "";

    if (profile.pfp && document.getElementById("pfp-image")) {
      document.getElementById("pfp-image").src = profile.pfp;
    }

    if (document.getElementById("sidebar-display-name")) {
      document.getElementById("sidebar-display-name").textContent = profile.name || "Nursery Member";
    }
    if (document.getElementById("sidebar-display-user")) {
      document.getElementById("sidebar-display-user").textContent = "@" + (profile.username || "user");
    }
  } catch (err) {
    console.error("Error loading profile:", err);
  }
}

// Handle profile photo upload and base64 preview
function setupPfpUpload() {
  const pfpInput = document.getElementById("pfp-file-input");
  const pfpImage = document.getElementById("pfp-image");

  if (!pfpInput || !pfpImage) return;

  pfpInput.addEventListener("change", function (e) {
    const file = e.target.files[0];
    if (file) {
      if (file.size > 2 * 1024 * 1024) {
        alert("Please select an image smaller than 2 MB.");
        return;
      }
      const reader = new FileReader();
      reader.onload = function (evt) {
        pfpImage.src = evt.target.result;
      };
      reader.readAsDataURL(file);
    }
  });
}

// Password visibility toggle
function setupPasswordToggle() {
  const toggleBtn = document.getElementById("toggle-password-btn");
  const pwdInput = document.getElementById("acc-password");

  if (!toggleBtn || !pwdInput) return;

  toggleBtn.addEventListener("click", function () {
    if (pwdInput.type === "password") {
      pwdInput.type = "text";
      toggleBtn.textContent = "Hide";
    } else {
      pwdInput.type = "password";
      toggleBtn.textContent = "Show";
    }
  });
}

// Save profile form submission
function setupAccountForm() {
  const form = document.getElementById("account-profile-form");
  if (!form) return;

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const profileData = {
      username: document.getElementById("acc-username").value.trim(),
      password: document.getElementById("acc-password").value,
      name: document.getElementById("acc-fullname").value.trim(),
      phone: document.getElementById("acc-phone").value.trim(),
      address: document.getElementById("acc-address").value.trim(),
      city: document.getElementById("acc-city").value.trim(),
      state: document.getElementById("acc-state").value.trim(),
      pincode: document.getElementById("acc-pincode").value.trim(),
      pfp: document.getElementById("pfp-image").src
    };

    if (!profileData.username || !profileData.name || !profileData.phone) {
      alert("Please fill all required fields (Username, Name, Phone Number).");
      return;
    }

    localStorage.setItem("bharat_user_profile", JSON.stringify(profileData));
    localStorage.setItem("bharat_logged_user", JSON.stringify({
      username: profileData.username,
      name: profileData.name
    }));

    if (document.getElementById("sidebar-display-name")) {
      document.getElementById("sidebar-display-name").textContent = profileData.name;
    }
    if (document.getElementById("sidebar-display-user")) {
      document.getElementById("sidebar-display-user").textContent = "@" + profileData.username;
    }

    // Try posting to local Node server API if available
    fetch("/api/account", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(profileData)
    }).catch(() => {
      // Offline / standalone mode - data safely preserved in localStorage
    });

    alert("Profile and address information successfully saved.");
  });
}

// Setup Address APIs: Geolocation Reverse Geocoding & Postal Pincode API
function setupAddressApis() {
  const geoBtn = document.getElementById("btn-fetch-geolocation");
  const pinBtn = document.getElementById("btn-fetch-pincode");
  const statusEl = document.getElementById("api-fetch-status");

  // 1. Geolocation API + OpenStreetMap Reverse Geocoding
  if (geoBtn) {
    geoBtn.addEventListener("click", function () {
      if (!navigator.geolocation) {
        if (statusEl) statusEl.textContent = "Geolocation is not supported by your browser.";
        return;
      }

      if (statusEl) statusEl.textContent = "Fetching GPS coordinates...";

      navigator.geolocation.getCurrentPosition(
        async function (position) {
          const lat = position.coords.latitude;
          const lon = position.coords.longitude;

          if (statusEl) statusEl.textContent = `Coordinates detected (${lat.toFixed(4)}, ${lon.toFixed(4)}). Querying reverse geocoding API...`;

          try {
            const response = await fetch(`https://nominatim.openstreetmap.org/reverse?lat=${lat}&lon=${lon}&format=json`);
            const data = await response.json();

            if (data && data.address) {
              const addr = data.address;
              const fullText = data.display_name || "";
              const city = addr.city || addr.town || addr.village || addr.suburb || addr.county || "";
              const state = addr.state || "";
              const postcode = addr.postcode || "";

              if (document.getElementById("acc-address")) document.getElementById("acc-address").value = fullText;
              if (document.getElementById("acc-city")) document.getElementById("acc-city").value = city;
              if (document.getElementById("acc-state")) document.getElementById("acc-state").value = state;
              if (document.getElementById("acc-pincode")) document.getElementById("acc-pincode").value = postcode;

              if (statusEl) statusEl.textContent = "Address successfully retrieved and filled via Geolocation API.";
            } else {
              if (statusEl) statusEl.textContent = "Could not resolve full address from coordinates.";
            }
          } catch (err) {
            if (statusEl) statusEl.textContent = "API call error. Coordinates: " + lat.toFixed(4) + ", " + lon.toFixed(4);
          }
        },
        function (error) {
          if (statusEl) statusEl.textContent = "Location access denied or unavailable: " + error.message;
        },
        { timeout: 10000 }
      );
    });
  }

  // 2. Postal Pincode API (https://api.postalpincode.in/pincode/)
  if (pinBtn) {
    pinBtn.addEventListener("click", async function () {
      const pin = document.getElementById("acc-pincode").value.trim();
      if (!pin || pin.length !== 6) {
        if (statusEl) statusEl.textContent = "Please enter a valid 6-digit Indian PIN code first.";
        return;
      }

      if (statusEl) statusEl.textContent = "Querying Postal Pincode API for PIN " + pin + "...";

      try {
        const response = await fetch(`https://api.postalpincode.in/pincode/${pin}`);
        const data = await response.json();

        if (data && data[0] && data[0].Status === "Success" && data[0].PostOffice && data[0].PostOffice.length > 0) {
          const po = data[0].PostOffice[0];
          const district = po.District || "";
          const state = po.State || "";
          const region = po.Name || "";

          if (document.getElementById("acc-city")) document.getElementById("acc-city").value = district;
          if (document.getElementById("acc-state")) document.getElementById("acc-state").value = state;

          const currentAddr = document.getElementById("acc-address").value;
          if (!currentAddr) {
            document.getElementById("acc-address").value = `${region}, ${district}, ${state} - ${pin}`;
          }

          if (statusEl) statusEl.textContent = `Found: ${region}, District: ${district}, State: ${state}.`;
        } else {
          if (statusEl) statusEl.textContent = "No post office record found for this PIN code.";
        }
      } catch (err) {
        if (statusEl) statusEl.textContent = "Postal API error. Check internet connection.";
      }
    });
  }
}

// Log out user
function logoutUser() {
  localStorage.removeItem("bharat_logged_user");
  alert("You have logged out.");
  window.location.href = "login.html";
}
