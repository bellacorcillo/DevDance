import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      token: null,
      timerStarted: false,
      timerTime: 25 * 60 * 1000 // 25 minutes in milliseconds
    };
  }

  componentDidMount() {
    // Check for token in URL
    const token = new URLSearchParams(window.location.search).get('token');
    if (token) {
      this.setState({ token: token });
    }
  }

  connectToSpotify = () => {
    window.location.href = '/login'; // Redirects user to login endpoint (backend should handle this)
  }

  startTimer = () => {
    if (!this.state.timerStarted) {
      this.timer = setInterval(() => {
        const newTime = this.state.timerTime - 1000;
        if (newTime >= 0) {
          this.setState({
            timerTime: newTime
          });
        } else {
          clearInterval(this.timer);
          // Play Spotify music here, if you'd like, when timer ends.
        }
      }, 1000);
      this.setState({ timerStarted: true });
    }
  };

  resetTimer = () => {
    clearInterval(this.timer);
    this.setState({
      timerStarted: false,
      timerTime: 25 * 60 * 1000
    });
  };

  render() {
    const minutes = Math.floor(this.state.timerTime / (60 * 1000));
    const seconds = ((this.state.timerTime % (60 * 1000)) / 1000).toFixed(0);

    return (
      <div className="App">
        <header className="App-header">

          {/* If no Spotify token, display the connect button */}
          {!this.state.token && (
            <button onClick={this.connectToSpotify}>Connect to Spotify</button>
          )}

          {/* Display Spotify data when user is connected */}
          {this.state.token && (
            <div>
              <h3>Your Spotify Info Here</h3>
              {/* Your logic to display Spotify data */}
            </div>
          )}

          {/* Pomodoro Logic */}
          <div className="pomodoro-timer">
            {minutes}:{seconds < 10 ? '0' : ''}
            {seconds}
          </div>
          <button onClick={this.startTimer}>Start Pomodoro</button>
          <button onClick={this.resetTimer}>Reset Pomodoro</button>
        </header>
      </div>
    );
  }
}

export default App;