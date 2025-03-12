// alert("Hello there!!!!!");

console.log(document);

console.log(typeof document);

// function changeHeaderContent() {
//   //doming some dom manipulation
//   console.log(document.querySelector("h1").textContent);

//   document.querySelector("h1").textContent = "Norbert Kayondo";
// }
// setTimeout(changeHeaderContent, 50000);

function changeHeaderContent() {
  console.log(document.querySelectorAll("h1"));
  for (let index = 0; index < document.querySelectorAll("h1").length; index++) {
    document.querySelectorAll("h1")[index].textContent = "Heading" + index;
  }
}
setTimeout(changeHeaderContent, 30000);

//access specific elements
// Every element has access to some methods that can be used to access other elements
// These methods/functions include querySelector, querySelectorAll, getElementById, getElementsByClassName, getElementsByTagName

// 4,7,11 withscenarios.md try the exercises
