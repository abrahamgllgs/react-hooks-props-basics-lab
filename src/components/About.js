import React from "react";
import Links from "./Links";

function About(props) {
  const { bio, github, linkedin } = props;

  return (
    <div id="about">
      {bio ? <p>{bio}</p> : null}
      <Links github={github} linkedin={linkedin} />
    </div>
  );
}

export default About;
