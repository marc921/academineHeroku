import React from "react";

import { HackingNav } from './home.jsx';

export default class HackingAnnexes extends React.Component {
  render() {
    return (
      <div>
        <HackingNav />
        <div className='two-columns-page'>

          <div className='half-page half'>
            <h2 className='commented'>Sites à connaître</h2>
            <ul>
              <li><a href='http://www.phrack.org/'>Phrack</a>: e-zine dont la première édition remonte à 1985.</li>
            </ul>
          </div>

          <div className='half-page half border-left'>
            <label>Extrait d'un thread StackOverflow sur les bonnes pratiques à avoir :</label>
            <h3>Principles to keep in mind if you want your applications to be secure: </h3>
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
            </ul>
          </div>

        </div>
      </div>
    );
  }
}
