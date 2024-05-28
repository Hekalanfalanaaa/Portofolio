document.addEventListener("DOMContentLoaded", function() {
    // Scroll ke atas saat halaman dimuat
    window.scrollTo(0, 0);
});

const dynamicText = document.querySelector("h1 span");
const words = ["Travelling", "Drawing", "Learning", "And exploring new things."];
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

const typeEffect = () => {
    const currentWord = words[wordIndex];
    const currentChar = currentWord.substring(0, charIndex);
    dynamicText.textContent = currentChar;
    dynamicText.classList.add("stop-blinking");

    if (!isDeleting && charIndex < currentWord.length) {
        charIndex++;
        setTimeout(typeEffect, 200);
    } else if (isDeleting && charIndex > 0) {
        charIndex--;
        setTimeout(typeEffect, 100);
    } else {
        isDeleting = !isDeleting;
        dynamicText.classList.remove("stop-blinking");
        wordIndex = !isDeleting ? (wordIndex + 1) % words.length : wordIndex;
        setTimeout(typeEffect, 1200);
    }
}
typeEffect();
document.addEventListener("DOMContentLoaded", function() {
    window.addEventListener("scroll", function() {
        var aboutSection = document.getElementById("About");
        var contentSection = document.querySelector(".conten3");

        var aboutSectionPosition = aboutSection.getBoundingClientRect().top;
        var windowHeight = window.innerHeight;

        // Remove or comment out the lines below to disable the effect on ".conten3"
        if (aboutSectionPosition < windowHeight / 1.5) {
            contentSection.classList.add("show");
        } else {
            contentSection.classList.remove("show");
        }
    });
});


document.addEventListener("DOMContentLoaded", function() {
    const entryElement = document.querySelector(".animated-entry");
    entryElement.classList.add("show");
});

var h1 = document.querySelector('h1');
var conten1 = document.querySelector('.conten1');
var conten2 = document.querySelector('.conten2');
var buttonA = document.querySelector('.button a');

window.addEventListener('scroll', function() {
    var scrollPosition = window.scrollY;

    h1.style.opacity = 1 - scrollPosition / 800;
    conten1.style.opacity = 1 - scrollPosition / 800;
    conten2.style.opacity = 1 - scrollPosition / 900;

    buttonA.style.transform = 'translateY(' + (scrollPosition / 1) + 'px)';
    buttonA.style.opacity = 1 - scrollPosition / 50;

    buttonA.style.transform = 'translateY(' + (scrollPosition / 2) + 'px)';
    // image styling removed

    // You can also remove the image.style.zIndex line as it refers to the image variable
});


document.addEventListener("DOMContentLoaded", function () {
    var parallax2 = document.getElementById("parallax-2");
    var projek = document.getElementById("Projek");
    var skill = document.querySelector(".skill");

    function checkScroll() {
        var rectParallax = parallax2.getBoundingClientRect();
        var rectProjek = projek.getBoundingClientRect();

        if (rectParallax.top <= window.innerHeight / 10 && rectProjek.top > window.innerHeight) {
            skill.classList.add("show");
        } else {
            skill.classList.remove("show");
        }
    }

    // Gunakan setTimeout untuk memberikan waktu sebelum memanggil checkScroll pertama kali
    setTimeout(checkScroll, 0);

    window.addEventListener("scroll", checkScroll);
});


