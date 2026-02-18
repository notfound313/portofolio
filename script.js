let currentLang = "id"; // default Indonesia

function applyLanguage() {
  document.querySelectorAll("[data-en]").forEach(el => {
    el.textContent = el.dataset[currentLang];
  });
}

function toggleLanguage() {
  currentLang = currentLang === "id" ? "en" : "id";
  applyLanguage();
}

document.addEventListener("DOMContentLoaded", applyLanguage);



function toggleTheme() {
  const html = document.documentElement;
  html.dataset.theme = html.dataset.theme === "dark" ? "light" : "dark";
}

// MODAL
function openModal(src) {
  document.getElementById("modal").style.display = "block";
  document.getElementById("modal-img").src = src;
}
function closeModal() {
  document.getElementById("modal").style.display = "none";
}

// Initialize Animations
AOS.init({ duration: 1000, once: true });
lucide.createIcons();