import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];

  return <nav>
  <a hfref = "./Home"> Home</a>
  <a hfref = "./About"> About</a>
  <a hfref = "./Projects"> Projects</a>
  </nav>;
}

export default NavBar;
