import React from "react";

var Highlight = require('react-syntax-highlight');

export default class JavaHome extends React.Component {
  
  render() {
    return (
      <div>
        <div className='two-columns-page'>

          <div className='half-page half'>
            <h2>External tutorials</h2>
            <ul>
              <li><a href="https://www.tutorialspoint.com/java/index.htm">Tutorials Point: Java</a></li>
              <li><a href="https://www.javatpoint.com/java-tutorial">Java T Point: Java</a></li>
              <li><a href="https://www.learnjavaonline.org/">Learn Java Online</a></li>
            </ul>

            <h2>
              Skeleton of a graphical project in Java: (to help you get started)
            </h2>
            <ul>
              <li><a href="/assets/java/Engine.java">Engine.java</a>: the game engine, project's core.</li>
              <li><a href="/assets/java/GUI.java">GUI.java</a>: manages game window and inputs (keyboard, mouse).</li>
              <li><a href="/assets/java/Panel.java">Panel.java</a>: manages display</li>
              <li><a href="/assets/java/Fighter.java">Fighter.java</a></li>
              <li><a href="/assets/java/fighter.png">fighter.png</a></li>
            </ul>
            <p>
              Create a new project on Eclipse, add the .java files in /src/ and the .png file in the project's root and you're good to go!
            </p>
          </div>

          <div className='half-page half border-left'>
            <h2>Hello World in a minute on Linux:</h2>
            <ol>
              <li>Install Java Runtime Environment: <code>sudo apt-get install openjdk-8-jre</code></li>
              <li>Install Java Development Kit: <code>sudo apt-get install openjdk-8-jdk</code></li>
              <li>Copy-paste following code in a file named Hello.java:<br/>
                <Highlight lang={"java"}
                  value={
                    "public class Hello {\n public static void main(String args[]){\n   System.out.println(\"Hello World!\");\n }\n}"
                  }
                />
              </li>
              <li>Compile using: <code>javac Hello.java</code></li>
              <li>Launch compiled program using: <code>java Hello</code></li>
            </ol>
          </div>

        </div>
      </div>
    );
  }
}

