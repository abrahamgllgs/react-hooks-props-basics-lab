import React from "react";
import NavBar from "./NavBar";
import Home from "./Home";
import About from "./About";

// pass this data down as props to the child component(s) that need it!

function App() {
  const user = {
    name: "Liza",
    city: "New York",
    color: "firebrick",
    bio: "I made this!",
    github: "https://github.com/liza",
    linkedin: "https://www.linkedin.com/in/liza/",
  };
  return (
    <div className="App">
      <NavBar />
      <Home name={user.name} color={user.color} city={user.city} />
      <About bio={user.bio} github={user.github} linkedin={user.linkedin} />
    </div>
  );
}

export default App;
