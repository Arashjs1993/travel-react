import React from "react";

export default function Cards(props) {
    return (
        <section className="card-section">
            <div className="card-left">
                <img className="card-mainimg" src={window.location.origin 
                +`/images/${props.item.img}`} alt="card-img"/>
            </div>
            <div className="card-right">
                <div className="card-location">
                    <img className="loc-logo" src="/images/Fill 219.png"/>   
                    <p className="card-country">{props.item.country}</p>
                    <p className="card-gmaps">View on google maps</p>
                </div>
                <div className="card-desc">
                    <h1>{props.item.title}</h1>
                    <p className="card-date">{props.item.date}</p>
                    <p className="card-exp">{props.item.description}</p>
                </div>
            </div>
        </section>
        
    )
}