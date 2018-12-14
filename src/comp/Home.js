import React from 'react';
import PostList from './reddit/ListOfPost.js'
import PostForm from './reddit/WritePost.js'
import CommentForm from "./reddit/CommentForm.js";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      postList: props.list,
    };
  }

  componentDidUpdate(prevProps) {
    if (this.props.list !== prevProps.list) {
      this.setState({
        postList: this.props.list,
      });
    }
  }

  render() {
    return (
      <div>
        <h1> Home Page </h1>
        <PostForm user={this.props.user}/>
        <PostList user={this.props.user} posts={this.state.postList}/>
      </div>
    )
  }
}
export default Home;
