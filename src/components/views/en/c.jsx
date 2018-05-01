import React from "react";

var Highlight = require('react-syntax-highlight');

export default class C extends React.Component {
  render() {
    return (
      <div>
        <div className='two-columns-page'>

          <div className='half-page half'>
            <h1>Liens externes</h1>
            <ul>
              <li><a href="http://www.learn-c.org/">Learn C</a></li>
              <li><a href="https://openclassrooms.com/courses/apprenez-a-programmer-en-c">OpenClassrooms: C</a><br/>
                  Un des plus vieux cours d'OpenClassrooms, à l'époque où le site était encore le Site du Zéro.<br/>
                  Très bon cours, complet et très compréhensible, parfaitement maintenu à jour, avec en particulier l'utilisation de la bibliothèque graphique SDL et sonore FMOD.</li>
              <li><a href="https://www.cprogramming.com/tutorial/c-tutorial.html">C Programming: C Tutorial</a></li>
              <li><a href="https://www.tutorialspoint.com/cprogramming/index.htm">Tutorials Point: C</a></li>
            </ul>
          </div>

          <div className='half-page half border-left'>
            <h3>C est le langage le plus utilisé de tous les temps.</h3>
            <p>
              A sa sortie en <b>1973</b>, C a tellement révolutionné le monde de l'informatique que le système d'exploitation UNIX a été réécrit en C. <b>Quasiment tous les systèmes d'exploitation sont aujourd'hui écrits en C</b>, ainsi que la plupart des compilateurs.<br/>
              C est aujourd'hui considéré comme un langage <b>bas niveau</b>, c'est-à-dire proche du fonctionnement de l'ordinateur. On y voit explicitement apparaître l'adressage de la mémoire à travers les pointeurs en particulier.<br/>
              A l'époque, il s'agissait de construire un langage cross-platform, donc indépendant de l'architecteur matérielle de la machine.<br/>
              De par son âge cependant, C n'est <b>pas "orienté objet"</b> : bien qu'il soit possible d'y créer des structures, on est loin de pouvoir créer des classes, des méthodes et autres fonctionnalités utiles comme en C++ ou C#, ses descendants.
            </p>
            <h2>Exemple</h2>
            <ul>
              <li>Compiler le code C suivant avec <code>gcc source.c -o executable</code></li>
              <li>Lancer l'executable avec des arguments : <code>./executable "bonjour" 123 3.14</code></li>
            </ul>
            <label>source.c</label>
            <Highlight lang={"c"}
              value={
                "#include <stdio.h>\n#include <stdlib.h>\n\nint main(int argc, char *argv[])\n{\n  printf(\"Hello, World!\\n\");\n printf(\"%d arguments were passed by command line.\\n\", argc);\n int i = 0;\n     for (i = 0; i < argc; i++) {\n         printf(\"argv[%d] = %s\\n\", i, argv[i]);\n     }\n  return 0;\n}"
              }
            />
            <label>Output</label>
            <Highlight lang={"c"}
              value={
                "Hello, World!\n4 arguments were passed by command line.\nargv[0] = ./executable\nargv[1] = bonjour\nargv[2] = 123\nargv[3] = 3.14"
              }
            />
            <p>
              Attention, les arguments passés sont par défaut considérés comme des chaînes de caractères.
            </p>
          </div>

        </div>
      </div>
    );
  }
}
