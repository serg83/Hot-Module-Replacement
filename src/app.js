//const css = require('./app.scss');
//console.log('Hello from app.js and webpack server!');
console.log('Testing hot module replacement');


import React from 'react';
import ReactDOM from 'react-dom';
import AppComponent from './AppComponent';
//import scss from './app.scss';

ReactDOM.render(
<AppComponent />,
//<h1>Hello, world</h1>,
document.getElementById('root')
);
/*
if (module.hot) {
  module.hot.accept('./AppComponent', () => {
const NextAppAppComponent = require('./AppComponent').default;
ReactDOM.render(
  <NextAppAppComponent />,
document.getElementById('root')
)
});
}
*/
