import React from 'react';
import Comment from './Comment.js';

const CommentList = props => {
  let lis;
  if (props.comments === undefined || props.comments === 0)
    lis = "No Comments";

  else {
    let comments = Object.values(props.comments).map( (o) => {
    return o.id;
  });
    lis = comments.map( (c) => {
      return <Comment key={c} link={c} user={props.user} />
    });
  }
  return <div> {lis} </div>;
}

export default CommentList;
