import React, { Component } from 'react';
import styles from './Project.module.scss';
import Image from "next/image";
import projectImage01 from '../../../public/Image/Banner-01.jpg';
class Project extends Component {
    render() {
        return (
            <div className={styles.projectWrapper}>
                <div className={styles.projectImageWrapper}>
                    <Image className={styles.projectImage} src={projectImage01} alt=''/>
                    <div className={styles.projectImageOverlay}></div>
                </div>
                <div className={styles.projectContent}>
                    <h4>Software</h4>
                    <h2>True Responsiveness Modarn Responsive</h2>
                    <a>Discover more</a>
                </div>
            </div>
        );
    }
}

export default Project;