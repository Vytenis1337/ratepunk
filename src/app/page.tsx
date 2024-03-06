import Image from "next/image";
import styles from "./page.module.scss";

import StoreContent from "./components/storecontent/StoreContent";
import SocialContent from "./components/socialcontent/SocialContent";
// import TestComp from "./components/testComp/TestComp";
// import TestComp from "./components/testComp/TestComp";

export default function Home() {
  return (
    <main className={styles.main}>
      <SocialContent />
      {/* <TestComp /> */}
      <StoreContent />
    </main>
  );
}
