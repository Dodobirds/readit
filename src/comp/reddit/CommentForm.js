import React from 'react';
import {database} from '../../firebase';
import "./css/Form.css";

class CommentForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: "",
    };
  }

  onSubmit = (event) => {
    database.writeComment(this.props.type, this.props.parent, this.state.message, this.props.user.email);
    event.preventDefault();
  }

  render() {
    return (
      <form class="form-thingy" onSubmit={this.onSubmit}>
        <input
          value={this.state.message}
          onChange={event => this.setState({message: event.target.value})}
          type="text"
          placeholder="Message"/>
        <button type="Submit"> Submit </button>
      </form>
    )
  }
}

export default CommentForm;
