import React, { Component } from 'react';
import Image from 'next/image';
import styles from './TopBanner.module.scss';
import Button from '@mui/material/Button';
import Carousel from 'react-material-ui-carousel';
import Bannerimage01 from '../../../public/Image/Banner-01.jpg'

class TopBanner extends Component{
    render(){
        var items = [
            {
                name: "Nextcom",
                image: Bannerimage01,
                description: "Grow up your Business with us"
            },
            {
                name: "Nextcom",
                image: 2,
                description: "Grow up your Business with us"
            },
            {
                name: "Nextcom",
                image: 3,
                description: "Grow up your Business with us"
            }
        ]
        return(
            <Carousel className={styles.topCarousel}>
                {
                    items.map( (item, i) => <Item key={i} item={item} /> )
                }
            </Carousel>
        )
    }
}

function Item(props)
{
    return (
        <div className={styles.topBannerWrapper}>
            {/* <div className={styles.topFixedBanner}>
                <div className={styles.topBannerOverlay}>
                    <div className={styles.topContent}>
                        <h1 className={styles.topTitle}>{props.item.name}</h1>
                        <h5 className={styles.topSubTitle}>{props.item.description}</h5>
                        <Button className={styles.topButton} variant="contained">Order Now</Button>
                    </div>
                </div>
            </div> */}
            <div className={styles.topFixedBanner}>
                <Image className={styles.topBannerImage} src={Bannerimage01}/>
                <div className={styles.topContent}>
                    <h1 className={styles.topTitle}>{props.item.name}</h1>
                    <h5 className={styles.topSubTitle}>{props.item.description}</h5>
                    <Button className={styles.topButton} variant="contained">Order Now</Button>
                </div>
            </div>
        </div>           
    )
}

export default TopBanner;