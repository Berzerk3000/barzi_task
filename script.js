let kontakt = document.querySelector('section.kontakt');
let start = document.querySelector('section.start');
let work = document.querySelector('section.work');

let links = document.querySelectorAll('.links li a');


let switcher_section = document.querySelectorAll('.content-switcher .section');



function startFunc()
{
      var theFunction = function() {
        links[0].classList.add('current-link');
        links[1].classList.remove('current-link');
        links[2].classList.remove('current-link');

        switcher_section[0].classList.add('current-section');
        switcher_section[1].classList.remove('current-section');
        switcher_section[2].classList.remove('current-section');

        console.log('start');
        work.style.display = "none";
        kontakt.style.display = "none";
        start.style.display = "block";
      }
      links[0].addEventListener('click', theFunction);
      switcher_section[0].addEventListener('click', theFunction);
}

function kontaktFunc()
{
      var theFunction = function() {
        links[1].classList.add('current-link');
        links[0].classList.remove('current-link');
        links[2].classList.remove('current-link');
  
        switcher_section[1].classList.add('current-section');
        switcher_section[0].classList.remove('current-section');
        switcher_section[2].classList.remove('current-section');
  
        start.style.display = "none";
        work.style.display = "none";
        kontakt.style.display = "grid";
      }
      links[1].addEventListener('click', theFunction);
      switcher_section[1].addEventListener('click', theFunction);

}

function workFunc()
{
      var theFunction = function() {
        links[2].classList.add('current-link');
        links[0].classList.remove('current-link');
        links[1].classList.remove('current-link');

        switcher_section[2].classList.add('current-section');
        switcher_section[0].classList.remove('current-section');
        switcher_section[1].classList.remove('current-section');




        start.style.display = "none";
        kontakt.style.display = "none";
        work.style.display = "grid";
      }
      links[2].addEventListener('click', theFunction);
      switcher_section[2].addEventListener('click', theFunction);
}

startFunc();
kontaktFunc();
workFunc();