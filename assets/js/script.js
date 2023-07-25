
'use strict'

/*
* -NAVBAR VARIABLES
*/

const navTogleBtn = document.querySelector("[data-nav-toggle-btn]");
const header = document.querySelector("[data-header]");

navTogleBtn.addEventListener('click' , function(){
  header.classList.toggle("active")
})




/*
* - FOR CLOSING NAVLINKS (using inline event 'onclick')
*/

const navLinks = document.querySelectorAll('[data-nav-link]');

function closeNavLinks(){
  
  header.classList.remove("active")

}

closeNavLinks()

