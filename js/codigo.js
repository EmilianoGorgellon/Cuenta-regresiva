const fechaElegida = new Date("September 18, 2021, 00:00:00")
// diferencia de tiempo
let days = document.getElementById("days")
let hours = document.getElementById("hours")
let minutes = document.getElementById("minutes")
let seconds = document.getElementById("seconds")
const time = () => {
    // Obtengo tiempo que falta para la fecha de lanzamiento
    let fechaReal = new Date();
    let tiempo = fechaElegida - fechaReal;
    let secondsTime = Math.floor(((tiempo / 1000) % 60 ))
    let minutesTime = Math.floor((tiempo / (1000 * 60)) % 60);
    let hoursTime = Math.floor((tiempo / (1000 * 60 * 60)) % 24);
    let daysTime = Math.floor(tiempo / (1000 * 60 * 60 * 24));
    secondsTime < 10 ? secondsTime = `0${secondsTime}` : secondsTime;
    minutesTime < 10 ? minutesTime = `0${minutesTime}` : minutesTime;
    hoursTime < 10 ? hoursTime = `0${hoursTime}` : hoursTime;
    daysTime < 10 ? daysTime = `0${daysTime}` : daysTime;
    days.innerHTML = (`<span class="day">${daysTime}</span><p class="day-text">DAYS</p>`);
    hours.innerHTML = (`<span class="hours">${hoursTime}</span><p class="hours-text">HOURS</p>`); 
    minutes.innerHTML = (`<span class="minutes">${minutesTime}</span><p class="minutes-text">MINUTES</p>`);
    seconds.innerHTML = (`<span class="seconds" id="seconds"> ${secondsTime}</span><p class="seconds-text">SECONDS</p>`);
}
setInterval(time, 1000);