function showSidebar() {
    const sidebar = document.querySelector('.sidebar');
    sidebar.style.display = 'flex';
}
function closeSidebar() {
    const sidebar = document.querySelector('.sidebar');
    sidebar.style.display = 'none';
}

let slideImages = document.querySelectorAll('#slide-img');
let next = document.querySelector('.next')
let prev = document.querySelector('.prev')
let dots = document.querySelectorAll('.dot');

var counter = 0;

next.addEventListener('click', slideNext);
function slideNext() {
    slideImages[counter].style.animation = 'next1 1.8s ease-in-out forwards';
    if(counter >= slideImages.length-1) {
        counter = 0;
    } else {
        counter++;
    }
    slideImages[counter].style.animation = 'next2 1.8s ease-in-out forwards';
    indicators();
}
prev.addEventListener('click', slidePrev);
function slidePrev() {
    slideImages[counter].style.animation = 'prev1 1.8s ease-in-out forwards';
    if(counter == 0) {
        counter = slideImages.length-1;
    } else {
        counter--;
    }
    slideImages[counter].style.animation = 'prev2 1.8s ease-in-out forwards';
    indicators();
}

function autoSlide() {
    deletInterval = setInterval(timer, 4500);
    function timer() {
        slideNext();
        indicators(); 
    }
}
autoSlide();

const container = document.querySelector('.slide-container');
container.addEventListener('mouseover', function() {
    clearInterval(deletInterval);
});

container.addEventListener('mouseout', autoSlide);

function indicators() {
    for(i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(' active', '');
    }
    dots[counter].className += ' active';
}

function switchImage(currentImage){
    currentImage.classList.add('active');
    let imageId = currentImage.getAttribute('attr');
    if(imageId > counter) {
        slideImages[counter].style.animation = 'next1 1.8s ease-in-out forwards';
        counter = imageId;
        slideImages[counter].style.animation = 'next2 1.8s ease-in-out forwards';
    } else if(imageId == counter) {
        return;
    } else {
        slideImages[counter].style.animation = 'prev1 1.8s ease-in-out forwards';
        counter = imageId;
        slideImages[counter].style.animation = 'prev2 1.8s ease-in-out forwards';
    }
    indicators();
}


