import React from "react";
import "../css/pegination.css";

export default function Pegination(props){
   
    const {listOfToDos, setPageNumber} = props;
    const makePageButton = listOfToDos.map((item, index) => {
        if(index  % 6 == 0 || index === 0){
            return <button value={index+6} onClick={(item) => setPageNumber(item.target.value)}>{(index / 6) + 1 }</button>
        }
    })
        
    return(
        <div className="peginationNumbersHolder">
            {makePageButton}
        </div>
    )
}