import React, { Component } from 'react';
import styles from './Blog.module.scss';
import Image from "next/image";
import Grid from '@mui/material/Grid';
import serviceImage01 from '../../../public/Image/Banner-01.jpg'
import serviceImage02 from '../../../public/Image/Banner-02.jpg'
import serviceImage03 from '../../../public/Image/Banner-03.jpg'
class Blog extends Component {
    render() {
        return (
            <div className={styles.blogWrapper}>
                <h4 className={styles.blogHeader}>Get the latest insights</h4>
                <h2 className={styles.blogHeadTitle}>Stay updated with the latest trends and business news</h2>
                <Grid container spacing={4}>
                    <Grid item xs={3}>
                        <div className={styles.blogCard}>
                            <Image className={styles.blogImage} src={serviceImage01}/>
                            <h1 className={styles.blogTitle}>The best way to predict the future is to create it</h1>
                            <p className={styles.blogDescription}>Lorem ipsum is simply dummy text printing typesetting industry lorem ipsum has dummy...</p>
                        </div>
                    </Grid>
                    <Grid item xs={3}>
                        <div className={styles.blogCard}>
                            <Image className={styles.blogImage} src={serviceImage02}/>
                            <h1 className={styles.blogTitle}>The best way to predict the future is to create it</h1>
                            <p className={styles.blogDescription}>Lorem ipsum is simply dummy text printing typesetting industry lorem ipsum has dummy...</p>
                        </div>
                    </Grid>
                    <Grid item xs={3}>
                        <div className={styles.blogCard}>
                            <Image className={styles.blogImage} src={serviceImage03}/>
                            <h1 className={styles.blogTitle}>The best way to predict the future is to create it</h1>
                            <p className={styles.blogDescription}>Lorem ipsum is simply dummy text printing typesetting industry lorem ipsum has dummy...</p>
                        </div>
                    </Grid>
                    <Grid item xs={3}>
                        <div className={styles.blogCard}>
                            <Image className={styles.blogImage} src={serviceImage01}/>
                            <h1 className={styles.blogTitle}>The best way to predict the future is to create it</h1>
                            <p className={styles.blogDescription}>Lorem ipsum is simply dummy text printing typesetting industry lorem ipsum has dummy...</p>
                        </div>
                    </Grid>
                </Grid>
            </div>
        );
    }
}

export default Blog;