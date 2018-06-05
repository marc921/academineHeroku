import React from "react";

import { WebNav } from './home';

var Highlight = require('react-syntax-highlight');

export default class CSS extends React.Component {
  render() {
    return (
      <div>
        <WebNav />
        <div className='two-columns-page'>
          <div className='half-page small-half'>
            <h1>External tutorials</h1>
            <ul>
              <li><a href="https://openclassrooms.com/courses/build-your-website-with-html5-and-css3" >OpenClassrooms: HTML5 and CSS3</a></li>
              <li><a href="https://www.w3schools.com/css/default.asp">W3Schools: CSS</a></li>
              <li><a href="https://www.tutorialspoint.com/css/index.htm">Tutorials Point: CSS</a></li>
              <li><a href="https://css-tricks.com/">CSS Tricks: code examples</a></li>
            </ul>
          </div>
          <div className='half-page big-half border-left'>
            <h2>Example</h2>
            <label>This CSS code changes the appearance of various components (tags) of an HTML page.</label>
            <label>Write in a file named style.css :</label>
            <Highlight lang={"css"}
              value={
                "h1{\n"+" color:red;\n"+"}\n"+"h2{\n"+" font-style: italic;\n"+"}\n"+"a:hover{\n"+" font-weight: bold;\n"+"}\n"+"img{\n"+"  position: absolute;\n"+"  top: 250px;\n"+"  left: 30%;\n"+"}\n"+"p{\n"+"  text-align: center;\n"+"}"
              }
            />
            <label>Import in an HTML file</label>
            <Highlight lang={"html"}
              value={
                "<link rel=\"stylesheet\" type=\"text/css\" href=\"style.css\">"
              }
            />
          </div>
        </div>
      </div>
    );
  }
}