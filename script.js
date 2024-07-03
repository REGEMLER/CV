const burger = document.getElementById(`burger`);
const menu = document.getElementById(`header-menu`);
let isMenuOpen = false;

function showMenu(){
    menu.classList.add("header__menu__active");
    burger.classList.add("burger__active"); 
    document.body.style.overflowY = "hidden";
    isMenuOpen = true;
 }
 
 
function hideMenu(){
    menu.classList.remove("header__menu__active");
    burger.classList.remove("burger__active"); 
    document.body.style.overflowY = "";
    isMenuOpen = false;
}

function moveMenuWithBurger(event){
    event.stopPropagation();
     if(menu.classList.contains("header__menu__active")){
        menu.classList.add("header__menu__transition-slow");
        hideMenu(); 
        setTimeout(() => {
          menu.classList.remove("header__menu__transition-slow");
        },1100)
     } else {
         showMenu();
     }
}
 
function hideMenuWithBody(){
     if(!isMenuOpen){
         return; 
     }   
     menu.classList.add("header__menu__transition-slow");
     hideMenu(); 
     setTimeout(() => {
       menu.classList.remove("header__menu__transition-slow");
     },1100)
}
 
burger.addEventListener("click", moveMenuWithBurger); 
document.body.addEventListener("click", hideMenuWithBody);
 
import cards from './experience.js';
const arrowLeft = document.querySelector(".arrow-left");
const arrowRight = document.querySelector(".arrow-right"); 
let slideIndex = 0;

function createNewSlide(){
  const img = document.querySelector(".slide__img"); 
  img.src = cards[slideIndex].img;
  img.alt = cards[slideIndex].name;
  const link = document.querySelector(".experience__link"); 
  link.href = cards[slideIndex].link;
  link.textContent = cards[slideIndex].name;
}
   
function moveLeft() { 
  slideIndex--;
  if(slideIndex < 0) slideIndex = cards.length - 1;
  createNewSlide();
}
   
function moveRight() {
  slideIndex++;
  if(slideIndex > cards.length - 1) slideIndex = 0;
  createNewSlide();;
}
      
arrowLeft.addEventListener("click", moveLeft);
arrowRight.addEventListener("click", moveRight);



