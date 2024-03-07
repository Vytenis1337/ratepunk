"use client";

import styles from "./page.module.scss";
import { useState } from "react";
import CloseIconSvg from "../svgs/CloseIconSvg";
import HamburgerIconSvg from "../svgs/HamburgerIconSvg";

import NavMenu from "../navmenu/NavMenu";
import NavMobileButtons from "../navmobilebuttons/NavMobileButtons";

const Navbar = () => {
  const [isNavExpanded, setIsNavExpanded] = useState(false);

  return (
    <div className={styles.navbar}>
      <NavMobileButtons
        isNavExpanded={isNavExpanded}
        setIsNavExpanded={setIsNavExpanded}
      />
      <NavMenu
        isNavExpanded={isNavExpanded}
        setIsNavExpanded={setIsNavExpanded}
      />
    </div>
  );
};

export default Navbar;
