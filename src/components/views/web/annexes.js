import React from "react";

import { WebNav } from './home';

export default class WebAnnexes extends React.Component {
  render() {
    return (
      <div>
        <WebNav />
        <div className='page'>
          <p>
            Si vous voulez en savoir plus sur le web, allez directement voir la section <a href='../hacking/web'>Cybersécurité - Web</a> !<br/>
            Apprendre comment d'autres pourraient s'attaquer à votre site vous fera aller plus en profondeur sur les mécanismes qui régissent Internet.
          </p>
          <h1>Tutoriels extérieurs</h1>
          <ul>
            <li><a href="https://openclassrooms.com/courses/le-htaccess-et-ses-fonctionnalites">OpenClassrooms: le .htaccess et ses fonctionnalités</a><br/>
                Par défaut, tout fichier que vous mettez sur Internet est accessible par tout le monde, par URL. <br/>
                Les fichiers .htaccess et .htpasswd empêchent les internautes d'accéder aux pages que vous voulez mettre en ligne mais garder privées (comme une page d'administration par exemple). </li>
            <li><a href="https://openclassrooms.com/courses/surfez-incognito-sur-internet-avec-le-reseau-tor">OpenClassrooms : Tor et le Deep Web</a><br/>
                Même si vous n'avez pas envie de voir le Deep Web, il est important de savoir ce qu'Internet sait de vous.</li>
            <li><a href="http://www.robotstxt.org/robotstxt.html">Robots.txt</a></li>
            <li><a href="https://en.wikipedia.org/wiki/Web_crawler">Wikipédia : Web Crawlers</a></li>
            <li><a href="https://en.wikipedia.org/wiki/Internet_protocol_suite">Wikipédia : Protocole TCP/IP</a></li>
            <li><a href="https://en.wikipedia.org/wiki/Mesh_networking">Wikipédia : Mesh Networking</a></li>
          </ul>
          <h1>Liens utiles</h1>
          <ul>
            <li><a href="https://fonts.google.com/">Google Fonts</a></li>
            <li><a href="https://www.fontsquirrel.com/">FontSquirrel</a></li>
          </ul>
        </div>
      </div>
    );
  }
}