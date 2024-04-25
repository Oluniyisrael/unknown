
window.addEventListener('scroll', ()=> {
  var navbar = document.getElementById('navbar');
  var navbarDis = document.getElementById('navbar2');
  var navbarOffsetTop = navbar.offsetTop + 100;
  var scrollTop = window.pageYOffset || document.documentElement.scrollTop ;
  
  if (scrollTop > navbarOffsetTop) {
    navbarDis.style.display ='flex';
  } else {
    navbarDis.style.display ='none';
  }
});
const overlay =document.getElementsByClassName("overlay")[0]
const overlayDiv =document.getElementsByClassName("topnav2Dis")[0]
overlayDiv.addEventListener("mouseenter",()=>{
  fadeOutAndWeak(overlay)
})
overlayDiv.addEventListener("mouseleave",()=>{
  fadeInAndStrong(overlay)
})
overlayDiv.addEventListener("click", () => {
  if (overlay.style.opacity === "1") {
    fadeOutAndWeak(overlay);
  } 
  else if (overlay.style.opacity === "0") {
    fadeInAndStrong(overlay);
  }
});


function fadeOutAndWeak(element) {
  var opacity = 1;
  var fadeOutInterval = setInterval(function () {
    if (opacity > 0) {
      opacity -= 0.2;
      element.style.opacity = opacity;
    } else {
      clearInterval(fadeOutInterval);
      element.style.zIndex = "-9999"
      element.style.opacity = 0
    }
  }, 50);
}
function fadeInAndStrong(element) {
  var opacity = 0;
  element.style.zIndex = "9999"; 
  var fadeInInterval = setInterval(function () {
    if (opacity < 1) {
      opacity += 0.2;
      element.style.opacity = opacity;
    } else {
      clearInterval(fadeInInterval);
      element.style.opacity = 1
      element.style.zIndex = "9999"
      // Optionally, you might want to reset the zIndex if it was changed in fadeOutAndWeak

    }
  }, 50);
}
document.getElementById("seeMore").onclick = async () => {
  var opacity = 1;
  var fadeInInterval = setInterval(function () {
    if (opacity > 0) {
      opacity -= 0.2;
      document.getElementById("headerHead").style.opacity = opacity;
    } else {
      clearInterval(fadeInInterval);
      document.getElementById("headerHead").style.opacity = 1; // Ensure opacity is set to 1 at the end
      // Wait for a short delay before setting display to none
      // setTimeout(() => {
        document.getElementById("headerHead").style.display = "none";
        document.getElementsByClassName("shifterCont")[0].style.animation = "grow 2s"
        document.getElementsByClassName("shifterCont")[0].style.height = "70vh"
      // }, 0); 
      setTimeout(() => {

      }, 600);
    }
  }, 100); // Decreased interval duration to 100 milliseconds for smoother animation
};