( function($) {
  
    $(document).ready(function() {
      
      var s           = $('.slider'),
          sWrapper    = s.find('.slider-wrapper'),
          sItem       = s.find('.slide'),
          btn         = s.find('.slider-link'),
          sWidth      = sItem.width(),
          sCount      = sItem.length,
          slide_date  = s.find('.slide-date'),
          slide_title = s.find('.slide-title'),
          slide_text  = s.find('.slide-text'),
          slide_more  = s.find('.slide-more'),
          slide_image = s.find('.slide-image img'),
          sTotalWidth = sCount * sWidth;
      
      sWrapper.css('width', sTotalWidth);
      sWrapper.css('width', sTotalWidth);
      
      var clickCount  = 0;
      
      btn.on('click', function(e) {
        e.preventDefault();
        
  
        if( $(this).hasClass('next') ) {
          
          ( clickCount < ( sCount - 1 ) ) ? clickCount++ : clickCount = 0;
        } else if ( $(this).hasClass('prev') ) {
          
          ( clickCount > 0 ) ? clickCount-- : ( clickCount = sCount - 1 );
        }
        TweenMax.to(sWrapper, 0.4, {x: '-' + ( sWidth * clickCount ) })
  
  
        //CONTENT ANIMATIONS
  
        var fromProperties = {autoAlpha:0, x:'-50', y:'-10'};
        var toProperties = {autoAlpha:0.8, x:'0', y:'0'};
  
        TweenLite.fromTo(slide_image, 1, {autoAlpha:0, y:'40'}, {autoAlpha:1, y:'0'});
        TweenLite.fromTo(slide_date, 0.4, fromProperties, toProperties);
        TweenLite.fromTo(slide_title, 0.6, fromProperties, toProperties);
        TweenLite.fromTo(slide_text, 0.8, fromProperties, toProperties);
        TweenLite.fromTo(slide_more, 1, fromProperties, toProperties);
  
      });
            
    });
  })(jQuery);
  
  $('.overlay').addClass('overlay-blue');




  var nav = document.querySelector("header");
  var lastScrollTop = 100;
  
  window.addEventListener("scroll", function() {
      var currentScrollTop = window.scrollY || document.documentElement.scrollTop;
  
      if (currentScrollTop > lastScrollTop) {
          // Scroll ke bawah, sembunyikan navbar
          nav.style.top = "-100px";
      } else {
          // Scroll ke atas atau berhenti, tampilkan navbar
          nav.style.top = "0px";
      }
  
      lastScrollTop = currentScrollTop;
  });


  particlesJS("particles-js", {"particles":{"number":{"value":95,"density":{"enable":true,"value_area":1262.347334869189}},"color":{"value":"#000000"},"shape":{"type":"circle","stroke":{"width":0,"color":"#000000"},"polygon":{"nb_sides":5},"image":{"src":"img/github.svg","width":100,"height":100}},"opacity":{"value":0.5,"random":false,"anim":{"enable":false,"speed":1,"opacity_min":0.1,"sync":false}},"size":{"value":5,"random":true,"anim":{"enable":false,"speed":30,"size_min":0.1,"sync":false}},"line_linked":{"enable":true,"distance":0,"color":"#ffffff","opacity":0.20833500268431643,"width":0},"move":{"enable":true,"speed":6,"direction":"top-right","random":true,"straight":false,"out_mode":"out","bounce":false,"attract":{"enable":false,"rotateX":600,"rotateY":1200}}},"interactivity":{"detect_on":"canvas","events":{"onhover":{"enable":true,"mode":"repulse"},"onclick":{"enable":true,"mode":"push"},"resize":true},"modes":{"grab":{"distance":400,"line_linked":{"opacity":1}},"bubble":{"distance":400,"size":40,"duration":2,"opacity":8,"speed":3},"repulse":{"distance":200,"duration":0.4},"push":{"particles_nb":4},"remove":{"particles_nb":2}}},"retina_detect":true});var count_particles, stats, update; stats = new Stats; stats.setMode(0); stats.domElement.style.position = 'absolute'; stats.domElement.style.left = '0px'; stats.domElement.style.top = '0px'; document.body.appendChild(stats.domElement); count_particles = document.querySelector('.js-count-particles'); update = function() { stats.begin(); stats.end(); if (window.pJSDom[0].pJS.particles && window.pJSDom[0].pJS.particles.array) { count_particles.innerText = window.pJSDom[0].pJS.particles.array.length; } requestAnimationFrame(update); }; requestAnimationFrame(update);;


  var skills= document.getElementById("skills");
  var experience= document.getElementById("experience");
  var education=document.getElementById("education");
  var konten_skills=document.getElementById("konten-skills");
  var konten_experience=document.getElementById("konten-experience");
  var konten_education=document.getElementById("konten-education");
  
  skills.addEventListener("click", ()=>{
    experience.style.color="white"
    education.style.color="white"
    skills.style.color="#e31b59"
    konten_skills.style.display="block"
    konten_experience.style.display="none"
    konten_education.style.display="none"
  
  }) 
  experience.addEventListener("click", ()=>{
    experience.style.color="#e31b59"
    education.style.color="white"
    skills.style.color="white"
    konten_skills.style.display="none"
    konten_experience.style.display="none"
    konten_education.style.display="block"
  })  
  education.addEventListener("click", ()=>{
    experience.style.color="white"
    education.style.color="#e31b59"
    skills.style.color="white"
    konten_skills.style.display="none"
    konten_experience.style.display="block"
    konten_education.style.display="none"
  })   
  
  var skills= document.getElementById("skills");
  var experience= document.getElementById("experience");
  var education=document.getElementById("education");
  var konten_skills=document.getElementById("konten-skills");
  var konten_experience=document.getElementById("konten-experience");
  var konten_education=document.getElementById("konten-education");
  
  skills.addEventListener("click", ()=>{
    experience.style.color="white"
    education.style.color="white"
    skills.style.color="#e31b59"
    konten_skills.style.display="block"
    konten_experience.style.display="none"
    konten_education.style.display="none"
  
  }) 
  experience.addEventListener("click", ()=>{
    experience.style.color="#e31b59"
    education.style.color="white"
    skills.style.color="white"
    konten_skills.style.display="none"
    konten_experience.style.display="none"
    konten_education.style.display="block"
  })  
  education.addEventListener("click", ()=>{
    experience.style.color="white"
    education.style.color="#e31b59"
    skills.style.color="white"
    konten_skills.style.display="none"
    konten_experience.style.display="block"
    konten_education.style.display="none"
  })

  // Dapatkan elemen parallax
var parallaxElement = document.getElementById('parallax-2');

// Tambahkan event listener untuk scroll
window.addEventListener('scroll', function () {
    // Tentukan tinggi dari elemen parallax
    var parallaxHeight = parallaxElement.offsetHeight;

    // Tentukan tinggi dari scroll
    var scrollHeight = window.scrollY;

    // Jika scroll sudah melewati tinggi parallax, tambahkan class hidden
    if (scrollHeight > parallaxHeight) {
        parallaxElement.classList.add('hidden');
    } else {
        parallaxElement.classList.remove('hidden');
    }
});
