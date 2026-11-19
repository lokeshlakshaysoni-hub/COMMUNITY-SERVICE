// ==========================================================
// BHARAT NURSERY - MAIN JAVASCRIPT UTILITIES
// Global navigation, responsive mobile menu, session synchronization.
// Authors: Lokesh Verma & Punit Kumar
// Strictly zero emojis.
// ==========================================================

document.addEventListener("DOMContentLoaded", function () {
  initMobileNav();
  updateAuthNavbar();
});

// Responsive Mobile navigation toggle
function initMobileNav() {
  const toggleBtn = document.querySelector(".nav-toggle");
  const navMenu = document.querySelector(".nav-menu");

  if (toggleBtn && navMenu) {
    toggleBtn.addEventListener("click", function (e) {
      e.stopPropagation();
      navMenu.classList.toggle("show");
    });

    // Close menu when clicking any nav link
    const navLinks = navMenu.querySelectorAll(".nav-link, .nav-btn");
    navLinks.forEach(function (link) {
      link.addEventListener("click", function () {
        navMenu.classList.remove("show");
      });
    });

    // Close menu when clicking outside
    document.addEventListener("click", function (e) {
      if (!navMenu.contains(e.target) && !toggleBtn.contains(e.target)) {
        navMenu.classList.remove("show");
      }
    });
  }
}

// Update login / account status in navbar based on localStorage
function updateAuthNavbar() {
  const authBtn = document.getElementById("nav-auth-btn");
  if (!authBtn) return;

  const loggedUser = localStorage.getItem("bharat_logged_user");
  if (loggedUser) {
    try {
      const userObj = JSON.parse(loggedUser);
      authBtn.textContent = userObj.name || userObj.username || "My Account";
      authBtn.href = "account.html";
      authBtn.classList.add("btn-nature");
    } catch (e) {
      authBtn.textContent = "My Account";
      authBtn.href = "account.html";
    }
  } else {
    authBtn.textContent = "Login";
    authBtn.href = "login.html";
  }
}

// Global user session logout helper
function logoutUser() {
  localStorage.removeItem("bharat_logged_user");
  alert("You have been signed out. Redirecting to home page.");
  window.location.href = "index.html";
}
