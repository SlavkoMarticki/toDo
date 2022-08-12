import React, {useState, useEffect, useRef} from "react";
import "../css/printToDos.css";


export default function PrintToDos(props){
 
    const {toDoFromHeader, setListOfToDos, pageNumber} = props
    const [toDoDisplayCounter, setToDoDisplayCounter] = useState(6);
    const [toDoData, setToDoData] = useState([])
    
    
    useEffect(() => {
        setToDoDisplayCounter(pageNumber);
    },[pageNumber])

    const editToDo = (item) => {
        const text = prompt("Write text");
        const id = item.target.value;
        const filteredArray = toDoData.filter(toDo => toDo.id != id);
        setToDoData([...filteredArray, {id: id, text: text}]);
    }
 
    const deleteToDo = (item) => {
        const id = item.target.value;
        const filteredArray = toDoData.filter(toDo => toDo.id != id);
        setToDoData([...filteredArray]);
        
    }
    
    setListOfToDos(toDoData);

        
    
    const writeData = toDoData.map((item, index) => {
    
        if(index >= toDoDisplayCounter-6 && index < toDoDisplayCounter) {
           
            return (
                <div className="toDo">
                    <div className="toDo__header">
                        <button value={item.id} onClick={editToDo}>Edit</button>
                        <button value={item.id} onClick={deleteToDo}>Delete</button>
                    </div>
                    <div className="toDo__description">
                        <p>{item.text}</p>
                    </div>  
                </div> );
            
        }       
    });
        
    useEffect(() => {  
        if(toDoFromHeader.length != 0){
            setToDoData([...toDoData, {id: toDoData.length, text: toDoFromHeader}]);      
        }
    }, [toDoFromHeader]);
    
    return (    
        <div className="toDosHolder">
            {writeData}
        </div>
    )
}