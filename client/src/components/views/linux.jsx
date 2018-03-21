import React from "react";

export default class Linux extends React.Component {
  render() {
    return (
      <div>
        <div className='two-columns-page'>

          <div className='half-page half'>
            <h1>Liens externes</h1>
            <ul>
              <li><a href="https://www.ubuntu.com/">Ubuntu</a></li>
              <li><a href="https://openclassrooms.com/courses/reprenez-le-controle-a-l-aide-de-linux">OpenClassrooms: Linux (Ubuntu)</a></li>
              <li><a href="https://www.javatpoint.com/linux-tutorial">Java T Point: Linux tutorial</a></li>
              <li><a href="https://www.tutorialspoint.com/unix/index.htm">Tutorials Point: Linux</a></li>
              <li><a href="https://ryanstutorials.net/linuxtutorial/">Bash command line tutorial</a></li>
              <li><a href="http://tldp.org/HOWTO/Bash-Prog-Intro-HOWTO-1.html">Bash Scripting tutorial</a></li>
              <li><a href="https://www.kali.org/">Kali</a></li>
              <li><a href="https://www.gnome.org/">Gnome</a></li>
            </ul>
          </div>

          <div className='half-page half border-left'>
            <p>
              Linux est une famille de système d'exploitations (OS), comprenant des distributions comme Ubuntu, Kali, Gnome et bien d'autres, dont la particularité est d'être entièrement gratuite et open source.<br/>
              Les OS Linux fait tourner environ <b>3% des ordinateurs de bureau</b> (contre environ 90% sur Windows, 6% sur MacOS et le reste sur des OS indépendants), mais une <b>grande majorité des serveurs</b>, et donc des machines avec lesquelles vous communiquez quotidiennement. Le noyau (kernel) Linux est aussi réutilisé dans d'autres OS tels qu'Android, beaucoup de systèmes embarqués, la quasi-totalité des super-ordinateurs, l'industrie cinématographique et les infrastructures gouvernementales.<br/>
              Linux ne propose pas plus de jeux vidéos, pas de meilleurs éditeurs de texte, de logiciels d'animation 3D ou de retouches photo que Windows ou MacOS.<br/>
              <b>Linux propose</b> en contrepartie <b>des centaines de programmes créés par des indépendants, un terminal vous donnant un total contrôle sur votre machine, et surtout des outils d'aide au développement que vous ne trouverez nulle part ailleurs.</b> Linux propose les meilleurs OS pour programmer, en particulier pour le Web ou la cybersécurité.
              Le grand plus de Linux est le <b>terminal (ou ligne de commande)</b>, qui permet en une ligne d'installer un programme, lancer un script, trouver un fichier, renommer 1 000 fichiers, se connecter à un serveur SFTP ou SSH...
            </p>
            <p>
              Kit de survie sur le terminal Bash:
            </p>
            <ul>
              <li><i>Ctrl+Alt+T</i>: ouvre un terminal Bash</li>
              <li><code>man commande</code>: <i><b>man</b>ual</i>: affiche une aide détaillée concernant commande</li>
              <li><code>commande -h</code>: <i><b>h</b>elp</i>: affiche une aide courte concernant commande</li>
              <li><code>ls</code>:<i><b>l</b>i<b>s</b>t</i>: affiche le contenu du dossier courant</li>
              <li><code>cd dossier</code>:<i><b>c</b>hange <b>d</b>irectory</i>: se déplace dans dossier</li>
              <li><code>./executable</code>: exécute exécutable</li>
              <li><code>nano fichier</code>: <i>nano</i> est un éditeur de texte très simple. Ctrl+X pour revenir au terminal.</li>
              <li><code>apt-cache search recherche</code>: <i>apt</i> (Advanced Packaging Tool) est un système de gestion des "paquets", c'est-à-dire des logiciels que vous installez sur votre ordinateur. <i>apt-cache search</i> permet de chercher des paquets par nom et d'obtenir une courte description sur eux.</li>
              <li><code>sudo apt-get install paquet</code>: <i>sudo</i> indique que vous exécutez la commande en tant que root, <i>apt-get install</i> va installer le paquet dans votre ordinateur automatiquement.</li>
              <li><code>tar -xvf archive</code>: extrait le contenu de archive</li>
            </ul>
          </div>

        </div>
      </div>
    );
  }
}
