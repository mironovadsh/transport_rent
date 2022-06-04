import React, { createContext } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import TSSharing from './Sharing/TSSharing';
import UserSharing from './Sharing/UserSharing';

export const Context = createContext(null)


ReactDOM.render(
  <Context.Provider value={{
    user: new UserSharing(),
    TS: new TSSharing(),
  }}>
    <App />
  </Context.Provider>,
  document.getElementById('root')
);


