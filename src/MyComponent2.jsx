import React,{useState,useEffect} from "react";
function MyComponent2(){
    const [height,setHeight]=useState(window.innerWidth);
    const [width,setWidth]=useState(window.innerHeight);

    useEffect(()=>{
        window.addEventListener("resize",handleResize);
        console.log("EVENT LISTENER ADDED");

        return()=>{
            window.removeEventListener("resize",handleResize);
            console.log("EVENT LISTENER REMOVED");
        }
    },[]);

    useEffect(()=>{
        document.title=`Size:${width} x ${height}`;
    },[width,height]);
    
    function handleResize(){
        setWidth(window.innerWidth);
        setHeight(window.innerHeight)
    }
    return(
        <>
        <p>Window Width:{width}</p>
        <p>Window Height:{height}</p>
        </>
    )
}
export default MyComponent2;