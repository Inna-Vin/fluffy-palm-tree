let images = [{
    url: 'img/image-slider-1.png',
    title: 'Rostov-on-Don, Admiral'
}, {
    url: 'img/image-slider-2.png',
    title: 'Sochi Thieves'
}, {
    url: 'img/image-slider-3.png',
    title: 'Rostov-on-Don Patriotic'
}];

let imagesSecond = [{
    url: "img/galery/image.png"
},{
    url: "img/galery/image2.png"
},{
    url: "img/galery/imag3.png"
}];

function initSlider() {

    let sliderImg = document.querySelector(".slider");
    let sliderDots = document.querySelector(".slider_dots");
    let sliderTitle = document.querySelector(".admiral");
    let sliderSecond = document.querySelector(".galery-slider");

    initImages(images, sliderImg);
    initArrows();
    initDots();
    initTitle();
    
    initImages(imagesSecond, sliderSecond);
    initSliderSecond();
    addClassImage();

    function initImages(img, wrapper) {
        img.forEach ((image, index) => {
            let imageDiv = `<div class="image n${index} ${index === 0? "active" : ""}" style="background-image:url(${img[index].url});" data-index="${index}"></div>`;
            wrapper.innerHTML += imageDiv;
        });
    }

    function addClassImage() {
        sliderSecond.querySelectorAll(".image").forEach(index => {
            index.classList.add("image-mobile");
        })
    }

    function initArrows() {
        document.querySelectorAll(".slider_arrows").forEach (arrow => {
            arrow.addEventListener ('click', function() {
                let curNumber = +sliderImg.querySelector(".active").dataset.index;
        let nextNumber;
        if (arrow.classList.contains("left-arr")) {
          nextNumber = curNumber === 0? images.length - 1 : curNumber - 1;
        } else {
          nextNumber = curNumber === images.length - 1? 0 : curNumber + 1;
        }
        moveSlider(nextNumber);
            })
        })
    }

    function initDots() {
        images.forEach ((image, index) => {
            let dotsDiv = `<div class="dots n${index} ${index === 0? "active" : ""}" data-index="${index}"></div>`;
            sliderDots.innerHTML += dotsDiv;
        })
        sliderDots.querySelectorAll(".dots").forEach (dots => {
            dots.addEventListener('click', function() {
                moveSlider(this.dataset.index);
            })
        })
    }

    function initTitle() {
        images.forEach ((image, index) => {
            let titleDiv = `<div class="admiral-item n${index} ${index === 0? "active" : ""}" data-index="${index}">${images[index].title}</div>`;
            sliderTitle.innerHTML += titleDiv;
        })
        sliderTitle.querySelectorAll(".admiral-item").forEach (title => {
            title.addEventListener('click', function() {
                moveSlider(this.dataset.index);
            })
        })
    }

    function moveSlider(num) {
        sliderImg.querySelector(".active").classList.remove("active");
        sliderImg.querySelector(".n" + num).classList.add("active");
        
        sliderDots.querySelector(".active").classList.remove("active");
        sliderDots.querySelector(".n" + num).classList.add("active");

        sliderTitle.querySelector(".active").classList.remove("active");
        sliderTitle.querySelector(".n" + num).classList.add("active");
    }

    function initSliderSecond() {
        document.querySelectorAll(".slider_arrows-second").forEach (arrow => {
            arrow.addEventListener ('click', function() {
                let curNumber = +sliderSecond.querySelector(".active").dataset.index;
        let nextNumber;
        if (arrow.classList.contains("left-arr")) {
          nextNumber = curNumber === 0? images.length - 1 : curNumber - 1;
        } else {
          nextNumber = curNumber === images.length - 1? 0 : curNumber + 1;
        }
        moveSliderSecond(nextNumber);
            })
        })

        function moveSliderSecond(number) {
            sliderSecond.querySelector(".active").classList.remove("active");
            sliderSecond.querySelector(".n" + number).classList.add("active");
        }
    }
    
}

document.addEventListener("DOMContentLoaded", initSlider);