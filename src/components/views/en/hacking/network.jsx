import React from "react";

import { HackingNav } from './home.jsx';

export default class HackingNetwork extends React.Component {
  render() {
    return (
      <div>
        <HackingNav />
        <div className='two-columns-page'>

          <div className='half-page half'>
            <h2 className='commented'>Outils</h2>
            <ul>
              <li><a href='https://nmap.org/'>Nmap</a>: Network mapper. Permet de découvrir les machines présentes sur le réseau, les OS sur lesquelles elles tournent, leurs ports ouverts ainsi que les logiciels qui les utilisent. </li>
              <li><a href="https://www.wireshark.org/">WireShark</a>: Network protocol analyzer. Analyse les transferts de paquets sur un réseau. Permet de découvrir des informations importantes dans les paquets mal sécurisés.</li>
              <li><a href='https://www.aircrack-ng.org/'>Aircrack-ng</a>: Suite d'outils d'audit de sécurité WiFi. Utilisation restreinte aux cartes WiFi compatibles.</li>
            
            </ul>
          </div>

          <div className='half-page half border-left'>
            

          </div>

        </div>
      </div>
    );
  }
}
