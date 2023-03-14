{/* <script src="https://cdnjs.cloudflare.com/ajax/libs/typed.js/2.0.12/typed.min.js" referrerpolicy="no-referrer"></script> */}
// typing animation
var typed = new Typed('.typing', {
    strings:['Dev Front-End.','Programador.','Dev Back-End.'],
    typeSpeed:100,
    backSpeed:60,
    loop:true
})

// Menu
const nav = document.querySelector('.nav'),
    navList = nav.querySelectorAll('li'),
    totalNavList = navList.length,
    allSection = document.querySelectorAll('section'),
    totalSection = allSection.length;

for(let i = 0; i<totalNavList; i++){
    const a = navList[i].querySelector('a');

    a.addEventListener('click', function(){

        for(let i = 0; i<totalSection; i++){
       
            allSection[i].classList.remove('back-section');
        }

        for(let j=0; j<totalNavList; j++){
            const a = navList[j].querySelector('a');

            if(a.classList.contains('active')){

                allSection[j].classList.add('back-section');
            }

            navList[j].querySelector('a').classList.remove('active');
        }

        this.classList.add('active');
        showSection(this);

        if(window.innerWidth<1200){

            asideSectionToggleBtn(); 
        }

    })
}

function showSection(element){
    for(let i = 0; i<totalSection; i++){
       
        allSection[i].classList.remove('active');
    }
    const target = element.getAttribute('href').split('#')[1];
    document.querySelector('#' + target).classList.add('active');
}

const navTogglerBtn = document.querySelector('.nav__toggler'),
      aside = document.querySelector('.aside');

navTogglerBtn.addEventListener('click', () =>{
    asideSectionToggleBtn();
})

function asideSectionToggleBtn(){

    aside.classList.toggle('open');
    navTogglerBtn.classList.toggle('open');

    for(let i = 0; i<totalSection; i++){
       
        allSection[i].classList.toggle('open');
    }
}
