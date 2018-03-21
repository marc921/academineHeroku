import React from "react";

import { WebNav } from './home';

export default class SQL extends React.Component {
  render() {
    return (
      <div>
        <WebNav />
        <div className='page'>
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
      </div>
    );
  }
}