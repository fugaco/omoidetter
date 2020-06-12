import React from 'react';
import logo from './logo.svg';
import './App.css';
import { messaging } from "./firebase";

const App: React.FC = () => {
  Notification.requestPermission().then(p => {
    console.info(p)

    if (p === 'granted') {
      messaging
          .getToken()
          .then(t => console.info(t))
          .catch(err => console.error(err))
    }
  })

  if ("serviceWorker" in navigator) {
    navigator.serviceWorker
        .register("./firebase-messaging-sw.js")
        .then(function(registration: any) {
          console.log("Registration successful, scope is:", registration.scope);
        })
        .catch(function(err: any) {
          console.log("Service worker registration failed, error:", err);
        });
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
