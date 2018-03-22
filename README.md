# AcadéMine
Recueil de tutoriels sur la programmation et l'informatique en général - site web écrit en React

<br/>
En cas de problème ou de doute, demander de l'aide <a href="https://academine.slack.com/messages/D9NK5NS02">sur le Slack</a> ou <a href="mailto:marc.brun@mines-paristech.fr">par mail</a>

<h1>Première contribution</h1>
<ol>
	<li>Installer Git : https://gist.github.com/derhuerst/1b15ff4652a867391f03 </li>
	<li>Passer sur le Terminal (UNIX) ou Git Bash (Windows)</li>
	<li>Cloner le repo sur sa machine: <code>git clone git@github.com:marc921/AcadeMine.git</code></li>
	<li>Entrer dans le repo: <code>cd AcadeMine</code></li>
</ol>

<h1>Vous avez déjà contribué</h1>
Assurez-vous que vous avez la dernière version du repo en vous plaçant dans votre repo local et en tapant<br/>
<code>git checkout master</code><br/>
puis<br/>
<code>git pull</code>

<h1>Procédure de contribution</h1>
<ol>
	<li>Créer une nouvelle branche à partir de la branche master: <code>git checkout -b prenom.nom/ma-contribution</code></li>
	<li>Lancer le serveur React: <code>cd academie; npm start</code>. Si vous n'avez pas installé React sur votre machine, regarder academie/README.md .</li>
	<li>Faire les changements voulus dans le code (./academie/src/) en testant avec votre navigateur (par défaut sur localhost:3000) et en répétant les trois étapes suivantes à chaque changement majeur.
	<ol>
		<li>Ajouter les changements au prochain commit: <code>git add .</code> en étant placé à la racine du repo.</li>
		<li>Créer le commit localement: <code>git commit -m "Description des changements réalisés"</code></li>
		<li>Propager les changements sur votre branche distante: <code>git push origin prenom.nom/ma-contribution</code></li>
	</ol>
</li>
	<li>Venir ici (<a href="https://github.com/marc921/AcadeMine">https://github.com/marc921/AcadeMine</a>) et créer une merge request à partir de votre branche.</li>
	<li>Avertir l'équipe de l'existence de votre branche <a href="https://academine.slack.com/messages/D9NK5NS02">sur le Slack</a> ou <a href="mailto:marc.brun@mines-paristech.fr">par mail</a>
	</li>
</ol>
