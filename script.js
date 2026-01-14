// Ziskanie elementov
const themeToggle = document.getElementById('theme-toggle');
const html = document.documentElement;

// Zistenie systemovych preferencii
const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');

// Nacitanie ulozeneho nastavenia alebo pouzitie systemoveho
function getThemePreference() {
    const saved = localStorage.getItem('theme');
    if (saved) {
        return saved;
    }
    return prefersDark.matches ? 'dark' : 'light';
}

// Nastavenie temy
function setTheme(theme) {
    html.setAttribute('data-theme', theme);
    themeToggle.checked = theme === 'dark';
    localStorage.setItem('theme', theme);
}

// Inicializacia pri nacitani stranky
function init() {
    const theme = getThemePreference();
    setTheme(theme);
}

// Prepnutie temy pri kliknuti na prepinac
themeToggle.addEventListener('change', () => {
    const newTheme = themeToggle.checked ? 'dark' : 'light';
    setTheme(newTheme);
});

// Sledovanie zmien systemovych preferencii
prefersDark.addEventListener('change', (e) => {
    // Ak uzivatel nema manualne nastavenu preferenciu, sleduj system
    if (!localStorage.getItem('theme')) {
        setTheme(e.matches ? 'dark' : 'light');
    }
});

// Spustenie inicializacie
init();
