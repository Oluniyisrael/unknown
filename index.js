
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
  fadeOutAndWeak(overlay, "-9999")
})
overlayDiv.addEventListener("mouseleave",()=>{
  fadeInAndStrong(overlay, "9999")
})
overlayDiv.addEventListener("click", () => {
  if (overlay.style.opacity === "1") {
    fadeOutAndWeak(overlay, "-9999");
  } 
  else if (overlay.style.opacity === "0") {
    fadeInAndStrong(overlay, "9999");
  }
});


function fadeOutAndWeak(element, index) {
  var opacity = 1;
  var fadeOutInterval = setInterval(function () {
    if (opacity > 0) {
      opacity -= 0.2;
      element.style.opacity = opacity;
    } else {
      clearInterval(fadeOutInterval);
      element.style.zIndex = index
      element.style.opacity = 0
    }
  }, 50);
}
function fadeInAndStrong(element, index) {
  var opacity = 0;
  element.style.zIndex = index 
  var fadeInInterval = setInterval(function () {
    if (opacity < 1) {
      opacity += 0.2;
      element.style.opacity = opacity;
    } else {
      clearInterval(fadeInInterval);
      element.style.opacity = 1
      element.style.zIndex = index

    }
  }, 50);
}
document.getElementById("seeMore").onclick = async (e) => {
  var opacity = 1;
  var fadeInInterval = setInterval(function () {
    document.getElementsByClassName("positionDiv")[0].style.backgroundColor = "white"
    e.target.style.display = "none"
    if (opacity > 0) {
      opacity -= 0.2;
      document.getElementById("headerHead").style.opacity = opacity;
    } else {
      clearInterval(fadeInInterval);
      document.getElementById("headerHead").style.opacity = 0; // Ensure opacity is set to 1 at the end
        document.getElementById("headerHead").style.display = "none";
        document.getElementsByClassName("shifterCont")[0].style.animation = "grow 2s"
        document.getElementsByClassName("shifterCont")[0].style.height = "70vh"
        {
          const positionDiv = document.getElementsByClassName("positionDiv")[0]
          positionDiv.style.top = "5px"
          positionDiv.style.bottom = "unset"
          positionDiv.style.right = "0"
          positionDiv.style.transform= "translateX(0)"
        }
        const headerBody =  document.getElementById("headerBody")
        headerBody.style.display= "block"
        setTimeout(async() => {
          fadeInAndStrong(headerBody, "999")
          document.getElementById("revert").style.display = "block"
          document.getElementsByClassName("positionDiv")[0].style.backgroundColor = "transparent"
        }, 1000);
        
    }
  }, 100); 
  
};
document.getElementById("revert").onclick = async (e) => {
  var opacity = 1;
  var fadeInInterval = setInterval(function () {
    document.getElementsByClassName("positionDiv")[0].style.backgroundColor = "white"
    e.target.style.display = "none"
    if (opacity > 0) {
      opacity -= 0.2;
      document.getElementById("headerBody").style.opacity = opacity;
    } else {
      document.getElementById("headerBody").style.display = "none";

      clearInterval(fadeInInterval);
      document.getElementById("headerBody").style.opacity = 0; // Ensure opacity is set to 1 at the end
      document.getElementById("headerBody").style.display = "none";
      document.getElementsByClassName("shifterCont")[0].style.animation = "shrink 2s"
      document.getElementsByClassName("shifterCont")[0].style.height = "160px"

      {

        const positionDiv = document.getElementsByClassName("positionDiv")[0]
        positionDiv.style.top = "120px"
        positionDiv.style.bottom = "3pxt"
        positionDiv.style.right = "50%"
        positionDiv.style.transform= "translateX(50%)"
      }

      setTimeout(async() => {
        document.getElementById("revert").style.display = "none"
        document.getElementById("seeMore").style.display = "block"
        const headerHead =  document.getElementById("headerHead")
        headerHead.style.display= "block"
        fadeInAndStrong(headerHead, "999")
        document.getElementsByClassName("positionDiv")[0].style.backgroundColor = "transparent"
      }, 1000);
      
  }
}, 100); 

};