console.log("JS file loaded");

//Header Section:


//Header menu:

const menuLinks = document.querySelectorAll('header nav button');

console.log('Menu links:', menuLinks);

menuLinks.forEach(link => {
  link.addEventListener('click', (e) => {
    console.log('Clicked link:', link);


    e.preventDefault();
    const sectionId = link.dataset.href;
    const section = document.querySelector(sectionId);


    console.log('Section ID:', sectionId);
    

    const sectionPos = section.offsetTop;
    window.scrollTo({
      top: sectionPos,
      behavior: 'smooth'
    });
  });
});



//-------------------------------------------------------------------------//
//About Me Section:

//Click a question, Get an Answer
const outputDiv = document.getElementById('response');
const txt1 = `Sure! I have been a designer for over a decade. An animator for 4 years and a developer 
              for about a year! Learning new things and making art is my passion!`;
const txt2 = `Simply put, Fenczik Studios is me! Everything you see on this site was created by yours 
              truely. From concept to design to development and everything in between!`;
const txt3 = `Great question! The best way to contact me is via email: steven@fenczikstudios.com or 
              Instagram DM @fenczikstudios.com`;
const txt4 = `If you have any additional questions send me a message and let's talk shop!
              And don't forget to join the email list for all the latest Fenczik Studios news!`;

const texts = [txt1, txt2, txt3, txt4];
let intervalId = null; // initialize intervalId variable

for (let i = 1; i <= 4; i++) {
  const questionDiv = document.getElementById(`question${i}`);
  const text = texts[i - 1];
  
  questionDiv.addEventListener('click', function() {
    if (intervalId) {
      clearInterval(intervalId);
    }
    outputDiv.innerHTML = ''; // clear previous text
    let j = 0;
    intervalId = setInterval(function() {
      outputDiv.innerHTML += text.charAt(j);
      j++;
      if (j === text.length) {
        clearInterval(intervalId);
      }
    }, 40);
  });
}


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

//avatar animations



//-------------------------------------------------------------------------//
// Email List Button:

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
});



//MAIL CHIMP:
function showEmailListForm () {
  if (document.getElementById("email-list-button").clicked) {
    document.getElementById("email-list-form-container").style.display = "block";
  }
}

document.getElementById("email-list-button").addEventListener("click",function() {
  showEmailListForm();
});


//-------------------------------------------------------------------------//
// Cards:

// Define an array of card IDs
const cardIds = [
  'card-anim1', 'card-anim2', 'card-anim3',
  'card-dev1', 'card-dev2', 'card-dev3',
  'card-des1', 'card-des2', 'card-des3'
];
const popupIds = [
  'popup-anim1', 'popup-anim2', 'popup-anim3',
  'popup-dev1', 'popup-dev2', 'popup-dev3',
  'popup-des1', 'popup-des2', 'popup-des3',
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
  const descriptions = activePopup.querySelectorAll('.popup-gallery-description p');

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
    // remove the active class from all images and descriptions
    images.forEach(item => item.classList.remove('active'));
    descriptions.forEach(description => description.classList.remove('active'));

    // add the active class to the current image and description
    images[currentIndex].classList.add('active');
    descriptions[currentDescIndex].classList.add('active');
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
















