import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
// import i18n (needs to be bundled ;)) 
import './i18n';
//Google
import TagManager from 'react-gtm-module';

const tagManagerArgs = {
    gtmId: 'G-1277E4ZHCP'
}

TagManager.initialize(tagManagerArgs);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
