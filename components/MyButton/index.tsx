'use client'

type MyButtonProps = {
  handleClick: () => void  
}
export const MyButton =({ handleClick }: MyButtonProps) => {
    
    return (
      <button className="bg-blue-500 text-white rounded-lg p-4 my-4" onClick={handleClick}> Clique aqui </button>
    )
}