'use strict';

class Timer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hours: ((Date.now()/1000 - 1635461700) / 3600) };
  }

  tick() {
    this.setState(state => ({
      hours: ((Date.now()/1000 - 1635461700) / 3600)
    }));
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
      'Roblox has been down for ',
      this.state.hours,
      ' hours.'
    );
  }
}

ReactDOM.render(React.createElement(Timer, null), document.getElementById('timer-example'));