// Modules
import Link from "next/link";
import React from "react";

// Styles
import "suankularb-components/dist/css/suankularb-components.min.css"

// Types
import { NavigationProps } from "@components/Navigation/Navigation";

/**
 * A responsive Navigation bar adapted for Next.JS
 * @param currentPath The current path; `useRouter().asPath`
 * @param navItems A list of navigation items, each consists of name, icon, and URL; should not be longer than 5 items
 */
const NextNavigation = ({ currentPath, navItems }: NavigationProps) => {
  // Removes queries and fragments
  const cleanedCurrentPath = currentPath.split(/\?|#/)[0];

  return (
    <nav className="nav">
      {navItems.map((navItem) => (
        <Link href={navItem.url}>
          <a
            className={`nav__item ${
              cleanedCurrentPath == navItem.url ? "active" : ""
            }`}
          >
            <div className="nav__item__icon">{navItem.icon}</div>
            <span>{navItem.name}</span>
          </a>
        </Link>
      ))}
    </nav>
  );
};

export default NextNavigation;
