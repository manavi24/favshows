import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Card from './Cards';
import Sdata from './sdata';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <h1 className="heading_style">List Of Top 5 Netflix Series</h1>
    
    <Card
    imgsrc={Sdata[0].imgsrc}
    title={Sdata[0].title}
    sname={Sdata[0].sname}
    link={Sdata[0].links}
    />
    <Card
    imgsrc={Sdata[1].imgsrc}
    title={Sdata[1].title}
    sname={Sdata[1].sname}
    link={Sdata[1].links}
    />
    <Card
    imgsrc={Sdata[2].imgsrc}
    title={Sdata[2].title}
    sname={Sdata[2].sname}
    link={Sdata[2].links}
    />
    <Card
    imgsrc={Sdata[3].imgsrc}
    title={Sdata[3].title}
    sname={Sdata[3].sname}
    link={Sdata[3].links}
    />
    <Card
    imgsrc={Sdata[4].imgsrc}
    title={Sdata[4].title}
    sname={Sdata[4].sname}
    link={Sdata[4].links}
    />
    
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

