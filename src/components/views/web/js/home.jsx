import React from "react";

import { WebNav } from '../home';
import { Link } from '../../nav';

var Highlight = require('react-syntax-highlight');

export default class JS extends React.Component {
  render() {
    return (
      <div>
        <WebNav />
        <JSNav />
        <div className='two-columns-page'>
          <div className='half-page half'>
            Le langage Javascript (qui n'a aucun lien avec Java) peut s'utiliser seul ou avec des frameworks.<br/>
            <br/>
            
            <h1>Frameworks</h1>
            <p>Les frameworks sont des surcouches facilitant l'écriture de gros projets en Javascript. Les plus connus sont:</p>
            <ul>
              <li><b>React</b>: facilite la structuration du site et la réutilisabilité du code par un système de composants rappelant la Programmation Orientée Objet.</li>
              <li><b>Angular</b>: utilise <a href="http://www.typescriptlang.org/">TypeScript</a>, s'insère directement dans les tags HTML.</li>
              <li><b>Node</b>: permet d'utiliser Javascript côté back-end.</li>
              <li><b>jQuery</b>: librairie encapsulant beaucoup de tâches fréquente dans des fonctions pour éviter de multiplier les lignes de code.</li>
            </ul>
            <p>Le format <b>JSON</b> (JavaScript Object Notation) est un format de représentation d'un objet sous la forme d'un texte. Il est facile à lire et écrire. L'échange de données entre les différentes parties d'un site se passe souvent sous le format JSON.</p>
            <p>Cet échange de données se fait souvent par un appel <b>AJAX</b> (Asynchronous Javascript And XML), qui permet de demander ou d'envoyer des données au serveur de manière asynchrone.</p>
            
            <br/>

            <h2>Tutoriels extérieurs</h2>
            <ul>
              <li><a href='https://openclassrooms.com/courses/apprenez-a-coder-avec-javascript'>OpenClassrooms - Javascript</a></li>
              <li><a href='https://www.w3schools.com/js/default.asp'>W3Schools - Javascript</a></li>
              <li><a href="https://www.tutorialspoint.com/javascript/index.htm">Tutorials Point: Javascript</a></li>
              <li><a href="https://www.learn-js.org/">Learn Javascript</a></li>
            </ul>
          </div>

          <div className='half-page half border-left'>
            <h2>Exemple</h2>
            <label>Ce script décrit ce que la page doit faire lorsque l'utilisateur clique sur un bouton.</label>
            <label>Dans un fichier .html:</label>
            <Highlight lang={"html"}
              value={
                "<button onclick=\"welcome()\" >Cliquez !</button>\n"+"\n"+"<script type=\"text/javascript\">\n"+"  function welcome(){\n"+"    alert(\"Bienvenue sur mon site !\");\n"+" }\n"+"</script>\n"+"\n"+"<script src=\"./js/monScript.js\" />"
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