"use client";

import React from "react";
import styles from "./page.module.scss";
import { useState } from "react";
import CloseIcon from "../svgs/CloseIcon";
import HamburgerIcon from "../svgs/HamburgerIcon";
import NavbarLogo from "../svgs/NavbarLogo";
import Link from "next/link";
import { NavbarLinksArray } from "@/app/utils/NavbarLinksArray";
import NavLinkItem from "../navlinkitem/NavLinkItem";

const Navbar = () => {
  const [isNavExpanded, setIsNavExpanded] = useState(false);

  // const currentUser = JSON.parse(localStorage?.getItem('currentUser') as string);

  // const handleCloseLogin = () => setOpen(false);
  // const handleCloseMenu = () => setIsNavExpanded(false);

  //   useOutsideClick(handleCloseLogin, modalRef);
  //   useOutsideClick(handleCloseMenu, mobileRef);

  //   useEscapeKey(handleCloseLogin);

  return (
    <div className={styles.navbar}>
      {isNavExpanded ? (
        <button
          className={styles.hamburger}
          onClick={() => {
            setIsNavExpanded(!isNavExpanded);
          }}
        >
          <CloseIcon />
        </button>
      ) : (
        <button
          className={styles.hamburger}
          onClick={() => {
            setIsNavExpanded(!isNavExpanded);
          }}
        >
          <HamburgerIcon />
        </button>
      )}
      <div className={styles.navbar_menu}>
        <Link href="/" className={styles.navbar_logo}>
          <NavbarLogo />
        </Link>

        <div
          className={
            isNavExpanded ? styles.navbar_links : styles.navbar_links_closed
          }
        >
          {NavbarLinksArray.map((navLink) => (
            <NavLinkItem
              key={navLink.id}
              name={navLink.name}
              isNavExpanded={isNavExpanded}
              setIsNavExpanded={setIsNavExpanded}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
