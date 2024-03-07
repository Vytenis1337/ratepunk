import Link from "next/link";
import styles from "./page.module.scss";
import RatePunkLogoSvg from "../svgs/RatePunkLogoSvg";
import { NavbarLinksArray } from "@/app/utils/NavbarLinksArray";
import NavLinkItem from "../navlinkitem/NavLinkItem";

interface NavMenuProps {
  isNavExpanded: boolean;
  setIsNavExpanded: (isNavExpanded: boolean) => void;
}

const NavMenu = ({ isNavExpanded, setIsNavExpanded }: NavMenuProps) => {
  return (
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
  );
};

export default NavMenu;
