import React from 'react'
import styled from "styled-components"
const UserCard_Five = (props) => {
    const style = {
        border: '1px solid #ccc',
        borderRadius: '12px',
        padding: '16px',
        width: '250px',
        margin: '10px auto',
        textAlign: 'center',
        boxShadow: '0px 4px 8px rgba(0,0,0,0.1)',
        backgroundColor: '#f9f9f9',
        color:'black'
    }
     const H6 = styled.h6 `
   background-Color:red;
   color:yellow;
   `
    return (
        <div style={style}>
            <H6>Five practical card</H6>
            <h3>Name : {props.myname}</h3>
            <h3>Age : {props.myage}</h3>
            <h3>Location : {props.mylocation}</h3>
        </div>
    )
}

export default UserCard_Five
