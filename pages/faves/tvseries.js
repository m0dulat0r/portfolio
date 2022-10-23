import Link from 'next/link';
import styles from "styles/Home.module.css"

export default function NotFound() {
  return (
    <main className={styles.main} title="404 – Aman Punia">
        <h1 className={styles.container}>
          404 – Unavailable due to Legal Reasons
        </h1>

        <p className={styles.container}>
          Why show a generic 404 when I can make it sound cool? It seems
          you&apos;ve found something that used to exist, or you spelled something
          wrong. I&apos;m guessing you spelled something wrong. Can you double check
          that URL?
        </p>

        <Link href="/">
          <a className={styles.text}>
            Return Home
          </a>
        </Link>
      
    </main>
  );
}
