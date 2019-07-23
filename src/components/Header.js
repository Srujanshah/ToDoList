import React from "react";
import "../style.css";

function Header() {
  const firstName = "Srujan";
  const lastName = "Shah";
  return (
    <header className="navbar"> Hello {firstName + " " + lastName} </header>
  );
}
export default Header;
