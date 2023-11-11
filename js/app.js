// When the user clicks on div, open the popup
// function Explanation() {
//   var expBtn = document.getElementById("exp-btn");
//   expBtn.classList.toggle("show");
// }

// function Discussion() {
//   var DisBtn = document.getElementById("Dis-btn");
//   DisBtn.classList.toggle("show");
// }

function Discussion() {
  var DisBtn = document.getElementById("Dis-btn");
  DisBtn.classList.add("show");

  // Remove the 'show' class when the mouse is moved out
  DisBtn.addEventListener("mouseout", function () {
    DisBtn.classList.remove("show");
  });
}

// Add an event listener for mouseover to trigger the Discussion function
document.getElementById("next").addEventListener("mouseover", Discussion);

//
//
//
//
function Explanation() {
  var expBtn = document.getElementById("exp-btn");
  expBtn.classList.add("show");

  // Remove the 'show' class when the mouse is moved out
  expBtn.addEventListener("mouseout", function () {
    expBtn.classList.remove("show");
  });
}

// Add an event listener for mouseover to trigger the Discussion function
document.getElementById("submit").addEventListener("mouseover", Explanation);
