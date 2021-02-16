import React , {useState} from 'react'

export default function AddComment(props) {

  const {postId, submit, allPosts} = props

  const [newComment, setNewComment] = useState({
    username: '',
    text: '',
    id: ''
})
    

    let commentsArray = allPosts[allPosts.length-1].comments

    

    const [oldCommentId, setOldCommentId]=useState(commentsArray[commentsArray.length-1].id)
    
    
    
    

    const changeHandler = (e)=>{
        
        setNewComment({...newComment, [e.target.name]: e.target.value, id: oldCommentId +1})

        
    }

    

    const onSubmit = (e)=>{
        e.preventDefault()
        submit(postId,newComment)
        setOldCommentId(newComment.id)
        console.log(newComment)
        setNewComment({
            username: '',
            text: '',
            id: ''
        })
        
        
    }
    

    return (
        <div>

        <form onSubmit={onSubmit}>
        <input type="text"
        id="username"
        onChange = {changeHandler}
        placeholder='username'
        name = 'username'
        value={newComment.username}/>

        <input type="text"
        id="text"
        placeholder='add your comment here'
        onChange = {changeHandler}
        name = 'text'
        value={newComment.text}/>

        {/* <input type="text"
        id="id"
        placeholder='add a random number '
        onChange = {changeHandler}
        name = 'id'
        value={newComment.id}/> */}


        <button>send</button>
        </form>
            
        </div>
    )
}


