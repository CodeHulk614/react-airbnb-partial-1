import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Header from './Header'
import MainComp from "./MainComp"
import Card from "./Card"
import Footer from "./Footer"
import css from "./dist/css/bootstrap.min.css"

function DispLay(){
  let fName, lName;
  fName = "hello"
  lName = "lovely"
  let date = new Date();
  let hours = date.getHours();
  let greetings;
  if(hours < 12){
    greetings = "morning"
  }else if (hours >= 12 && hours < 17){
    greetings = "afternoon"
  }else {
    greetings= "night"
  }
  return(
    <div>
      <Header />
      <MainComp />
      <Card 
        img="https://img.freepik.com/free-vector/black-deer-head_1284-37901.jpg?w=360&t=st=1664979729~exp=1664980329~hmac=b5facc380a62450eab2375b52c25a3a4be93fb12461619c04a7804a265a50025"
        text="This is a serious type of shii"
        smallText="001"
        smallBoldText="from $225"
      />
      <Card 
        img="https://img.freepik.com/free-vector/young-businessman-standing-character_98292-3724.jpg?w=360&t=st=1664980059~exp=1664980659~hmac=7015bef994fcb9afb516916e32a27b78b983731015c42308c405e28bd959af07"
        text="This is not so serious of a type of shii"
        smallText="021"
        smallBoldText="from $335"
      />
      <Footer />
      <h1>well, {fName} {lName}, it is {greetings}</h1>
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <DispLay />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

