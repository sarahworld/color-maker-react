import React from "react";

const Box = ({id,width=10,height=10,backgroundColor="green"}) =>{
    console.log("here")
    return (
        <div style={{width:`${width}em`, height:`${height}em`, backgroundColor:`${backgroundColor}em`}}></div>
        
    )
}

export default Box;