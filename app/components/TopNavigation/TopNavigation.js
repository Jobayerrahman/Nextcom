import React, { Component } from 'react';
import styles from './TopNavigation.module.scss';
import { Container } from '@mui/material';
class TopNagivation extends Component {
    render() {
        return (
            <Container fixed>
                <div className={styles.navBar}>
                    <h2 className={styles.navTitle}>Nextcom</h2>
                    
                    <div className={styles.navItemList}>
                        <a exact  className={styles.navItem} href="/">Home</a>
                        <a exact  className={styles.navItem} href="/service">Service</a>
                        <a exact  className={styles.navItem} href="/project">Project</a>
                        <a exact  className={styles.navItem} href="/about">About</a>
                        <a exact  className={styles.navItem} href="/contact">Contact</a>
                    </div>
                </div>
            </Container>
        );
    }
}

export default TopNagivation;