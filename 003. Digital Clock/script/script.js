
const time = document.querySelector('#time')

function currentTime() {

    const now = new Date()

    let h = now.getHours()
    let m = now.getMinutes()
    let s = now.getSeconds()
    let session

    session = h <= 12 ?  'AM' : 'PM'

    h = h.toString().padStart(2 , '0')
    s = s.toString().padStart(2 , '0')
    m = m.toString().padStart(2 , '0')


    time.innerHTML = `${h}:${m}:${s} ${session}`

}
setInterval(currentTime, 1000)

currentTime()