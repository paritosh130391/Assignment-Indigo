import React, {useState, useEffect} from 'react'
import axios from 'axios'
import Post from './Post'

function UserInfo() {
    const [users, setUsers] = useState([])
    
    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(res => {
            setUsers(res.data)
        })
        .catch(err => {
            console.log(err)
        })
    }, [])
    
    const handleChange = e => {
        const searchKey = e.currentTarget.value;
        axios.get("https://jsonplaceholder.typicode.com/users")
        .then(response => {
            setUsers(response.data.filter(user => user.name.toLowerCase().indexOf(searchKey.toLowerCase()) > -1))
        })
        .catch(err => {
            console.log(err)
        }) 
    }
    
    return (
        <div className="container">
            <form className="search-form">
                <input type="text" onChange={handleChange} placeholder="Search Name" />
            </form>
        <ul>
        {
            users.length ? 
            users.map(user => (
                <li key={user.id}>
                    <div><strong>Name:</strong> {user.name}</div>
                    <div><strong>Phone:</strong> {user.phone}</div>
                    <div><strong>Email:</strong> {user.email}</div>
                    <div><strong>Address:</strong> {user.address.suite}, {user.address.street}, {user.address.city}</div>
                    <Post post={user} />
                </li>
                )) :
                <li>
                    <div>No Results Found</div>
                </li>
        }
            </ul>
            </div>
            )
        }
        
        export default UserInfo
        