import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <>
      <Head>
        <title>Kate Cabantog</title>
        <meta
          name="description"
          content="My personal blog website"
        />
      </Head>

      <main className={styles.container}>
        <Image
          className={styles.profile}
          src="/images/profile.jpg"
          alt="Profile Picture"
          width={120}
          height={120}
        />

        <h1>Kate Cabantog</h1>

        <section>
          <h2>10 Things That Require Zero Talent</h2>
          <br></br>

          <ul>
            <li>Being On Time</li>
            <li>Making An Effort</li>
            <li>Being Positive</li>
            <li>Having A Positive Attitude</li>
            <li>Being Passionate</li>
            <li>Using Good Body Language</li>
            <li>Being Coachable</li>
            <li>Doing A Little Extra</li>
            <li>Being Prepared</li>
            <li>Having A Strong Work Ethic</li>
          </ul>
        </section>

        <br></br>

        <p>
  (This is a sample website - you’ll be building a site like this on{' '}
  <a href="https://nextjs.org/learn" target="_blank" rel="noopener noreferrer">
    our Next.js tutorial.
  </a>)
</p>
      </main>
    </>
  );
}