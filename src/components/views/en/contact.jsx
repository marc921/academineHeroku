import React from "react";

export default class Contact extends React.Component {
  render() {
    return (
      <div>
        <div className='page center'>
          <p>
            <a href="mailto:marc.brun@mines-paristech.fr">Contact website admin</a> and ask to be invited on those channels !
          </p>
          <a href="https://academine.slack.com/messages/C9NG8PCSF/"><h1>Slack</h1></a>
          <p>
            Where we chat.<br/>
          </p>

          <a href="https://trello.com/b/RZYEOxhW/acad%C3%A9mine"><h1>Trello</h1></a>
          <p>
            Our next plans.
          </p>
          <a href="https://github.com/marc921/AcadeMine"><h1>GitHub</h1></a>
          <p>
            Check the website's code and/or contribute.<br/>
            We encourage you to copy and use parts or all of our code, whatever your project!
          </p>
        </div>
      </div>
    );
  }
}