console.log("JS file loaded");

//Header Section:





//button hover, mousedown/up states and move
const buttons = document.getElementsByClassName('buttons');

for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener('mouseenter', () => {
    buttons[i].style.backgroundColor = '#0d6d93';
  });
  
  buttons[i].addEventListener('mouseleave', () => {
    buttons[i].style.backgroundColor = '#085c7e';
  });
  
  buttons[i].addEventListener('mousedown', () => {
    buttons[i].style.backgroundColor = '#044c68';
  });

  buttons[i].addEventListener('mouseup', () => {
    buttons[i].style.backgroundColor = '#085c7e';
  });
}


//-------------------------------------------------------------------------//
// Email List Button:


//MAIL CHIMP:
function showEmailListForm () {
  !function(c,h,i,m,p){m=c.createElement(h),p=c.getElementsByTagName(h)[0],m.async=1,m.src=i,p.parentNode.insertBefore(m,p)}(document,"script","https://chimpstatic.com/mcjs-connected/js/users/aa26a1d185413f1f3a8b62e2b/0be3608a4945bce34f913e553.js");
}

//unsetting the cookie
document.cookie = "MCPopupClosed=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";                  
document.cookie = "MCPopupSubscribed=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";


// create a Lottie animation
const animationContainer = document.getElementById('email-list-button');
const animation = lottie.loadAnimation({
  container: animationContainer,
  renderer: 'svg',
  loop: false,
  autoplay: false,
  path: './ArtAssets/EmailListButtonAnimations.json' // change to your animation file name
});


animationContainer.addEventListener('mouseenter', () => {
  animation.playSegments([0, 16], true);
});

animationContainer.addEventListener('click', () => {
  animation.playSegments([17,32], true);
  showEmailListForm();
});


//-------------------------------------------------------------------------//
// Cards:

// Define an array of card IDs
const cardIds = [
  'card-1', 'card-2', 'card-3',
];
const popupIds = [
  'popup-1', 'popup-2', 'popup-3',
]

const openPopup = (popupId) => {
  const popup = document.getElementById(popupId);
  popup.classList.add('active');
  const overlay = document.createElement('div');
  overlay.classList.add('popup-overlay');
  document.body.appendChild(overlay);
  overlay.addEventListener('click', () => {
    closePopup(popupId);
  });
};

const closePopup = (popupId) => {
  const popup = document.getElementById(popupId);
  popup.classList.remove('active');
  const overlay = document.querySelector('.popup-overlay');
  if (overlay) {
    overlay.remove();
  }
};

cardIds.forEach((cardId, index) => {
  const card = document.getElementById(cardId);
  const popupId = popupIds[index];

  card.addEventListener('mouseenter', () => {
    card.style.top = '-5px';
  });
  card.addEventListener('mouseleave', () => {
    card.style.top = '25px';
  });
  card.addEventListener('click', () => {
    openPopup(popupId);
  });
});


//-------------------------------------------------------------------------//
// Popup-gallery:

function setupPopupGallery() {
  const activePopup = document.querySelector('.card-popup.active');
  const prevButton = activePopup.querySelector('.arrow-left');
  const nextButton = activePopup.querySelector('.arrow-right');

  // get references to the active popup's images, descriptions, and buttons
  const images = activePopup.querySelectorAll('.popup-gallery img, .popup-gallery video');
  const descriptions = activePopup.querySelectorAll('#popup-gallery-description > p');

  // set the starting index to 0
  let currentIndex = 0;
  let currentDescIndex = 0;

  // add click event listeners to the Right and Left arrows
  prevButton.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    currentDescIndex = (currentDescIndex - 1 + descriptions.length) % descriptions.length;
    updateActive();
  });

  nextButton.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % images.length;
    currentDescIndex = (currentDescIndex + 1) % descriptions.length;
    updateActive();
  });

function updateActive() {
  // Remove the active class from all images and descriptions
  images.forEach(item => item.classList.remove('active'));
  descriptions.forEach(description => description.classList.remove('active'));

  // Add the active class to the current image and description
  images[currentIndex].classList.add('active');
  descriptions[currentIndex].classList.add('active');
}

  console.log(images)
}

// Call the function whenever a card is clicked
const cards = document.querySelectorAll('.card');
cards.forEach(card => {
  card.addEventListener('click', () => {
    // Remove the active class from all cards
    cards.forEach(c => c.classList.remove('active'));

    // Add the active class to the clicked card
    card.classList.add('active');

    // Set up the popup gallery for the clicked card
    setupPopupGallery();
  });
});
