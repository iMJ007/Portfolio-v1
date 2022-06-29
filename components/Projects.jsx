import React from 'react'
import json from '../public/projects.json'
import styles from '../styles/component_styles/Projects.module.css'
import ProjectHolder from './ProjectHolder';
export default function Projects() {
  return (
		<section className={styles.root}>
			<h2 className={styles.title}>
				Some projects I&apos;ve built or worked on:
			</h2>
			<p className={styles.subtitle}>
				Since starting learning programming, I&apos;ve built and worked on
				numerous projects to cement the concept while learning them. Here are
				some of them
			</p>
			<div className={styles.projectContainer}>
				{json &&
					json.recipes.map((project) => (
						<ProjectHolder project={project} key={project.id} />
					))}
			</div>
		</section>
	);
}
