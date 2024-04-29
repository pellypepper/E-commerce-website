// menu display max width 768px

var navMenu = document.querySelectorAll(".nav")
var menuClick = document.getElementById("menuclick")

menuClick.addEventListener('click', function(){
   
   navMenu.forEach(function(navMenus){
    navMenus.classList.toggle("show")
   })
    
   
    // Toggle between different Font Awesome classes
    if (menuClick.classList.contains('fa-bars')) {
        menuClick.classList.remove('fa-bars');
        menuClick.classList.add('fa-times'); // Change to another Font Awesome icon
    } else {
        menuClick.classList.remove('fa-times');
        menuClick.classList.add('fa-bars'); // Change back to the original Font Awesome icon
    }

})




// favorite display

const tabs = document.querySelectorAll('[data-target]'),
     tabContents = document.querySelectorAll('[data-content]')

tabs.forEach(tab =>{
    tab.addEventListener('click', ()=>{
        const target = document.querySelector(tab.dataset.target)

        tabContents.forEach(tabContent =>{
            tabContent.classList.remove('favorite_active')
        })
        target.classList.add('favorite_active')

        tabs.forEach(tab =>{
            tab.classList.remove('favorite_active')
        })

        tab.classList.add('favorite_active')
    })
})


// dispay sub menu ,  remove navmenu max width 768px 
document.addEventListener("DOMContentLoaded", function() {
    const navLinks = document.querySelectorAll('.nav-links');

  

    navLinks.forEach(function(navLink) {
      navLink.addEventListener('click', function(event) {
        
        if (window.innerWidth <= 768) {
          // Remove "show" class from nav menu
          navMenu.forEach(function(navMenus) {
              navMenus.classList.remove("show");
          });

       
          
      }

      
        event.preventDefault();
        const target = navLink.getAttribute('data-target');
        const targetContainer = document.getElementById(target);

        if (targetContainer) {
          // Toggle visibility of target container
          targetContainer.classList.toggle('show');
          
          
          // Hide other containers
          const containers = document.querySelectorAll('.container');
          containers.forEach(function(container) {
            if (container.id !== target) {
              container.classList.remove('show');
            }
          });

          


        
        }
      });
    });
//when clicked remove previous menu

  // Adding event listener to elements with class "menhead"
  const menheadElements = document.querySelectorAll('.menhead');

  menheadElements.forEach(function(menhead) {
    menhead.addEventListener('click', function() {
      // Find the parent container and remove the "show" class
      const container = menhead.closest('.container');
      container.classList.remove('show');
    });
  });
  });


 // display submenu option  and return previous menu 


  document.addEventListener("DOMContentLoaded", function() {
    const navLinks = document.querySelectorAll('.nav-linkss');
    



    navLinks.forEach(function(navLink) {
      navLink.addEventListener('click', function(event) {
        event.preventDefault();
        const target = navLink.getAttribute('data-target');
        const targetContainer = document.getElementById(target);

        if (targetContainer) {
          // Toggle visibility of target container
          targetContainer.classList.add('shows');
          
          // Hide other containers

          const arrowLeftElements = document.querySelectorAll('.arrow_left');
  
    arrowLeftElements.forEach(function(arrowLeft) {
      arrowLeft.addEventListener('click', function() {
        const targetContainer = arrowLeft.parentElement;
        targetContainer.classList.remove('shows');
      });
    });



        }
      });
    });
  });




var imageClass = document.querySelectorAll(".image")

imageClass.forEach(imageClassy =>{
    imageClassy.addEventListener("mouseenter", function(){
        var hoverClass = document.querySelectorAll(".everyday_hover")
        hoverClass.forEach(hoverClassy => {
            hoverClassy.classList.add("everyday_show")
        })
    })
})

imageClass.forEach(imageClassy =>{
    imageClassy.addEventListener("mouseleave", function(){
        var hoverClass = document.querySelectorAll(".everyday_hover")
    hoverClass.forEach(hoverClassy => {
        hoverClassy.classList.remove("everyday_show")
    })
    })
})



// Get all slides and steps
const slides = document.querySelectorAll('.favorite_everyday');
const tabss = document.querySelectorAll('.tab');
const steps = document.querySelectorAll('.steps');



tabss.forEach(tab => {
    tab.addEventListener("click", function(){
        // Loop through each step and add click event listener
    steps.forEach((step, index) => {
    step.addEventListener('click', () => {
        // Remove 'active' class from all steps
        steps.forEach(s => s.classList.remove('active'));
        // Add 'active' class to the clicked step
        step.classList.add('active');
        // Show the corresponding slide
        slides.forEach((slide, i) => {
            if (index === i) {
                slide.style.display = 'flex';
            } else {
                slide.style.display = 'none';
            }
        });
    });
});
    } )
})

var swiper = new Swiper(".swiper-container", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });


  function showMinibar(){
    const bar1 = document.getElementById("miniBar")
    const bar2 = document.getElementById("miniBar2")
    const remove = document.getElementById("remove")

    bar1.classList.toggle("hide")
    bar2.classList.toggle("hide2")

    remove.addEventListener('click', function(){
      bar2.classList.remove("hide2")
      bar1.classList.remove("hide")
    })
  }