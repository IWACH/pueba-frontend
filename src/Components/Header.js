import React from "react";
import { Link } from "react-router-dom";

export function Header() {
  return (
    <nav className="navbar" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <Link to="/">
          <div className="navbar-item home" href="https://bulma.io">
            Inicio
          </div>
        </Link>
      </div>
    </nav>
  );
}
