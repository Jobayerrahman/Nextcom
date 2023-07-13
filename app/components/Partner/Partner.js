import React, { Component } from 'react';
import styles from './Partner.module.scss';
import Slider from "react-slick";
import Image from 'next/image';
import amazon from '../../../public/Image/amazon.svg'
import jetblue from '../../../public/Image/jetblue.svg'
import linkedin from '../../../public/Image/linkedin.svg'
import natgeo from '../../../public/Image/nat-geo.svg'
import zillow from '../../../public/Image/zillow.svg'
class Partner extends Component {
    render() {
        const settings = {
            className: "center",
            centerPadding: "60px",
            slidesToShow: 5,
            swipeToSlide: true,
            afterChange: function(index) {
              console.log(
                `Slider Changed to: ${index + 1}, background: #222; color: #bada55`
              );
            }
          };
        return (
            <div className={styles.partnerWrapper}>
                <Slider {...settings}>
                <div className={styles.partnerItem}>
                    <Image  src={amazon}/>
                </div>
                <div  className={styles.partnerItem}>
                    <Image  src={jetblue}/>
                </div>
                <div  className={styles.partnerItem}>
                    <Image  src={linkedin}/>
                </div>
                <div  className={styles.partnerItem}>
                    <Image  src={natgeo}/>
                </div>
                <div  className={styles.partnerItem}>
                    <Image  src={zillow}/>
                </div>
                <div  className={styles.partnerItem}>
                    <Image  src={amazon}/>
                </div>
                <div  className={styles.partnerItem}>
                    <Image  src={jetblue}/>
                </div>
                <div  className={styles.partnerItem}>
                    <Image  src={linkedin}/>
                </div>
                <div  className={styles.partnerItem}>
                    <Image  src={natgeo}/>
                </div>
                <div  className={styles.partnerItem}>
                    <Image  src={zillow}/>
                </div>
                
                </Slider>
            </div>
        );
    }
}

export default Partner;