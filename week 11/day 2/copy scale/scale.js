// company
let position = 0;
const slides = document.querySelector('.slideshow-images');

function nextSlide() {
  position -= 33.33; // défilement linéaire d'une image à la fois
  slides.style.transform = `translateX(${position}%)`;

  if (position === -99.99) { // si dernière image
    position = 0;
    setTimeout(() => {
      slides.style.transition = 'none';
      slides.style.transform = `translateX(${position}%)`;
      setTimeout(() => {
        slides.style.transition = 'transform 0.8s ease-in-out';
      }, 50);
    }, 800);
  }
}

setInterval(nextSlide, 3000); // défiler en continu
