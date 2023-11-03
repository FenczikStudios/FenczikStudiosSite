
console.log("JS file loaded");

//Gallery:
document.addEventListener("DOMContentLoaded", function () {
  // Create arrays for thumbnails and fullscreen containers
  const thumbnails = document.querySelectorAll(".thumbnail");
  const fullscreenContainers = document.querySelectorAll(".fullscreen-container");

  // Add click event listeners to each thumbnail
  thumbnails.forEach((thumbnail, index) => {
    thumbnail.addEventListener("click", function() {
      // Hide all fullscreen containers
      fullscreenContainers.forEach(container => {
        container.style.display = "none";
      });

      // Show the corresponding fullscreen container
      fullscreenContainers[index].id = "active";

      // Log to the console when the "active" status is set
      console.log("Setting 'active' for container " + index);
    });
  });
});



//Menu:

const menuIcon = document.getElementById('menu-icon');
const menu = document.getElementById('menu');
const menuContainer = document.getElementById('menu-icon-container');

menuIcon.addEventListener('mouseenter', function () {

  menu.style.display = 'block';

});

menuContainer.addEventListener('mouseleave', function () {

  menu.style.display = 'none';

});

let isMenuVisible = false; // Initial state is hidden

menuIcon.addEventListener('click', function () {
  if (isMenuVisible) {
    menu.style.display = 'none';
  } else {
    menu.style.display = 'block';
  }

  isMenuVisible = !isMenuVisible; // Toggle the menu visibility state
});

//Continue Buttons:

const continuePortfolio = document.getElementById('continue-to-portfolio-button');
const continueMerch = document.getElementById('continue-to-merch-button');


continuePortfolio.addEventListener('click', function () {

  window.location.href = 'portfolio.html';

});

continueMerch.addEventListener('click', function () {

  window.location.href = 'merch.html';

});



