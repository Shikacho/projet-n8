import html from "./assets/techstack/html.png";
import css from "./assets/techstack/css.png";
import sass from "./assets/techstack/sass.png";
import js from "./assets/techstack/js.png";
import react from "./assets/techstack/react.png";
import redux from "./assets/techstack/redux.png";
import tailwind from "./assets/techstack/tailwind.png";
import bootstrap from "./assets/techstack/bootstrap.png";
import vscode from "./assets/techstack/vscode.png";
import github from "./assets/techstack/github.png";
import git from "./assets/techstack/git.png";
import npm from "./assets/techstack/npm.png";
import postman from "./assets/techstack/postman.png";
import figma from "./assets/techstack/figma.png";
import mongoDB from "./assets/techstack/mongoDB.png";
// Porject Images
import projectImage1 from "./assets/projects/projet1.jpg";
import projectImage2 from "./assets/projects/projet2.jpg";
import projectImage3 from "./assets/projects/projet3.jpg";

// Enter your Personal Details here
export const personalDetails = {
  tagline: "développeur web",
  about: `Bonjour, je m'appelle Ryan, j'ai 26 ans et je me suis lancé dans le développement web en suivant une formation avec OpenClassrooms en juin 2024.`,
};

// Enter your Social Media URLs here
export const socialMediaUrl = {
  linkdein: "https://www.linkedin.com/in/ryan-bensyour-12a6b6341/",
  github: "https://github.com/Shikacho",
};

// Enter your Work Experience here
export const workDetails = [
  {
    Position: "Développeur Web",
    Company: "Toroku",
    Location: "Online",
    Type: "Full Time",
    Duration: "Fevrier 2025 - Aujourd’hui ",
  },
];

// Enter your Education Details here
export const eduDetails = [
  {
    Position: "Développeur Web",
    Company: "OpenClassroom",
    Location: "Online",
    Type: "Full Time",
    Duration: "Juin 2024 - Dec 2024",
  },
];

// Tech Stack and Tools
export const techStackDetails = {
  html: html,
  css: css,
  js: js,
  react: react,
  redux: redux,
  sass: sass,
  tailwind: tailwind,
  bootstrap: bootstrap,
  vscode: vscode,
  postman: postman,
  npm: npm,
  git: git,
  github: github,
  figma: figma,
  mongoDB: mongoDB,
};

// Enter your Project Details here
export const projectDetails = [
  {
    title: "Créez une application web de location immobilière avec React",
    image: projectImage1,
    description: `
    Ce projet consiste à développer le front-end d'une application moderne en React, avec gestion du routage via React Router, en s'appuyant sur des maquettes et des données simulées. 
    Lors de la mise en place de React Router, j'ai rencontré des difficultés pour gérer les routes dynamiques permettant d'afficher les détails d'une propriété spécifique.
    J'ai utilisé les paramètres dynamiques dans les URL (via useParams) et configuré un composant de détail qui récupère les informations appropriées à partir des données simulées. 
    Adapter les maquettes Figma pour un rendu responsive sur différents appareils a nécessité de nombreux ajustements CSS.  
    J'ai utilisé des unités flexibles (comme % et rem) et des media queries pour garantir un affichage optimal sur mobile, tablette et desktop.
    Les données simulées issues d'un fichier JSON étaient parfois mal formatées ou incomprises par les composants.  
    J'ai mis en place une validation des données avec PropTypes et ajouté des valeurs par défaut pour éviter les erreurs lorsque des champs étaient manquants.
  `,
    techstack: "React, SASS, JavaScript",
    githubLink: "https://github.com/Shikacho/Projet-n5",
  },
  {
    title: "Quizz Pokémon JavaScript",
    image: projectImage2,
    description: `
    J'ai créé un quiz Pokémon en intégrant une API open source. Le but est de trouver le bon Pokémon grâce à une description donnée sous forme d'indices, avec un système d'autocomplétion pour aider l'utilisateur à renseigner le bon nom.
    J'ai développé ce projet en React afin de pouvoir ajouter de nouvelles fonctionnalités à l'avenir. L'essentiel est réalisé en HTML, CSS et JavaScript.
    De plus, une musique se lance lorsque le quiz démarre, avec la possibilité de la désactiver.
    Au départ, j'avais conçu un tableau regroupant 151 Pokémon dans un fichier data, puis j'ai intégré l'API au site pour accéder à une plus grande quantité de données.
  `,
    techstack: "HTML/CSS, JavaScript, Git/Github, React",
    githubLink: "https://quizz-pokemon.vercel.app/",
  },
  {
    title: "Développez le back-end d'un site de notation de livres",
    image: projectImage3,
    description: `
    Ce projet consiste à développer le back-end d'un site de notation de livres avec Express et MongoDB, en implémentant des opérations CRUD, un système d'authentification sécurisé, la gestion des images et une architecture MVC, tout en respectant les bonnes pratiques du Green Code.
    Le système d'authentification JWT posait des problèmes, notamment lors de l'expiration des tokens, entraînant des erreurs pour les utilisateurs.  
    J'ai mis en place un middleware personnalisé pour vérifier la validité des tokens et la gestion des sessions expirées avec un mécanisme de rafraîchissement (refresh token) pour une expérience utilisateur fluide.
    Les fichiers téléchargés étaient souvent trop volumineux, ce qui impactait la performance du serveur.  
    J'ai utilisé Multer pour gérer les téléchargements de fichiers et Sharp pour optimiser les images en les redimensionnant et en réduisant leur taille avant de les stocker, ce qui a permis d'améliorer considérablement les performances globales du serveur.
  `,
    techstack: "Node.js, Express, MongoDB",
    githubLink: "https://github.com/Shikacho/Projet-n6",
  },
];

// Enter your Contact Details here
export const contactDetails = {
  email: "ryan.bensyour@gmail.com",
};
