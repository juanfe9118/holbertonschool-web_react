import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import GetNotifications from './Notifications';

ReactDOM.render(
  <React.StrictMode>
    <App />
    <div name="root-notifications">
      <GetNotifications />
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);
