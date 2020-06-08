const hours = document.querySelector(".card-clock__innerHours");
const minutes = document.querySelector(".card-clock__innerMinutes");
const seconds = document.querySelector(".card-clock__innerSeconds");

const calculateDegrees = (value, maxValue) => value / maxValue * 360 - 90;

const setClock = () => {
  const date = new Date();

  seconds.style.transform = `rotate(${calculateDegrees(date.getSeconds(), 60)}deg)`;
  minutes.style.transform = `rotate(${calculateDegrees(date.getMinutes(), 60)}deg)`;
  hours.style.transform = `rotate(${calculateDegrees(date.getHours(), 12)}deg)`;
};
setClock();

setInterval(setClock, 1000);