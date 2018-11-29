import React, { Component } from 'react';

import Messages from './components/Messages';
import './App.css';
import Sidebar from './containers/Sidebar';

class App extends Component {
  render() {
    return (
      <div id="container">
      	<Sidebar />
        <section id="main">
          <Messages />
        </section>
      </div>
    );
  }
}

export default App;
