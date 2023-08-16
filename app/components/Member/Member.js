import React, { Component } from 'react';
import styles from './Member.module.scss';
import Grid from '@mui/material/Grid';
import Slider from "react-slick";
import Image from 'next/image';
import profile from '../../../public/Image/profile.jpg';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faPlayCircle} from '@fortawesome/free-solid-svg-icons';
class Member extends Component {
    render() {
        const settings = {
            className: "center",
            infinite: true,
            centerPadding: "60px",
            slidesToShow: 3,
            swipeToSlide: true,
            responsive: [
                {
                  breakpoint: 1024,
                  settings: {
                    arrows: false,
                    slidesToShow: 2,
                  },
                },
                {
                  breakpoint: 500,
                  settings: {
                    arrows: false,
                    slidesToShow: 1,
                  },
                },
              ],
            afterChange: function(index) {
              console.log(
                `Slider Changed to: ${index + 1}, background: #222; color: #bada55`
              );
            }
          };
        return (
            <div className={styles.memberWrapper}>
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={12} md={4}>
                        <div className={styles.memberIntroduction}>
                            <h4 className={styles.memberHeading}>Meet the team</h4>
                            <h2 className={styles.memberTitle}>Save your time and money by choosing our professional team.</h2>
                            <p className={styles.memberDescribtion}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                            <a className={styles.memberButton}>See All Members</a>
                        </div>
                    </Grid>
                    <Grid item xs={12} sm={12} md={8}>
                        <div className={styles.memberSlider}>
                            <Slider {...settings}>
                                <div className={styles.memberCrad}>
                                    <Image className={styles.memberImage} src={profile}/>
                                    <h3 className={styles.memberProfileTitle}>Jhon Smit</h3>
                                    <span className={styles.memberProfileDesignation}>Software Engineer</span>
                                    <p className={styles.memberProfileDescribtion}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                    <div className={styles.memberMediaIcon}></div>
                                </div>
                                <div className={styles.memberCrad}>
                                    <Image className={styles.memberImage} src={profile}/>
                                    <h3 className={styles.memberProfileTitle}>Jhon Smit</h3>
                                    <span className={styles.memberProfileDesignation}>Software Engineer</span>
                                    <p className={styles.memberProfileDescribtion}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                    <div className={styles.memberMediaIcon}></div>
                                </div>
                                <div className={styles.memberCrad}>
                                    <Image className={styles.memberImage} src={profile}/>
                                    <h3 className={styles.memberProfileTitle}>Jhon Smit</h3>
                                    <span className={styles.memberProfileDesignation}>Software Engineer</span>
                                    <p className={styles.memberProfileDescribtion}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                    <div className={styles.memberMediaIcon}></div>
                                </div>
                                <div className={styles.memberCrad}>
                                    <Image className={styles.memberImage} src={profile}/>
                                    <h3 className={styles.memberProfileTitle}>Jhon Smit</h3>
                                    <span className={styles.memberProfileDesignation}>Software Engineer</span>
                                    <p className={styles.memberProfileDescribtion}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                    <div className={styles.memberMediaIcon}></div>
                                </div>
                                <div className={styles.memberCrad}>
                                    <Image className={styles.memberImage} src={profile}/>
                                    <h3 className={styles.memberProfileTitle}>Jhon Smit</h3>
                                    <span className={styles.memberProfileDesignation}>Software Engineer</span>
                                    <p className={styles.memberProfileDescribtion}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                    <div className={styles.memberMediaIcon}></div>
                                </div>
                            </Slider>
                        </div>
                    </Grid>
                </Grid>
            </div>
        );
    }
}

export default Member;