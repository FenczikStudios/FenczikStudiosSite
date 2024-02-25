
console.log("JS store loaded");

//store dropdowns:

//shirts dropdown:
var shirtsHeaderClosed = document.getElementById('shirts-header-closed');
var shirtsHeaderOpen = document.getElementById('shirts-header-open');
var shirtsSection = document.getElementById('shirts');

shirtsHeaderClosed.addEventListener('click', function () {
  shirtsHeaderClosed.style.display = 'none';
  shirtsHeaderOpen.style.display = 'block';

  shirtsSection.style.display = 'flex';
});
shirtsHeaderOpen.addEventListener('click', function () {
  shirtsHeaderOpen.style.display = 'none';
  shirtsHeaderClosed.style.display = 'block';

  shirtsSection.style.display = 'none';
});


//Tanks dropdown:

var tanksHeaderClosed = document.getElementById('tanks-header-closed');
var tanksHeaderOpen = document.getElementById('tanks-header-open');
var tanksSection = document.getElementById('tanks');

tanksHeaderClosed.addEventListener('click', function () {
  tanksHeaderClosed.style.display = 'none';
  tanksHeaderOpen.style.display = 'block';

  tanksSection.style.display = 'flex';
});
tanksHeaderOpen.addEventListener('click', function () {
  tanksHeaderOpen.style.display = 'none';
  tanksHeaderClosed.style.display = 'block';

  tanksSection.style.display = 'none';
});

//collabs dropdown:

var collabHeaderClosed = document.getElementById('collab-header-closed');
var collabHeaderOpen = document.getElementById('collab-header-open');
var collabSection = document.getElementById('collab-container');

collabHeaderClosed.addEventListener('click', function () {
  collabHeaderClosed.style.display = 'none';
  collabHeaderOpen.style.display = 'block';

  collabSection.style.display = 'flex';
});
collabHeaderOpen.addEventListener('click', function () {
  collabHeaderOpen.style.display = 'none';
  collabHeaderClosed.style.display = 'block';

  collabSection.style.display = 'none';
});