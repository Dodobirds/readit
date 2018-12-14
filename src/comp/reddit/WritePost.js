import React from 'react';
import {database} from '../../firebase';

class PostForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      title: "",
    }
  }

  onSubmit = (event) => {
    database.writePost(this.state.title, this.props.user.email)
    event.preventDefault();
  }

  render(){
    return (
      <form onSubmit={this.onSubmit}>
        <input
          value={this.state.title}
          onChange={event => this.setState({title: event.target.value})}
          type="text"
          placeholder="Title"/>
        <button type="submit"> Submit </button>
      </form>
    )
  }
}

export default PostForm;
