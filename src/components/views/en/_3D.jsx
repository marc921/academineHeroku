import React from "react";

export default class _3D extends React.Component {
  render() {
    return (
      <div>
        <div className='two-columns-page'>

        <div className='half-page half'>
          <h2>Liens extérieurs</h2>
          <ul>
            <li><a href="https://unity3d.com/">Unity: Site Officiel</a><br/>
              Unity est un moteur de jeu gratuit permettant de se lancer rapidement dans le développement de jeux vidéos 2D, 3D, sur PC, consoles ou smartphones, réalité virtuelle et autres.<br/>
              Unity allie son éditeur de scènes, qui gère la disposition des éléments, avec le langage C# pour les scripts, qui décrivent la dynamique du jeu.
            </li>
            <li><a href="https://unity3d.com/learn/tutorials">Unity: Tutorials</a><br/>
                Pour ceux qui débutent totalement, nous conseillons le tutoriel "Roll-a-ball", qui vous guidera à partir de zéro.</li>
            <li><a href="https://www.youtube.com/channel/UCifiUB82IZ6kCkjNXN8dwsQ">YouTube: Board To Bits Games Channel</a><br/>
                Cette chaîne aborde plusieurs thèmes de niveau intermédiaire sur Unity, <a href="https://www.youtube.com/watch?v=ucuOVL7c5Hw&list=PL5KbKbJ6Gf9-d303Lk8TGKCW-t5JsBdtB">en particulier les meshes.</a></li>
            <li><a href="https://www.youtube.com/watch?v=wbpMiKiSKm8&t=3s">YouTube: Procedural Landmass Generation (Perlin Noise)</a></li>
            <li><a href="https://www.youtube.com/watch?v=ts24UWC0mY4&list=PLJ4rOFLQFH4BsGGkvCg8_UkhLqEHUGEox&index=1">YouTube: Animations (débutant)</a></li>
            <li><a href="https://assetstore.unity.com/">Unity Asset Store</a><br/>
                L'Asset Store contient des éléments prêts à l'emploi payants ou gratuits qui vous aideront à peupler vos premiers jeux.</li>
            <br/><br/>
            <li><a href="https://www.blender.org/">Blender</a><br/>
                Blender est un logiciel gratuit de modelage et de rendu 3D. Il peut s'utiliser indépendamment ou pour créer des objets 3D à inclure dans vos jeux sur Unity.</li>
            <li><a href="https://www.youtube.com/watch?v=VT5oZndzj68&list=PLjEaoINr3zgHs8uzT3yqe4iHGfkCmMJ0P">YouTube: Blender Beginner Tutorial</a></li>
            <li><a href="https://sketchfab.com/">Sketchfab: catalogues de modèles 3D parfois gratuits</a></li>

          </ul>
        </div>

        <div className='half-page half border-left'>
          <h2>Contenu interne:</h2>
          <p>
            Pour bien commencer avec Unity, nous vous proposons quelques scripts utiles et génériques :
          </p>
          <ul>
            <li><a href="/assets/unity/PlayerMovement.cs">PlayerMovement.cs</a>: utilise les touches fléchées pour déplacer le GameObject associé.</li>
            <li><a href="/assets/unity/FirstPersonCameraController.cs">FirstPersonCameraController.cs</a>: permet de bouger la caméra comme dans un jeu à la première personne.</li>
          </ul>
        </div>

      </div>

      </div>
    );
  }
}
