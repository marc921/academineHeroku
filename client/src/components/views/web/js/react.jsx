import React from "react";

import { WebNav } from '../home';
import { JSNav } from './home';

var Highlight = require('react-syntax-highlight');

export default class ReactPage extends React.Component {
  render() {
    return (
      <div>
        <WebNav />
        <JSNav />
        <div className='two-columns-page'>
          <div className='half-page small-half'>
            <p>Le front-end de ce site est écrit en React.</p>
            <h1>Tutoriels extérieurs</h1>
            <ul>
              <li><a href="https://openclassrooms.com/courses/realisez-une-application-web-avec-react-js">OpenClassrooms: React JS</a></li>
              <li><a href="https://reactjs.org/">React JS: Site Officiel</a></li>
              <li><a href="https://www.tutorialspoint.com/reactjs/index.htm">Tutorials Point: React JS</a></li>
            </ul>
          </div>
          <div className='half-page big-half border-left'>
            <h2>Exemple</h2>
            <label>Dans un fichier .jsx:</label>
            <Highlight lang={"jsx"}
              value={
                "import React from \"react\";\n"+"\n"+"import { WebNav } from '../home';\n"+"import { JSNav } from './home';\n"+"\n"+"export default class ReactPage extends React.Component {\n"+"  render() {\n"+"    return (\n"+"      <div>\n"+"        <WebNav />\n"+"        <JSNav />\n"+"        <div className='page'>\n"+"          <p>Ce site est écrit en React.</p>\n"+"          <h1>Tutoriels extérieurs</h1>\n"+"          <ul>\n"+"            <li><a href=\"https://openclassrooms.com/courses/realisez-une-application-web-avec-react-js\">OpenClassrooms: React JS</a></li>\n"+"            <li><a href=\"https://reactjs.org/\">React JS: Site Officiel</a></li>\n"+"            <li><a href=\"https://www.tutorialspoint.com/reactjs/index.htm\">Tutorials Point: React JS</a></li>\n"+"          </ul>\n"+"        </div>\n"+"      </div>\n"+"    );\n"+"  }\n"+"}"
              }
                />
          </div>
        </div>
      </div>
    );
  }
}

