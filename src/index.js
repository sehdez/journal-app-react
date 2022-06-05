import React from 'react';
import ReactDOM from 'react-dom';
import './styles/styles.scss';
import reportWebVitals from './reportWebVitals';

import { JournalApp } from './JournalApp'

const divRoot = document.querySelector("#root");

ReactDOM.render( <JournalApp  />, divRoot );



// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <JournalApp />
//   </React.StrictMode>
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

// React antiguo

// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';

// // import PrimeraApp from './PrimeraApp';
// import CounterApp from './CounterApp';


// const divRoot = document.querySelector("#root");

// ReactDOM.render( <CounterApp value ={5}  />, divRoot );
