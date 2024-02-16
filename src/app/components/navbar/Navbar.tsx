"use client";

import styles from "./page.module.scss";
import { useState } from "react";
import CloseIconSvg from "../svgs/CloseIconSvg";
import HamburgerIconSvg from "../svgs/HamburgerIconSvg";
import RatePunkLogoSvg from "../svgs/RatePunkLogoSvg";
import Link from "next/link";
import { NavbarLinksArray } from "@/app/utils/NavbarLinksArray";
import NavLinkItem from "../navlinkitem/NavLinkItem";

const Navbar = () => {
  const [isNavExpanded, setIsNavExpanded] = useState(false);

  return (
    <div className={styles.navbar}>
      {isNavExpanded ? (
        <button
          className={styles.hamburger}
          onClick={() => {
            setIsNavExpanded(!isNavExpanded);
          }}
        >
          <CloseIconSvg />
        </button>
      ) : (
        <button
          className={styles.hamburger}
          onClick={() => {
            setIsNavExpanded(!isNavExpanded);
          }}
        >
          <HamburgerIconSvg />
        </button>
      )}
      <div className={styles.navbar_menu}>
        <Link href="/" className={styles.navbar_logo}>
          <RatePunkLogoSvg />
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
