// const items = document.querySelectorAll('.slider-item');
// const itemCount = items.length;
// const nextItem = document.querySelector('.next');
// const previousItem = document.querySelector('.previous');
// const navItem = document.querySelector('a.toggle-nav');
// let count = 0;

// function showNextItem() {
//   items[count].classList.remove('active');

//   if(count < itemCount - 1) {
//     count++;
//   } else {
//     count = 0;
//   }

//   items[count].classList.add('active');
//   console.log(count);
// }

// function showPreviousItem() {
//   items[count].classList.remove('active');

//   if(count > 0) {
//     count--;
//   } else {
//     count = itemCount - 1;
//   }

//   items[count].classList.add('active');
//   // Check if working...
//   console.log(count);
// }

// function toggleNavigation(){
//   this.nextElementSibling.classList.toggle('active');
// }

// function keyPress(e) {
//   e = e || window.event;
  
//   if (e.keyCode == '37') {
//     showPreviousItem();
//   } else if (e.keyCode == '39') {
//     showNextItem();
//   }
// }

// nextItem.addEventListener('click', showNextItem);
// previousItem.addEventListener('click', showPreviousItem);
// document.addEventListener('keydown', keyPress);
// navItem.addEventListener('click', toggleNavigation);


const accordionItemHeaders = document.querySelectorAll(".accordion-item-header");

// we want to loop through each accordionItemHeader VVV
accordionItemHeaders.forEach(function(accordionItemHeader){
// this =  accordionItemHeader
//accordionItemHeader.addEventListener("touchend", accordFunc );
    accordionItemHeader.addEventListener("click", accordFunc )
  
    function accordFunc(e){
        e.preventDefault;
        // if(e.type == 'touchend') {
        //     //alert(e.type);
        //     console.log(e.type)
        // } else if (e.type == 'click') {
        //     console.log(e.type)
        // }
  
        const currentlyActiveAccordionItemHeader = document.querySelector('.accordion-item-header.active'); // so we are selecting the accordion item header which currently has the class active 

        if(currentlyActiveAccordionItemHeader && currentlyActiveAccordionItemHeader !== this) {
          //is header active and also want to check if it's different to the clicked element 
             currentlyActiveAccordionItemHeader.classList.toggle('active'); // remove class active
             currentlyActiveAccordionItemHeader.nextElementSibling.style.maxHeight = 0;
        }
        this.classList.toggle("active"); // toggle the active class over the accordian item header 
        const accordionItemBody = this.nextElementSibling;// accdss the adjacent sibling accordion item body 
        console.log(accordionItemBody)
        if (this.classList.contains("active")) {
            accordionItemBody.style.maxHeight = accordionItemBody.scrollHeight + "px";
        }
        else {
            accordionItemBody.style.maxHeight = 0;
        }
    }

});

const navLink = document.querySelectorAll('.nav-link');
const menu1 = document.querySelector('.nav-menu-details');
//console.log(navLink)

navLink.forEach(function(link) {
  //console.log(link)
  link.addEventListener("mouseover", showMenu);
  link.addEventListener("mouseout", hideMenu);
})

function showMenu(e) {
  //console.log(e);
  console.log(e.target.className);
  if (e.target.className === "nav-link link-1") {
    menu1.style.display = "block";

   }
}

function hideMenu(e) {
  //console.log(e);
  console.log(e.target.className);
  if (e.target.className === "nav-link link-1") {
    menu1.style.display = "none";
   }
}


  // console.log(link.className)
  // if (link.className === "nav-link link-1") {
  //   button = link.className
  // }
// if (navLink === ) {

// }
/*
navLink.addEventListener("mouseover", displayIndustries);
//navLink.addEventListener("click", mySecondFunction);
navLink.addEventListener("mouseout", hideInd);

function myFunction() {
  console.log('mouseover');
}

function mySecondFunction() {
  console.log('click');
}
*/