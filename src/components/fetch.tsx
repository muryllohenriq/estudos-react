import { useEffect, useState } from 'react'

const WebData = () => {
    const [character, setCharacter] = useState([])
    const [search, setSearch] = useState('')
    
    useEffect(() => {
         const fetchData = () => {
            const result = fetch('https://reqres.in/api/users?page=1')
            .then((response) => response.json())
            .then((response) => response.data)
            .then((data) => setCharacter(data))   
        }
        fetchData()
    }, [])
      
    return (
        <>
        <input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="pesquise aqui"
        ></input>
        {character.filter((item:any) => item.first_name.toLowerCase().includes(search.toLowerCase())).map((item: any) => {
            return (
                <div key={item.id}>{item.first_name}</div>
            )
        })}
        </>
    )
}

export default WebData