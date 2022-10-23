import styles from "../styles/component_styles/ProjectHolder.module.css";
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
import { SiNextdotjs, SiMongodb } from "react-icons/si";
import Image from "next/image";


export default function ProjectHolder({ project }) {
	let combo = {
		"Android SDK": [<FaAndroid />, "android"],
		Java: [<FaJava />, "java"],
		JavaScript: [<FaJsSquare />, "js"],
		HTML: [<FaHtml5 />, "html"],
		CSS: [<FaCss3Alt />, "css"],
		NodeJs: [<FaNodeJs />, "node"],
		ReactJs: [<FaReact />, "react"],
		MongoDB: [<SiMongodb />, "mongodb"],
		Git: [<FaGitAlt />, "git"]
	};
	return (
		<div className={styles.root}>
			<div className={styles.base}>
				{/* <p>La Crescenta-Montrose, CA91214</p> */}
				<div className={styles["rate-num-container"]}>
					<p>
						<span className={styles["rev-count"]}>{project.count}</span>{" "}
						{project.countDesc}
					</p>
				</div>
				<p className={styles.techTitle}>Tech Used</p>
				<div className={styles["profile-container"]}>
					{project &&
						project.tech.map((tech) => (
							<div key={tech} className={styles.currentTech + " " + combo[tech][1]} data-tech-name={tech}>
								{combo[tech][0]}
							</div>
						))}
				</div>
			</div>
			<a href={project.link} className={styles.overlay}>
				<div className={styles.overlayWrapper}>
					<Image src={project.img} alt={project.name} width={400} height={380}  target="_blank" />
				</div>
				<h3>{project.name}</h3>
			</a>
		</div>
	);
}
