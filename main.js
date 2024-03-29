/* ----- NAVIGATION BAR FUNCTION ----- */
function myMenuFunction(){
    var menuBtn = document.getElementById("myNavMenu");
    if(menuBtn.className === "nav-menu"){
      menuBtn.className += " responsive";
    } else {
      menuBtn.className = "nav-menu";
    }
  }
/* ----- ADD SHADOW ON NAVIGATION BAR WHILE SCROLLING ----- */
  window.onscroll = function() {headerShadow()};
  function headerShadow() {
    const navHeader =document.getElementById("header");
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop >  50) {
      navHeader.style.boxShadow = "0 1px 6px rgba(0, 0, 0, 0.1)";
      navHeader.style.height = "70px";
      navHeader.style.lineHeight = "70px";
    } else {
      navHeader.style.boxShadow = "none";
      navHeader.style.height = "90px";
      navHeader.style.lineHeight = "90px";
    }
  }
/* ----- TYPING EFFECT ----- */
 var typingEffect = new Typed(".typedText",{
    strings : ["Software Developer Intern"],
    loop : true,
    typeSpeed : 100, 
    backSpeed : 80,
    backDelay : 2000
 })
/* ----- ## -- SCROLL REVEAL ANIMATION -- ## ----- */
 const sr = ScrollReveal({
        origin: 'top',
        distance: '80px',
        duration: 2000,
        reset: true     
 })
/* -- HOME -- */
sr.reveal('.featured-text-card',{})
sr.reveal('.featured-name',{delay: 100})
sr.reveal('.featured-text-info',{delay: 200})
sr.reveal('.featured-text-btn',{delay: 200})
sr.reveal('.social_icons',{delay: 200})
sr.reveal('.featured-image',{delay: 300})

/* -- PROJECT BOX -- */
sr.reveal('.project-box',{interval: 200})
/* -- HEADINGS -- */
sr.reveal('.top-header',{})
/* ----- ## -- SCROLL REVEAL LEFT_RIGHT ANIMATION -- ## ----- */
/* -- ABOUT INFO & CONTACT INFO -- */
const srLeft = ScrollReveal({
  origin: 'left',
  distance: '80px',
  duration: 2000,
  reset: true
})

srLeft.reveal('.about-info',{delay: 100})
srLeft.reveal('.contact-info',{delay: 100})
/* -- ABOUT SKILLS & FORM BOX -- */
const srRight = ScrollReveal({
  origin: 'right',
  distance: '80px',
  duration: 2000,
  reset: true
})

srRight.reveal('.skills-box',{delay: 100})
srRight.reveal('.form-control',{delay: 100})

/* ----- CHANGE ACTIVE LINK ----- */

const sections = document.querySelectorAll('section[id]')
function scrollActive() {
  const scrollY = window.scrollY;
  sections.forEach(current =>{
    const sectionHeight = current.offsetHeight,
        sectionTop = current.offsetTop - 50,
      sectionId = current.getAttribute('id')
    if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) { 
        document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.add('active-link')
    }  else {
      document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.remove('active-link')
    }
  })
}
window.addEventListener('scroll', scrollActive)
function validateForm() {
  var name = document.getElementById('name').value;
  var email = document.getElementById('email').value;
  var message = document.getElementById('message').value;

  // Validate name: Allow only alphabets
  var nameRegex = /^[a-zA-Z\s]+$/;

  if (name === '' || !name.match(nameRegex)) {
      alert('Please enter a valid name.');
      return false;
  }

  // Validate email: Check if it's a valid email address
  var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (email === '' || !email.match(emailRegex)) {
      alert('Please enter a valid email address.');
      return false;
  }

  if (message === '') {
      alert('Please fill in the message field.');
      return false;
  }

  // If all validation passes, you can submit the form or take further action
  alert('Form submitted successfully!');
  // Additional logic for form submission can be added here

  // Returning true allows the form to be submitted
  return true;
}
// Click button to go to contact me
function scrollToContact() {
  var contactSection = document.getElementById('contact');
  if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
  }
}
document.addEventListener("DOMContentLoaded", function() {
  var navLinks = document.querySelectorAll(".nav-link");

  navLinks.forEach(function(navLink) {
    navLink.addEventListener("click", function() {
      toggleNavMenu();
    });
  });
});

function toggleNavMenu() {
  var navMenu = document.getElementById("myNavMenu");
  navMenu.classList.toggle("active");
}
function downloadCV() {
  var link = document.createElement('a');
  link.href = 'CV/Aphiwe Sikhuphela Professional CV.pdf';
  link.download = 'Aphiwe Sikhuphela Professional CV.pdf';
  link.click();
}
