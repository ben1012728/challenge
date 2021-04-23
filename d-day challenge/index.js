

// You're gonna need this
function getTime() {
  // Don't delete this.
  const date = new Date();
  const xmasDay = new Date("2021-12-24:00:00:00+0900");
  const counter= xmasDay-date;
  const xmas = Math.ceil(counter / (1000 * 60 * 60 * 24));
  const minutes = Math.ceil((counter % (1000 * 60 * 60)) / (1000 * 60));;
  const hours =Math.ceil((counter % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const sec= Math.ceil((counter % (1000 * 60)) / 1000);
  clockTitle.innerText=`${xmas} d ${
    hours < 10 ? `0${hours}` :   hours}h ${
        minutes < 10 ? `0${minutes}` : minutes 
     }m ${sec < 10 ? `0${sec}` : sec}s`;
}

const clockContainer = document.querySelector (".js-clock"),
 clockTitle = clockContainer.querySelector("h2")


 function init() {
 getTime();
 setInterval(getTime,1000);
}
init();
