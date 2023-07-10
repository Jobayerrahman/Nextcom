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
                        <a exact activeStyle={{color:'#00a8ee'}} className={styles.navItem} href="/">Home</a>
                        <a exact activeStyle={{color:'#00a8ee'}} className={styles.navItem} href="/Service">Service</a>
                        <a exact activeStyle={{color:'#00a8ee'}} className={styles.navItem} href="/Project">Project</a>
                        <a exact activeStyle={{color:'#00a8ee'}} className={styles.navItem} href="/About">About</a>
                        <a exact activeStyle={{color:'#00a8ee'}} className={styles.navItem} href="/Contact">Contact</a>
                    </div>
                </div>
            </Container>
        );
    }
}

export default TopNagivation;