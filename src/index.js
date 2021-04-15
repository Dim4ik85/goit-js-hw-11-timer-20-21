import  './css/timer.css';

const refs = {
    timer: document.querySelector('#timer-1'),
    days: document.querySelector('span[data-value="days"]'),
    hours: document.querySelector('span[data-value="hours"]'),
    mins: document.querySelector('span[data-value="mins"]'),
    secs: document.querySelector('span[data-value="secs"]'),
};

class CountdownTimer {
  constructor({selector, targetDate}) {
    this.selector = selector;
    this.targetDate = targetDate;
    console.log(selector);
  }

  intervalId = null;

  intervalId = setInterval(() => {
    const currentTime = Date.now();
   // console.log('start -> currentTime', currentTime);
   // console.log('start -> currentTime', currentTime);
   //const deltaTime = currentTime - startTime;

   const deltaTime = this.targetDate - currentTime;
   console.log(deltaTime);
   let time = this.getTimeComponents(deltaTime);

  //  console.log(timeComponents = {days,hours, mins, secs});
  // console.log({days,hours, mins, secs});
   // console.log(`${days}:${hours}:${mins}:${secs}`);

   this.updateClockface(time);

   const {days,hours, mins, secs} = time;
   console.log(time);

  }, 1000);

  finishTime() {
    clearInterval(this.intervalId);
    }
//Принимает число, приводит к строке и добавляет в начало 0
//если число меньше 2-х знаков

  pad(value) {
    return String(value).padStart(2, '0');
  }

//Для подсчета значений используй следующие готовые формулы, 
//где time - разница между targetDate и текущей датой.

  getTimeComponents(time) {
      const days = this.pad(Math.floor(time / (1000 * 60 * 60 * 24)));
      const hours = this.pad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
      const mins = this.pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
      const secs = this.pad(Math.floor((time % (1000 * 60)) / 1000));

    return {days,hours, mins, secs};
  }
  
  

  updateClockface({days,hours, mins, secs}){
        refs.days.innerHTML = days;
        refs.hours.innerHTML = hours;
        refs.mins.innerHTML = mins;
        refs.secs.innerHTML = secs;
    }

}



//Плагин это класс CountdownTimer, экземпляр которого создает новый таймер с настройками.
new CountdownTimer({
    selector: '#timer-1',
    targetDate: new Date('April 30, 2021'),
  });
