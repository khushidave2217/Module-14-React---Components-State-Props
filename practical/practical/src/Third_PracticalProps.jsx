import React from 'react'
import styled from "styled-components"

 const Third_PracticalProps = (props) => {
    const H6 = styled.h6 `
   background-Color:red;
   color:yellow;
   `
  return (
    <div>
        <H6>Third Practical Props</H6>
        <h1>Hello ---{props.myname}</h1>
    </div>
  )
}
export default Third_PracticalProps
