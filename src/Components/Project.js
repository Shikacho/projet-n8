import React from "react";

function Project({
  title,
  image,
  description,
  techstack,
  previewLink,
  githubLink,
}) {
  return (
    <article className="mt-10 overflow-hidden shadow-xl shadow-slate-300 dark:shadow-slate-900">
      <img src={image} alt="" loading="lazy" />
      <div className="dark:bg-dark-card p-4">
        <h1 className="dark:text-light-heading font-semibold text-lg pt-1">
          {title}
        </h1>
        <p className="text-content pt-4 font-light">{description}</p>
        <h3 className="text-dark-heading dark:text-light-heading font-medium pt-4">
          Compétences développées :{" "}
          <span className="font-light">{techstack}</span>
        </h3>
        <div className="flex justify-between items-center mt-5">
          <div className="flex items-center"></div>
          <div className="flex items-center">
            <a
              href={githubLink}
              target="_blank"
              rel="noreferrer noopener"
              className="underline pl-2 font-light dark:text-white"
            >
              Voir Site
            </a>
          </div>
        </div>
      </div>
    </article>
  );
}

export default Project;
