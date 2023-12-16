import React, { Component } from 'react';
import Image from "next/image";
import styles from './Project.module.scss';
import { projectDisplayBlock, projectDisplayNone } from './Project.module.scss';
import projectImage01 from '../../../public/Image/Banner-01.jpg';


class Project extends Component {
    constructor(props){
         super(props);

        this.state = {
             displayed: projectDisplayBlock,
         };
     }

    handleOnHover = () =>{
        this.setState({ displayed: projectDisplayNone, })
    }

    handleOnRemove = () =>{
        this.setState({ displayed: projectDisplayBlock, })
    }
     

    render() {
        return (
            <div className={styles.projectWrapper}>
                <div className={styles.projectImageWrapper}>
                    <Image className={styles.projectImage} src={projectImage01} alt=''/>
                    <div className={styles.projectImageOverlay}></div>
                </div>
                <div onMouseEnter={this.handleOnHover}  onMouseLeave={this.handleOnRemove}  className={styles.projectContent}>
                    <h4 className={this.state.displayed}>Software</h4>
                    <h2>True Responsiveness Modarn Responsive</h2>
                    <a>Discover more</a>
                </div>
            </div>
        );
    }
}

export default Project;