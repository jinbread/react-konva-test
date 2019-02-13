import React, { Component } from 'react';
import KonvaApp from './KonvaApp';
import './App.css';

class App extends Component {

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <KonvaApp />
        </header>
        
      </div>
    );
  }
}

export default App;
