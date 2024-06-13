/* eslint-disable react/prop-types */
import { useState } from "react"

function App() {
 const [bill,setBill]=useState(0)
  const[percentage1,setPercentage1]=useState(0)
  const[percentage2,setPercentage2]=useState(0)
  console.log(percentage1,percentage2)
 const tips=bill*((percentage1)+(percentage2))/200;
 console.log(tips)

  return (
    
    <div>
      <BillInput bill={bill} setBill={setBill} />
      <SelectPercentage perecantage={percentage1} setPercentage={setPercentage1}>How was the service?</SelectPercentage>
      <SelectPercentage perecantage={percentage2} setPercentage={setPercentage2}>How was the service according to the friend</SelectPercentage>
      <Output bill={bill} tips={tips}/>
      <Reset setBill={setBill}setPercentage1={setPercentage1}setPercentage2={setPercentage2}/>
    </div>
  )
}

function BillInput({bill,setBill}){
  return(
    <div>
      <label>How much was bill?</label>
      <input type="text" placeholder="Bill Value"value={bill}onChange={(e)=>{setBill(Number(e.target.value))}}/>
    </div>
  )
}

function SelectPercentage({perecantage,setPercentage,children}){
  return(
    <div>
      <span>{children}</span>
      <select value={perecantage}onChange={(e)=>setPercentage(Number(e.target.value))}>
        <option value="0">Dissatisfied</option>
        <option value="5">Okay</option>
        <option value="10">Great</option>
        <option value="20">Amazing</option>
      </select>
    </div>
  )
}

function Output({bill,tips}){
  const total=bill+tips;
  return(
    <h3>
      You have to pay {total}(${bill}+${tips})
      </h3>
  )
}

function Reset({setBill,setPercentage1,setPercentage2}){
  function handleSubmit(){
    setBill(0)
    setPercentage1(0)
    setPercentage2(0)
  }
  return(
    <button type="reset"onClick={handleSubmit}>Reset</button>
  )
}

export default App
