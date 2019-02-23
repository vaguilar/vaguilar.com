import React from "react";

export default ({ pageContext: { contents } }) => (
  <div class="container">
    <div class="info">
      <div class="left">
        <h2 style={{ display: "inline-block" }}>
          <a href="/" class="home gray">
            vaguilar
          </a>
        </h2>
      </div>
      <div class="right">
        <a href="http://github.com/vaguilar">
          <i class="fa fa-github fa-lg" />
        </a>{" "}
        <i id="email-icon" class="fa fa-envelope fa-lg" />
        <em id="email" />
      </div>
      <hr />
    </div>
    <div class="content" dangerouslySetInnerHTML={{ __html: contents }} />
  </div>
);
