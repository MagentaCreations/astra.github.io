const hamburger = document.getElementById('hamburger-button');
const menu = document.getElementById('sub-holder');
const mainDiv = document.getElementById('main-section');
const gallery1 = document.querySelector('.gallery');
const gallery2 = document.querySelector('.card-gallery');
const navCircle1 = document.getElementById('nav-circle-1');
const navCircle2 = document.getElementById('nav-circle-2');
const navCircle3 = document.getElementById('nav-circle-3');
const navCircle4 = document.getElementById('card-nav-1');
const navCircle5 = document.getElementById('card-nav-2');
const navCircle6 = document.getElementById('card-nav-3');

const sec3Holder1 = document.getElementById("section-3-holder-1");
const sec3Holder2 = document.getElementById('section-3-holder-2');
const sec3Holder3 = document.getElementById('section-3-holder-3');
const sec3Holder4 = document.getElementById('section-3-holder-4');

let checker = false;
let countPosition = true;
let countPosition2 = true;
let counter = 0;
let counter2 = 0;
let myTimer = setInterval(countNav, 5000);
let myTimer2 = setInterval(countNav2, 5000);


function collapse(check){
    if(!check){
        menu.style.transform = 'translateY(100%)';
    }
    else{
        menu.style.transform = 'translateY(-100%)'; 
    }
}
function menuAnimation(check){
    const line1 = document.getElementById('line-1');
    const line2 = document.getElementById('line-2');
    const line3 = document.getElementById('line-3');

        if(!check){
        line1.style.transform = 'rotate(45deg) translate(12px, 0px)';
        line3.style.transform = 'rotate(-45deg) translate(14px, 0px)';
        line2.style.opacity = 0;
         
    }
    else{
        line1.style.transform = 'rotate(0deg) translate(0,0)';
        line3.style.transform = 'rotate(0deg) translate(0,0)';
        line2.style.opacity = 1;
    }

}
function countNav(){
    gallery1.style.scrollBehavior = 'smooth';
    if (countPosition){
        switch(counter){
            case 0:
                gallery1.scrollLeft += gallery1.scrollWidth/3;
                navCircle1.style.backgroundColor = 'rgb(49, 49, 49)';
                navCircle2.style.backgroundColor = 'white';
                navCircle3.style.backgroundColor = 'rgb(49, 49, 49)';
                counter++;
                break;
            case 1:
                gallery1.scrollLeft += gallery1.scrollWidth/3;
                navCircle1.style.backgroundColor = 'rgb(49, 49, 49)';
                navCircle2.style.backgroundColor = 'rgb(49, 49, 49)';
                navCircle3.style.backgroundColor = 'white';
                counter++;
                countPosition = false;
                break;
        }
    
    }
    else{
        switch(counter){
            case 1:
                gallery1.scrollLeft -= gallery1.scrollWidth/3;
                navCircle1.style.backgroundColor = 'white';
                navCircle2.style.backgroundColor = 'rgb(49, 49, 49)';
                navCircle3.style.backgroundColor = 'rgb(49, 49, 49)';
                counter--;
                countPosition = true;
                break;
            case 2:
                gallery1.scrollLeft -= gallery1.scrollWidth/3;
                navCircle1.style.backgroundColor = 'rgb(49, 49, 49)';
                navCircle2.style.backgroundColor = 'white';
                navCircle3.style.backgroundColor = 'rgb(49, 49, 49)';
                counter--;
                break;
        }
    
    }

}

function countNav2(){
    gallery2.style.scrollBehavior = 'smooth';
    if (countPosition2){
        switch(counter2){
            case 0:
                gallery2.scrollLeft += gallery2.scrollWidth/3;
                navCircle4.style.backgroundColor = 'gray';
                navCircle5.style.backgroundColor = 'black';
                navCircle6.style.backgroundColor = 'gray';
                counter2++;
                break;
            case 1:
                gallery2.scrollLeft += gallery2.scrollWidth/3;
                navCircle4.style.backgroundColor = 'gray';
                navCircle5.style.backgroundColor = 'gray';
                navCircle6.style.backgroundColor = 'black';
                counter2++;
                countPosition2 = false;
                break;
        }
    
    }
    else{
        switch(counter2){
            case 1:
                gallery2.scrollLeft -= gallery2.scrollWidth/3;
                navCircle4.style.backgroundColor = 'black';
                navCircle5.style.backgroundColor = 'gray';
                navCircle6.style.backgroundColor = 'gray';
                counter2--;
                countPosition2 = true;
                break;
            case 2:
                gallery2.scrollLeft -= gallery2.scrollWidth/3;
                navCircle4.style.backgroundColor = 'gray';
                navCircle5.style.backgroundColor = 'black';
                navCircle6.style.backgroundColor = 'gray';
                counter2--;
                break;
        }
    
    }

}

