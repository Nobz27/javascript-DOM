const themeButton = document.querySelector("#theme-btn");
//const themeButton = document.getElementById("theme-btn")

themeButton.textContent = " Light Mode";

console.log(themeButton.getAttribute("name"));

themeButton.setAttribute("src", "images/profile.png");
const url = "https://kesoru.org/images/kesorulogo.svg";

document.querySelector("img").setAttribute("src", url);
document.querySelector("img").setAttribute("width", "100px");

//Data attributes in js and html assignment
// Template Literals
