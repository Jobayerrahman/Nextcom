import React, { Component } from 'react';
import styles from './Adminsidenavigation.module.scss';
class Adminsidenavigation extends Component {
    render() {
        return (
            <div className={styles.sideNavigationWrapper}>
                <ul>
                    <li>Deshboard</li>
                    <li>TopBanner</li>
                    <li>Services</li>
                    <li>Abouts</li>
                    <li>Projects</li>
                    <li>Processes</li>
                    <li>Blogs</li>
                    <li>Testimonials</li>
                    <li>Members</li>
                </ul>
            </div>
        );
    }
}

export default Adminsidenavigation;