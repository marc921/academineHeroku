import React from "react";

export default class Concepts extends React.Component {
  render() {
    return (
      <div>
        <div className='page'>
          <h2>L'ordinateur, cette machine complexe</h2>
          <ul>
            <li><a href="https://fr.wikipedia.org/wiki/Pointeur_(programmation)">Pointeurs</a><br/>
                Un pointeur est une variable dont la valeur est l'adresse mémoire d'une autre variable.</li>
            <li><a href="https://en.wikibooks.org/wiki/X86_Assembly/X86_Architecture">x86 Architecture: Assembly and registers</a></li>
            <li><a href="https://en.wikipedia.org/wiki/Kernel_(operating_system)">Kernel</a><br/>
                Le kernel est la partie de l'OS qui communique avec le hardware. Elle communique avec l'utilisateur à travers une interface: le Shell.</li>
          </ul>

          <h2>L'informatique, cette science abstraite</h2>
          <ul>
            <li><a href="https://fr.wikipedia.org/wiki/Algorithme_A*">Pathfinding: Algorithme A*</a></li>
            <li><a href="https://en.wikipedia.org/wiki/Perlin_noise">Perlin Noise</a><br/>
                Ce bruit cohérent permet de créer des terrains ou autres objets pseudo-aléatoires de manière réaliste (pas besoin de le comprendre pour l'utiliser).</li>
            <li><a href="https://fr.wikipedia.org/wiki/Programmation_orient%C3%A9e_objet">Programmation Orientée Objet</a></li>
          </ul>
        </div>
      </div>
    );
  }
}
