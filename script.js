let kontakt = document.querySelector('section.kontakt');
let start = document.querySelector('section.start');
let work = document.querySelector('section.work');

let links = document.querySelectorAll('.links li a');

let switcher_sections = document.querySelectorAll('.content-switcher .section');

var clickedLink;
links.forEach(link => {        

  link.addEventListener('click', function() {

        clickedLink = this.id;
        links.forEach(lnk => {
          lnk.classList.remove('current-link');
        });
        this.classList.add('current-link');
        
        switcher_sections.forEach(sec => sec.classList.remove('current-section'));
        for(x = 0; x < switcher_sections.length; x++)
        {
          if(switcher_sections[x].id == clickedLink)
          {
            console.log("it works");
            switcher_sections[x].classList.add('current-section');
          } 
        }
        // if(switcher_sections.id == clickedLink)
        // {
        //   switcher_sections.classList.add ('current-section');
        // }
        
        // switcher_sections
        console.log(clickedLink);
        // start.classList.toggle('display');
        
  })
});

var clickedSwitch;
switcher_sections.forEach(sections => {
  sections.addEventListener('click', function () {
    
    switcher_sections.forEach(sec => sec.classList.remove('current-section'));
    this.classList.add('current-section');
    clickedSwitch = this.id;
    links.forEach(lnk => {
      lnk.classList.remove('current-link');
    });
    for(x = 0; x < links.length; x++)
    {
      if(links[x].id == clickedSwitch)
      {
        links[x].classList.add('current-link');
      }
    }
  })
});

// function startFunc()
// {
//       var theFunction = function() {
//         links[0].classList.add('current-link');
//         links[1].classList.remove('current-link');
//         links[2].classList.remove('current-link');

//         switcher_sections[0].classList.add('current-section');
//         switcher_sections[1].classList.remove('current-section');
//         switcher_sections[2].classList.remove('current-section');

//         console.log('start');
//         work.style.display = "none";
//         kontakt.style.display = "none";
//         start.style.display = "block";
//       }
//       links[0].addEventListener('click', theFunction);
//       switcher_sections[0].addEventListener('click', theFunction);
// }

// function kontaktFunc()
// {
//       var theFunction = function() {
//         links[1].classList.add('current-link');
//         links[0].classList.remove('current-link');
//         links[2].classList.remove('current-link');
  
//         switcher_sections[1].classList.add('current-section');
//         switcher_sections[0].classList.remove('current-section');
//         switcher_sections[2].classList.remove('current-section');
  
//         start.style.display = "none";
//         work.style.display = "none";
//         kontakt.style.display = "grid";
//       }
//       links[1].addEventListener('click', theFunction);
//       switcher_sections[1].addEventListener('click', theFunction);

// }

// function workFunc()
// {
//       var theFunction = function() {
//         links[2].classList.add('current-link');
//         links[0].classList.remove('current-link');
//         links[1].classList.remove('current-link');

//         switcher_sections[2].classList.add('current-section');
//         switcher_sections[0].classList.remove('current-section');
//         switcher_sections[1].classList.remove('current-section');




//         start.style.display = "none";
//         kontakt.style.display = "none";
//         work.style.display = "grid";
//       }
//       links[2].addEventListener('click', theFunction);
//       switcher_sections[2].addEventListener('click', theFunction);
// }

// startFunc();
// kontaktFunc();
// workFunc();