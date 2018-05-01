import React from "react";

import { WebNav } from './home';

var Highlight = require('react-syntax-highlight');

export default class HTML extends React.Component {
  render() {
    return (
      <div>
        <WebNav />
        <div className='two-columns-page'>
          <div className='half-page small-half'>
            <h1>External tutorials</h1>
            <ul>
              <li><a href="https://openclassrooms.com/courses/build-your-website-with-html5-and-css3">OpenClassrooms: HTML5 and CSS3</a></li>
              <li><a href="https://www.w3schools.com/html/default.asp">W3Schools: HTML5</a></li>
              <li><a href="https://www.tutorialspoint.com/html/index.htm">Tutorials Point: HTML</a></li>
              <li><a href="https://www.learn-html.org/">Learn HTML</a></li>
            </ul>
          </div>
          <div className='half-page big-half border-left'>
            <h2>Example</h2>
            <label>This code is an HTML page skeleton. Use it to get started in creating your own website!</label>
            <Highlight lang={"html"}
              value={
                "<!DOCTYPE HTML>\n"+"\n"+"<html lang=\"en\">  <!-- Change language here -->\n"+"<head>\n"+"  <meta charset=\"utf-8\">  <!-- Character encoding (enables special characters display) -->\n"+"\n"+"  <title>My Incredible Website</title> <!-- Page title in browser tab -->\n"+"  <meta name=\"description\" content=\"My Incredible Website\"> <!-- Used in Search Engine Optimization : helps to show your website if someone types this in their browser search bar -->\n"+"  <meta name=\"author\" content=\"Myself\">\n"+"  <!-- Add a link to a CSS stylesheet here -->\n"+"</head>\n"+"\n"+"<body>  <!-- Page body -->\n"+"  <h1>Title</h1>\n"+"  <h2>Subtitle</h2>\n"+"  <p>\n"+"   Paragraph\n"+"  </p>\n"+"  <a href=\"http://academine.org\">Link to AcadéMine</a>\n"+"  <img src=\"https://www.w3schools.com/howto/img_fjords.jpg\" alt=\"Text to display if image can't be displayed\" />\n"+"</body>\n"+"</html>\n"+"\n"+"<script type=\"text/javascript\">\n"+"  // Add Javascrip code here\n"+"</script>"
              }
                />
          </div>
        </div>
      </div>
    );
  }
}