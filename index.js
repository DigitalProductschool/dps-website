window = {};
const express = require('express');
const router = express.Router();
const React = require('react');
const ReactDOMServer = require('react-dom/server');
const frontend = require('./frontend/dist/bundle-server');
const buildhash = require('./frontend/dist/buildhash');
const StaticRouter = require('react-router-dom').StaticRouter;


/* GET home page. */
router.get('/', function(req, res, next) {
  const element = React.createElement(StaticRouter, { location: req.url, context: {} }, React.createElement(frontend.App));
  const reactDOM = ReactDOMServer.renderToString(element);

  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.end(htmlTemplate(reactDOM, frontend.css));
});

function htmlTemplate(reactDom, css) {
  return `
  <!DOCTYPE html>
  <html>
        <head>
            <!-- Google Tag Manager -->
            <script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-5HGJ5CL');</script>
            <!-- End Google Tag Manager -->
            <meta charset="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1">
            <title>Digital Product School</title>
            <meta name="description" content="DPS is a 3 month training program where product managers, interaction designers, software engineers and AI-specialists build innovative digital products.">
            <meta property="og:title" content="Digital Product School - Master your project. Become experienced." />
            <meta property="og:description" content="DPS is a 3 month training program where product managers, interaction designers, software engineers and AI-specialists build innovative digital products."/>
            <meta property="og:type" content="website" />
            <meta property="og:url" content="https://digitalproductschool.io" />
            <meta property="og:site_name" content="dp.school" />
            <meta property="og:image" content="https://digitalproductschool.io/assets/dps_batch_5.png" />
            <meta property="og:image:secure_url" content="https://digitalproductschool.io/assets/dps_batch_5.png" />
            <meta property="og:image:type" content="image/jpeg" />
            <meta property="og:image:width" content="1200" />
            <meta property="og:image:height" content="630" />
            <meta property="og:image:alt" content="Digital Product School - Master your project. Become experienced." />
            <meta name="twitter:card" content="summary" />
            <meta name="twitter:site" content="@dpschool_io" />
            <meta name="twitter:title" content="Digital Product School - Master your project. Become experienced." />
            <meta name="twitter:description" content="DPS is a 3 month training program where product managers, interaction designers, software engineers and AI-specialists build innovative digital products." />
            <meta name="twitter:image" content="https://digitalproductschool.io/assets/dps-square.png" />
            <meta name="twitter:creator" content="@dpschool_io" />

            <meta name="viewport" content="width=device-width, initial-scale=1">

            <link rel=“canonical” href=“https://digitalproductschool.io/” />
            <link href="https://fonts.googleapis.com/css?family=Montserrat:400,700,800" rel="stylesheet">
            <link rel="icon" type="image/png" href="/assets/favicon.png" />
            <style> ${css} </style>
        </head>
        <body>
          <!-- Google Tag Manager (noscript) -->
          <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-5HGJ5CL"
          height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
          <!-- End Google Tag Manager (noscript) -->
          <div id="app"> ${reactDom} </div>
          <script type="text/javascript" src="dist/bundle.${buildhash}.js"></script>
        </body>
    </html>
  `;
}

module.exports = router;
