//bold the current page in nav
(function(){
const currentLocation = location.href;
const navLinks = document.querySelectorAll("nav ul li a");

for (let i = 0; i < navLinks.length; i++) {
  if (navLinks[i].href === currentLocation) {
    navLinks[i].classList.add("active");
  }
}
})();

//hamburger menu
(function(){
$(document).ready(function(){
  $('.navbar-toggler').click(function(){
    $('.navbar-collapse').toggleClass('show');
  });
});
})();


//turn heart red
// Select all heart icons on the page
const heartIcons = document.querySelectorAll('.fa-heart');

// Add a click event listener to each heart icon
heartIcons.forEach(icon => {
  icon.addEventListener('click', function() {
    // Toggle the 'red-heart' class on the clicked icon
    this.classList.toggle('red-heart');
  });
});
//carousel
(function() {
  var myCarousel = document.querySelector('#carouselExampleIndicators');
  var carousel = new bootstrap.Carousel(myCarousel, {
    interval: false,
    wrap: false
  });
})();
