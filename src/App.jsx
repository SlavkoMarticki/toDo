import React from "react";
import Layout from "./layouts/Layout";

export default function App(){
    // const [arr, setArr] = React.useState([
    //     {id: 0, text: "arr0"},
    //     {id: 1, text: "arr1"},
    //     {id: 2, text: "arr2"},
    //     {id: 3, text: "arr3"},
    //     {id: 4, text: "arr4"},
    //     {id: 5, text: "arr5"},
    //     {id: 6, text: "arr6"},
    //     {id: 7, text: "arr7"},
    //     {id: 8, text: "arr8"},
    //     {id: 9, text: "arr9"},
    //     {id: 10, text: "arr10"},
    //     {id: 11, text: "arr11"},
    //     {id: 12, text: "arr12"},
    //     {id: 13, text: "arr13"},
    // ]);
    // const [counter, setCounter] = React.useState(3);
    
    
    // const newArrCounter = arr.filter(item => (item.id > counter - 4) && item.id < counter);
    // const newArr = arr.map((item, index) => {
        
    //     if(index % 3 == 0){
            
    //         return <button value={index + 3} onClick={item => {setCounter(index + 3)}}>{(index / 3) + 1 }</button> 
    //     }
    // })
    // const writeArr = newArrCounter.map((item,index) => {
    //     if(index < counter){
    //         return <div> {item.text} </div> 
    //     }
       
    // })

    // console.log(arr);
     return (
        <div>
            <Layout />
        </div>
    //    <div>
    //         {writeArr}
    //         {newArr}
    //     </div>
    );
}