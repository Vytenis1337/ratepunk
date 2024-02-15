import Image from "next/image";
import styles from "./page.module.scss";
import LeftSide from "./components/leftside/LeftSide";
import RightSide from "./components/rightside/RightSide";

export default function Home() {
  return (
    <main className={styles.main}>
      <LeftSide />
      <RightSide />
    </main>
  );
}
