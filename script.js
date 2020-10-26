let content_sections = document.querySelectorAll('.content .section');
let switcher_sections = document.querySelectorAll('.content-switcher .section');
let clickableSections = document.querySelectorAll('.content-switcher .section, .links li a');


clickableSections.forEach(clickable => {
  clickable.addEventListener('click', function() {
    clickableSections.forEach(allsec => allsec.classList.remove('active'));
    content_sections.forEach(sec => sec.classList.remove('active'));
    var ID_of_clicked_Section = this.id;
    for(x = 0; x < clickableSections.length; x++)
    {
      if(clickableSections[x].id == ID_of_clicked_Section)
      {
        clickableSections[x].classList.add('active');
        content_sections[x].classList.add('active');
      }
    }
  })
});