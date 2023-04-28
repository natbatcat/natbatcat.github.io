//bold the current page in nav
(function() {
  const currentLocation = location.href;
  const navLinks = document.querySelectorAll("nav ul li a");

  for (let i = 0; i < navLinks.length; i++) {
    if (navLinks[i].href === currentLocation) {
      navLinks[i].classList.add("active");
    }
  }
})();



//HAMBURGER MENU

  // add a click event listener to the navbar toggler button
  var navbarToggler = document.querySelector('.navbar-toggler');
  navbarToggler.addEventListener('click', function() {
  // get the navbar collapse element
  var navbarCollapse = document.getElementById('navbarNav');

  // toggle the collapse state of the navbar
  if (navbarCollapse.classList.contains('show')) {
  navbarCollapse.classList.remove('show');
} else {
  navbarCollapse.classList.add('show');
}
});
})();





//CAROUSEL
(function() {
  var myCarousel = document.querySelector('#carouselExampleIndicators');
  var carousel = new bootstrap.Carousel(myCarousel, {
    interval: false,
    wrap: false
  });
})();


//FACEBOOK SHARE BUTTON
(function() {
  function shareOnFacebook() {
    // get the url of the blog post/ page
    var url = document.querySelector('.fb-share-button').getAttribute('data-href');

    // open the facebook share dialog
    FB.ui({
      method: 'share',
      href: url,
    }, function(response){});
  }

  // add event listener to the button
  var shareButton = document.querySelector('.fb-share-button');
  shareButton.addEventListener('click', shareOnFacebook);
})();


