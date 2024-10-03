import React from 'react'
import { useState } from 'react'
function Test() {
  const [det,setdet]={
    name:"Shivam",
    place:"Patna",
    work:"Student"
  }
    return (
    <div>

    <h1>Hello Everyone </h1> 
    <h2>This is{det.name} from{det.place} we are here to{det.work}</h2> 
    <button>Click me </button>



    </div>
  )
}

export default Test