
let hourHand = document.querySelector('#hour')
let minuteHand = document.querySelector('#minute')
let secondHand = document.querySelector('#seconds')


function  changeToDeg(h , m , s) {


    function hourAngle() {
        return (h*30)
    }

   const minuteAngle = (m*6)
   const secondAngle = (s*6)

    hourHand.style.transform = `rotate(${hourAngle()}deg)`
    minuteHand.style.transform = `rotate(${minuteAngle}deg)`
    secondHand.style.transform = `rotate(${secondAngle}deg)`


}

function currentTime() {

    const now = new Date()

    let h = now.getHours()
    let m = now.getMinutes()
    let s = now.getSeconds()

    console.log(`${h}:${m}:${s}`)
    changeToDeg( h,m,s)
    // setInterval(hourAngle , 10)
}
currentTime()
setInterval(currentTime, 1000)
