import React,{useState,useEffect} from "react";
function MyComponent(){
    const [count,SetCount]=useState(0);
    const [color,setColor]=useState("green");

    useEffect(()=>{
        document.title=`count:${count} ${color}`;
    },[count,color]);
    function addCount(){
        SetCount(c => c+1);
    }
    function subtractCount(){
        SetCount(c => c-1);
    }
    function changeColor(){
        setColor(c=>c==="green"?"red":"green");
    }
    return(
        <div>
            <p style={{color:color}}>Count:{count}</p>
            <button onClick={addCount}>Add</button>
            <button onClick={subtractCount}>Subtract</button>
            <button onClick={changeColor}>Change Color</button>
        </div>
    )
}
export default MyComponent;