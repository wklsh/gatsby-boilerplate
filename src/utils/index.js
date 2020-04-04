const remark = require("remark");
const remarkHTML = require("remark-html");

/**
 * convert markdown-styled line breaks into its HTML equivalent version
 * @param {string} str    string to convert
 */
export function formatLineBreak(str) {
	return str.split(/\r?\n/);
}

/**
 * convert markdown string into HTML equivalent
 * @param {string} markdownStr   string to convert
 */
export function htmlifyMarkdown(markdownStr) {
	return remark()
		.use(remarkHTML)
		.processSync(markdownStr)
		.toString();
}
