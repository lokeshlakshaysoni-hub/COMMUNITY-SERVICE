// ==========================================================
// BHARAT NURSERY - MAIN JAVASCRIPT UTILITIES
// Global navigation, authentication state, and session helpers.
// Strictly zero emojis.
// ==========================================================

document.addEventListener("DOMContentLoaded", function () {
  initMobileNav();
  updateAuthNavbar();
});

// Mobile navigation toggle
function initMobileNav() {
  const toggleBtn = document.querySelector(".nav-toggle");
  const navMenu = document.querySelector(".nav-menu");

  if (toggleBtn && navMenu) {
    toggleBtn.addEventListener("click", function () {
      navMenu.classList.toggle("show");
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
      authBtn.textContent = userObj.username || "Account";
      authBtn.href = "account.html";
      authBtn.classList.add("btn-accent");
    } catch (e) {
      authBtn.textContent = "Account";
      authBtn.href = "account.html";
    }
  } else {
    authBtn.textContent = "Login";
    authBtn.href = "login.html";
  }
}

// Generic alert helper for clean notifications
function showToast(message) {
  alert(message);
}
