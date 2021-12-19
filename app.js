document.querySelector("body").addEventListener("mousemove", eyeball);

function eyeball() {
    'use strict';
    var eye = document.querySelectorAll(".eye");
    eye.forEach(function (eye) {
        let x = (eye.getBoundingClientRect().left) + (eye.clientWidth / 2)
        let y = (eye.getBoundingClientRect().top) + (eye.clientHeight / 2);
        let radian = Math.atan2(event.pageX - x, event.pageY - y);
        let rot = (radian * (180 / Math.PI) * -1) + 270;
        eye.style.transform  = "rotate("+ rot +"deg)"
    })
}
var div4 = document.querySelector('.face') 
var audio = document.querySelector('#audio4')
autoplay="true"
muted="muted"
div4.addEventListener("mouseenter", function(){
    audio.play()
    });
div4.addEventListener("mouseout", function(){
    audio.pause()
    });
                
