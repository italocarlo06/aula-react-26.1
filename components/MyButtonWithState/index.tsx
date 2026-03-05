'use client'

import { useState } from "react"

export type MyButtonWithStateProps = {
    count: number
    setCount: (value: number) => void   
}

export const MyButtonWithState = ({ count , setCount}: MyButtonWithStateProps) => {

    const handleClick = () => {
        setCount(count + 1)
    }
    return (
        <button 
            className="bg-purple-500 text-white rounded-lg p-4 my-4" 
            onClick={handleClick}
        > 
            Você clicou {count} vezes 
        </button>
    )
}