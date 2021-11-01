'use strict';

const ROBLOX_IS_DOWN = false;
const OUTAGE_START_TIME = 1635461700; //seconds

class Timer extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = this.getTime();
  }

  getTime() {
    if (!ROBLOX_IS_DOWN) return {hours: '00', minutes: '00', seconds: '00'};
    
    const totalSeconds = Math.floor(Date.now() / 1000) - OUTAGE_START_TIME;
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds - (hours * 3600)) / 60);
    return { 
      hours: hours < 10 ? '0' + hours : hours,
      minutes: minutes < 10 ? '0' + minutes : minutes,
      seconds: totalSeconds % 60 < 10 ? '0' + totalSeconds % 60 : totalSeconds % 60
    };
  }

  tick() {
    this.setState(this.getTime());
  }

  componentDidMount() {
    this.interval = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return React.createElement(
      'div',
      null,
      this.state.hours,
      'h ',
      this.state.minutes,
      'm ',
      this.state.seconds,
      's'
    );
  }
}

ReactDOM.render(React.createElement(Timer, null), document.getElementById('timer-example'));
