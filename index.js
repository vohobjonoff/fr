// let currentlySelected = 0;

// const nodes = document.querySelectorAll(".gallery-img");
// const prevBtn = document.querySelector(".prev")
// const nextBtn = document.querySelector(".next")


// function previous() {
//     nextBtn.disabled = false;
//     nodes[currentlySelected].classList.remove("active");
//     currentlySelected--;
//     nodes[currentlySelected].classList.add("active");

//     if (currentlySelected === 0 ) {
//         prevBtn.disabled = true
//     }

// }

// function next() {
//     prevBtn.disabled = false;
//     nodes[currentlySelected].classList.remove("active");
//     currentlySelected++;
//     nodes[currentlySelected].classList.add("active")


//     if(currentlySelected  === 11){
//         nextBtn.disabled = true
//     }

// }

// function init(){
//     prevBtn.addEventListener('click', function(){
//         previous()
//     })
//     nextBtn.addEventListener('click', function(){
//         next()
//     })
// }
// init()


new Swiper(".swiper-container", {
    speed: 400,
    spaceBetween: 100,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
    }
});