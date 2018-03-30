import React from "react";

import { WebNav } from './home';

const Highlight = require('react-syntax-highlight');

export default class SQL extends React.Component {
  render() {
    return (
      <div>
        <WebNav />
        <div className='two-columns-page'>

          <div className='half-page small-half'>
            <p>
              SQL est un langage unique de gestion de base de données, mais il vous faudra aussi choisir un "relational database management systems (RDBMS)", c'est-à-dire un logiciel vous permettant d'exploiter le langage SQL.<br/>
              Nous vous conseillons en toute partialité PostgreSQL. Il est gratuit, open source et selon certaines sources plus sécurisé que MySQL.
            </p>
            <h1>Tutoriels extérieurs</h1>
            <ul>
              <li><a href="https://openclassrooms.com/courses/concevez-votre-site-web-avec-php-et-mysql">OpenClassrooms: PHP et MySQL</a></li>
              <li><a href="https://www.w3schools.com/sql/default.asp">W3Schools: SQL</a></li>
              <li><a href="https://www.tutorialspoint.com/sql/index.htm">Tutorials Point: SQL</a></li>
              <li><a href="https://www.tutorialspoint.com/postgresql/index.htm">Tutorials Point: PostgreSQL</a></li>
            </ul>
          </div>

          <div className='half-page big-half border-left'>
            <h2>Exemple</h2>
            <label>Ces requêtes créent une table de données, y insèrent des lignes puis affichent toute la table.</label>
            <label>Les requêtes SQL sont rarement écrites dans un fichier à part. Elles sont le plus souvent faites par un script PHP ou Node JS.</label>
            <Highlight lang={"sql"}
              value={
                "CREATE TABLE users (\n  id INT NOT NULL,\n  firstname VARCHAR(100),\n  lastname VARCHAR(100)\n)\nINSERT INTO users VALUES (1,'Jeanne','Dupont')\nINSERT INTO users VALUES (2,'René','Descartes')\nINSERT INTO users VALUES (3,'Sophie','Martin')\nINSERT INTO users VALUES (4,'Sergi','Sergio')\nSELECT * FROM users"
              }
                />
          </div>

        </div>
      </div>
    );
  }
}

