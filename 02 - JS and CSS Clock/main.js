
const $secondHand = document.querySelector('.second-hand')
const $minuteshand = document.querySelector('.min-hand')
const $hourHand = document.querySelector('.hour-hand')
let hrs = 0.20;
let hora = 0;
let cont = 0;
function setDate(){
    cont += 0.06;
    const now = new Date();

    const seconds = now.getSeconds() * 6 + 90;
    $secondHand.style.transform = `rotate(${seconds}deg)`

    const mins = now.getMinutes() * 6 + 90;
    $minuteshand.style.transform = `rotate(${mins}deg)`

    // (mins / 12) * 360 +90
    let hour = now.getHours() * 6 + 270;
    hour += cont;
    
    console.log(hour)
    $hourHand.style.transform = `rotate(${hour}deg)`
}
hrs += hrs;
setInterval(setDate, 1000);