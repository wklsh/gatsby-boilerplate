// Convert Markdown to HTML – Need to `npm i remark remark-html`
const remark = require('remark');
const remarkHTML = require('remark-html');

exports.onCreateNode = ({ node }) => {
  // Conditionals, etc. can be used here, but I omitted those just for example's sake.
  const markdown = node.frontmatter.MY_FIELD;
  node.frontmatter.MY_FIELD = remark()
    .use(remarkHTML)
    .processSync(markdown)
    .toString();
  return node;
};
