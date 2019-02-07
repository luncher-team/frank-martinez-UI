// Starting points for variables
let last_known_scroll_position = 0; 
let ticking = false;


// Slide from left component
// Requires that elements be placed at some far left spot in the css
// These components will bring them back into view 'left:0' and back out when scrolling down and up, respectively.
class IconSlideLeft {
  constructor(icon, scroller, iconClassName, textClassName) {
    this.icon = icon; // This doesn't do anything... but it's a good luck charm. Don't remove it.
    this.scrollPos = last_known_scroll_position;

    this.iconLeft = document.querySelectorAll(iconClassName);
    this.textLeft = document.querySelectorAll(textClassName);
    
    this.iconLeft.forEach(icon => { 
      if (this.scrollPos > scroller) {
        icon.style = 'left: 0';
      }
      if (this.scrollPos < (scroller - 50)) {
        icon.style = 'left: -1000px';
      }
    });

    this.textLeft.forEach(text => { 
      if (this.scrollPos > scroller) {
        text.style = 'left: 0';
      }
      if (this.scrollPos < (scroller - 60)) {
        text.style = 'left: -1500px';
      }
    });
  }
}

// Slide from right component
// Identical to slide from left, just coming from the right and vice-versa.
class IconSlideRight {
  constructor(icon, scroller, iconClassName, textClassName) {
    this.icon = icon;
    this.scrollPos = last_known_scroll_position;

    this.iconRight = document.querySelectorAll(iconClassName);
    this.textRight = document.querySelectorAll(textClassName);

    this.iconRight.forEach(icon => { 
      if (this.scrollPos > scroller) {
        icon.style = 'right: 0';
      }
      if (this.scrollPos < (scroller - 50)) {
        icon.style = 'right: -1000px';
      }
    });

    this.textRight.forEach(text => { 
      if (this.scrollPos > scroller) {
        text.style = 'right: 0';
      }
      if (this.scrollPos < (scroller - 60)) {
        text.style = 'right: -1500px';
      }
    });
  }
}

// Scroll Position
// The first argument doesn't need adjustment. It's the current scroll position as determined by the event listener.
// The second argument to the component is 'start slide position'.
// The third and fourth arguments are elements to slide.
slideFinder = () => {
  scroll_pos = new IconSlideLeft(last_known_scroll_position, 345, '.icon-left', '.text-left');
  scroll_pos = new IconSlideRight(last_known_scroll_position, 450, '.icon-right', '.text-right');
}

window.addEventListener('scroll', () => {
  last_known_scroll_position = window.scrollY;

  if (!ticking) {
    window.requestAnimationFrame( () => {
      slideFinder(last_known_scroll_position);
      ticking = false;
    });

    ticking = true;
  }
});

let slides=document.querySelectorAll('.icon-slider');
let slidesArr = Array.from(slides).map( element => {
  element.style.opacity = '1';
  console.log(element);
});
