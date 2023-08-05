
// Hero animation script

  var typed = new Typed('#typed-text', {
    strings: ["Welcome to Geometric Services...", "Your Web Design and Development Plug ", "Stay Tuned!"],
    typeSpeed: 100, // Speed of typing in milliseconds
    backSpeed: 100, // Speed of deleting in milliseconds
    loop: true, // Repeat typing effect
    smartBackspace: true, // Only backspace to the last word
    fadeOut: true, // Enable fade-out effect between strings
    fadeOutClass: 'typed-fade-out', // CSS class for fade-out effect
    fadeIn: true, // Enable fade-in effect for new strings
    fadeInClass: 'typed-fade-in', // CSS class for fade-in effect
    onStringTyped: function (arrayPos, self) {
      if (arrayPos === self.strings.length - 1) {
        self.cursor.remove(); // Remove cursor after typing last string
      }
    }
  });




// animate on scroll

AOS.init({
  duration: 1500, // Animation duration (in milliseconds)
  once: true, // Animation will trigger only once
});










// JavaScript for the slideshow
const slideshowContainers = document.querySelectorAll('.image-item');
slideshowContainers.forEach(container => {
  const slideshowImages = container.querySelectorAll('img');
  let currentImageIndex = 0;

  function showNextImage() {
    const currentImage = slideshowImages[currentImageIndex];
    currentImage.classList.remove('active');

    currentImageIndex = (currentImageIndex + 1) % slideshowImages.length;
    const nextImage = slideshowImages[currentImageIndex];
    nextImage.classList.add('active');
  }

  setInterval(showNextImage, 2000); // Change image every 2 seconds
});




//blinking animation for text 

$(document).ready(function() {
  setInterval(function() {
    $('.edit-one').animate({ opacity: 0 }, 800).animate({ opacity: 1 }, 800);
  }, 5000);
});






//script for collapse chevron in mobile display










function toggleDropdown(header) {
  var dropdown = header.parentNode;
  dropdown.classList.toggle('open');
}










// JavaScript function for toggling dropdown
function toggleDropdown(element) {
  const paragraph = element.nextElementSibling; // Get the sibling <p> element
  const icon = element.querySelector('.dropdown-icon i'); // Get the chevron icon

  if (paragraph.style.maxHeight) {
    paragraph.style.maxHeight = null;
    icon.classList.remove('fa-chevron-up');
    icon.classList.add('fa-chevron-down');
    element.parentElement.classList.remove('active');
  } else {
    paragraph.style.maxHeight = paragraph.scrollHeight + 'px';
    icon.classList.remove('fa-chevron-down');
    icon.classList.add('fa-chevron-up');
    element.parentElement.classList.add('active');
  }
}

