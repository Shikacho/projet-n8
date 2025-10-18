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
  about: `Bonjour, je m'appelle Ryan, j'ai 27 ans et je me suis lancé dans le développement web en suivant une formation avec OpenClassrooms en juin 2024.`,
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
    Company: "Talbat Construction",
    Location: "Online",
    Type: "Freelance",
    Duration: "Octobre 2025",
  },
  {
    Position: "Développeur Web",
    Company: "Their Memory",
    Location: "Online",
    Type: "Benevolat",
    Duration: "Mars 2025 - Juin 2025",
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
    title: "Site vitrine pour artisan BTP",
    image: projectImage1,
    description: `
    J’ai réalisé un site vitrine professionnel pour une entreprise de maçonnerie, de la conception à la mise en ligne.
    Stack moderne : Next.js / React pour le front, Tailwind pour le design system et Vercel pour le déploiement.
    J’ai conçu une interface responsive avec une galerie de réalisations et une expérience mobile soignée.
    Les formulaires de contact et de devis sont reliés à un service d’envoi d’emails, avec validation et protection anti-spam.
    Le projet inclut les fondamentaux SEO (métadonnées, sitemap, robots, données structurées) pour une bonne indexation.
    Intégration d’une carte interactive et d’un header mobile dédié pour améliorer l’UX. Gestion du domaine et de la configuration DNS pour la mise en production. Focus sur la performance, l’accessibilité et la maintenabilité du code. Résultat : un site rapide, propre et prêt pour l’acquisition locale.
  `,
    techstack: "Next.js, Tailwind, JavaScript, SEO",
    githubLink: "https://www.maison-talbat.com/",
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
    title: "To-Do List Interactive en React",
    image: projectImage3,
    description: `
    Ce projet a été réalisé dans le but de m’entraîner à manipuler React et à comprendre la logique de gestion d’état avec les hooks.
    L’application permet d’ajouter, cocher et supprimer des tâches de manière fluide et réactive.
    L’objectif principal était de consolider mes bases en React à travers un projet simple, clair et fonctionnel.
    Le style de l’interface a été travaillé avec CSS/SASS pour un rendu propre et lisible.
    Ce projet m’a permis d’approfondir ma compréhension du fonctionnement des composants, des props et des états dans une application React.
  `,
    techstack: "React.js, CSS, HTML, JavaScript",
    githubLink: "https://todo-app-eta-indol.vercel.app/",
  },
];

// Enter your Contact Details here
export const contactDetails = {
  email: "ryan.bensyour@gmail.com",
};
