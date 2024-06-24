document.addEventListener("DOMContentLoaded", function () {
  var button = document.querySelector(".button");
  var popup = document.getElementById("popup");
  var closeButton = document.getElementById("red-close");

  button.addEventListener("click", function () {
    popup.style.display = "flex";
  });

  closeButton.addEventListener("click", function () {
    popup.style.display = "none";
  });

  window.addEventListener("click", function (event) {
    if (event.target == popup) {
      popup.style.display = "none";
    }
  });
});
