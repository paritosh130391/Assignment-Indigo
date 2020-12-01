import React, {useState, useEffect} from 'react'
import axios from 'axios'
import cancel from '../images/cancel.png';

function Post(props) {
    const [post, setPost] = useState([])
    const [id, setId] = useState(0)
    
    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then(res => {
            setPost(res.data)
            console.log(post)
        })
        .catch(err => {
            console.log(err)
        })
    }, [id])
    return (
        <div>
            {
                id == props.post.id ? 
                <div className="post-box">
                <span className="close" onClick={() => setId(0)}><img src={cancel} /></span>
                <div className="post-body">{post.body}</div>
                </div> : 
                <div></div>
            }
            <div><button value={props.post.id} onClick={e => setId(e.target.value)}>View Post</button></div>
        </div>
        )
    }
    
    export default Post
    