// Initialize Animations
    AOS.init({ duration: 1000, once: true });   

    // Language Toggle Logic
    let currentLang = 'id';
    function toggleLanguage() {
      currentLang = currentLang === 'en' ? 'id' : 'en';
      document.querySelectorAll('[data-en]').forEach(el => {
        el.innerText = el.getAttribute(`data-${currentLang}`);
      });
    }

   function toggleTheme() {
    const html = document.documentElement;
    const isDark = html.classList.toggle('dark'); 
    
    // Simpan status tema agar tidak reset saat refresh
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
}

// Logika saat halaman baru dibuka (Auto-load tema terakhir)
(function initTheme() {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark' || (!savedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        document.documentElement.classList.add('dark');
    } else {
        document.documentElement.classList.remove('dark');
    }
    // Render ulang ikon lucide
    lucide.createIcons();
})();