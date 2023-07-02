import { NavLink } from "react-router-dom";

import styles from "./MainNavigation.module.css";

function MainNavigation() {
  return (
    <header className={styles.header}>
      <nav>
        <ul className={styles.list}>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? styles.active : undefined
              }
              // style={({ isActive }) => ({
              //   textAlign: isActive ? "center" : "left",
              // })}
              end
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/Products"
              className={({ isActive }) =>
                isActive ? styles.active : undefined
              }
            >
              Products
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
