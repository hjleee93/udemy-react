//1. import react reactdome lib
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App'
// 2. get reference div with id root
const el = document.getElementById('root');

// 3. tell react controll elem
const root = ReactDOM.createRoot(el)
// 4. create compo

// 5. show compo
root.render(<App />);

