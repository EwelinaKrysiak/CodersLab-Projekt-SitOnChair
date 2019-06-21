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

var sliderDiv = document.querySelectorAll('div.slide');
var arrowLeft = document.getElementById('leftSlide');
var arrowRight = document.getElementById('rightSlide');

sliderDiv[0].classList.add('visible');

var index = 0;

function changeSlide(onClick) {
    switch (onClick) {
        case 'right':
            sliderDiv[index].classList.remove('visible');
            index++
            if (index == sliderDiv.length)
                index=0
            sliderDiv[index].classList.add("visible");
            break;
        case 'left':
            sliderDiv[index].classList.remove("visible");
            index--
            if (index<0)
                index = sliderDiv.length - 1
            sliderDiv[index].classList.add("visible");
            break;

    }
}

arrowRight.addEventListener("click",function (event) {
    event.preventDefault()
    changeSlide('right')
});

arrowLeft.addEventListener("click",function (event) {
    event.preventDefault()
    changeSlide('left')
});

// !-------------DROP DOWN



var arrowKind = document.querySelector('span.kind');


    arrowKind.addEventListener("click", function () {

        var listPanelKind = document.querySelector('ul.kind');

        if (listPanelKind.style.display == "none"){
            listPanelKind.style.display = "block";
        }else{
            listPanelKind.style.display = "none";
        }
    });


var arrowColor = document.querySelector('span.color');


arrowColor.addEventListener("click", function () {

    var listPanelColor = document.querySelector('ul.color');

    if (listPanelColor.style.display == "none"){
        listPanelColor.style.display = "block";
    }else{
        listPanelColor.style.display = "none";
    }
});


var arrowMaterial = document.querySelector('span.material');


arrowMaterial.addEventListener("click", function () {

    var listPanelMaterial = document.querySelector('ul.material');

    if (listPanelMaterial.style.display == "none"){
        listPanelMaterial.style.display = "block";
    }else{
        listPanelMaterial.style.display = "none";
    }
});

var chairClair = document.querySelector("ul.kind :first-child");
var chairMargarita = document.querySelector("ul.kind :nth-child(2)");
var chairSelena = document.querySelector("ul.kind :last-child");

var colorRed = document.querySelector("ul.color :first-child");
var colorBlack = document.querySelector("ul.color :nth-child(2)");
var colorOrange = document.querySelector("ul.color :last-child");

var patternTextile = document.querySelector("ul.material :first-child");
var patternLeather = document.querySelector("ul.material :last-child");
var transportCheck = document.querySelector("input#transport")
console.log(transportCheck);


var chairValue = document.querySelector("h4.title.value")
var colorValue = document.querySelector("span.color.value")
var patternValue = document.querySelector("span.pattern.value")
var transportValue = document.querySelector("span.transport.value")


chairClair.addEventListener("click", function () {
    document.querySelector("h4.title").innerText = "Chair Clair";
    chairValue.innerText = "290"
});

chairMargarita.addEventListener("click", function(){
    document.querySelector("h4.title").innerText = "Chair Margarita";
    chairValue.innerText = "330"
});

chairSelena.addEventListener("click", function(){
    document.querySelector("h4.title").innerText = "Chair Selena";
    chairValue.innerText = "350"
});

colorRed.addEventListener("click", function() {
    document.querySelector("div.panel_left span.color").innerText = "Czerwony";
    colorValue.innerText = "0"
});

colorOrange.addEventListener("click", function(){
    document.querySelector("div.panel_left span.color").innerText = "Pomarańczowy";
    colorValue.innerText = "0"
});

colorBlack.addEventListener("click", function() {
    document.querySelector("div.panel_left span.color").innerText = "Czarny";
    colorValue.innerText = "0"
});

patternTextile.addEventListener("click", function(){
    document.querySelector("div.panel_left span.pattern").innerText = "Tkanina";
    patternValue.innerText = "70"
});

patternLeather.addEventListener("click", function(){
    document.querySelector("div.panel_left span.pattern").innerText = "Skóra";
    patternValue.innerText = "200"
});


transportCheck.addEventListener("click", function () {
    document.querySelector("span.transport").innerText = "Transport"

    transportValue.innerText = "200"
})

