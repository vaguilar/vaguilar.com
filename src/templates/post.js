import React from "react";
import { graphql } from "gatsby";
import Layout from "./layout";

export default function Template({ data }) {
  const { markdownRemark } = data;
  const { frontmatter, html } = markdownRemark;
  return (
    <Layout>
      <div className="blog-post-container">
        <div className="blog-post">
          <h2>{frontmatter.title}</h2>
          <p className="date">
            Posted on <i>{frontmatter.date}</i>
          </p>
          <div
            className="blog-post-content"
            dangerouslySetInnerHTML={{ __html: html }}
          />
        </div>
      </div>
    </Layout>
  );
}

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
      }
    }
  }
`;
