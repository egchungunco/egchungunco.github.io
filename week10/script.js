// this is a hover example
const myCat = document.querySelector("#my-cat");
console.log(myCat);
myCat.addEventListener("mouseover", showMoreInfo);
myCat.addEventListener("mouseout", hideMoreInfo);

const moreInfo = document.querySelector("#more-info");
console.log(moreInfo);

// adding show class ocntaining displa:block it will make the div visible
function showMoreInfo() {
  moreIInfo.classList.add("show");
}

// removing show class containing display:block it will make the div visible
// as it will revert back to display:none
function hideMoreInfo() {
  moreInfo.classList.remove("show");
}
// ------------------------------------------------------------------------------------------

//  let us work on the drop diwn example
const profileButton = document.querySelector("#profile-button");
console.log(profileButton);
profileButton.addEventListener("click", toggleMenu);

const profileCOntent = document.querySelector("#profile-content");
console.log(profileContent);

// toggle will add and remove the show class on click
function toggleMenu() {
  profileCOntent.classList.toggle("show");
}
// -------------------------------------------------------------------------

// let us work on navigate window
const bottomButton = document.querySelector("#bottom-button");
console.log(topButton);

// let's add
const scrollContent = document.querySelector("#scroll-content");

const hscrollButton = document.querySelector("#hscroll-button");
console.log(hscrollButton);

hscrollButton.addEventListener("click", getHScroll);

const hscroll = document.querySelector("#hscroll");

function getHScroll() {
  hscroll.textContent = scrollContent.scrollLeft;
}

const vscrollButton = document.querySelector("#vscroll-button");
console.log(vscrollButton);

vscrollButton.addEventListener("click", getVScroll);

const vscroll = document.querySelector("#vscroll");

function getVScroll() {
  vscroll.textContent = scrollContent.scrollTop;
}

const hscroll150Button = document.querySelector("#hscroll150-button");
console.log(hscroll150Button);

hscroll150Button.addEventListener("click", gotoHScroll150);

function gotoHScroll150() {
  scrollContent.scrollTo({ left: 150, behavior: "smooth" });
}

const vscroll300Button = document.querySelector("#vscroll300-button");
console.log(vscroll300Button);

vscroll300Button.addEventListener("click", gotoVScroll300);

function gotoVScroll300() {
  scrollContent.scrollTo({ top: 300, behavior: "smooth" });
}

const wvscrollButton = document.querySelector("#wvscroll-button");
console.log(wvscrollButton);

wvscrollButton.addEventListener("click", getWVScroll);

const wvscroll = document.querySelector("#wvscroll");

function getWVScroll() {
  wvscroll.textContent = window.scrollY;
}
