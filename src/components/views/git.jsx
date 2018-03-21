import React from "react";

export default class Git extends React.Component {
  render() {
    return (
      <div>
        <div className='page'>
          <h1>Liens internes</h1>
          <ul>
            <li><a href="https://github.com/marc921/AcadeMine">Dépôt Git du site AcadéMine</a></li>
            <li><a href="https://github.com/marc921/AcadeMine/blob/master/README.md">GitHub AcadéMine: comment contribuer de manière simple, rapide et stable.</a></li>
          </ul>
          <h1>Tutoriels extérieurs</h1>
          <ul>
            <li><a href="https://gist.github.com/derhuerst/1b15ff4652a867391f03">GitHub Gist: Install Git</a></li>
            <li><a href="https://try.github.io/levels/1/challenges/1">GitHub: Try Git</a></li>
            <li><a href="https://www.tutorialspoint.com/git/index.htm">Tutorials Point: Git</a></li>
            <li><a href="https://openclassrooms.com/courses/gerer-son-code-avec-git-et-github">OpenClassrooms: Git</a></li>
          </ul>
        </div>
      </div>
    );
  }
}
