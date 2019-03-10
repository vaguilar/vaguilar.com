import React, { Component } from "react";

export default class Layout extends Component {
  state = {
    email: ""
  };

  constructor() {
    super();
    this.emailClick = this.emailClick.bind(this);
  }

  emailClick() {
    // eslint-disable-next-line
    const email = ("in235" + "711" + " " + "tznvy" + " p" + "bz").replace(
      /[a-zA-Z]/g,
      function(c) {
        return String.fromCharCode(
          (c <= "Z" ? 90 : 122) >= (c = c.charCodeAt(0) + 13) ? c : c - 26
        );
      }
    );

    this.setState({ email: this.state.email ? "" : email });
  }

  render() {
    return (
      <div className="container">
        <div className="info">
          <div className="left">
            <h2 style={{ display: "inline-block" }}>
              <a href="/" className="home gray">
                vaguilar
              </a>
            </h2>
          </div>
          <div className="right">
            <a
              href="http://github.com/vaguilar"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-github fa-lg" />
            </a>
            <a
              href="https://www.linkedin.com/in/victor-aguilar-23a62847"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-linkedin-in fa-lg" />
            </a>
            <i
              id="email-icon"
              className="fa fa-envelope fa-lg"
              onClick={this.emailClick}
            />
            <i id="email">{this.state.email}</i>
          </div>
          <hr />
        </div>
        <div className="content">{this.props.children}</div>
      </div>
    );
  }
}
