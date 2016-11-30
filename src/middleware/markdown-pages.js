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
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta http-equiv="x-ua-compatible" content="ie=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="robots" content="none">
  <title>Best Buy - API Playground</title>
  <link rel="stylesheet" href="/css/normalize.css">
  <link rel="stylesheet" href="/css/skeleton.css">
  <link rel="stylesheet" href="/css/custom.css">
</head>
<body>
  <div class="container">
    <div class="row">
      <div class="twelve column">
        ${marked(md)}
      </div>
    </div>
  </div>
</body>
</html>
`;
}
