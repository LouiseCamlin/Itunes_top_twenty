import React from 'react';
import ReactDOM from 'react-dom';
import TopTwentyContainer from './containers/TopTwentyContainer.jsx';

window.onload = function () {
  ReactDOM.render(
    <TopTwentyContainer />,
    document.getElementById('app')
  );
};
