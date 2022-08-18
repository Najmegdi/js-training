let clock = document.querySelector('#analog-clock')

let hourHand = document.querySelector('#hour')
let minuteHand = document.querySelector('#minute')
let secondHand = document.querySelector('#seconds')


function changeToDeg(h, m, s, ms) {
	// CTRL + ALT + L
	// file ro tamiz mikone

	const hourAngle = (h + m / 60 + s / 3600) * 30;
	const minuteAngle = (m + s / 60) * 6;
	const secondAngle = (s + ms / 1000) * 6;

	// kolle saat mishe 360 deg
	// har saat mishe 30 deg
	// har daghighe mishe 6 deg
	// har daghighe 1/60 yek saate
	// har sanie mishe 6 deg
	// har sanie 1/60 yek daghighe ast
	// har sanie 1/3600 yek saate

	// 05:18:23
	// 5 * 30  => zaviyeye saate asli
	// (18 / 60) * 30 => aashare be dast oomade az daghighe
	// (23 / 3600) * 30 => aashare be dast oomade az sanie
	// hamash ba ham jam mishe. zavieye aghrabe saat shomar ro mide


	// TIP:
	// 02:30 -> 75deg -> 30 + 30 + 15
	// 05:14 -> 156.9deg -> 30 * 5 + 6.9

	hourHand.style.transform = `rotate(${hourAngle}deg)`
	minuteHand.style.transform = `rotate(${minuteAngle}deg)`
	secondHand.style.transform = `rotate(${secondAngle}deg)`


}

function currentTime() {

	const now = new Date()

	let h = now.getHours()
	let m = now.getMinutes()
	let s = now.getSeconds()
	let ms = now.getMilliseconds();

	console.log(`${h}:${m}:${s}`)
	changeToDeg(h, m, s, ms)
	// setInterval(hourAngle , 10)
}

for (let i = 0; i < 60; i++) {
	const dot = createElement(`<div class="${i % 5 === 0 ? 'dot main' : 'dot'}"></div>`);

	const x = 250 + Math.cos((i * 6) / 180 * Math.PI) * 230;
	const y = 250 + Math.sin((i * 6) / 180 * Math.PI) * 230;

	dot.style.top = `${y}px`;
	dot.style.left = `${x}px`;

	clock.appendChild(dot);
}

currentTime()
// setInterval(currentTime, 1000) // 1 FPS
setInterval(currentTime, 1000 / 30) // 30 FPS
