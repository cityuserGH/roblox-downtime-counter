'use strict';

class Timer extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.getTime();
  }

  getTime() {
    const OUTAGE_START_TIME = 1635461700; //seconds
    const totalSeconds = Math.floor(Date.now() / 1000) - OUTAGE_START_TIME;

    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds - (hours * 3600)) / 60);
    return { hours: hours, minutes: minutes, seconds: totalSeconds % 60 }
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