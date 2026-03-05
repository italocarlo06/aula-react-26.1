import { Button } from "@/components/Button";
import { Card } from "@/components/Card";
import { Profile } from "@/components/Profile";

export default function Home() {
  return (
   <div className="flex flex-col gap-1">
      <h1>Hello World</h1>
      <br />
      
      <div className="flex flex-row">
         <Button text="Botão 1" color="blue"/>
         <Button text="Botão 2" color="green"/>
         <Button text="Botão 3" color="yellow"/>
         <Button text="Botão 4" color="purple"/>
         <Button text="Botão 5" color="pink"/>
         <Button text="Botão 6" color="gray"/>
         <Button />
      </div>

      <Profile 
         imageId="MK3eW3Am"  
         name="Katherine Johnson"
         size={150}
      />

      <Profile 
         imageId="MK3eW3Am"  
         name="Katherine Johnson"
      />

      
      <Card>
         <h1 className="text-red-400">Card Teste</h1>
      </Card>

      <Card>
         <Profile 
            imageId="1bX5QH6"  
            name="Lin"
            size={300}
         />
      </Card>
   </div>
   );
}
