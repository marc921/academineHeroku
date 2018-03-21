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
            <h1>Tutoriels extérieurs</h1>
            <ul>
              <li><a href="https://openclassrooms.com/courses/apprenez-a-creer-votre-site-web-avec-html5-et-css3">OpenClassrooms: HTML5 et CSS3</a></li>
              <li><a href="https://www.w3schools.com/html/default.asp">W3Schools: HTML5</a></li>
              <li><a href="https://www.tutorialspoint.com/html/index.htm">Tutorials Point: HTML</a></li>
            </ul>
          </div>
          <div className='half-page big-half border-left'>
            <h2>Exemple</h2>
            <Highlight lang={"html"}
              value={
                "<!DOCTYPE HTML>\n"+"\n"+"<html lang=\"en\">  <!-- Changer la langue ici -->\n"+"<head>\n"+"  <meta charset=\"utf-8\">  <!-- Encodage des caractères (accents, caractères spéciaux...) -->\n"+"\n"+"  <title>Mon Merveilleux Site Web</title> <!-- Titre de l'onglet -->\n"+"  <meta name=\"description\" content=\"Mon Merveilleux Site Web\"> <!-- Utile pour le référencement de votre site dans les moteurs de recherche -->\n"+"  <meta name=\"author\" content=\"Mon Impériale Personne\">\n"+"  <!-- Insérez un lien vers une feuille CSS ici -->\n"+"</head>\n"+"\n"+"<body>  <!-- Corps de la page -->\n"+"  <h1>Titre</h1>\n"+"  <h2>Sous-titre</h2>\n"+"  <p>\n"+"   Paragraphe\n"+"  </p>\n"+"  <a href=\"http://academine.org\">Lien vers AcadéMine</a>\n"+"  <img src=\"https://www.w3schools.com/howto/img_fjords.jpg\" alt=\"Texte à afficher si l'image ne s'affiche pas\" />\n"+"</body>\n"+"</html>\n"+"\n"+"<script type=\"text/javascript\">\n"+"  // Ecrivez du code Javascript ici\n"+"</script>"
              }
                />
          </div>
        </div>
      </div>
    );
  }
}