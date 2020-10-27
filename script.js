const content_sections = Array.from(document.querySelectorAll('.content section'));
const clickable_sections = Array.from(document.querySelectorAll('.content-switcher .section, .links li a'));
const allElements = content_sections.concat(clickable_sections);

clickable_sections.forEach(clickable => {
  clickable.addEventListener('click', function() {

    var index_of_clicked_section = this.dataset.index;
    allElements.forEach(allElem => allElem.classList.remove('active'));
    for(x = 0; x < allElements.length; x++)
    {
      if(allElements[x].dataset.index == index_of_clicked_section)
      {
        allElements[x].classList.add('active');
      }
    }
  })
});