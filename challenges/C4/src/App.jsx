// `https://api.frankfurter.app/latest?amount=100&from=EUR&to=USD`

import { useEffect, useState } from "react";

export default function App() {
  const [amount,setAmount]=useState(1)
  const [cur1,setCur1]=useState("EUR")
  const [cur2,setCur2]=useState("USD")
  const [output,setOutput]=useState("")
  const [isLoading,setIsLoading]=useState("")

  useEffect(function(){
    async function convert(){
      setIsLoading(true)
      const response=await fetch(`https://api.frankfurter.app/latest?amount=${amount}&from=${cur1}&to=${cur2}`)
      const data=await response.json()
      const rates=await data['rates']
      const tran=await rates[cur2]
      setOutput(tran)
      setIsLoading(false)
    }
    if(cur1===cur2) return setOutput(amount)
    convert()
  },[amount,cur1,cur2])

  return (
    <div>
      <input type="text" value={amount}onChange={(e)=>setAmount(Number(e.target.value))}/>
      <select value={cur1}onChange={(e)=>setCur1(e.target.value)} disabled={isLoading}>
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="CAD">CAD</option>
        <option value="INR">INR</option>
      </select>
      <select value={cur2} onChange={(e)=>setCur2(e.target.value)}>
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="CAD">CAD</option>
        <option value="INR">INR</option>
      </select>
      <p>FROM {amount} {cur1} TO {output} {cur2} </p>
    </div>
  );
}
