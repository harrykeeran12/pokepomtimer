import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Main from './App';
import Nav from './components/Nav';

ReactDOM.render(
    <Main/>,
  document.querySelector('main')
);

ReactDOM.render(
  <Nav></Nav>, document.querySelector('nav')
)


