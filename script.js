const body = document.body;
const logo = document.querySelector(".logo img");
const toggle = document.querySelector(".mode-toggle");

toggle.addEventListener("click", () => {
    body.classList.toggle("dark");

    toggle.src = body.classList.contains("dark")
        ? "resources/light-mode.png"
        : "resources/dark-mode.png";

    logo.classList.add("pop");
    setTimeout(() => logo.classList.remove("pop"), 400);
});

logo.addEventListener("mousemove", (e) => {
    const rect = logo.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const centerX = rect.width / 2;

    const angle = ((centerX - x) / centerX) * 15;

    logo.style.transform = `rotate(${angle}deg) scale(1.1)`;
});

logo.addEventListener("mouseleave", () => {
    logo.style.transform = "rotate(0deg) scale(1)";
});

// Splash Screen
window.addEventListener('load', () => {
    const splash = document.querySelector('.splash-screen');
    
    setTimeout(() => {
        splash.classList.add('glass-transition');
        splash.classList.add('fade-out');
        
        setTimeout(() => {
            splash.style.display = 'none';
        }, 1000);
    }, 2500);
});