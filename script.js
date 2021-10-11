document.addEventListener("DOMContentLoaded", function () {
  var elms = document.querySelectorAll(".slider");
  for (var i = 0, len = elms.length; i < len; i++) {
    // инициализация elms[i] в качестве слайдера
    new ChiefSlider(elms[i]);
  }
});

var smoothJumpUp = function () {
  if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
    window.scrollBy(0, -50);
    setTimeout(smoothJumpUp, 10);
  }
};

// window.onscroll = function () {
//   var scrolled = window.pageYOffset || document.documentElement.scrollTop;
//   if (scrolled > 100) {
//     document.getElementById("upbutton").style.display = "block";
//   } else {
//     document.getElementById("upbutton").style.display = "none";
//   }
// };
