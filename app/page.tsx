import Image from "next/image";
import styles from "./page.module.css";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export default async function Home() {
  const session = await getServerSession();

  if (!session) {
    // return <p>You must be signed in...</p>;
    redirect("api/auth/signin");
  }

  return (
    <div className={styles.page}>
      <main className={styles.main}></main>
    </div>
  );
}
