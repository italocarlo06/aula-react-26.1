export type CardProps = {
    children: React.ReactNode
}

export const Card = ({ children}: CardProps) => {
   return (
    <div className="p-4 rounded-lg bg-gray-200 w-3xs shadow-black/20">
        {children}
    </div>
   ) 
}