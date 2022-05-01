import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    //React.Fragment 的好处是不会显示在DOM之中, 要用div来wrap的话, DOM中会有个div显得多余
    //PS. 也可以用单纯的<>...</>来替代React.Fragment
    <React.Fragment>
      <App authorized = {true}/>
    </React.Fragment>
);

