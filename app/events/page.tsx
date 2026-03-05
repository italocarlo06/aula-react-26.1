'use client'
import { MyButton } from "@/components/MyButton"
import { MyButtonWithState } from "@/components/MyButtonWithState"
import { useState } from "react"

export default function Events() {
  const [count, setCount] = useState<number>(0)
  
  function handleClick() {
      alert("Você clicou no botão!")  
  }  

  function handleClickNovo() {
      alert("Você clicou no botão novo!")  
  }
  
  
  return (
    <div className="flex flex-row gap-2">
      <MyButton handleClick={handleClick} />
      <MyButton handleClick={handleClickNovo} />
      <MyButtonWithState count={count} setCount={setCount}/>
      <MyButtonWithState count={count} setCount={setCount} />
    </div>
  )  
}