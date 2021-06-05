// rotate();
// function rotate() {
//     document.getElementById("rotate").style.msTtransform = "rotate(20deg)";
//     document.getElementById("rotate").style.ttransform = "rotate(20deg)";
// }
function openNav() {
  var navHeight = document.getElementById("navbar").style.height;
  if (navHeight == 0) {
    document.getElementById("navbar").style.height = "100%";
  } else if (navHeight == "100%") {
    document.getElementById("navbar").style.height = 0;
  } else {
    document.getElementById("navbar").style.height = "100%";
  }
}
// function closeNav() {
//     var x = document.getElementById("myNav").style.height;
//     // alert(x);
//     if(x=="100%") {
//         document.getElementById("myNav").style.height = "0%";
//     } else {
//         document.getElementById("myNav").style.height = "100%";
//     }

// }
function closeNav() {
  var x = window.matchMedia("(max-width: 800px)");
  if (x.matches) {
    document.getElementById("navbar").style.height = "0%";
  } else {
    document.getElementById("navbar").style.height = "100vh";
  }
}

// Scroll top button
function btnFn() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
// var btn = document.getElementById("top-btn");
// btn.addEventListener("click", function (){
//   document.body.scrollTop = 0;
//   document.documentElement.scrollTop = 0;
// });
