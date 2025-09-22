import React, { useState } from 'react'
import styled from "styled-components"

 const Six_Counter = () => {
    const[counter,setCounter]=useState(0)
     const H6 = styled.h6 `
   background-Color:red;
   color:yellow;
   `
  return (
    <div>
        <H6>Six practical Count</H6>
        <h2>Count is {counter}</h2>
        <button onClick={()=>setCounter(counter+1)}>Increment Count</button>
    </div>
  )
}
export default Six_Counter
