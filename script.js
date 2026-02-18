let currentLang = "en";

function toggleLanguage() {
  currentLang = currentLang === "en" ? "id" : "en";

  document.querySelectorAll("[data-en]").forEach(el => {
    el.textContent = el.dataset[currentLang];
  });
}