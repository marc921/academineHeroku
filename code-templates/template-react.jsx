import React from "react";

import { WebNav } from '../home';
import { JSNav } from './home';

export default class ReactPage extends React.Component {
  render() {
    return (
      <div>
        <WebNav />
        <JSNav />
        <div className='page'>
          <p>Ce site est écrit en React.</p>
          <h1>Tutoriels extérieurs</h1>
          <ul>
            <li><a href="https://openclassrooms.com/courses/realisez-une-application-web-avec-react-js">OpenClassrooms: React JS</a></li>
            <li><a href="https://reactjs.org/">React JS: Site Officiel</a></li>
            <li><a href="https://www.tutorialspoint.com/reactjs/index.htm">Tutorials Point: React JS</a></li>
          </ul>
        </div>
      </div>
    );
  }
}
