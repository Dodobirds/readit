import React from 'react';
import Post from './Post.js';
import './css/ListOfPost.css';

const PostList = props => {
  const lis = props.posts.map((p) => {
    return <Post key={p.timestamp} data={p} user={props.user} />
  });

  return <div id="postList"> {lis} </div>
}
export default PostList;
