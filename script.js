document.addEventListener("DOMContentLoaded", function () {
  var elms = document.querySelectorAll(".slider");
  for (var i = 0, len = elms.length; i < len; i++) {
    // инициализация elms[i] в качестве слайдера
    new ChiefSlider(elms[i]);
  }
});

let smoothJumpUp = function () {
  if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
    window.scrollBy(0, -50);
    setTimeout(smoothJumpUp, 10);
  }
};

let smothJumpSection = function (count) {
  // window.innerHeight;
  if (
    document.body.scrollTop > 0 ||
    document.documentElement.scrollTop < count
  ) {
    // scroll= scroll+40;
    window.scrollBy(0, 40);
    setTimeout(smothJumpSection(count), 10);
    console.log(document.body.scrollTop);
    console.log(document.documentElement.scrollTop);
  }
}

// let smothJumpContact = function () {
//   // window.innerHeight;

//  if(document.body.scrollTop > 0 || document.documentElement.scrollTop < 1650){
//     window.scrollBy(0, 40);
//     setTimeout(smothJumpContact, 10);
//     console.log(document.body.scrollTop);
//     console.log(document.documentElement.scrollTop);
//  }
// };

// window.onscroll = function () {
//   var scrolled = window.pageYOffset || document.documentElement.scrollTop;
//   if (scrolled > 100) {
//     document.getElementById("upbutton").style.display = "block";
//   } else {
//     document.getElementById("upbutton").style.display = "none";
//   }
// };
