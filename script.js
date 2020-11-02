const contentSections = Array.from(document.querySelectorAll('.content section'));
const clickableSections = Array.from(document.querySelectorAll('.content-switcher .section, .links li a'));
const allElements = contentSections.concat(clickableSections);

clickableSections.forEach(clickable => {
  clickable.addEventListener('click', function() {
    allElements.forEach(elem => {
      elem.classList.remove('active'); 
      if(elem.dataset.index == this.dataset.index) elem.classList.add('active');
    });
  })
});

const overlayElements = document.querySelectorAll('.blur, .overlay-box, .kontakt-formular');
const buttons = document.querySelectorAll('.ipm, .close-btn, .kontakt-btn');

buttons.forEach(btn => {
  btn.addEventListener('click', function () {
    overlayElements.forEach(overlayElem => {
      if(overlayElem.dataset.index == btn.dataset.index)
      {
        overlayElem.classList.add('active');
      }
    })
  });
})




