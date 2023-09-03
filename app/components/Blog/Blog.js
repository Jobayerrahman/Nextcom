import React, { Component } from 'react';
import styles from './Blog.module.scss';
import Image from "next/image";
import Grid from '@mui/material/Grid';
import HomeContext from '../../libs/contextApi/HomeContext';
class Blog extends Component {
    render() {
        const blogs = this.props.blogs;
        return (
            <div className={styles.blogWrapper}>
                <h4 className={styles.blogHeader}>Get the latest insights</h4>
                <h2 className={styles.blogHeadTitle}>Stay updated with the latest trends and business news</h2>
                <HomeContext.Consumer>
                        {({blogs})=>(<Grid container spacing={4}>
                                {(blogs.blog).map((blog)=>(
                                        <Grid item xs={12} sm={6} md={3} key={blog.id}>
                                            <div className={styles.blogCard}>
                                                <Image 
                                                    className={styles.blogImage} 
                                                    src={blog.image_url} 
                                                    alt='' 
                                                    width={300} 
                                                    height={300}
                                                    style={{
                                                        objectFit: 'cover'
                                                    }}
                                                />
                                                <h1 className={styles.blogTitle}>{blog.title}</h1>
                                                <p className={styles.blogDescription}>{blog.description}</p>
                                            </div>
                                        </Grid>
                                    )
                                )}
                            </Grid>
                        )}
                </HomeContext.Consumer>
            </div>
        );
    }
}

export default Blog;