import CloseIconSvg from "../svgs/CloseIconSvg";
import HamburgerIconSvg from "../svgs/HamburgerIconSvg";
import styles from "./page.module.scss";

interface NavMobileButtonsProps {
  isNavExpanded: boolean;
  setIsNavExpanded: (isNavExpanded: boolean) => void;
}

const NavMobileButtons = ({
  isNavExpanded,
  setIsNavExpanded,
}: NavMobileButtonsProps) => {
  return (
    <div>
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
    </div>
  );
};

export default NavMobileButtons;
