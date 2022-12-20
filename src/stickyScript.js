

// Get the navbar
const header = document.getElementById('header-menu');
const headerContainer = document.getElementById('header-menu');

// Get the offset position of the navbar
const sticky = header.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset >= sticky) {
    header.classList.add('sticky');
    headerContainer.classList.add('sticky-mobile-container')
  } else {
    header.classList.remove('sticky');
    headerContainer.classList.remove('sticky-mobile-container')
  }
}

// When the user scrolls the page, execute myFunction
window.onscroll = function () {
  myFunction();
};
