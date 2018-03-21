import React from "react";

import { WebNav } from './home';

var Highlight = require('react-syntax-highlight');

export default class PHP extends React.Component {
  render() {
    return (
      <div>
        <WebNav />
        <div className='two-columns-page'>
          <div className='half-page small-half'>
            <h1>Tutoriels extérieurs</h1>
            <ul>
              <li><a href="https://openclassrooms.com/courses/concevez-votre-site-web-avec-php-et-mysql">OpenClassrooms: PHP et MySQL</a></li>
              <li><a href="https://www.w3schools.com/php/default.asp">W3Schools: PHP 5</a></li>
              <li><a href="https://www.tutorialspoint.com/php/index.htm">Tutorials Point: PHP</a></li>
              <li><a href="https://phpdelusions.net/pdo">PHP Delusions: PDO</a><br/>
                  Les objets PDO sont un très bon moyen de faire le lien avec la base de données SQL.</li>

            </ul>
          </div>
          <div className='half-page big-half border-left'>
            <h2>Exemple</h2>
            <label>Dans un fichier .php:</label>
            <Highlight lang={"html"}
              value={
                "<!DOCTYPE html>\n"+"<html>\n"+"<body>\n"+"\n"+"<form method=\"post\" action=\"<?php echo $_SERVER['PHP_SELF'];?>\">\n"+"  Name: <input type=\"text\" name=\"fname\">\n"+"  <input type=\"submit\">\n"+"</form>\n"+"\n"+"<?php\n"+"if ($_SERVER[\"REQUEST_METHOD\"] == \"POST\") {\n"+"    // collect value of input field\n"+"    $name = $_POST['fname'];\n"+"    if (empty($name)) {\n"+"        echo \"Name is empty\";\n"+"    } else {\n"+"        echo $name;\n"+"    }\n"+"}\n"+"?>\n"+"\n"+"</body>\n"+"</html>\n"+"\n"+"<?php include(\"includes/footer.php\"); ?>"
              }
                />
          </div>
      </div>
    </div>
    );
  }
}


