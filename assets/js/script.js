document.addEventListener('DOMContentLoaded', () => {
    console.log('JANIS SNE Hero loaded');
    
    const scrollIndicator = document.querySelector('.scroll-indicator');
    if(scrollIndicator) {
        scrollIndicator.addEventListener('click', () => {
            window.scrollBy({ top: window.innerHeight, behavior: 'smooth' });
        });
    }

    const menuTrigger = document.querySelector('.menu-placeholder');
    const menuOverlay = document.getElementById('menu-overlay');
    const menuText = document.querySelector('.menu-text');
    const menuIconSvg = document.querySelector('.menu-icon-svg');

    const svgMenuToClose = `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="M5 5l14 14M5 19l14 -14"><animate fill="freeze" attributeName="d" dur="0.4s" values="M5 5l14 0M5 19l14 0;M5 5l14 14M5 19l14 -14"/></path><path d="M12 12h0"><animate fill="freeze" attributeName="d" dur="0.4s" values="M5 12h14;M12 12h0"/><set fill="freeze" attributeName="opacity" begin="0.4s" to="0"/></path></g></svg>`;

    const svgCloseToMenu = `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 5l14 0M5 19l14 0M5 12h14"><animate fill="freeze" attributeName="d" dur="0.4s" values="M5 5l14 14M5 19l14 -14M12 12h0;M5 5l14 0M5 19l14 0M5 12h14"/></path></svg>`;

    if (menuTrigger && menuOverlay) {
        menuTrigger.addEventListener('click', () => {
            menuTrigger.classList.toggle('active');
            menuOverlay.classList.toggle('active');
            
            if (menuTrigger.classList.contains('active')) {
                document.body.classList.add('no-scroll');
                if(menuText) menuText.textContent = 'CLOSE';
                if(menuIconSvg) menuIconSvg.innerHTML = svgMenuToClose;
            } else {
                document.body.classList.remove('no-scroll');
                if(menuText) menuText.textContent = 'MENU';
                if(menuIconSvg) menuIconSvg.innerHTML = svgCloseToMenu;
            }
        });
    }
});
