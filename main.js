const wordsArr = ["Software Developer", "Full Stack Developer"];
const currentType = document.getElementById("hero-text");
currentType.textContent = wordsArr[0];

let i = 0;
let currentTypeIndex = wordsArr[0].length;
let isDeleting = true;

function typingLoop() {
    const currentWord = wordsArr[i];

    if (!isDeleting) {
        currentType.textContent = currentWord.slice(0, currentTypeIndex++);
        if (currentTypeIndex > currentWord.length) {
            setTimeout(() => (isDeleting = true), 1500);
        }
    } else {
        currentType.textContent = currentWord.slice(0, currentTypeIndex--);
        if (currentTypeIndex === 0) {
            isDeleting = false;
            i = (i + 1) % wordsArr.length;
        }
    }
    setTimeout(typingLoop, isDeleting ? 50 : 80);
}
setTimeout(typingLoop, 1000);

const ctaGetInTouch = document.querySelector(".cta-hero button:first-child");
const ctaWorks = document.querySelector(".cta-hero button:nth-child(2)");

ctaWorks.addEventListener("mouseenter", () => {
    ctaGetInTouch.style.animation = "none";
});

ctaWorks.addEventListener("mouseleave", () => {
    ctaGetInTouch.style.animation = "ctaAnimate 1s ease-in-out infinite";
});
