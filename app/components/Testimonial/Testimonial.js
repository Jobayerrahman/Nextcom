import React, { Component } from 'react';
import styles from './Testimonial.module.scss';
import Slider from "react-slick";
import Rating from '@mui/material/Rating';
class Testimonial extends Component {
    render() {
        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1
          };
        return (
            <div className={styles.testimonialWrapper}>
                <div className={styles.testimonialOverlay}>
                    <div className={styles.testimonialContent}>
                        <h2>Collections from Our Customers.</h2>
                        <p>Appropriately implement user friendly e-markets and backend processes. 
                            Competently expedite competitive vortals rather than client-based testing procedures. 
                            Professionally matrix exceptional schemas vis-a-vis leveraged paradigms. 
                            Authoritatively coordinate just in time networks with strategic potentialities.</p>
                        <a>Read more</a>
                    </div>
                    <div className={styles.testimonialScroller}>
                        <h2 className={styles.testimonialScrollerTitle}>Testimonial</h2>
                        <div className={styles.testimonialScrollerBody}>
                            <Slider {...settings}>
                                <div className={styles.testimonialScrollerItem}>
                                    <p>I've been using Canvas for months now and it has exceeded my expectations. Their support has been great too.
                                        Lorem ipsum is simply dummy text printing typesetting industry lorem ipsum has dummy.</p>
                                    <h3>Jhon Smith</h3>
                                    <span>Nextcom client</span>
                                    <br/>
                                    <Rating className={styles.testimonialScrollerRating} name="half-rating-read" defaultValue={2.5} precision={0.5} readOnly />
                                </div>
                                <div className={styles.testimonialScrollerItem}>
                                    <p>I've been using Canvas for months now and it has exceeded my expectations. Their support has been great too.
                                    Lorem ipsum is simply dummy text printing typesetting industry lorem ipsum has dummy.
                                    </p>
                                    <h3>Jhon Smith</h3>
                                    <span>Nextcom client</span>
                                    <br/>
                                    <Rating className={styles.testimonialScrollerRating} name="half-rating-read" defaultValue={2.5} precision={0.5} readOnly />
                                </div>
                                <div className={styles.testimonialScrollerItem}>
                                    <p>I've been using Canvas for months now and it has exceeded my expectations. Their support has been great too.
                                    Lorem ipsum is simply dummy text printing typesetting industry lorem ipsum has dummy.
                                    </p>
                                    <h3>Jhon Smith</h3>
                                    <span>Nextcom client</span>
                                    <br/>
                                    <Rating className={styles.testimonialScrollerRating} name="half-rating-read" defaultValue={2.5} precision={0.5} readOnly />
                                </div>
                                <div className={styles.testimonialScrollerItem}>
                                    <p>I've been using Canvas for months now and it has exceeded my expectations. Their support has been great too.
                                    Lorem ipsum is simply dummy text printing typesetting industry lorem ipsum has dummy.
                                    </p>
                                    <h3>Jhon Smith</h3>
                                    <span>Nextcom client</span>
                                    <br/>
                                    <Rating className={styles.testimonialScrollerRating} name="half-rating-read" defaultValue={2.5} precision={0.5} readOnly />
                                </div>
                                <div className={styles.testimonialScrollerItem}>
                                    <p>I've been using Canvas for months now and it has exceeded my expectations. Their support has been great too.
                                    Lorem ipsum is simply dummy text printing typesetting industry lorem ipsum has dummy.
                                    </p>
                                    <h3>Jhon Smith</h3>
                                    <span>Nextcom client</span>
                                    <br/>
                                    <Rating className={styles.testimonialScrollerRating} name="half-rating-read" defaultValue={2.5} precision={0.5} readOnly />
                                </div>
                            </Slider>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Testimonial;