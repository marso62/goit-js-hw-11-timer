'use strict';

import refs from './refs';

class CountdownTimer {
  constructor({ selector, targetDate }) {
    this.selector = selector;
    this.targetDate = targetDate;

    this.ID = '';
  }

  tick() {
    this.ID = setInterval(() => {
      const currentTime = Date.now();
      const time = this.targetDate - currentTime;
      this.updateClockFace(time);
    }, 1000);
  }

  clear() {
    clearInterval(this.ID);
  }

  updateClockFace(time) {
    const daysTimer = this.pad(Math.floor(time / (1000 * 60 * 60 * 24)));
    const hoursTimer = this.pad(
      Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
    );
    const minsTimer = this.pad(
      Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)),
    );
    const secsTimer = this.pad(Math.floor((time % (1000 * 60)) / 1000));

    this.selector.textContent = `${daysTimer} : ${hoursTimer} : ${minsTimer} : ${secsTimer}`;
  }

  pad(value) {
    return String(value).padStart(2, '0');
  }
}

export default CountdownTimer;
