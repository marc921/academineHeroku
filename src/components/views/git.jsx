import React from "react";

export default class Git extends React.Component {
  render() {
    return (
      <div>
        <div className='two-columns-page'>

          <div className='half-page half'>
            <p>
              Git est un <b>système de gestion de projets informatiques</b>. En particulier, il permet de garder un historique des différentes modifications au fil du temps, de contribuer à plusieurs sur un même projet, de garder une version stable du code et des versions en cours de modifications.<br/>
              Git utilise plusieurs concepts fondamentaux:
              <ul>
                <li><b>Dépôt/Repository</b>: le dépôt contient tout votre projet, toutes ses versions, tout son historique.</li>
                <li><b>Branche</b>: une branche est une suite de versions de votre projet. La branche master contient toutes les versions stables et ne doit pas être modifiée directement, les branches personnelles sont des branches de travail sur lesquelles on effectue les modifications voulues. Lorsqu'on veut récupérer les modifications d'une branche dans une autre, on fait une fusion (<b>merge</b>) de l'une dans l'autre.</li>
                <li><b>Local-distant</b>: votre projet existe à deux endroit différents :
                  <ul>
                    <li>Le dépôt distant, sur les serveurs de GitHub, accessible par d'autres que vous sur Internet</li>
                    <li>Le dépôt local, sur votre ordinateur, auquel vous seul avez accès</li>
                  </ul>
                  Chaque dépôt a ses propres branches, son propre état, ses propres modifications. Pour les propager d'un dépôt à l'autre, on utilise les commandes <b>push</b> (local -> distant) et <b>pull</b> (distant -> local).
                </li>
              </ul>
            </p>
            <h2>Liens internes</h2>
            <ul>
              <li><a href="https://github.com/marc921/academineHeroku">Dépôt Git du site AcadéMine</a></li>
            </ul>
            <h2>Tutoriels extérieurs</h2>
            <ul>
              <li><a href="https://gist.github.com/derhuerst/1b15ff4652a867391f03">GitHub Gist: Install Git</a></li>
              <li><a href="https://try.github.io/levels/1/challenges/1">GitHub: Try Git</a></li>
              <li><a href="https://www.tutorialspoint.com/git/index.htm">Tutorials Point: Git</a></li>
              <li><a href="https://openclassrooms.com/courses/gerer-son-code-avec-git-et-github">OpenClassrooms: Git</a></li>
            </ul>
          </div>

          <div className='half-page half border-left'>
            <h3>Utilisation facile et stable de Git (avec le terminal Linux ou Git Bash pour Windows):</h3>
            <ol>
              <li>Créer un compte Git sur <a href="https://github.com/">GitHub</a></li>
              <li>Créer un <a href="https://github.com/new">nouveau dépôt distant</a> (c'est-à-dire hébergé sur les serveurs de GitHub) pour votre projet</li>
              <li><a href="https://help.github.com/articles/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent/">Créer une clé SSH</a> sur votre machine puis ajoutez-la aux <a href="https://github.com/settings/keys">clés de votre compte</a> pour autoriser votre machine à interagir avec le dépôt distant</li>
              <li>Sur la page web du dépôt, copier le lien de clonage par SSH</li>
              <li>
                Sur votre terminal, tapez<br/>
                <code>git clone lien-de-clonage-ssh</code><br/>
                pour cloner le dépôt distant sur votre machine. Le dossier créé est le dépôt local.
              </li>
              <li>
                Entrez dans votre dépôt local avec<br/>
                <code>cd nom-du-dépôt</code>
              </li>
              <li>
                Listez les branches locales et la branche active avec<br/>
                <code>git branch</code>.<br/>
                Vous devez être sur la branche master. Les branches ont différents rôles, et peuvent être comprises comme des dossiers contenant chacune une version de votre projet. <i>master</i> est la branche principale, elle doit toujours contenir un code irréprochable. Ne modifiez jamais master directement si vous ne savez pas ce que vous faites. Pour modifier master, on crée des branches temporaires pour ajouter une fonctionnalité, réparer un bug ou autre. Le nom de la branche contient généralement votre nom et la fonctionnalité ajoutée. La branche sera fusionnée à master puis supprimée une fois que son objectif sera atteint.
              </li>
              <li>
                Créez une nouvelle branche à partir de la branche master avec<br/>
                <code>git checkout -b nom-de-ma-branche</code>.<br/>
                Vous êtes directement déplacé(e) dessus.
              </li>
              <li>Effectuez les modifications voulues dans le code du dépôt, ajoutez, renommez, supprimez des fichiers...</li>
              <li>
                Récapitulez les modifications avec<br/>
                <code>git status</code><br/>
                pour voir les noms des fichiers modifiés,<br/>
                <code>git diff</code><br/>
                pour voir les lignes modifiées dans chaque fichier.
              </li>
              <li>
                Ajouter les modifications au prochain commit avec<br/>
                <code>git add fichier-ou-dossier-à-ajouter</code>.<br/>
                Pour tout ajouter, placez-vous à la racine de votre dépôt local et tapez<br/>
                <code>git add .</code>
              </li>
              <li>
                Réaliser le commit avec<br/>
                <code>git commit -m "Description des modifications réalisées"</code>.<br/>
                Le commit officialise les modifications et les enregistre localement. Votre branche locale revient à un état stable et on peut alors changer de branche sans danger. Ne changez pas de branche si vous avez des modifications en cours !
              </li>
              <li>
                Propagez le commit sur votre branche distante avec<br/>
                <code>git push origin nom-de-ma-branche</code>.
              </li>
              <li>Sur la page web de votre dépôt distant, une notification vous avertit de la création de votre nouvelle branche distante. Créez une merge request pour décrire votre branche et la présenter à vos collègues.</li>
              <li>Répéter les 5 dernières étapes à volonté, jusqu'à atteindre l'objectif de la branche.</li>
              <li>
                Si plusieurs personnes collaborent sur votre dépôt, il est probable que la branche master ait changée depuis que vous en êtes parti(e). Vérifiez le en vous déplaçant sur la branche master de votre dépôt local avec<br/>
                <code>git checkout master</code><br/>
                et en la mettant au niveau de la branche master du dépôt distant avec<br/>
                <code>git pull</code>.<br/>
                Il faut donc fusionner la branche master dans la vôtre pour obtenir une branche avec toutes les modifications :<br/>
                <code>git checkout nom-de-ma-branche; git merge master</code>
              </li>
              <li>La fusion a probablement provoqué des conflits sur votre branche : il s'agit des fichiers qui ont été modifiés à la fois par vos modifications et celles survenues sur la branche master pendant que vous travailliez sur votre branche. Il faut <a href="https://help.github.com/articles/resolving-a-merge-conflict-using-the-command-line/">résoudre ces conflits à la main</a>.</li>
              <li>Maintenant que les conflits sont résolus, notre branche locale contient toutes les modifications réalisées par vous et vos collègues. Propagez le commit de fusion sur votre branche distante.</li>
              <li>Sur la page web de votre dépôt distant, ouvrez la page de votre branche distante. Cliquez sur "Merge" pour fusionner votre branche distante avec la branche master distante.</li>
              <li>
                Vous pouvez à présent revenir sur la branche master locale avec<br/>
                <code>git checkout master</code>,<br/>
                la mettre à jour avec<br/>
                <code>git pull</code><br/>
                et supprimer vos branches distante et locale avec<br/>
                <code>git branch -D nom-de-ma-branche</code>
              </li>
              <li>Pour vos prochaines contributions, ouvrez à chaque fois une nouvelle branche et répétez ces étapes. Bon code !</li>
            </ol>
          </div>

        </div>
      </div>
    );
  }
}

