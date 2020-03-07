import React, { Component } from "react";
import AuthInformation from "./auth-information";

class Auth extends Component {
  constructor(props) {
    super(props);
    this.state = {
      emailType: "",
      passwordType: "",
      displayInfo: false,
      messageInfo: ""
    };
  }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();
    if (
      this.state.emailType === this.props.emailAd &&
      this.state.passwordType === this.props.passwordAd &&
      this.state.emailType !== undefined &&
      this.state.passwordType !== undefined
    ) {
      this.props.displayPanel();
    } else {
      if (
        this.state.emailType !== this.props.emailAd &&
        this.state.passwordType === this.props.passwordAd
      ) {
        this.setState({
          displayInfo: true,
          messageInfo: "You have the wrong email !"
        });
      } else if (
        this.state.emailType === this.props.emailAd &&
        this.state.passwordType !== this.props.passwordAd
      ) {
        this.setState({
          displayInfo: true,
          messageInfo: "You have the wrong password !"
        });
      } else if (
        this.state.emailType !== this.props.emailAd &&
        this.state.passwordType !== this.props.passwordAd
      ) {
        this.setState({
          displayInfo: true,
          messageInfo: "You have the wrong password and email !"
        });
      }
    }
  };
  onClickX = () => {
    this.setState({
      displayInfo: false,
      messageInfo: ""
    });
  };
  render() {
    return (
      <div>
        {this.state.displayInfo === true && (
          <AuthInformation
            message={this.state.messageInfo}
            onClickX={this.onClickX}
          />
        )}
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
              <button type="submit"> Login </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Auth;
