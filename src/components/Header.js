import React from "react";
import NavBar from "./NavBar";
import Search from "./Search";
import Tweet from "./Tweet";

function Header(){
  return (
    <React.Fragment>
      <h1>Social-Media</h1>
      <NavBar />
      <Search />
      <Tweet />
    </React.Fragment>
  );
}

export default Header;