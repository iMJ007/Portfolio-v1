import Head from "next/head";
import Image from "next/image";
import Contact from "../components/Contact";
import Intro from "../components/Intro";
import Projects from "../components/Projects";
import styles from "../styles/Home.module.css";
import { SiNextdotjs } from "react-icons/si";
import Link from "next/link";
export default function Home() {
	return (
		<div className={styles.container}>
			<Head>
				<title>Junaid Gandhi | Android and Front End developer</title>
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />
				<meta
					name="description"
					content="I'm Junaid Gandhi, a Web and Android developer from Mumbai who loves speaking about HTML, CSS, JavaScript, web development, Java and Android along with CrossFit."
				/>
				<meta name="twitter:card" content="summary"/>
				<meta property="og:title" content="Junaid Gandhi | Android and Front End developer"/>
				<meta property="og:description" content="I'm Junaid Gandhi, a Web and Android developer from Mumbai who loves speaking about HTML, CSS, JavaScript, web development, Java and Android along with CrossFit."/>
				<meta property="og:image" content="https://profile.junaidgandhi.com/android-chrome-192x192.png"/>
				<meta property="og:url" content="https://profile.junaidgandhi.com"/>
				<link
					rel="apple-touch-icon"
					sizes="180x180"
					href="/apple-touch-icon.png"
				/>
				<link
					rel="icon"
					type="image/png"
					sizes="32x32"
					href="/favicon-32x32.png"
				/>
				<link
					rel="icon"
					type="image/png"
					sizes="16x16"
					href="/favicon-16x16.png"
				/>
				<link rel="manifest" href="/site.webmanifest" />
			</Head>
			<header className={styles.header}>
				<nav className={styles.nav}>
					<img
						src="https://pbs.twimg.com/profile_images/1541152906396610560/UOWih33U_200x200.jpg"
						alt="Junaid Gandhi"
						className={styles.profilePic}
						height="64"
					/>
					<Link href="/resume.pdf">
						<a className={styles.resume}>Resume</a>
					</Link>
				</nav>
			</header>
			<main className={styles.main}>
				<Intro />
				<Projects />
				<Contact />
			</main>
			<footer className={styles.footer}>
				<div>
					<p>
						Built with <SiNextdotjs /> NextJs
					</p>
					<p>{new Date().getFullYear()} &#169; Junaid Gandhi</p>
				</div>
			</footer>
		</div>
	);
}
