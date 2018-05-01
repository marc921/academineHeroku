import React from "react";

var Highlight = require('react-syntax-highlight');

export default class Python extends React.Component {
  render() {
    return (
      <div>
        <div className='two-columns-page'>

        <div className='half-page half'>
          <h2>External tutorials</h2>
          <ul>
            <li><a href="https://docs.python.org/3/tutorial/">Python: Official Documentation - Tutoriel</a></li>
            <li><a href="https://www.tutorialspoint.com/python/index.htm">Tutorials Point: Python</a></li>
            <li><a href="http://thepythonguru.com/">The Python Guru</a></li>
          </ul>
          <h2>Data Science & Machine Learning</h2>
          <ul>
            <li><a href="https://www.youtube.com/watch?v=cKxRvEZd3Mw&list=PLOU2XLYxmsIIuiBfYad6rFYQU_jL2ryal">YouTube: Machine Learning Recipes by Google Developers</a></li>
            <li><a href="https://machinelearningmastery.com/machine-learning-in-python-step-by-step/">Machine Learning in Python step-by-step</a></li>
            <li><a href="http://scikit-learn.org/stable/">Scikit Learn</a><br/>
              Scikit Learn is an easy-to-use Machine Learning library. Their website contains a complete documentation including tutorials to get started using it.</li>
          </ul>
        </div>

        <div className='half-page half border-left'>
        <p>
          Python is an interpreted language, useful to write short scripts such as:
          <Highlight lang={"python"}
            value={
              "print(\"Hello World!\")"
            }
          />
          Its simplicity helped it gather a vast community and become a top choice language for Data Science and Machine Learning, thanks to the creation of many free libraries in Python.
        </p>
        <h3>On Linux:</h3>
        <label>Install Python</label>
        <code>sudo apt-get install python</code>
        <label>Install pip, the Packet Installer for Python. Enables you to add modules in one line.</label>
        <code>sudo apt-get install pip</code>
        <label>Install scikit-learn for Machine Learning</label>
        <code>pip install sklearn</code>

        </div>

      </div>

      </div>
    );
  }
}
