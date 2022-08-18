

const square = document.querySelector('#square')
const redSlider = document.querySelector('#red-slider')
const greenSlider = document.querySelector('#green-slider')
const blueSlider = document.querySelector('#blue-slider')

function currentRgb() {

    const red = redSlider.value
    const green = greenSlider.value
    const blue = blueSlider.value
    const color  = `rgb(${red},${green},${blue})`
    square.style.background = color

}

redSlider.addEventListener('change', currentRgb)

greenSlider.addEventListener('change' , currentRgb)

blueSlider.addEventListener('change' , currentRgb)

currentRgb()