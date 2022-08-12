import React, {useState, useRef} from "react";
import "../css/header.css"

export default function Header(props){
    const [showAdd, setShowAdd] = useState(true);
    const toDoTextRef = useRef(null);
  

    const openCloseTab = () => {setShowAdd(!showAdd);}

    const saveButton = (event) => {
        event.preventDefault();
        setShowAdd(true);
        props.setToDoFromHeader(toDoTextRef.current.value)
        event.target.reset();    
    }

    return (
    <div className="header">
        <h1 className="header__title">ToDo</h1>
        {showAdd ? <button className="header__button" onClick={openCloseTab}>Add</button> : 
        <div  className="newToDoTab">
            <form onSubmit={saveButton}>
                <div className="newToDoTab__buttonHolder">
                    <button>Save</button>
                    <button onClick={openCloseTab}>Exit</button>
                </div>
                <div className="newToDoTab__textareaHolder">
                    <textarea ref={toDoTextRef} placeholder="Write toDo"/>
                </div>  
            </form>
                     
        </div>}
    </div>)
}