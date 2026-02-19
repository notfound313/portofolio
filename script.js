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
    const isDark = html.classList.toggle('dark'); // Menambah/menghapus class 'dark'
    
    // Simpan ke local storage agar saat refresh tidak balik lagi
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
}

// Jalankan ini saat halaman pertama kali dibuka
if (localStorage.getItem('theme') === 'dark' || 
    (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    document.documentElement.classList.add('dark');
} else {
    document.documentElement.classList.remove('dark');
}

// Inisialisasi ikon Lucide
lucide.createIcons();