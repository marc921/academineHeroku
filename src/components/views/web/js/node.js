import React from "react";

import { WebNav } from '../home';
import { JSNav } from './home';

var Highlight = require('react-syntax-highlight');

export default class NodeJS extends React.Component {
  render() {
    return (
      <div>
        <WebNav />
        <JSNav />
        <div className='two-columns-page'>
          <div className='half-page small-half'>
            <p>Le back-end de ce site est écrit en Node JS.</p>
            <h1>Tutoriels extérieurs</h1>
            <ul>
              <li><a href="https://www.w3schools.com/nodejs/default.asp">W3Schools: Node JS</a></li>
              <li><a href="https://openclassrooms.com/courses/des-applications-ultra-rapides-avec-node-js">OpenClassrooms: Node JS</a></li>
              <li><a href="https://nodejs.org/en/">Node JS: Site Officiel</a></li>
              <li><a href="https://www.tutorialspoint.com/nodejs_online_training/index.asp">Tutorials Point: Node JS</a></li>
            </ul>
          </div>
          <div className='half-page big-half border-left'>
            <h2>Exemple</h2>
            <p>
              Pour un serveur en une minute sous Linux:
            </p>
            <ol>
              <li><code>sudo apt-get install nodejs</code></li>
              <li><code>npm install express</code></li>
              <li>Je copie-colle le code ci-dessous dans un fichier server.js</li>
              <li><code>node server.js</code></li>
              <li><code>firefox localhost:5000/api/hello</code></li>
            </ol>
            <label>Dans un fichier .js:</label>
            <Highlight lang={"js"}
              value={
                "const express = require('express');\n\nconst app = express();\nconst port = process.env.PORT || 5000;\n\napp.get('/api/hello', (req, res) => {\n  res.send({ express: 'Hello From Express' });\n});\n\napp.listen(port, () => console.log(`Listening on port ${port}`));"
              }
                />
          </div>
        </div>
      </div>
    );
  }
}

