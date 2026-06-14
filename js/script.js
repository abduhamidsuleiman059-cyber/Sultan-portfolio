// ================= MODAL ELEMENTS =================
const modal = document.getElementById("authModal");
const loginBtn = document.getElementById("loginBtn");
const registerBtn = document.getElementById("registerBtn");
const closeBtn = document.querySelector(".close");

// Forms
const loginForm = document.getElementById("loginForm");
const registerForm = document.getElementById("registerForm");

// ================= OPEN MODAL =================
loginBtn.addEventListener("click", () => {
  modal.style.display = "flex";
  loginForm.style.display = "block";
  registerForm.style.display = "none";
});

registerBtn.addEventListener("click", () => {
  modal.style.display = "flex";
  loginForm.style.display = "none";
  registerForm.style.display = "block";
});

// ================= CLOSE MODAL =================
closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
});

// Close when clicking outside box
window.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
});

// ================= SWITCH FORMS =================
document.querySelectorAll(".switchForm").forEach((el) => {
  el.addEventListener("click", (e) => {
    const target = e.target.getAttribute("data-target");

    if (target === "loginForm") {
      loginForm.style.display = "block";
      registerForm.style.display = "none";
    } else {
      loginForm.style.display = "none";
      registerForm.style.display = "block";
    }
  });
});

// ================= MOBILE MENU TOGGLE =================
const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});