import React, { Component } from 'react';
import styles from './About.module.scss';
import Grid from '@mui/material/Grid';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faPlayCircle} from '@fortawesome/free-solid-svg-icons';
class About extends Component {
    render() {
        return (
            <div className={styles.aboutWrapper}>
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={12} md={4}>
                        <div className={styles.aboutIntroduction}>
                            <h4>About Company</h4>
                            <h2>We combine design, thinking and technical</h2>
                            <a>Discover Nextcom</a>
                        </div>
                    </Grid>
                    <Grid item xs={12} sm={12} md={8}>
                        <div className={styles.aboutContent}>
                            <Grid container spacing={2}>
                                <Grid item xs={12} sm={12} md={6}>
                                    <div className={styles.aboutCard}>
                                        <FontAwesomeIcon className={styles.aboutIcon} icon={faPlayCircle} />
                                        <div className={styles.aboutContext}>
                                            <h2>Effective strategy</h2>
                                            <p>Lorem ipsum dolor sit amet consectetur adipiscing elit do eiusmod tempor.</p>
                                        </div>
                                    </div>
                                </Grid>
                                <Grid item xs={12} sm={12} md={6}>
                                    <div className={styles.aboutCard}>
                                        <FontAwesomeIcon className={styles.aboutIcon} icon={faPlayCircle} />
                                        <div className={styles.aboutContext}>
                                            <h2>Effective strategy</h2>
                                            <p>Lorem ipsum dolor sit amet consectetur adipiscing elit do eiusmod tempor.</p>
                                        </div>
                                    </div>
                                </Grid>
                                <Grid item xs={12} sm={12} md={6}>
                                    <div className={styles.aboutCard}>
                                        <FontAwesomeIcon className={styles.aboutIcon} icon={faPlayCircle} />
                                        <div className={styles.aboutContext}>
                                            <h2>Effective strategy</h2>
                                            <p>Lorem ipsum dolor sit amet consectetur adipiscing elit do eiusmod tempor.</p>
                                        </div>
                                    </div>
                                </Grid>
                                <Grid item xs={12} sm={12} md={6}>
                                    <div className={styles.aboutCard}>
                                        <FontAwesomeIcon className={styles.aboutIcon} icon={faPlayCircle} />
                                        <div className={styles.aboutContext}>
                                            <h2>Effective strategy</h2>
                                            <p>Lorem ipsum dolor sit amet consectetur adipiscing elit do eiusmod tempor.</p>
                                        </div>
                                    </div>
                                </Grid>
                            </Grid>
                        </div>
                    </Grid>
                </Grid>
            </div>
        );
    }
}

export default About;