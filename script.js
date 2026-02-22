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
function toggleTheme() {
    const html = document.documentElement;
    const thumb = document.getElementById('theme-thumb');
    const isDark = html.classList.toggle('dark');
    
    // Update posisi thumb secara manual untuk memastikan gerakan
    if (isDark) {
        thumb.style.transform = 'translateX(32px)'; // Geser kanan (Dark)
    } else {
        thumb.style.transform = 'translateX(0px)';  // Geser kiri (Light)
    }
    
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
}

// Jalankan saat load untuk set posisi awal
document.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem('theme') || 'dark';
    const thumb = document.getElementById('theme-thumb');
    
    if (savedTheme === 'dark') {
        document.documentElement.classList.add('dark');
        thumb.style.transform = 'translateX(32px)';
    } else {
        document.documentElement.classList.remove('dark');
        thumb.style.transform = 'translateX(0px)';
    }
});