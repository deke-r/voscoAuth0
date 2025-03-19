import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Auth0Provider } from '@auth0/auth0-react'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Auth0Provider
      domain={process.env.REACT_APP_domain}
      clientId={process.env.REACT_APP_clientId}
      authorizationParams={{ redirect_uri: window.location.origin }}>

      <App />
    </Auth0Provider>

  </React.StrictMode>

);

