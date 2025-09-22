import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import First_PracticalHello from './First_PracticalHello'
import Jsxexample_second from './Jsxexample_second'
import Third_PracticalProps from './Third_PracticalProps'
import Fourth_practicalrender from './Fourth_practicalrender'
import UserCard_Five from './UserCard_Five'
import Six_Counter from './Six_Counter'
import Forms_Ass from './Forms_Ass'

function App() {
  const [count, setCount] = useState(0)
   let name = "Khushi"
   let age = 21
   let location = "Ahmedabad"

  return (
   
    <>
      <div>
        {/* <First_PracticalHello /> */}
        {/* <Jsxexample_second /> */}
        {/* <Third_PracticalProps myname={name}/>
        <Fourth_practicalrender />
        <UserCard_Five myname={name} myage={age} mylocation={location}/>
        <Six_Counter /> */}

        <Forms_Ass />
       </div>
    </>
  )
}

export default App
