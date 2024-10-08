const slides = document.querySelectorAll(".slides");
console.log(slides);
let slideIndex = 0;
let distance = 0;
// add click events ot the slides navigation buttons
const prevButton = document.querySelector("#prev-button");
console.log(prevButton);
prevButton.addEventListener("click",gotoPrevious);
function gotoPrevious() {
if (slideIndex > 0) {
    slideIndex--;
} else {
    slideIndex = slides.length - 1;
}
distance = slides[slideIndex].offsetLeft;
console.log(distance);
window.scrollTo({ left: distance, behaviour: "smooth" });
}

const prevButton = document.querySelector("#next-button");
console.log(nextButton);
nextButton.addEventListener("click",gotonext);

function gotoNext() {
if (slideIndex < 0 slides.length - 1) {
    slideIndex++;
} else {
    slideIndex = 0;
}
distance = slides[slideIndex].offsetLeft;
console.log(distance);
window.scrollTo({ left: distance, behaviour: "smooth" });
}
