import Head from "next/head";
import Image from "next/image";
import MovieList from "../components/movielist";
import styles from "../styles/Home.module.css";

export default function Movies() {
  return (
    <div className={styles.container}>
      <Head>
        <title>jensravn playground | Movie</title>
        <meta name="description" content="Fun fun fun" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Movie</h1>

        <MovieList />
      </main>

      <footer className={styles.footer}>
        <a
          href="https://github.com/jensravn/gcp-playground-jens"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className={styles.logo}>
            <Image
              src="/GitHub-Mark-64px.png"
              alt="GitHub Logo"
              width={16}
              height={16}
            />
          </span>
        </a>
      </footer>
    </div>
  );
}