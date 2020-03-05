import React, { Component } from "react";

class Auth extends Component {
  constructor(props) {
    super(props);
    this.state = {
      emailType: "",
      passwordType: ""
    };
  }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();

    if (
      this.state.emailType == this.props.emailAd &&
      this.state.passwordType == this.props.passwordAd
    ) {
      alert("You are welcome !");
    } else {
      alert("Error !");
    }
  };
  render() {
    return (
      <div className="main-auth">
        <div className="contain-auth">
          <p className="header-bar-text-auth">Authentification</p>
          <form className="auth-form" onSubmit={this.onSubmit}>
            <div>
              <label>Email :</label>
              <input name="emailType" type="text" onChange={this.onChange} />
            </div>
            <div>
              <label>Password :</label>
              <input
                name="passwordType"
                type="password"
                onChange={this.onChange}
              />
            </div>
            <button type="submit"> Submit </button>
          </form>
        </div>
      </div>
    );
  }
}

export default Auth;
