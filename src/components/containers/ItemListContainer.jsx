import { useState, useEffect} from 'react'
import ItemList from './ItemList';
import ItemCount from './ItemCount';

export default function ItemListContainer({ greeting }) {

    const handleClick=(total) => 
        alert(`la cantidad agregada es ${total}`)

    const[users, setUsers] = useState([])
    console.log(users)
    
    const getUsers = async() =>{
        const data = await fetch('https://jsonplaceholder.typicode.com/users')
        const dataUsers = await data.json()
        setUsers(dataUsers)

    }

    useEffect(() => {
      setTimeout(() => getUsers(), 3000)
        
    }, [])


    return (
        <div>
            {greeting}
            <ItemCount stock="50" initial="2" onAdd={handleClick} />
            <br /> <br /> <br />
            <ItemList users = {users}/> 
        </div>
    )



};

