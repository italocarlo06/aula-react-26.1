'use client'
import { useEffect, useState } from "react"

export type User = {
    login: string,
    avatar_url: string
}

export const Effect = () => {
   const [githubUser, setGithubUser] = useState<string>('italocarlo06')
   const [user, setUser] = useState<User>({} as User)

   useEffect(() => {
     fetch(`https://api.github.com/users/${githubUser}`)
     .then(response => response.json())
     .then(data => setUser(data))
   },[githubUser]) 


   return (
    <div className="flex flex-col gap-2">
        <label htmlFor="githubUser">Digite o nome de usuário do GitHub:</label>
        <input 
            id="githubUser"
            type="text" 
            value={githubUser}
            onChange={(e) => setGithubUser(e.target.value)}
            className="border rounded-lg p-2"
        />

        {user.login && (
        <>
            <h2>Usuário: {user.login} </h2>
            <img src={user.avatar_url} alt="Avatar do usuário" className="w-20 h-20 rounded-full" />
        </>)}
    </div>
   )
}


export default Effect