import React, { Component } from 'react';
import Image from 'next/image';
import styles from './TopBanner.module.scss';
import Button from '@mui/material/Button';
import Carousel from 'react-material-ui-carousel';

class TopBanner extends Component{
    render(){
        // var items = [
        //     {
        //         name: "Creative Work",
        //         image: Bannerimage01,
        //         description: "Grow up your Business with us"
        //     },
        //     {
        //         name: "Amazing Prospects",
        //         image: Bannerimage02,
        //         description: "Quickly cummunicate bleeding-edge best practices"
        //     },
        //     {
        //         name: "Flexible Works",
        //         image: Bannerimage03,
        //         description: "Seamlessly engineer effective synergy after e-business experiences"
        //     }
        // ]

        const topBannerItems = this.props.topBanner;
        console.log(topBannerItems);
        return(
            <Carousel className={styles.topCarousel}>
                {
                    topBannerItems.map( (item, i) => <Item key={i} item={item} /> )
                }
            </Carousel>
        )
    }
}

function Item(props)
{
    return (
        <div className={styles.topBannerWrapper}>
            <div className={styles.topFixedBanner}>
                <Image 
                    className={styles.topBannerImage} 
                    src={props.item.image_url} 
                    alt=''
                    width={600}
                    height={600}
                    style={{
                        objectFit: 'cover'
                    }}
                />
                <div className={styles.topContent}>
                    <h1 className={styles.topTitle}>{props.item.title}</h1>
                    <h5 className={styles.topSubTitle}>{props.item.description}</h5>
                    <Button className={styles.topButton} variant="contained">Order Now</Button>
                </div>
            </div>
        </div>           
    )
}

export default TopBanner;