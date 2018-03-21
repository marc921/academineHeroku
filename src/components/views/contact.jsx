import React from "react";

export default class Contact extends React.Component {
  render() {
    return (
      <div>
        <div className='page'>
          <a href="https://academine.slack.com/messages/C9NG8PCSF/"><h1>Slack</h1></a>
          <p>
            Que ce soit pour des remarques ou pour une contribution, nous serons très heureux de vous accueillir sur le slack d'AcadéMine.
          </p>

          <a href="https://trello.com/b/RZYEOxhW/acad%C3%A9mine"><h1>Trello</h1></a>
          <p>
            Découvrez ce que l'équipe d'AcadéMine vous réserve pour l'avenir et proposez nous des idées !
          </p>
          <a href="https://github.com/marc921/AcadeMine"><h1>GitHub</h1></a>
          <p>
            Examinez le code source du site et/ou proposez votre contribution.<br/>
            Toute copie, partielle ou entière, est fortement encouragée dans quelque but que ce soit.
          </p>
        </div>
      </div>
    );
  }
}