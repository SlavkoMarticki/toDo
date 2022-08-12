import React, {useState} from "react";
import Header from "../components/Header";
import PrintToDos from "../components/DisplayToDos";
import Pagination from "../components/Pagination";



export default function Layout(){
    const [toDoFromHeader, setToDoFromHeader] = useState([]);
    const [listOfToDos, setListOfToDos] = useState([]);
    const [pageNumber, setPageNumber] = useState(6);
   
    return(
        <div>
            <Header setToDoFromHeader={setToDoFromHeader}/>
            <PrintToDos toDoFromHeader={toDoFromHeader} setListOfToDos={setListOfToDos} pageNumber={pageNumber}/>
            <Pagination listOfToDos={listOfToDos} setPageNumber={setPageNumber}/>
        </div>
    )
}