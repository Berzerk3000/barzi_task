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


const overlay = document.querySelectorAll('.blur, .close-btn, .imp-text, .ipm');
const ipmBtn = document.querySelector('.ipm');
const closeBtn = document.querySelector('.close-btn');


ipmBtn.addEventListener('click', function() {
  overlay.forEach(overlayEqupments => {
    overlayEqupments.classList.add('active');
  })
})


closeBtn.addEventListener('click', function () {
  overlay.forEach(overlayEqupments => {
    overlayEqupments.classList.remove('active');
  })
})


