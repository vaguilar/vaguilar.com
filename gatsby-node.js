const fs = require("fs");

const POSTS_PATH = "./site/posts/";
exports.createPages = async ({ actions: { createPage } }) => {
  fs.readdirSync(POSTS_PATH).forEach((file, i) => {
    let contents = fs.readFileSync(POSTS_PATH + file + "/index.html", "utf8");
    createPage({
      path: `/posts/${i + 1}/`,
      component: require.resolve("./src/templates/layout.js"),
      context: { contents }
    });
  });

  // Create a page that lists all Pokémon.
  let contents = fs.readFileSync("./site/index.html", "utf8");
  createPage({
    path: `/`,
    component: require.resolve("./src/templates/layout.js"),
    context: { contents }
  });
};
