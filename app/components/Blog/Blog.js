import React, { Component } from 'react';
import styles from './Blog.module.scss';
import Image from "next/image";
import Grid from '@mui/material/Grid';
import serviceImage01 from '../../../public/Image/Banner-01.jpg'
import serviceImage02 from '../../../public/Image/Banner-02.jpg'
import serviceImage03 from '../../../public/Image/Banner-03.jpg'
class Blog extends Component {
    render() {

        const blogs = this.props.blogs;
        return (
            <div className={styles.blogWrapper}>
                <h4 className={styles.blogHeader}>Get the latest insights</h4>
                <h2 className={styles.blogHeadTitle}>Stay updated with the latest trends and business news</h2>
                <Grid container spacing={4}>
                    {blogs.map((blog)=>(
                            <Grid item xs={12} sm={6} md={3} key={blog.id}>
                                <div className={styles.blogCard}>
                                    <Image className={styles.blogImage} src={serviceImage01} alt=''/>
                                    <h1 className={styles.blogTitle}>{blog.title}</h1>
                                    <p className={styles.blogDescription}>{blog.des}</p>
                                </div>
                            </Grid>
                        )
                    )}
                </Grid>
            </div>
        );
    }
}

export default Blog;