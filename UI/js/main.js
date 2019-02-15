//Drop down listtop
const navToggler = document.querySelector('#navbarToggler');

navToggler.addEventListener('click', () => {
 navToggler.classList.toggle('open-navbar-toggler');

 let target = document.querySelector(`#${navToggler.getAttribute("data-toggle")}`);
 let navbarLinks = document.querySelectorAll(`#${navToggler.getAttribute("data-toggle")} .nav-item`);
 target.classList.toggle('open');

 navbarLinks.forEach(el => el.addEventListener('click', () => {

  if (target.classList.contains('open')) {

   target.classList.toggle('open');
   navToggler.classList.toggle('open-navbar-toggler');
  }
 }));
});

//Banner Title, Description and Image
const brandTitle = document.querySelector('.brand-title');
const brandDesc = document.querySelector('.brand-description');

const descMsg = ["Seasonal & local food", "Modern fast food service"];
const titleMsg = ["Glossary Japanese Culture", "Traditional Vietnamese Cuisine"];
let counter = 0;

setInterval(() => {
 brandTitle.innerHTML = titleMsg[counter];
 brandDesc.innerText = descMsg[counter];

 //counter should be tested against
 //the smalest value.
 counter++;
 
 if (counter >= titleMsg.length) {
  counter = 0;
 }
}, 3500);