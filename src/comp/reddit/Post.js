import React, {Component} from 'react';
import {database} from '../../firebase';
import CommentList from "./ListOfComments.js";
import CommentForm from "./CommentForm.js"
import "./css/ListOfPost.css"

class Post extends Component {
  constructor(props){
    super(props);
    this.state = {
      comments: props.data.comment,
      toggleComment: false,
    }
  }

  onUpvote = (event) => {
    database.upVotePost(this.props.data.iD);
  }

  onDownvote = (event) => {
    database.downVotePost(this.props.data.iD);
  }

  _onButtonClick = (event) => {
    this.setState({
      toggleComment: this.state.toggleComment ? false : true
    });
  }

  render() {
    return (
      <div class="postClass">
        <p class="title"> {this.props.data.title} </p>
        <p class="author"> {this.props.data.author} </p>
        <button onClick={this.onUpvote}> Upvote </button>
        <button onClick={this.onDownvote}> Downvote </button>
        <button onClick={this._onButtonClick}>Toggle Comments</button>
        {
          this.state.toggleComment ? <div>
                                       <CommentForm type={"posts"} parent={this.props.data.iD} user={this.props.user} />
                                       <CommentList comments={this.props.data.comment} user={this.props.user} />
          </div> :
          null
        }
      </div>
    );
  }
}

export default Post;
