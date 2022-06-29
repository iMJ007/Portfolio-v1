import styles from '../styles/component_styles/Contact.module.css'
import {
	FiGithub,
	FiTwitter,
	FiCodepen,
	FiLinkedin,
	FiMail,
} from "react-icons/fi";
export default function Contact() {
  return (
		<section className={styles.root}>
			<h2 className={styles.title}>Let&apos;s Connect &amp; Collaborate</h2>
			<p className={styles.subtitle}>
				Have cool project or an existing project, and think I can help you with
				it? Feel free to contact me!
			</p>
			<div className={styles.socialLinksContainer}>
				<a
					href="https://twitter.com/MohammedJunaidG"
					className={styles.socialLink}
					data-social-name="Twitter"
				>
					<FiTwitter />
				</a>
				<a
					href="https://github.com/iMJ007"
					className={styles.socialLink}
					data-social-name="GitHub"
				>
					<FiGithub />
				</a>
				<a
					href="https://codepen.io/IMJ"
					className={styles.socialLink}
					data-social-name="CodePen"
				>
					<FiCodepen />
				</a>
				<a
					href="https://www.linkedin.com/in/mohammed-junaid-gandhi-31555313b/"
					className={styles.socialLink}
					data-social-name="LinkedIn"
				>
					<FiLinkedin />
				</a>
				<a
					href="mailto:contact@junaidgandhi.com"
					className={styles.socialLink + " " + styles.email}
					data-social-name="Email"
				>
					<FiMail />
				</a>
			</div>
		</section>
	);
}
