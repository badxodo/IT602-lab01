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
