
const ball = document.querySelector('#ball')

let x = window.innerWidth / 2
let y = window.innerHeight / 2

let sx = Math.random() * 2 - 1
let sy = Math.random() * 2 - 1


function bouncingBall (){

	x = x + sx
	y = y + sy

	ball.style.left = `${x}px`
	ball.style.top = `${y}px`

	if( x <= 0 || x >= (window.innerWidth-40) ) {
		sx = -sx
	}

	if( y <= 0 || y >= (window.innerHeight-40) ) {
		sy = -sy
	}

}
bouncingBall()
setInterval(bouncingBall, 1000 / 30 )
