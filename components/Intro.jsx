import Link from "next/link";
import styles from "../styles/component_styles/Intro.module.css";
import {
	FiGithub,
	FiTwitter,
	FiCodepen,
	FiLinkedin,
	FiMail,
} from "react-icons/fi";
import {
	FaAndroid,
	FaJava,
	FaJsSquare,
	FaHtml5,
	FaCss3Alt,
	FaReact,
	FaNodeJs,
	FaGitAlt,
} from "react-icons/fa";
import { SiNextdotjs } from "react-icons/si";

export default function Intro() {
	return (
		<section className={styles.root}>
			<div className={styles.introContainer}>
				<div>
					<p className={styles.hello}>Hello From,</p>
					<h1 className={styles.title}>
						A developer who loves bringing imaginations into existence with
						&nbsp;
						<span className={styles.code}>
							{"<"}code{"/>"}
						</span>
					</h1>
					<h2 className={styles.subtitle}>
						I&apos;m <span>Junaid Gandhi</span>, a Web and Android developer
						from Mumbai who loves speaking about HTML, CSS, JavaScript, web
						development, Java and Android along with CrossFit.
					</h2>
				</div>
				<div className={styles.socialLinksContainer}>
					<a
						href="https://twitter.com/MohammedJunaidG"
						className={styles.socialLink}
					>
						<FiTwitter />
					</a>
					<a href="https://github.com/iMJ007" className={styles.socialLink}>
						<FiGithub />
					</a>
					<a href="https://codepen.io/IMJ" className={styles.socialLink}>
						<FiCodepen />
					</a>
					<a
						href="https://www.linkedin.com/in/mohammed-junaid-gandhi-31555313b/"
						className={styles.socialLink}
					>
						<FiLinkedin />
					</a>
					<a
						href="mailto:contact@junaidgandhi.com"
						className={styles.socialLink}
					>
						<FiMail />
					</a>
				</div>
			</div>

			<div className={styles.techContainer}>
				<h2 className={styles.techTitle}>Technologies I have worked with</h2>
				<p className={styles.techDesc}>
					I started learning coding since 2015 with Java & Android SDK and
					developed several Apps with more than 800K+ downloads which helped me
					gain exposure to many technologies down the line.
				</p>

				<h3 className={styles.techStack}>
					Here are few technologies I have worked with recently
				</h3>
				<h4 className={styles.technologies}>
					<span className={styles.tech}>
						<span className="android">
							<FaAndroid />
						</span>
						Android SDK
					</span>
					<span className={styles.tech}>
						<span className="java">
							<FaJava />
						</span>
						Java
					</span>
					<span className={styles.tech}>
						<span className="js">
							<FaJsSquare />
						</span>
						JavaScript ES6
					</span>
					<span className={styles.tech}>
						<span className="html">
							<FaHtml5 />
						</span>
						HTML 5
					</span>
					<span className={styles.tech}>
						<span className="css">
							<FaCss3Alt />
						</span>
						CSS 3
					</span>
					<span className={styles.tech}>
						<span className="react">
							<FaReact />
						</span>
						ReactJs
					</span>
					<span className={styles.tech}>
						<span className="nextjs">
							<SiNextdotjs />
						</span>
						NextJs
					</span>
					<span className={styles.tech}>
						<span className="node">
							<FaNodeJs />
						</span>
						NodeJs
					</span>
					<span className={styles.tech}>
						<span className="git">
							<FaGitAlt />
						</span>
						Git
					</span>
				</h4>
			</div>
		</section>
	);
}
