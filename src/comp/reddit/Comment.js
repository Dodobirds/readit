import React from 'react';
import {database} from '../../firebase';
import CommentList from './ListOfComments.js';
import CommentForm from './CommentForm.js'
import "./css/ListOfPost.css"

class Comment extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      author: "",
      comment: "",
      message: "",
      votes: 0,
      toggleComment: false,
      iD: null
    };
  }

  componentDidMount() {
    var data = database.commentRef.child(this.props.link).once('value', (snapshot) => {
      this.setState(
        snapshot.val()
      )
    });
  }

    _onButtonClick = (event) => {
    this.setState({
      toggleComment: this.state.toggleComment ? false : true
    });
  }

  render() {
    console.log(this.state.iD);
    console.log(this.props.user);
    return (
      <div class="comment-thing">
        <p class="msg"> {this.state.message} </p>
        <p class="author"> {this.state.author} </p>

        <button onClick={this._onButtonClick}> Toggle Comments </button>
         {
           this.state.toggleComment ?
             <div>
               <CommentForm type={"comments"} parent={this.state.iD} user={this.props.user} />
               <CommentList comments={this.state.comment} user={this.props.user}/>
           </div> :
          null
        }
      </div>
    )
  }
}

export default Comment;
