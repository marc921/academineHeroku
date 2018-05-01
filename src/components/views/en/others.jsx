import React from "react";

export default class Others extends React.Component {
  render() {
    return (
      <div>
        <div className='page'>
          <h2>Quelques conseils:</h2>
          <ul>
            <li><b>Google est votre ami</b>: taper "... tutorial" ou recopier un message d'erreur dans la barre de recherche est un réflexe à avoir avant de dire "Je ne sais pas".<br/>
                Les réponses StackOverflow sont quasiment toujours les meilleures.</li>
            <li><b>Ctrl + clic</b> permet d'ouvrir les liens directement dans un nouvel onglet.</li>
          </ul>
          <h2>Sites sympathiques:</h2>
          <ul>
            <li><a href="https://www.codingame.com/home">CodinGame</a></li>
            <li><a href="https://en.wikipedia.org/wiki/Cellular_automaton">Wikipédia: Cellular Automaton</a></li>
          </ul>
        </div>
      </div>
    );
  }
}
