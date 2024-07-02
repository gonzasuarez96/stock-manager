import Image from "next/image";
import styles from "@/components/UserInfo/user-info.module.css";

export default function UserInfo() {
  return (
    <div className={styles.container}>
      <div className={styles.boxUp}>
        <Image
          className={styles.img}
          src="/workerman.png"
          width={"100"}
          height={"100"}
          alt="Imagen"
        />
      </div>
      <div className={styles.boxDown}>
        <h4 className={styles.name}>Nombre</h4>
      </div>
    </div>
  );
}
