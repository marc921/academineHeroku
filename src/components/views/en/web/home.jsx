import React from "react";

import { Link } from '../../nav';

export default class WebHome extends React.Component {
  render() {
    return (
      <div>
        <WebNav />
        <div className='page'>
          <div className='content'>
            Most websites are made using some of these five languages (though others use Python, Go or other languages for the back-end part)
            <br/>
            
            <h1 className='commented'>Front-end</h1>(Part of the code running on the user's machine)
            <ul>
              <li><b>HTML</b> (HyperText Markup Language): skeleton of the website. HTML uses tags to describe all information on the website and provide User Interface functionalities.</li>
              <li><b>CSS</b> (Cascade StyleSheet): describes website graphical information (colors, dimensions, HTML tags layout).</li>
              <li><b>Javascript</b>: makes the website dynamic, introduces variables and functions, communicates with back-end.<br/>
                With Javascript frameworks, it is nowadays possible and easy to create a website entirely (front-end & back-end) with Javascript.</li>
            </ul>

            <h1 className='commented'>Back-end</h1>(Part of the code running on a distant server)
            <ul>
              <li><b>PHP</b> (PHP HyperText Preprocessor): links front-end and database, processes data from both parts and decides what must be sent back to the front-end.</li>
              <li><b>SQL</b> (Structured Query Language): manages the database (create, read, write, update...).</li>
            </ul>

            <br/>

            <h2 className='commented'>Websites to know</h2>(in addition to those linked in home page)
            <ul>
              <li><a href='https://www.w3schools.com/'>W3Schools</a></li>
            </ul>
          </div>
        <p>
          (full-stack = front-end + back-end)
        </p>
        </div>
      </div>
    );
  }
}

export const WebNav = () => (
  <nav className='nav2'>
    <Link href='/en/web/html' text='HTML' />
    <Link href='/en/web/css' text='CSS' />
    <Link href='/en/web/js' text='Javascript' />
    <Link href='/en/web/php' text='PHP' />
    <Link href='/en/web/sql' text='SQL' />
    <Link href='/en/web/annexes' text='Annexes' />
  </nav>
);