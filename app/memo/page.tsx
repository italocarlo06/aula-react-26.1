'use client'
import { useMemo, useState } from "react";

export default function Memo() {
   const [count, setCount] = useState<number>(0)
   const [lista, setLista] = useState<number[]>([10,20,30,40,50])

   const somaTotal = useMemo(() => {
     console.log(`Calculando soma total da lista: ${lista.join(', ')}`)
     return lista.reduce((acc, item) => acc + item, 0)
   }, [lista])

   /*const total = () => {
    console.log(`Calculando soma total da lista: ${lista.join(', ')}`)
    return lista.reduce((acc, item) => acc + item, 0)
   }

   const somaTotal = total() */
   

   return (
    <div className="flex flex-col gap-2">
        <h2>Soma: {somaTotal} </h2>
        <button className="rounded-lg bg-green-600 text-white" onClick={() => setCount(count + 1)}>
            Incrementar Count: {count}
        </button>
        <button className="rounded-lg bg-blue-600 text-white" onClick={() => setLista([...lista, 60])}>
            Adicionar 60 na lista
        </button>
    </div>
   )
}