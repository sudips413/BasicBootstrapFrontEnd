import React from 'react'
import { useState,useEffect } from 'react'

export default function Practice() {
    const [count,setcount]=useState(5); 
    const [secondCount,setSecondCount]=useState(1);
    // const increase = () => {
    //     setcount(count+1);   
    
    // }
    // const decrease = () => {
    //     setcount(count-1);   
    
    // }
    useEffect( () =>{
        setcount(count+1);
    },[secondCount])
  return (
    <div>
        <h1>{count}-{secondCount}</h1>
        <button onClick={ () => setSecondCount(secondCount+1)}>Increase Second</button>
        {/* <button onClick={increase}>Increase</button>
        <button onClick={decrease}>Decrement</button> */}
    </div>
  )
}
