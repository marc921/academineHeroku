import React from "react";

import { WebNav } from '../home';
import { Link } from '../../../nav';

var Highlight = require('react-syntax-highlight');

export default class JS extends React.Component {
  render() {
    return (
      <div>
        <WebNav />
        <JSNav />
        <div className='two-columns-page'>
          <div className='half-page half'>
            Javascript (which is not related to Java) can be used alone or with frameworks.<br/>
            <br/>
            
            <h1>Frameworks</h1>
            <p>Frameworks are like add-ons for Javascript. They make it easy to code large projects using Javascript. Thos most populars are:</p>
            <ul>
              <li><b>React</b>: facilitates website structuring and code reusability using a component-based system like in Object-Oriented Programming.</li>
              <li><b>Angular</b>: uses <a href="http://www.typescriptlang.org/">TypeScript</a>, gets written directly into HTML tags.</li>
              <li><b>Node</b>: allows using Javascript as back-end.</li>
              <li><b>jQuery</b>: library that facilitates lots of frequent code patterns to reduce code size.</li>
            </ul>
            <p>The <b>JSON</b> (JavaScript Object Notation) format represents objects as text. It is easy to read and write and is often used to transfer data between different parts of a website.</p>
            <p>Those transfers are often done using <b>AJAX</b> (Asynchronous Javascript And XML) calls, which allow to send or receive data asynchronously from the back-end server.</p>
            
            <br/>

            <h2>External tutorials</h2>
            <ul>
              <li><a href='https://openclassrooms.com/courses/learn-the-basics-of-javascript'>OpenClassrooms - Javascript Basics</a></li>
              <li><a href='https://www.w3schools.com/js/default.asp'>W3Schools - Javascript</a></li>
              <li><a href="https://www.tutorialspoint.com/javascript/index.htm">Tutorials Point: Javascript</a></li>
              <li><a href="https://www.learn-js.org/">Learn Javascript</a></li>
            </ul>
          </div>

          <div className='half-page half border-left'>
            <h2>Example</h2>
            <label>This script describes how the web page should react when the user clicks a button.</label>
            <label>In a .html file:</label>
            <Highlight lang={"html"}
              value={
                "<button onclick=\"welcome()\" >Click me !</button>\n"+"\n"+"<script type=\"text/javascript\">\n"+"  function welcome(){\n"+"    alert(\"Welcome on my website !\");\n"+" }\n"+"</script>\n"+"\n"+"<script src=\"./js/monScript.js\" />"
              }
            />
          </div>

        </div>
      </div>
    );
  }
}

export const JSNav = () => (
  <nav className='nav3'>
    <Link href='/web/js/react' text='React' />
    <Link href='/web/js/angular' text='Angular' />
    <Link href='/web/js/node' text='Node' />
    <Link href='/web/js/jquery' text='JQuery' />
  </nav>
);