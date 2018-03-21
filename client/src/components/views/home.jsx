import React from "react";

export default class Home extends React.Component {

  render() {
    return (
      <div className='two-columns-page'>
        <div className='half-page big-half'>
          <h1>Bienvenue à l'AcadéMine !</h1>
          <p>
            Ce site a vocation à faciliter l'apprentissage de la programmation en proposant un recueil de tutoriels classés par catégories.<br/>
            Il existe énormément de tutoriels, forums et autres sites qui visent à aider les débutants en informatique, ce serait trop bête de passer à côté simplement parce que vous ne savez pas où chercher !<br/>
            Notre mission consiste à recueillir un maximum de bons tutoriels dans différents domaines pour vous aider à vous lancer de la manière la plus simple et agréable possible.<br/>
            Si vous pensez pouvoir apporter votre pierre à l'édifice, <a href="/contact">contactez-nous</a> ! 
          </p>
          <br/>
          <h2>Sites à connaître</h2>
          <ul>
            <li><a href='https://openclassrooms.com/courses'>Cours - OpenClassrooms</a><br/>
                Pensez à mettre le site en français (scroll tout en bas de la page) pour avoir accès aux cours écrits en français (plus nombreux que ceux en anglais).</li>
            <li><a href='https://www.tutorialspoint.com/index.htm'>Cours - Tutorials Point</a></li>
            <li><a href='https://tech.io/'>Cours - Tech.io</a></li>
            <li><a href='https://stackoverflow.com'>Forums - Stack Overflow</a></li>
          </ul>
        </div>
        <div className='half-page small-half border-left'>
          <iframe width="560"
                  height="315"
                  src="https://www.youtube.com/embed/F9GujgK0y2M" 
                  frameBorder="0"
                  allow="autoplay; encrypted-media"
                  allowFullScreen="allowfullscreen">
          </iframe>
          </div>
      </div>
    );
  }
}

 
