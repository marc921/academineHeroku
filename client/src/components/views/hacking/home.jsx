import React from "react";

import { Link } from '../nav';

export default class HackingHome extends React.Component {
  render() {
    return (
      <div>
        <HackingNav />
        <div className='two-columns-page'>

          <div className='half-page half'>
            <h2 className='commented'>Sites à connaître</h2>
            <ul>
              <li><a href='https://www.hackingtutorials.org/'>Hacking Tutorials</a></li>
              <li><a href='http://overthewire.org/wargames/'>Challenges: Over The Wire</a></li>
              <li><a href='https://www.root-me.org/?page=news'>Challenges: Root Me (plusieurs langues disponibles)</a></li>
              <li><a href='https://www.hackthissite.org/'>Challenges: Hack This Site</a></li>
              <li><a href='https://security.stackexchange.com/'>Forums: Security Stack Exchange</a></li>
              <li><a href='https://www.owasp.org/index.php/Main_Page'>OWASP: le Wikipédia de la cybersécurité.</a></li>
              <li><a href='http://insecure.org/fyodor/'>Insecure.org</a><br/>
                  Outils, mailing lists et news par Fyodor, le créateur de Nmap.</li>
              <li><a href='https://www.kali.org/'>Kali Linux</a><br/>
                  Kali est LE système d'exploitation à avoir le jour où vous voulez vous mettre à la cybersécurité pour de bon, pour commencer sur un bon pied.</li>
              <li><a href='https://www.exploit-db.com/'>Exploit Database</a></li>
              <li><a href='http://resources.infosecinstitute.com/'>Infosec Institute: Resources</a></li>
              <li><a href='https://www.metasploit.com/'>Metasploit</a></li>
            </ul>
          </div>

          <div className='half-page half border-left'>
            <p>
              <b>Il est entièrement légal de pirater son propre ordinateur</b>, de la même manière qu'il est légal de crocheter sa propre serrure. Il en va de même pour les machines dont les <b>propriétaires vous ont donné</b> par écrit <b>l'autorisation</b> de pirater.<br/>
              Nous vous prions de ne rien faire de mal avec ce que vous pourrez avoir appris grâce à nous ou aux liens que nous fournissons.<br/>
              En dehors de cette décharge, la cybersécurité est un des éléments les plus passionnants de l'informatique, en partie car la plupart des attaques sont basées sur une compréhension si fine des outils mis en place que l'attaquant parvient à s'immiscer entre ce que le développeur pensait écrire et ce que la machine a compris. Dans beaucoup de cas on touche au génie, et <b>c'est beau.</b><br/>
              De plus, savoir comment on peut vous attaquer vous permettra de mieux vous défendre et d'éviter de laisser des failles béantes dans vos créations virtuelles.<br/>
              <br/>
              Beaucoup d'outils sont prévus pour Linux.<br/>
              <br/>
              Beaucoup de cours sur la cybersécurité (infosec, ethical hacking et autres) sont payants. Nous ne doutons pas du fait que ces cours sont de très bonne qualité, mais nous pensons qu'il est possible d'acquérir un ensemble de connaissances assez important sur le sujet sans dépenser un sou. Tout le contenu que nous référençons est donc <b>gratuit</b> d'accès.<br/>
              <br/>
              Nous présentons ici des sites de challenge, des outils et des médias touchant au domaine de la cybersécurité.
            </p>

            <div className='zbrunSpeaking' style={{marginTop: '50px'}}>Cette section m'intéressant tout particulièrement, j'espère l'enrichir au fil du temps avec de nouvelles connaissances, liens, tutoriels, explications personnelles. Le fait est que beaucoup de tutoriels de cybersécurité sont incomplets ou inexistants, et il est dommage de devoir chercher un cours dans des solutions de challenges.<br/>
            Ce sera sans doute la partie du site avec le plus de contenu interne.<br/>
            - 15brun</div>
          </div>

        </div>
      </div>
    );
  }
}

export const HackingNav = () => (
  <nav>
    <Link href='/hacking/web' text='Sites Web' />
    <Link href='/hacking/network' text='Réseau' />
    <Link href='/hacking/binaries' text='Exécutables' />
    <Link href='/hacking/system' text='Système' />
    <Link href='/hacking/annexes' text='Annexes' />
  </nav>
);




/*<p>Principles to keep in mind if you want your applications to be secure: </p>

<ul>
<li><strong>Never trust any input!</strong>  </li>
<li><a href="http://www.ibm.com/developerworks/library/l-sp2.html" rel="noreferrer">Validate input</a>  from all untrusted sources - use whitelists not blacklists</li>
<li>Plan for security from the start - it's not something you can bolt on at the end </li>
<li>Keep it simple - complexity increases the likelihood of security holes</li>
<li>Keep your <a href="http://en.wikipedia.org/wiki/Attack_surface" rel="noreferrer">attack surface</a> to a minimum</li>
<li>Make sure you <a href="http://www.owasp.org/index.php/Fail_securely" rel="noreferrer">fail securely</a></li>
<li>Use <a href="https://buildsecurityin.us-cert.gov/bsi/articles/knowledge/principles/347-BSI.html" rel="noreferrer">defence in depth</a></li>
<li>Adhere to the principle of <a href="https://buildsecurityin.us-cert.gov/bsi/articles/knowledge/principles/351-BSI.html" rel="noreferrer">least privilege</a>  </li>
<li>Use <a href="http://www.owasp.org/index.php/Threat_Risk_Modeling" rel="noreferrer">threat modelling</a></li>
<li><a href="http://www.cgisecurity.com/owasp/html/ch04s09.html" rel="noreferrer">Compartmentalize</a> - so your system is not all or nothing </li>
<li>Hiding secrets is hard - and secrets hidden in code won't stay secret for long</li>
<li>Don't write your own crypto</li>
<li>Using crypto doesn't mean you're secure (attackers will look for a weaker link)</li>
<li>Be aware of <a href="http://www.linuxjournal.com/article/6701" rel="noreferrer">buffer overflows</a> and how to protect against them</li>
</ul>

<p>There are some excellent books and articles online about making your applications secure:</p>

<ul>
<li><a href="http://rads.stackoverflow.com/amzn/click/0735617228" rel="noreferrer"><strong>Writing Secure Code 2nd Edition</strong></a> - I think every programmer should read this</li>
<li><a href="http://rads.stackoverflow.com/amzn/click/020172152X" rel="noreferrer">Building Secure Software: How to Avoid Security Problems the Right Way </a></li>
<li><a href="http://rads.stackoverflow.com/amzn/click/0596003943" rel="noreferrer">Secure Programming Cookbook</a></li>
<li><a href="https://docs.google.com/viewer?url=http://www.usenix.org/events/sec04/tech/slides/mcgraw.pdf" rel="noreferrer">Exploiting Software</a></li>
<li><a href="http://www.cl.cam.ac.uk/~rja14/book.html" rel="noreferrer">Security Engineering</a> - an excellent read</li>
<li><a href="http://www.dwheeler.com/secure-programs/Secure-Programs-HOWTO/index.html" rel="noreferrer">Secure Programming for Linux and Unix HOWTO</a></li>
</ul>*/
