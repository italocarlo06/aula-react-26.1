
type ItemProps = {
    name: string
    isPacked: boolean
}

const items: ItemProps[] = [
    { name: "Orange", isPacked: true },
    { name: "Laptop", isPacked: true },
    { name: "Toothbrush", isPacked: false },
    { name: "Towel", isPacked: true },
    { name: "Socks", isPacked: false },
]
const Item =({name, isPacked}: ItemProps) => {
    return (
        <li>
           {isPacked ? "✅" : "❌"} {name} 
        </li>
    )

}
export default function Packed() {
    /*
    <Item name="Orange" isPacked={true}/>
              <Item name="Laptop" isPacked={true}/>
              <Item name="Toothbrush" isPacked={false}/>
    */
    return (
        <div>
           <h3>Packed Items</h3> 
           <ul>
              {items.map((item, index) => {
                return <Item 
                            key={item.name} 
                            name={item.name} 
                            isPacked={item.isPacked}
                        />
              } )}
           </ul>
        </div>
    )
}