import React from "react";
function Card(props){
    return(
        <div>
            <div class="card" width="175px">
                <img class="card-img-top" src={props.img} alt=""></img>
                <div class="card-body">
                    <p className="card-text">{props.text}</p>
                    <p class="card-text"><strong>{props.smallBoldText}</strong>/ {props.smallText}</p>
                </div>
            </div>
        </div>
    )
}
export default Card