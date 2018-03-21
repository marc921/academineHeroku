import React from "react";

import { Link } from '../nav';

export default class WebHome extends React.Component {
  render() {
    return (
      <div>
        <WebNav />
        <div className='page'>
          <div className='content'>
            Cinq langages constituent la majorité des sites web 
            (bien que d'autres utilisent Python, Go ou d'autres langages pour la partie back-end en particulier).<br/>
            <br/>
            
            <h1 className='commented'>Front-end</h1>(Partie du code exécutée sur la machine de l'utilisateur)
            <ul>
              <li><b>HTML</b> (HyperText Markup Language): support de l'information fournie par le site, il décrit le texte affiché par le site et donne le squelette du site.</li>
              <li><b>CSS</b> (Cascade StyleSheet): décrit l'esthétique du site (couleurs, dimensions, disposition des éléments HTML).</li>
              <li><b>Javascript</b>: rend le site dynamique, introduit variables et fonctions, communique avec le back-end.<br/>
                Avec les différents frameworks Javascript, il est aujourd'hui possible de faire un site entier (front-end et back-end) uniquement en Javascript, très simplement !</li>
            </ul>

            <h1 className='commented'>Back-end</h1>(Partie du code exécutée sur un serveur distant)
            <ul>
              <li><b>PHP</b> (PHP HyperText Preprocessor): fait le lien entre le front-end et la base de données, traite les données reçues des deux parties et décide ce qui doit être envoyé au front-end.</li>
              <li><b>SQL</b> (Structured Query Language): gère la base de données (création, lecture, modification).</li>
            </ul>

            <br/>

            <h2 className='commented'>Sites à connaître</h2>(en plus de ceux de l'accueil)
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
  <nav>
    <Link href='/web/html' text='HTML' />
    <Link href='/web/css' text='CSS' />
    <Link href='/web/js' text='Javascript' />
    <Link href='/web/php' text='PHP' />
    <Link href='/web/sql' text='SQL' />
    <Link href='/web/annexes' text='Annexes' />
  </nav>
);