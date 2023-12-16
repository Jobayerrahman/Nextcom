import Image from 'next/image';
import Grid from '@mui/material/Grid';
import styles from './About.module.scss';
import React, { Component } from 'react';
import HomeContext from '../../libs/contextApi/HomeContext';

class About extends Component {
    render() {
        return (
            <div className={styles.aboutWrapper}>
                <div className={styles.aboutContainer}>
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
                                <HomeContext.Consumer>
                                    {({abouts})=>(
                                        <Grid container spacing={2}>
                                            {(abouts.about).map((a)=>(
                                                <Grid item xs={12} sm={12} md={6}>
                                                    <div className={styles.aboutCard}>
                                                        <Image 
                                                            className={styles.aboutIcon} 
                                                            src={a.image_url} 
                                                            alt="about icon"
                                                            width={30} 
                                                            height={30}
                                                            style={{objectFit: 'cover'}}
                                                        />
                                                        <div className={styles.aboutContext}>
                                                            <h2>{a.title}</h2>
                                                            <p>{a.description}</p>
                                                        </div>
                                                    </div>
                                                </Grid>
                                            ))}
                                        </Grid>
                                    )}
                                </HomeContext.Consumer>
                            </div>
                        </Grid>
                    </Grid>
                </div>
            </div>
        );
    }
}

export default About;