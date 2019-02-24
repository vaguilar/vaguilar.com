import React, { Component } from "react";

export default class Layout extends Component {
  render() {
    return (
      <div className="container">
        <div className="info">
          <div className="left">
            <h2 style={{ display: "inline-block" }}>
              <a href="/" className="home gray">
                <i>vaguilar</i>
              </a>
            </h2>
          </div>
          <div className="right">
            <a href="http://github.com/vaguilar">
              <i className="fab fa-github fa-lg" />
            </a>
            {"  "}
            <a href="https://www.linkedin.com/in/victor-aguilar-23a62847">
              <i className="fab fa-linkedin-in fa-lg" />
            </a>
            {"  "}
            <i id="email-icon" className="fa fa-envelope fa-lg" />
            <em id="email" />
          </div>
          <hr />
        </div>
        <div className="content">{this.props.children}</div>
      </div>
    );
  }
}
