import { Fragment } from "react";
import { Outlet } from "react-router-dom";

import MainNavigation from "../components/MainNavigation";
import styles from "./Root.module.css";

function RootLayout() {
  return (
    <Fragment>
      <MainNavigation />
      <main className={styles.content}>
        <Outlet />
      </main>
    </Fragment>
  );
}

export default RootLayout;
