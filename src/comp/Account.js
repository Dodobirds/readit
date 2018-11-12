import React from 'react';

class AccountPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {user: props.user};
  }
  render() {
    let user = this.props.user;
    let email = "does not exist";
    if (user) {
      email = user.email;
    }
    return (
      <div>
        <p>
          Hello {email}
        </p>
      </div>
    )
  }
}

export default AccountPage
