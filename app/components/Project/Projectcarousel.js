import React, { Component } from 'react';
import Project from './Project';
import Slider from "react-slick";
import styles from './Projectcarousel.module.scss';

class Projectcarousel extends Component {
    render() {
        const settings = {
            className: "center",
            infinite: true,
            centerPadding: "60px",
            slidesToShow: 3,
            swipeToSlide: true,
            afterChange: function(index) {
              console.log(
                `Slider Changed to: ${index + 1}, background: #222; color: #bada55`
              );
            }
          };
        return (
            <div className={styles.projectCarouselWrapper}>
                <Slider {...settings}>
                    <div>
                        <Project/>
                    </div>
                    <div>
                        <Project/>
                    </div>
                    <div>
                        <Project/>
                    </div>
                    <div>
                        <Project/>
                    </div>
                    <div>
                        <Project/>
                    </div>
                    <div>
                        <Project/>
                    </div>
                </Slider>
            </div>
        );
    }
}

export default Projectcarousel;