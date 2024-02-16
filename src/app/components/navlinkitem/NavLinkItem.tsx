import styles from "./page.module.scss";
import Link from "next/link";

interface NavLinkItemProps {
  name: string;
  isNavExpanded: boolean;
  setIsNavExpanded: (isNavExpanded: boolean) => void;
}

const NavLinkItem = ({
  name,
  isNavExpanded,
  setIsNavExpanded,
}: NavLinkItemProps) => {
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
