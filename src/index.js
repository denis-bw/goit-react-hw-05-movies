import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";
import  App  from 'components/App';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  
    <BrowserRouter basename="/denis-bw">
      <App />
    </BrowserRouter>
  
);

//  <BrowserRouter basename="/denis-bw">