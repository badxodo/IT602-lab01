window.addEventListener("scroll", () => {
    scrollProjectAnimation();
    scrollAboutAnimation();
    scrollFooterAnimation();
});

function scrollFooterAnimation() {
    const footer = document.getElementById("contact");
    const leftFooter = document.querySelector(".left-footer");
    const rightFooter = document.querySelector(".right-footer");

    const rect = footer.getBoundingClientRect();
    const windowHeight = window.innerHeight;

    if (rect.top > windowHeight * 0.8) {
        footer.classList.remove("show");
        rightFooter.classList.remove("show");
        leftFooter.classList.remove("show");
    }

    if (rect.top < windowHeight * 0.9) {
        footer.classList.add("show");
    }

    if (rect.top < windowHeight * 0.6) {
        rightFooter.classList.add("show");
        leftFooter.classList.add("show");
    }
}

function scrollProjectAnimation() {
    const project = document.getElementById("project");

    const rect = project.getBoundingClientRect();
    const windowHeight = window.innerHeight;

    if (rect.top > windowHeight * 0.8) {
        project.classList.remove("show");
    }

    if (rect.top < windowHeight * 1) {
        project.classList.add("show");
    }
}

function scrollAboutAnimation() {
    const about = document.getElementById("about");

    const rect = project.getBoundingClientRect();
    const windowHeight = window.innerHeight;

    if (rect.top > windowHeight * 0.8) {
        about.classList.remove("show");
    }
    if (rect.top < windowHeight * 1.5) {
        about.classList.add("show");
    }
}
