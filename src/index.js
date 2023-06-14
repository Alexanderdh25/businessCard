import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App'
import './index.css';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)



/*
  What is a React component?
  - A function that returns React elements

  If i were to console.log(page) in index.js, what would show up?
  - A JS object. React elements that describe what React should eventually add to the real DOM for us

  What does it mean for something to be 'declarative' or 'imperative'?
  - Declarative means I can tell the computer what to do and expect it to handle the details.
  - Imperative means I need to tell it HOW to do each step.

  What does it mean for something to be composable?
  - A small pieces of code that we can put together to make something larger/greater than the individual pieces

  */