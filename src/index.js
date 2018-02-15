import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {BrowserRouter} from "react-router-dom";

fetch(process.env.PUBLIC_URL + 'data.json').then(response => response.json()).then(responseData => {
    ReactDOM.render(<BrowserRouter><App data={responseData}/></BrowserRouter>, document.getElementById('root'));
    registerServiceWorker();
});


