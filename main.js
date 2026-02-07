window.addEventListener("load", () => {
    const loader = document.getElementById("loading");
    const mainContent = document.getElementById("main-content");
    setTimeout(() => {
        loader.classList.add("hidden");
        loader.classList.remove("flex");
        mainContent.classList.remove("hidden");
        mainContent.classList.add("flex flex-col justify-center relative");
    }, 0);
});

const homeNav = document.getElementById("homeNav");
const projectNav = document.getElementById("projectNav");
const aboutNav = document.getElementById("aboutNav");
const contactNav = document.getElementById("contactNav");

const heroSection = document.getElementById("hero");
const projectSection = document.getElementById("project");
const aboutSection = document.getElementById("about");
const contactSection = document.getElementById("contact");

const navLinks = [homeNav, aboutNav, projectNav, contactNav];
const sections = [heroSection, aboutSection, projectSection, contactSection];

navLinks.forEach((n, i) => {
    n.addEventListener("click", () => {
        if (i === 0) {
            sections[i].scrollIntoView({ behavior: "smooth" });
        } else {
            let offsetY = 0;
            if (i === 2) offsetY += 50;
            if (i === 3) offsetY += 30;

            const scroll = sections[i].offsetTop - offsetY;
            window.scrollTo({ top: scroll, behavior: "smooth" });
        }
    });
});

const modal = document.getElementById("modal");
const modalClose = document.querySelectorAll(".modal-close");

const blackJack = document.getElementById("blackjack");
const blackJackModal = document.getElementById("blackjack-modal");

const mazeRunner = document.getElementById("mazerunner");
const mazeRunnerModal = document.getElementById("mazerunner-modal");

const projectModal = [blackJackModal, mazeRunnerModal];
const projectList = [blackJack, mazeRunner];

projectList.forEach((p, i) => {
    p.addEventListener("click", () => {
        modal.classList.remove("hidden");
        projectModal[i].classList.remove("hidden");
    });
});

modalClose.forEach((btn) => {
    btn.addEventListener("click", () => {
        modal.classList.add("hidden");
        projectModal.forEach((p) => p.classList.add("hidden"));
    });
});

modal.addEventListener("click", (e) => {
    if (e.target === modal) {
        modal.classList.add("hidden");
        projectModal.forEach((p) => p.classList.add("hidden"));
    }
});

const viewProject = document.getElementById("view-project");

viewProject.addEventListener("click", (e) => {
    e.preventDefault();
    const offsetY = 200;
    const scroll =
        projectSection.getBoundingClientRect().top + window.scrollY - offsetY;
    window.scrollTo({ top: scroll, behavior: "smooth" });
});

const toggle = document.getElementById("theme-toggle");
const darkTheme = document.getElementById("dark-theme");
const lightTheme = document.getElementById("light-theme");
const root = document.documentElement;

toggle.addEventListener("change", () => {
    if (toggle.checked) {
        root.classList.add("dark");
        localStorage.setItem("theme", "dark");

        lightTheme.classList.remove("-translate-y-[120%]");
        darkTheme.classList.remove("translate-y-0");

        darkTheme.classList.add("-translate-y-[120%]");
        lightTheme.classList.add("translate-y-full");
    } else {
        lightTheme.classList.remove("translate-y-full");
        darkTheme.classList.remove("-translate-y-[120%]");

        lightTheme.classList.add("-translate-y-[120%]");
        darkTheme.classList.add("translate-y-0");

        root.classList.remove("dark");
        localStorage.setItem("theme", "light");
    }
});
