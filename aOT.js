let insersi1 = document.querySelector('[data-insersion1]')
let insersi2 = document.querySelector('[data-insersion2]')
let outsersi = document.querySelector('[data-outsersion]')
let calseri = document.querySelector('[data-calsersion]').addEventListener('click',areaOfTri )

function areaOfTri(){
    outsersi.innerText = insersi1.value * insersi2.value * 0.5;
}