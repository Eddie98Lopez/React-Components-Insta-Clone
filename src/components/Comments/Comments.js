import React from 'react';
import Comment from './Comment';
import './Comments.css';
import AddComment from './AddComment'

const Comments = props => {
  // 🔥 Make sure the parent of Comments is passing the right props!
  const { comments, submit, postId, allPosts } = props;

  return (
    <div>
      {/* map through the comments prop and render a Comment for every piece of data */}
      {comments.map( comment => <Comment comment={comment} key={comment.id}/>)}
      {/*Add the comment card here*/}
      <AddComment postId={postId} submit={submit} allPosts={allPosts}/> 
      
    </div>
  );
};

export default Comments;
