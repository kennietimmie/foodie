//Drop down listtop for home page
const navToggler = document.querySelector('#navbarToggler');

if(navToggler){
 navToggler.addEventListener('click', () => {
  navToggler.classList.toggle('open-navbar-toggler');
 
  let target = document.querySelector(`#${navToggler.getAttribute("data-toggle")}`);
  let navbarLinks = document.querySelectorAll(`#${navToggler.getAttribute("data-toggle")} .nav-item`);
  target.classList.toggle('open');
 
  navbarLinks.forEach(el => el.addEventListener('click', () => {
 
   if(target.classList.contains('open')) {
 
    target.classList.toggle('open');
    navToggler.classList.toggle('open-navbar-toggler');
   }
  }));
 });
}

// Drop down listtop for admin page
const adminBar = document.querySelector('#adminBar');
const adminProfile = document.querySelector('#adminProfile');

if(adminBar){
let targetBar = document.querySelector(`#${adminBar.getAttribute('data-toggle')}`);

adminBar.addEventListener('click', ()=>{
 let children = document.querySelectorAll('#adminCollapse1 li');
// children.forEach();
 if(targetBar.classList.contains('show')) {
   targetBar.classList.toggle('show');

   let listItem = document.querySelectorAll(' #adminCollapse1 .acct-title');
  
  listItem.forEach((el)=>{
  el.classList.toggle('show');
  children.forEach(el => el.style.minWidth = "33px");
  });
  
 }
 else {
  targetBar.classList.toggle('show');

  let listItem = document.querySelectorAll(' #adminCollapse1 .acct-title');
  listItem.forEach((el)=>{
    el.classList.toggle('show');
   children.forEach(el => el.style.minWidth = "136px");
   });
 }
 
});
}

if(adminProfile){
 let targetProfile = document.querySelector(`#${adminProfile.getAttribute('data-toggle')}`);


adminProfile.addEventListener('click', ()=>{
 if(targetProfile.classList.contains('show')) {
  targetProfile.classList.toggle('show');
  return;
}
targetProfile.classList.toggle('show');
});
}



//Banner Title, Description and Image
const brandTitle = document.querySelector('.brand-title');
const brandDesc = document.querySelector('.brand-description');

const descMsg = ["Seasonal & local food", "Modern fast food service"];
const titleMsg = ["Glossary Japanese Culture", "Traditional Vietnamese Cuisine"];
let counter = 0;
if(brandTitle){
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
}

const cartButton = document.querySelectorAll('.cart-button');

if(cartButton){
 cartButton.forEach((el)=>{
  if(el.innerText == 'Leave' || el.innerText == 'Cancel' ){
   el.disabled = true;
   el.classList.toggle('cart-btn-disabled');
  }
 });

 //Add event listener to cart-button
 cartButton.forEach(el => el.addEventListener('click', ()=>{
  if(el.innerText == 'Join' || el.innerText == 'Order' ){
    if(el.innerText == 'Join' )
      el.innerText = 'Joined';
    else if(el.innerText == 'Order' )
    el.innerText = 'Ordered';
   el.disabled = true;

   //The button clicked
   if(el.disabled){
    el.classList.toggle('cart-btn-disabled');

    //Target button cancel cart-button
    let target = el.nextElementSibling;
    target.disabled = false;
    target.classList.toggle('cart-btn-disabled');
   }
   console.log(el.innerText);
  }else if(el.innerText == 'Leave' ||  el.innerText == 'Cancel'){

   //Target button Join cart-button
  let target = el.previousElementSibling;
  if( el.innerText == 'Leave')
    target.innerText = 'Join';
  else if( el.innerText == 'Cancel')
    target.innerText = 'Order';

  target.disabled = false;

   if(!target.disabled){
    target.classList.toggle('cart-btn-disabled');

    el.disabled = true;
    el.classList.toggle('cart-btn-disabled');
   }

  }
 }));
}