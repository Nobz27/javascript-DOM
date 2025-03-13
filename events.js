window.addEventListener("scroll", () => {
  console.log("page scrolling at " + window.scrollY + "px");
});
// open menu
const openMenuButton = document.querySelector("#open-menu");
openMenuButton.style.backgroundColor = "orange";

openMenuButton.addEventListener("click", () => {
  console.log("opening menu !!!!!!!!!");
  //   document.querySelector("#mobile-menu").style.display = "flex"; // add a style attribute (inline css) to the selected element

  document.querySelector("#mobile-menu").classList.add("opened-nav");
});

// close menu

const closeMenuButton = document.querySelector("#close-menu");

closeMenuButton.addEventListener("click", () => {
  console.log("closing menu !!!!!!!!");
  //   document.querySelector("#mobile-menu").style.display = "none";

  document.querySelector("#mobile-menu").classList.add("closing-nav");
});

// add or remove classes

//implement mobile menu button in one of the html css projects
