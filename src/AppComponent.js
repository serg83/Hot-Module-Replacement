import { hot } from 'react-hot-loader';
import React, { Component } from 'react';
import scss from './app.scss';

class AppComponent extends Component {
  render() {
    return (
      <div>
<h1 >Hello, world - add text to see no page reloading</h1>
      </div>
    )
  }
}

export default hot(module)(AppComponent);
