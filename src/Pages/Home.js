import React from "react";
import { personalDetails } from "../Details";
import profilePic from "../assets/ui/profile-pic.png";

function Home() {
  const { tagline } = personalDetails;

  return (
    <main className="container mx-auto max-width section md:flex justify-between items-center">
      <div>
        <h1 className="text-2xl text-dark-heading dark:text-light-heading md:text-4xl xl:text-5xl xl:leading-tight font-bold">
          Bonjour,👋<br></br>Bienvenue sur mon portfolio de<br></br>
        </h1>
        <h2 className="text-2xl bg-clip-text bg-gradient text-transparent md:text-4xl xl:text-5xl xl:leading-tight font-bold">
          {tagline}
        </h2>
      </div>
      <div className="mt-5 md:mt-0">
        <img
          className="w-1/2 md:ml-auto"
          src={profilePic}
          alt="Portrait de Ryan"
        />
      </div>
    </main>
  );
}

export default Home;
