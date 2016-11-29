'use strict';
const fs = require('fs');
const path = require('path');
const marked = require('marked');
const serveStatic = require('feathers').static;

const markdownDir = path.join(__dirname, '..', '..', 'markdown');
const markdownFiles = fs.readdirSync(markdownDir).map(f => f.split('.')[0]);
const markdownUrls = markdownFiles.map(f => `/${f}`).concat('/');

module.exports = function () {
  let app = this;

  app.use('/libs/superagent/', serveStatic(path.join(__dirname, '..', '..', 'node_modules', 'superagent')));

  app.get(markdownUrls, renderMarkdown);
};

function renderMarkdown (req, res, next) {
  // slice off the leading and trailing slash
  let mdUrl = req.path.slice(1).replace(/\/$/, '');

  // if we're looking for the root, send to index.md
  if (mdUrl === '') mdUrl = 'index';

  if (markdownFiles.indexOf(mdUrl) > -1) {
    let mdFile = path.join(markdownDir, `${mdUrl}.md`);
    fs.readFile(mdFile, {encoding: 'utf8'}, (err, md) => {
      if (err) return next();
      res.send(htmlPage(md));
    });
  } else {
    // if no page was found, let it go (eventually 404s).
    return next();
  }
}

function htmlPage (md) {
  return `
<!DOCTYPE html>
<head>
  <title>Best Buy - API Playground</title>
  <link rel="stylesheet" href="style.css">
</head>

${marked(md)}
`;
}