window.addEventListener('load', function(){
    gallery1.scrollLeft = -gallery1.scrollWidth;
    gallery2.scrollLeft = -gallery2.scrollWidth;

})
hamburger.addEventListener('click', function(){
    if(!checker){
        menuAnimation(checker);
        collapse(checker);
        checker = true;
    }
    else{
        menuAnimation(checker);
        collapse(checker);
        checker = false;
    }
})
navCircle1.addEventListener('click', function(){
    gallery1.scrollLeft = 0;
    navCircle1.style.backgroundColor = 'white';
    navCircle2.style.backgroundColor = 'rgb(49, 49, 49)';
    navCircle3.style.backgroundColor = 'rgb(49, 49, 49)';
    counter = 0;
    countPosition = true;
})
navCircle2.addEventListener('click', function(){
    gallery1.scrollLeft = (gallery1.scrollWidth/3);
    navCircle1.style.backgroundColor = 'rgb(49, 49, 49)';
    navCircle2.style.backgroundColor = 'white';
    navCircle3.style.backgroundColor = 'rgb(49, 49, 49)';
    counter = 1;   
    
})
navCircle3.addEventListener('click', function(){
    gallery1.scrollLeft = (gallery1.scrollWidth/3)*2;
    navCircle1.style.backgroundColor = 'rgb(49, 49, 49)';
    navCircle2.style.backgroundColor = 'rgb(49, 49, 49)';
    navCircle3.style.backgroundColor = 'white';
    counter = 2;
    countPosition = false;
})
navCircle4.addEventListener('click', function(){
    gallery2.scrollLeft = 0;
    navCircle4.style.backgroundColor = 'black';
    navCircle5.style.backgroundColor = 'gray';
    navCircle6.style.backgroundColor = 'gray';
    counter2 = 0;
    countPosition2 = true;
})
navCircle5.addEventListener('click', function(){
    gallery2.scrollLeft = gallery2.scrollWidth/3;
    navCircle4.style.backgroundColor = 'gray';
    navCircle5.style.backgroundColor = 'white';
    navCircle6.style.backgroundColor = 'gray';
    counter2 = 1;   
    
})
navCircle6.addEventListener('click', function(){
    gallery2.scrollLeft = (gallery2.scrollWidth/3) *2;
    navCircle4.style.backgroundColor = 'gray';
    navCircle5.style.backgroundColor = 'gray';
    navCircle6.style.backgroundColor = 'black';
    counter2 = 2;
    countPosition2 = false;
})

sec3Holder1.addEventListener('mouseenter', function(e){
    this.lastElementChild.style.filter = "brightness(0.5)";
    this.firstElementChild.style.animation = "slideInBottom 0.3s ease-out 0s 1 normal forwards";
})
sec3Holder1.addEventListener('mouseleave', function(e){
    this.lastElementChild.style.filter = "brightness(1)";
    this.firstElementChild.style.animation = "slideOutBottom 0.5s ease-out 0s 1 normal none";
})
sec3Holder2.addEventListener('mouseenter', function(e){
    this.lastElementChild.style.filter = "brightness(0.5)";
    this.firstElementChild.style.animation = "slideInBottom 0.3s ease-out 0s 1 normal forwards";
})
sec3Holder2.addEventListener('mouseleave', function(e){
    this.lastElementChild.style.filter = "brightness(1)";
    this.firstElementChild.style.animation = "slideOutBottom 0.5s ease-out 0s 1 normal none";
})
sec3Holder3.addEventListener('mouseenter', function(e){
    this.lastElementChild.style.filter = "brightness(0.5)";
    this.firstElementChild.style.animation = "slideInBottom 0.3s ease-out 0s 1 normal forwards";
})
sec3Holder3.addEventListener('mouseleave', function(e){
    this.lastElementChild.style.filter = "brightness(1)";
    this.firstElementChild.style.animation = "slideOutBottom 0.5s ease-out 0s 1 normal none";
})
sec3Holder4.addEventListener('mouseenter', function(e){
    this.lastElementChild.style.filter = "brightness(0.5)";
    this.firstElementChild.style.animation = "slideInBottom 0.3s ease-out 0s 1 normal forwards";
})
sec3Holder4.addEventListener('mouseleave', function(e){
    this.lastElementChild.style.filter = "brightness(1)";
    this.firstElementChild.style.animation = "slideOutBottom 0.5s ease-out 0s 1 normal none";
})