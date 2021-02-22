import React, { Component } from 'react';
import './css/App.css';
import Dashboard from './components/dashboard';

class App extends Component {
  state = { data: [], city: '', error: '', isLoaded: true };

  handleChange = e => {
    this.setState({ city: e.target.value });
  };

  handleSubmit = async e => {
    e.preventDefault();
    if (this.state.city.trim() !== '') {
      const city = this.state.city;
      const apikey = 'eeba43779a35c43c203373d7ac69a9db';
      const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}`;
      const response = await fetch(url);

      if (!response.ok) {
        return this.setState({ error: 'please search a valid city name 😏' });
      }
      const data = await response.json();
      this.setState({ data: data, isLoaded: false });
    }
  };

  render() {
    return (
      <div className='App'>
        <Dashboard
          Submit={this.handleSubmit}
          Changed={this.handleChange}
          AllData={this.state}
        />
      </div>
    );
  }
}

export default App;
