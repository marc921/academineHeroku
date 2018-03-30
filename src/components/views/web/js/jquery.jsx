import React from "react";

import { WebNav } from '../home';
import { JSNav } from './home';

export default class JQuery extends React.Component {
  render() {
    return (
      <div>
        <WebNav />
        <JSNav />
        <div className='page'>
            <h1>Tutoriels extérieurs</h1>
            <ul>
              <li><a href="https://openclassrooms.com/courses/introduction-a-jquery-4">OpenClassrooms: jQuery</a></li>
              <li><a href="https://jquery.com/">jQuery: Site Officiel</a></li>
              <li><a href="http://try.jquery.com/">jQuery: Video Tutorials</a></li>
              <li><a href="https://www.tutorialspoint.com/jquery/index.htm">Tutorials Point: jQuery</a></li>
              <li><a href="https://www.w3schools.com/jquery/default.asp">W3Schools: jQuery</a></li>
            </ul>
        </div>
      </div>
    );
  }
}

