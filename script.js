const content_sections = Array.from(document.querySelectorAll('.content section'));
const clickable_sections = Array.from(document.querySelectorAll('.content-switcher .section, .links li a'));
const allElements = content_sections.concat(clickable_sections);

clickable_sections.forEach(clickable => {
  clickable.addEventListener('click', function() {

    var index_of_clicked_section = this.dataset.index;
    allElements.forEach(allElem => {
      allElem.classList.remove('active');
      if(allElem.dataset.index == index_of_clicked_section)
      {
        allElem.classList.add('active');
      }
    });
  })
});