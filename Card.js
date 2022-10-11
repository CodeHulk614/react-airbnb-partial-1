import React from "react";
import Dropdown from 'react-bootstrap/Dropdown';
import {useState} from 'react'
function Cards(props){

  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': 'c91897b739mshd3b554785899770p1ab37fjsn466ad6a2650a',
      'X-RapidAPI-Host': 'imdb8.p.rapidapi.com'
    }
  };
  
  fetch('https://imdb8.p.rapidapi.com/auto-complete?q=game%20of%20thr', options)
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(err => console.error(err));
    return(
        <div className="card rounded-0">
          <img src={props.schoolImg} className="card-img-top rounded-0" alt="..."></img>
          <div className="card-body">
            <h5 className="card-title m-0 mb-1">{props.schoolName}</h5>
            <p className="card-text m-0 mb-1">{props.aboutSchool}</p>
            <a href="test" className="btn btn-dark">Go somewhere</a>
          </div>
      </div>
    )
}
export default Cards