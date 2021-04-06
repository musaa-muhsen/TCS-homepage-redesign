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



const mySwiper2 = new Swiper('.swiper-container', {
  // Optional parameters
   pagination: {
    el: '.swiper-pagination',
    clickable: true
  },
   slidesPerView: 3,
  loop: true,

   autoplay: {
      delay: 4000,
      disableOnInteraction: false
   },
   allowTouchMove: true,
  
     // Navigation arrows
breakpoints: {
  // when window width is <= 499px
  0: {
      slidesPerView: 1,
      spaceBetweenSlides: 30
  },
  // when window width is <= 999px
 700: {
      slidesPerView: 2,
      spaceBetweenSlides: 90
  },
  1300: {
    slidesPerView: 3,
    spaceBetweenSlides: 100
}

}
  // If we need pagination

});

const navLinks = document.querySelectorAll('.nav-link');
const overlay = document.querySelector('.overlay-links');

navLinks.forEach(function(link) {
  link.addEventListener("click", showMenu);
});

function showMenu(e) {
  overlay.style.display = "block";
}

overlay.addEventListener('click', function (e) {
  this.style.display = "none";
})

// const navLink = document.querySelectorAll('.nav-link');
// const menu1 = document.querySelector('.nav-menu-details');
// //console.log(navLink)

// navLink.forEach(function(link) {
//   //console.log(link)
//   link.addEventListener("mouseover", showMenu);
//   link.addEventListener("mouseout", hideMenu);
// })

// function showMenu(e) {
//   //console.log(e);
//   console.log(e.target.className);
//   if (e.target.className === "nav-link link-1") {
//     menu1.style.display = "block";

//    }
// }

// function hideMenu(e) {
//   //console.log(e);
//   console.log(e.target.className);
//   if (e.target.className === "nav-link link-1") {
//     menu1.style.display = "none";
//    }
// }


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
//document.body.contentEditable = true;