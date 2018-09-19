const secondHand = document.querySelector('.sec-hand');
const minsHand = document.querySelector('.minhand');
const hourHand = document.querySelector('.hourhand');
console.log(secondHand);
function setDate() {
	var now = new Date();
	var seconds = now.getSeconds();
	var secondDegree = ((seconds / 60) * 360) + 90;
	secondHand.style.transform = `rotate(${secondDegree}deg)`;
	const mins = now.getMinutes();
	const minsDegrees = ((mins / 60) * 360) + ((seconds / 60) * 6) + 90;
	minsHand.style.transform = `rotate(${minsDegrees}deg)`;
	const hour = now.getHours();
	const hourDegrees = ((hour / 12) * 360) + ((mins / 60) * 30) + 90;
	hourHand.style.transform = `rotate(${hourDegrees}deg)`;
};
setInterval(setDate, 1000);
setDate();