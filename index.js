window = {};
const express = require('express');
const router = express.Router();
const React = require('react');
const ReactDOMServer = require('react-dom/server');
const frontend = require('./frontend/dist/bundle-server');
const buildhash = require('./frontend/dist/buildhash');


/* GET home page. */
router.get('/', function(req, res, next) {
  const element = React.createElement(frontend.App, { compiler: 'TypeScript', framework: 'React' }, null);
  const reactDOM = ReactDOMServer.renderToString(element);
  
  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.end(htmlTemplate( reactDOM ));
});

function htmlTemplate(reactDom) {
  return `
  <!DOCTYPE html>
  <html>
        <head>
            <meta charset="UTF-8" />
            <title>Hello React!</title>
        </head>
        <body>
        <div id="app"> ${reactDom} </div>
        <script type="text/javascript" src="dist/bundle.${buildhash}.js"></script></body>
    </html>
  `;
}

module.exports = router;
