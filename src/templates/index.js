import React from "react";
import { graphql } from "gatsby";
import Layout from "./layout";

export default function Template({ pageContext }) {
  const posts = pageContext.posts.map(({ node }, i) => {
    const { frontmatter } = node;
    const { title, path, date, icon = "fa-file" } = frontmatter;
    return (
      <p key={i}>
        <i className={`fa ${icon} fa-lg`} /> <a href={path}>{title}</a>
        {` (${date})`}
      </p>
    );
  });
  return (
    <Layout>
      <p>Random hacks and projects</p>
      <h3>Posts</h3>
      {posts}
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
        icon
      }
    }
  }
`;
