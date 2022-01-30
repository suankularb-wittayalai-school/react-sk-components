// Modules
import React from "react";
import Link from "next/link";

// Types
import { NavigationProps } from "@components/Navigation/Navigation";

const NextNavigation = ({ currentPath, navItems }: NavigationProps) => {
  // Removes queries and fragments
  const cleanedCurrentPath = currentPath.split(/\?|#/)[0];

  return (
    <nav className="nav">
      {navItems.map((navItem) => (
        <Link href={navItem.url}>
          <a className="nav__item">
            <div
              className={`nav__item__icon ${cleanedCurrentPath == navItem.url ? "active" : ""}`}
            >
              {navItem.icon}
            </div>
            <span>{navItem.name}</span>
          </a>
        </Link>
      ))}
    </nav>
  );
};

export default NextNavigation;
