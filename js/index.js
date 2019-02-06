let last_known_scroll_position = 0;
let ticking = false;

// Build a component because that's what we do
class IconSlide {
  constructor(icon) {
    this.icon = icon;
    this.scrollPos = last_known_scroll_position;

    this.iconLeft = document.querySelectorAll('.icon-left');
    this.textLeft = document.querySelectorAll('.text-left');
    
    this.iconRight = document.querySelectorAll('.icon-right');
    this.textRight = document.querySelectorAll('.text-right');
    
    this.iconLeft.forEach(icon => { 
      if (this.scrollPos > 450) {
        icon.style = 'left: 0';
      }
      if (this.scrollPos < 400) {
        icon.style = 'left: -1000px';
      }
    });

    this.textLeft.forEach(text => { 
      if (this.scrollPos > 400) {
        text.style = 'left: 0';
      }
      if (this.scrollPos < 355) {
        text.style = 'left: -1500px';
      }
    });

    this.iconRight.forEach(icon => { 
      if (this.scrollPos > 550) {
        icon.style = 'right: 0';
      }
      if (this.scrollPos < 525) {
        icon.style = 'right: -1000px';
      }
    });

    this.textRight.forEach(text => { 
      if (this.scrollPos > 500) {
        text.style = 'right: 0';
      }
      if (this.scrollPos < 475) {
        text.style = 'right: -1500px';
      }
    });


  }
}


// Scroll Position
// Shove in the last known position
function doSomething() {
  scroll_pos = new IconSlide(last_known_scroll_position);
}

window.addEventListener('scroll', () => {
  last_known_scroll_position = window.scrollY;

  if (!ticking) {
    window.requestAnimationFrame( () => {
      doSomething(last_known_scroll_position);
      ticking = false;
    });

    ticking = true;
  }
});


// Select some stuff
const iconsSlider = document.querySelectorAll('.icon-slider');
iconsSlider.forEach(icon => new IconSlide(icon));



