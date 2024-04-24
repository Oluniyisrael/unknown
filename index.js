
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


// window.addEventListener("keydown",(e)=>{
//   console.log(e.key)
// })