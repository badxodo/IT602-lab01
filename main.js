window.addEventListener("load", () => {
    const loader = document.querySelector(".loading");
    const mainContent = document.getElementById("main-content");

    setTimeout(() => {
        loader.style.display = "none";
        mainContent.classList.remove("hidden");
        mainContent.classList.add("flex flex-col justify-center  relative");
    }, 2500);
});
