import React from 'react';

function Card(props) {
    console.log(props)
    return (
        <div className="card">
            <div >
                <img src={props.imgsrc} alt="error in loading" className="myImage" />
                <div className="cardInfo">
                    <span className="cardCategory">{props.title}</span>
                    <h3 className="cardTitle">{props.srsname}</h3>
                    <a href={props.tlink} target="_black">
                        <button className="btn">Watch Trailer</button>
                    </a>
                </div>
            </div>
        </div>

    )
}

export {Card};