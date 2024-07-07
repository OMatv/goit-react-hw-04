import { Oval } from "react-loader-spinner";
import styles from "./Loader.module.css";

export default function Loader() {
  return (
    <div className={styles.loader}>
      <Oval
        height={50}
        width={50}
        color="#4fa94d"
        ariaLabel="oval-loading"
        secondaryColor="#4fa94d"
        strokeWidth={2}
        strokeWidthSecondary={2}
      />
    </div>
  );
}
