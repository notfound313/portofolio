// Initialize Animations
    AOS.init({ duration: 1000, once: true });
    lucide.createIcons();

    // Theme Toggle Logic
    function toggleTheme() {
      document.documentElement.classList.toggle('dark');
      localStorage.setItem('theme', document.documentElement.classList.contains('dark') ? 'dark' : 'light');
    }

    // Language Toggle Logic
    let currentLang = 'id';
    function toggleLanguage() {
      currentLang = currentLang === 'en' ? 'id' : 'en';
      document.querySelectorAll('[data-en]').forEach(el => {
        el.innerText = el.getAttribute(`data-${currentLang}`);
      });
    }

    // Set Initial Theme
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }