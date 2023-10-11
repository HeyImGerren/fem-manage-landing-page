// this is the primary header that we are using to make the gradient appear in the background when the nav menu is clicked
const primaryHeader = document.querySelector(".primary-header");
// this targets the actual hamburger menu button
const navToggle = document.querySelector(".mobile-nav-toggle");
//  this is the entire nav menu element
const primaryNav = document.querySelector(".primary-navigation");

//  this is the code that lets you click on the hamburger menu and triggers the nav menu to pop up 
navToggle.addEventListener('click', () => {
  primaryNav.hasAttribute("data-visible") ? navToggle.setAttribute("aria-expanded", false) : navToggle.setAttribute("aria-expanded", true);
  // toggleAttribute will toggle the data-attribute "data-visible" onto the element with the .primary-navigation class when it is clicked 
  primaryNav.toggleAttribute("data-visible");
  primaryHeader.toggleAttribute("data-overlay");
});

// code for the slider taken from https://a11yslider.js.org
// const slider = new A11YSlider(document.querySelector('.slider'), {
//   adaptiveHeight: false,
//   dots: true,
// });

const slider = new A11YSlider(document.querySelector('.slider'), {
  adaptiveHeight: false,
  dots: true,
  centerMode: true,
  // hides the previous/next slide buttons
  arrows: false,
  // the numbers here refer to pixel sizes for the screen, here is where we specify what we do and do not want displayed
  responsive: {
    // we customized the breakpoints here to fit how we coded the media queries for the website
    480: {
      dots: false, // dots enabled 1280px and up
      // arrows: true,
    }
  }
});