import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
// import './index.css'
import { Auth0Provider } from '@auth0/auth0-react'

ReactDOM.createRoot(document.getElementById('root')).render(
  <Auth0Provider
  domain='dev-8p6c8g3ktchsc5w8.us.auth0.com'
  clientId='IZE1bD0jYoqnz2A66PhEBxujvByVZKln'
  authorizationParams={{ 
    redirect_uri:window .location.origin
   }}
   >
   <App />
  </Auth0Provider>
   
  // </React.StrictMode>,
);
