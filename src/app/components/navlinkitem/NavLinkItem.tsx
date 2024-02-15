import React from "react";
import styles from "./page.module.scss";
import Link from "next/link";

const NavLinkItem = ({ name, isNavExpanded, setIsNavExpanded }: any) => {
  return (
    <Link
      className={
        isNavExpanded ? styles.navbar_menu_link : styles.navbar_menu_link_closed
      }
      href="/"
      onClick={() => {
        setIsNavExpanded(!isNavExpanded);
      }}
    >
      {name}
    </Link>
  );
};

export default NavLinkItem;
