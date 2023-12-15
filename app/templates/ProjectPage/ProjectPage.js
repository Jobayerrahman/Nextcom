import React, { Component } from 'react';
import Project from '../../components/Project/Project';
import styles from './ProjectPage.module.scss';
import TopNagivation from '../../components/TopNavigation/TopNavigation';

class ProjectPage extends Component {
    render() {
        return (
            <div>
                <TopNagivation/>
                <div className={styles.projectPageWrapper}>
                    <Project/>
                    <Project/>
                    <Project/>
                    <Project/>
                    <Project/>
                    <Project/>
                    <Project/>
                    <Project/>
                </div>
            </div>
        );
    }
}

export default ProjectPage;