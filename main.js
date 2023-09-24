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
