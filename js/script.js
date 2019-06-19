// MENU-------------
var menuList = document.getElementById("hoverMenu")


menuList.addEventListener("mouseover", function () {

    var displayElement = document.querySelector("header ul ul");

    displayElement.style.display = "block";

});

// menuList.addEventListener("mouseleave", function() {
//
//     var displayElement = document.querySelector("header ul ul");
//
//     displayElement.style.display = "none";
//
// });


//FOTO DISPLAY NONE----------------------
var overlay = document.querySelectorAll(".picture img")
// console.log(overlay)

overlay.forEach(function (el) {
    el.addEventListener("mouseenter", function () {

        var displayOverlay = document.querySelectorAll("div.picture div");

        for (var i = 0; i < displayOverlay.length; i++) {

            displayOverlay[i].style.display = 'none';
        }
    })
});

overlay.forEach(function (el) {
    el.addEventListener("mouseleave", function () {

        var displayOverlay = document.querySelectorAll("div.picture div");

        for (var i = 0; i < displayOverlay.length; i++) {

            displayOverlay[i].style.display = 'block';
        }
    })
});

//SLIDER----------------------


var arrowLeft = document.getElementById('leftSlide');
var arrowRight = document.getElementById('rightSlide');

var sliderImage = document.querySelectorAll('div.slide img');
// console.log(arrowLeft);
// console.log(sliderImage);


sliderImage[0].classList.add('visible');

var index = 0;

function changeSlide(onClick) {
    switch (onClick) {
        case 'right':
            sliderImage[index].classList.remove('visible');
            index++;
            if (index == sliderImage.length)
                index = 0;
            sliderImage[index].classList.add("visible");
            break;
        case 'left':
            sliderImage[index].classList.remove("visible");
            index--;
            if (index < 0)
                index = sliderImage.length - 1;
            sliderImage[index].classList.add("visible");
            break;

    }

}

arrowRight.addEventListener("click", function () {
    changeSlide('right')

});

arrowLeft.addEventListener("click", function () {
    changeSlide('left')

});







