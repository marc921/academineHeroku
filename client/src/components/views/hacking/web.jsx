import React from "react";

import { HackingNav } from './home.jsx';

var Highlight = require('react-syntax-highlight');

export default class HackingWeb extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      showXSS: false
    };
  }

  toggleShowXSS(){
    this.setState({showXSS: !this.state.showXSS});
  }
  render() {
    const toggleShowXSS = this.toggleShowXSS.bind(this);
    return (
      <div>
        <HackingNav />
        <div className='two-columns-page'>
          <div className='half-page half'>
            <h2>Liens utiles</h2>
            <ul>
              <li><a href='https://www.owasp.org/index.php/Cross-site_Scripting_(XSS)'>OWASP: XSS</a><br/>
                  Une attaque XSS consiste à entrer du code au lieu d'un texte dans un input.
                  <button className='margin-left' onClick={toggleShowXSS}>Voir {this.state.showXSS ? 'moins' : 'plus'}</button></li>
              <li><a href="https://www.owasp.org/index.php/SQL_Injection">OWASP: SQL Injection</a></li>
              <li><a href="https://www.youtube.com/watch?v=ciNHn38EyRc">YouTube Computerphile: Running an SQL Injection</a></li>
              <li><a href="https://tools.kali.org/web-applications/gobuster">Gobuster</a><br/>
                  Gobuster utilise une wordlist pour découvrir les dossiers et fichiers présents dans l'arborescence visible ou cachée d'un site web.</li>
            </ul>
          </div>
          <div className='half-page half border-left'>
            {this.state.showXSS &&
              <div>
                Testez sur <a href="https://www.tutorialspoint.com/online_html_editor.php">Tutorials Point Online HTML Editor</a> en remplaçant tout le code HTML par ce code vulnérable:
                
                <Highlight lang={"html"}
                  value={
                    "<!DOCTYPE html>\n"+"<html>\n"+"  <title>Simple XSS Attack Example</title>\n"+" <body>\n"+"   <label>Entrez votre nom: </label>\n"+"    <input type='text' id='name'/>\n"+"   <button onClick='submit()'>Afficher</button>\n"+"   <div id='message' ></div>\n"+"  </body>\n"+"</html>\n"+"<script>\n"+" function submit(){\n"+"   document.getElementById(\"message\").innerHTML = 'Bonjour '+document.getElementById(\"name\").value;\n"+" }\n"+"</script>"
                  }
                />
                Cliquez sur 'Preview' puis insérez le texte suivant dans l'input:

                <Highlight lang={"html"} value={'<img src="faux-lien" onerror="alert(document.cookie)" />'} />

                Les cookies d'une page web contiennent parfois des informations intéressantes telles que logins et mot de passes. Si le code Javascript envoie ces données à une page web contrôlée par l'attaquant au lieu de les afficher à l'écran, l'attaquant peut ainsi obtenir des informations sur les utilisateurs d'un site à leur insu, en particulier si son code fait partie d'un message d'un forum lu par d'autres utilisateurs que lui, par exemple.
              </div>}
          </div>
        </div>
      </div>
    );
  }
}


