import Image from "next/image";
import styles from "./page.module.scss";

import StoreContent from "./components/storecontent/StoreContent";
import SocialContent from "./components/socialcontent/SocialContent";

export default function Home() {
  return (
    <main className={styles.main}>
      <SocialContent />

      <StoreContent />
    </main>
  );
}
