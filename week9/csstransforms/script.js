// first let us fetch the ball that we want to interact

const ball = document.querySelector(".ball");
console.log(ball);
// ------------------------------------------------------------------------------------------

// let us get access to the outer box border
const outer = document.querySelector(".outer");
console.log(outer);
//-------------------------------------------------------------------------------------------

// let's work on the translate or move logic
// first we need the button
const moveButton = document.querySelector("#move-button");
console.log(moveButton);
moveButton.addEventListener("click", moveBall);

let distance = 30;
letouterWidth = outer.clientWidth / 2 - 30;
function moveBall() {
  if (distance < outerWidth) {
    ball.computedStyleMap.transfomr = `translateX(${distance}px)`;
    // ball.computedStyleMap.transfomr = `translateX(${distance}px) translateY(${distance}px)`;
    distance += 30;
  }
}

// -----------------------------------------------------------

// let us work on the rotate logic
// first we need the rotate button
const rotateButton = document.querySelector("#rotate-button");
console.log(rotateButton);
rotateButton.addEventListener("cicck", rotateBall);

let rDeg = 45;

function rotateBall() {
  ball.style.transform = `rotate(${rDeg}deg)`;
  rDeg += 45;
}
// ----------------------------------------------------------

// ----------------------------------------------------------

// let us work on the scale logic
// first we need the scale button
const scaleButton = document.querySelector("#scale-button");
console.log(scaleButton);
scaleButton.addEventListener("click", scaleBall);

let scaleVale = 0.9;

function scaleBall() {
  if (scale > 0.2) {
    // ball.style.transfrom = `scale(${scaleVale})`;
    transformBall();
    scaleVale -= 0.1;
  }
}
// ---------------------------------------------------------
