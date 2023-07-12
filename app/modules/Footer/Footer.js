import React, { Component } from 'react';
import Grid from '@mui/material/Grid';
import styles from './Footer.module.scss';
class Footer extends Component {
    render() {
        return (
            <div className={styles.footerWrapper}>
                <Grid container spacing={5}>
                    <Grid item xs={4}>
                        <div className={styles.footerSection}>
                            <h2 className={styles.footerHeader}>Nextcom</h2>
                            <p>We create digital experiences for brands companies by using creativity.</p>
                            <span>Nextcom@Copyright2023</span>
                        </div>
                    </Grid>
                    <Grid item xs>
                        <div className={styles.footerSection}>
                            <h4>Company</h4>
                            <ul>
                                <li><a>About company</a></li>
                                <li><a>Our services</a></li>
                                <li><a>Contact us</a></li>
                                <li><a>About us</a></li>
                            </ul>
                        </div>
                    </Grid>
                    <Grid item xs>
                        <div className={styles.footerSection}>
                            <h4>Resources</h4>
                            <ul>
                                <li><a>Theme guide</a></li>
                                <li><a>Support desk</a></li>
                                <li><a>What we offer</a></li>
                                <li><a>Company history</a></li>
                            </ul>
                        </div>
                    </Grid>
                    <Grid item xs>
                        <div className={styles.footerSection}>
                            <h4>Additional</h4>
                            <ul>
                                <li><a>Our story</a></li>
                                <li><a>Who we are</a></li>
                                <li><a>Our process</a></li>
                                <li><a>Latest news</a></li>
                            </ul>
                        </div>
                    </Grid>
                    <Grid item xs>
                        <div className={styles.footerSection}>
                            <h4>Services</h4>
                            <ul>
                                <li><a>Brand experience</a></li>
                                <li><a>E-commerce website</a></li>
                                <li><a>Content writing</a></li>
                                <li><a>Marketing strategy</a></li>
                            </ul>
                        </div>
                    </Grid>
                </Grid>
            </div>
        );
    }
}

export default Footer;