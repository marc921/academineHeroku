import React from "react";

var Highlight = require('react-syntax-highlight');

export default class Python extends React.Component {
  render() {
    return (
      <div>
        <div className='two-columns-page'>

        <div className='half-page half'>
          <h2>Liens extérieurs</h2>
          <ul>
            <li><a href="https://docs.python.org/3/tutorial/">Python: Documentation officielle - Tutoriel</a></li>
            <li><a href="https://openclassrooms.com/courses/apprenez-a-programmer-en-python">OpenClassrooms: Python</a></li>
            <li><a href="https://www.tutorialspoint.com/python/index.htm">Tutorials Point: Python</a></li>
            <li><a href="http://thepythonguru.com/">The Python Guru</a></li>
          </ul>
          <h2>Data Science & Machine Learning</h2>
          <ul>
            <li><a href="https://openclassrooms.com/courses/decouvrez-les-librairies-python-pour-la-data-science">OpenClassrooms: Python & Data Science</a></li>
            <li><a href="https://www.youtube.com/watch?v=cKxRvEZd3Mw&list=PLOU2XLYxmsIIuiBfYad6rFYQU_jL2ryal">YouTube: Machine Learning Recipes by Google Developers</a></li>
            <li><a href="https://machinelearningmastery.com/machine-learning-in-python-step-by-step/">Machine Learning in Python step-by-step</a></li>
            <li><a href="http://scikit-learn.org/stable/">Scikit Learn</a><br/>
              Scikit Learn est une librairie de Machine Learning facile à utiliser. Leur site contient une documentation complète avec des tutoriels pour bien se lancer.</li>
          </ul>
        </div>

        <div className='half-page half border-left'>
        <p>
          Python est un langage interprété, très facile pour écrire de courts scripts, tels que:
          <Highlight lang={"python"}
            value={
              "print(\"Hello World!\")"
            }
          />
          Sa simplicité lui a permis de rassembler une grande communauté et de devenir un langage de choix pour la Data Science et le Machine Learning, grâce à la création de nombreuses librairies libres d'utilisation.
        </p>
        <h3>Sur Linux:</h3>
        <label>Installer Python</label>
        <Highlight lang={"bash"}
          value={
            "sudo apt-get install python"
          }
        />
        <label>Installer pip, l'installeur de paquets (modules, librairies) Python</label>
        <Highlight lang={"bash"}
          value={
            "sudo apt-get install pip"
          }
        />
        <label>Installer scikit-learn pour le Machine Learning</label>
        <Highlight lang={"bash"}
          value={
            "pip install sklearn"
          }
        />

        </div>

      </div>

      </div>
    );
  }
}
