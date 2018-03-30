import React from "react";

import { WebNav } from '../home';
import { JSNav } from './home';

export default class Angular extends React.Component {
  render() {
    return (
      <div>
        <WebNav />
        <JSNav />
        <div className='two-columns-page'>
          <div className='half-page small-half'>
            <h1>Tutoriels extérieurs</h1>
            <ul>
              <li><a href="https://openclassrooms.com/courses/developpez-avec-angular">OpenClassrooms: Angular</a></li>
              <li><a href="https://angular.io/tutorial">Angular: Tutorial</a></li>
              <li><a href="https://www.tutorialspoint.com/angularjs/index.htm">Tutorials Point: Angular</a></li>
              <li><a href="https://www.w3schools.com/angular/default.asp">W3Schools: Angular</a></li>

            </ul>
          </div>
          <div className='half-page big-half border-left'>
            <p>
              Angular est développé par Google.<br/>
              Angular est plus adapté si:
              <ul>
                <li>Votre projet est grand.</li>
                <li>Vous préférez <a href="http://www.typescriptlang.org/">TypeScript</a> au Javascript classique</li>
              </ul>
            </p>
          </div>
        </div>
      </div>
    );
  }
}

