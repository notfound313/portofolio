// Initialize Animations
    AOS.init({ duration: 1000, once: true });   

    // Language Toggle Logic
    let currentLang = localStorage.getItem('lang') || 'en';

function toggleLanguage() {
    // 1. Switch value
    currentLang = currentLang === 'en' ? 'id' : 'en';
    
    // 2. Simpan ke localStorage
    localStorage.setItem('lang', currentLang);
    
    // 3. Update Tampilan
    updateLanguageUI();
}

function updateLanguageUI() {
    const slider = document.getElementById('lang-slider');
    const textEn = document.getElementById('text-en');
    const textId = document.getElementById('text-id');

    if (currentLang === 'id') {
        // Geser slider ke kanan (ID)
        slider.style.transform = 'translateX(56px)';
        textId.classList.replace('text-slate-400', 'text-sky-600');
        textId.classList.replace('text-slate-500', 'text-sky-400');
        textEn.classList.replace('text-sky-600', 'text-slate-400');
        textEn.classList.replace('text-sky-400', 'text-slate-500');
    } else {
        // Geser slider ke kiri (EN)
        slider.style.transform = 'translateX(0px)';
        textEn.classList.replace('text-slate-400', 'text-sky-600');
        textEn.classList.replace('text-slate-500', 'text-sky-400');
        textId.classList.replace('text-sky-600', 'text-slate-400');
        textId.classList.replace('text-sky-400', 'text-slate-500');
    }

    // 4. Update konten teks di halaman (logic lama kamu)
    document.querySelectorAll('[data-en]').forEach(el => {
        el.innerText = el.getAttribute(`data-${currentLang}`);
    });
}
// Fungsi inisialisasi tema
function initTheme() {
    const savedTheme = localStorage.getItem('theme');
    const html = document.documentElement;

    // Jika ada setting 'light' di storage, baru ubah ke light. 
    // Jika kosong atau setting-nya 'dark', tetap di dark.
    if (savedTheme === 'light') {
        html.classList.remove('dark');
    } else {
        html.classList.add('dark');
        localStorage.setItem('theme', 'dark'); // Set default ke dark di storage
    }
    
    // Jangan lupa render ulang ikon lucide
    if (window.lucide) {
        lucide.createIcons();
    }
}

// Jalankan fungsi saat halaman dimuat
initTheme();

function toggleTheme() {
    const html = document.documentElement;
    const isDark = html.classList.toggle('dark');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
}
