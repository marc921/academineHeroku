import React from "react";

export default class Home extends React.Component {

  render() {
    return (
      <div className='two-columns-page'>
        <div className='half-page big-half'>
          <h1>Welcome to the AcadéMine !</h1>
          <p>
            This webiste aims at helping people learn how to code by providing a range of tutorials labelled by category.<br/>
            A lot of tutorials and forums already exist on the Web, but most newbies don't know about them and think coding is hard to learn.<br/>
            Our mission is to provide as many good tutorials we can on different fields, to help you get started in the best way possible.<br/>
            If you think you could add some content to this website, <a href="/en/contact">contact us</a> ! 
          </p>
          <br/>
          <h2>Websites to know</h2>
          <ul>
            <li><a href='https://openclassrooms.com/courses'>Courses - OpenClassrooms</a></li>
            <li><a href='https://www.tutorialspoint.com/index.htm'>Courses - Tutorials Point</a></li>
            <li><a href='https://tech.io/'>Courses - Tech.io</a></li>
            <li><a href='https://stackoverflow.com'>Forums - Stack Overflow</a></li>
          </ul>
        </div>
        <div className='half-page small-half border-left'>
          <iframe width="100%"
                  height="60%"
                  src="https://www.youtube.com/embed/F9GujgK0y2M" 
                  frameBorder="0"
                  allow="autoplay; encrypted-media"
                  allowFullScreen="allowfullscreen">
          </iframe>
          </div>
      </div>
    );
  }
}

 
