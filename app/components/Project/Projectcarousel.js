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
            <div className={styles.projectCarouselWrapper}>
              <h2>Our Projects</h2>
              <p>Lorem ipsum is simply dummy text printing typesetting industry lorem ipsum has dummy. 
                Lorem ipsum is simply dummy text printing typesetting industry lorem ipsum has dummy. 
                Lorem ipsum is simply dummy text printing typesetting industry lorem.</p>
              <div className={styles.projectCarouselContainer}>
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
            </div>
        );
    }
}

export default Projectcarousel;