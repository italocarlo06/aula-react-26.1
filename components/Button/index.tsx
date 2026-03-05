type ButtonProps = {
    text?: string
    color?: "red" | "blue"| "green" | "yellow" | "purple" | "pink" | "gray"
}

const colorVariants = {
    red: "bg-red-500 hover:bg-red-700",
    blue: "bg-blue-500 hover:bg-blue-700",
    green: "bg-green-500 hover:bg-green-700",
    yellow: "bg-yellow-500 hover:bg-yellow-700",
    purple: "bg-purple-500 hover:bg-purple-700",
    pink: "bg-pink-500 hover:bg-pink-700",
    gray: "bg-gray-500 hover:bg-gray-700"
}

export function Button({ text = "Clique aqui", color = "red" }:ButtonProps) {
   
   const classes = `${colorVariants[color]} text-white px-4 py-2 rounded`
   return (
    <button 
        className={classes}
    >
        {text}
    </button>
   ) 
}