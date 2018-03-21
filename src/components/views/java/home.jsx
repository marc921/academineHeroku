import React from "react";

var Highlight = require('react-syntax-highlight');

export default class JavaHome extends React.Component {
  
  render() {
    return (
      <div>
        <div className='two-columns-page'>

          <div className='half-page half'>
            <h2>Tutoriels extérieurs</h2>
            <ul>
              <li><a href="https://openclassrooms.com/courses/apprenez-a-programmer-en-java">OpenClassrooms: Java</a></li>
              <li><a href="https://www.tutorialspoint.com/java/index.htm">Tutorials Point: Java</a></li>
              <li><a href="https://www.javatpoint.com/java-tutorial">Java T Point: Java</a></li>
            </ul>

            <h2>
              Squelette de projet graphique en Java:
            </h2>
            <ul>
              <li><a href="/assets/java/Engine.java">Engine.java</a>: le moteur de jeu, coeur du projet.</li>
              <li><a href="/assets/java/GUI.java">GUI.java</a>: gestion de la fenêtre de jeu et des inputs (clavier, souris).</li>
              <li><a href="/assets/java/Panel.java">Panel.java</a>: gestion de l'affichage</li>
              <li><a href="/assets/java/Fighter.java">Fighter.java</a></li>
              <li><a href="/assets/java/fighter.png">fighter.png</a></li>
            </ul>
            <p>
              Créez un nouveau projet avec Eclipse, ajoutez les fichiers .java dans src/ et fighter.png à la racine du projet, et c'est bon !
            </p>
          </div>

          <div className='half-page half border-left'>
            <h2>Hello World en une minute sur Linux:</h2>
            <ol>
              <li>Installer Java Runtime Environment: <code>sudo apt-get install openjdk-8-jre</code></li>
              <li>Installer Java Development Kit: <code>sudo apt-get install openjdk-8-jdk</code></li>
              <li>Copier-coller le code suivant dans un fichier Hello.java:<br/>
                <Highlight lang={"java"}
                  value={
                    "public class Hello {\n public static void main(String args[]){\n   System.out.println(\"Hello World!\");\n }\n}"
                  }
                />
              </li>
              <li>Compiler avec: <code>javac Hello.java</code></li>
              <li>Lancer le programme compilé avec: <code>java Hello</code></li>
            </ol>
          </div>

        </div>
      </div>
    );
  }
}

