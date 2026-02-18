let currentLang = "id"; // DEFAULT INDONESIA

function toggleLanguage() {
  currentLang = currentLang === "id" ? "en" : "id";
  document.querySelectorAll("[data-en]").forEach(el => {
    el.textContent = el.dataset[currentLang];
  });
}

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
