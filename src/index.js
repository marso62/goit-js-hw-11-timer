import refs from './js/refs';
import CountdownTimer from './js/time';
import './styles.css';

const countdownTimer = new CountdownTimer({
  //   selector: '#timer-1',
  selector: refs.timer,
  targetDate: new Date('Sep 13, 2020'),
});

countdownTimer.tick();
