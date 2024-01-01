const stars = document.querySelectorAll(".fa-solid");
const emoji = document.getElementById("emoji");
const feedbackBoxes = document.querySelectorAll(".feedbackbox");
const btn = document.querySelector(".btn");
let starsClicked = false;
function resetStarsAndEmoji() {
    stars.forEach((star, index) => {
        star.style.color = "#e4e4e4";
    });
    emoji.style.transform = `translateX(-${100 * stars.length}px)`;
    emoji.style.opacity = 0;
}
function handleStarClick(index) {
    resetStarsAndEmoji();

    stars.forEach((star, i) => {
        if (i <= index) {
            star.style.color = "#ffd93b";
        }
    });
    starsClicked = true;
    emoji.style.opacity = 1;
    emoji.style.transform = `translateX(-${100 * (stars.length - 1 - index)}px)`;
}
stars.forEach((star, index) => {
    star.onclick = () => {
        handleStarClick(index);
    };
});
btn.onclick = function () {
    if (starsClicked) {
        const starRating = Array.from(stars).filter(star => star.style.color === 'rgb(255, 217, 59)').length;
        feedbackBoxes.forEach((box) => {
            box.innerHTML = `Thank you for your feedback ❤️! </br></br> Feedback-Ratings:- ${starRating}
            </br></br> I'll use your feedback to improve myself.`;
        });
    } else {
        alert("Please select a star rating first.");
    }
};
function updateResponsiveStyles() {
    feedbackBoxes.forEach((box) => {
        box.style.fontSize = "24px";
        box.style.fontFamily = "Netflix Sans, Helvetica Neue, Segoe UI, Roboto, Ubuntu, sans-serif";
        box.style.fontWeight = "500";
        box.style.textAlign = "center";
        box.style.color = "#fd1d1d";
        box.style.transition = "color 0.3s";
        box.style.overflow= "hidden";
    });
    const mediaQuery = window.matchMedia("(max-width: 768px)");
    if (mediaQuery.matches) {
        feedbackBoxes.forEach((box) => {
            box.style.fontSize = "24px";
            box.style.width = "80%";
            box.style.height = "35%";
        });
    }
}
window.addEventListener("load", updateResponsiveStyles);
window.addEventListener("resize", updateResponsiveStyles);
updateResponsiveStyles();
resetStarsAndEmoji();