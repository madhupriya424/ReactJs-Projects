import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Coursesales from './Coursesales';

class App extends Component {
  render() {
    var courses = [
      { name: 'Complete iOS10 dev course', price: 199 },
      { name: 'Complete pentesting course', price: 299 },
      { name: 'Complete front end dev course', price: 399 },
      { name: 'Bug Bounty and web app pentesting', price: 499 }
    ];
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome To Course Purchase Page</h1>
        </header>
        <Coursesales items={courses}/>
      </div>
    );
  }
}

export default App;
