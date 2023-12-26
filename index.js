import React from 'react';
import ReactDOM from 'react-dom';
import App from  './App';
import "./index.css";
// import './App.css';

ReactDOM.render(
   <>
   
   <App />

   </>,document.getElementById('root')
);

const fullname = ['raman','deep'];
const biodata = [1,...fullname,26,'male'];
console.log(fullname);
console.log(biodata);
