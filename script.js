const contentSections = Array.from(document.querySelectorAll('.content section'));
const clickableSections = Array.from(document.querySelectorAll('.content-switcher .section, .links li a'));
const allElements = contentSections.concat(clickableSections);

clickableSections.forEach(clickable => {
  clickable.addEventListener('click', function() {
    allElements.forEach(allElem => {
      allElem.classList.remove('active'); 
      if(allElem.dataset.index == this.dataset.index) allElem.classList.add('active');
    });
  })
});



const overlay = document.querySelectorAll('.overlay, .close-btn, .imp-text, .ipm');
const closeBtn = overlay[0]; 
const ipmBtn = overlay[3];

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


