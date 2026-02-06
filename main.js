window.addEventListener("load", () => {
    const loader = document.getElementById("loading");
    const mainContent = document.getElementById("main-content");
    setTimeout(() => {
        loader.classList.add("hidden");
        loader.classList.remove("flex");
        mainContent.classList.remove("hidden");
        mainContent.classList.add("flex flex-col justify-center relative");
    }, 2300);
});

const project = document.getElementById("project");
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
        project.getBoundingClientRect().top + window.scrollY - offsetY;
    window.scrollTo({ top: scroll, behavior: "smooth" });
});
