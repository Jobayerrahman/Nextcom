import React, { Component } from 'react';
import Image from 'next/image';
import styles from './TopBanner.module.scss';
import Button from '@mui/material/Button';
import Carousel from 'react-material-ui-carousel';
import HomeContext from '../../libs/contextApi/HomeContext';

class TopBanner extends Component{
    // constructor(props){
    //     super(props);

    //     this.state = {
    //         topbanner: [],
    //     };
    // }

    // componentDidMount(){
    //     fetch('http://localhost:3000/api/topbanner')
    //         .then(response => response.json())
    //         .then(data => this.setState({ topbanner: data.data }));
    // }
    render(){

        // const {topbanner} = this.state;
        return(
            <HomeContext.Consumer>
                {({topBannerItems}) =>(
                    <Carousel className={styles.topCarousel}>
                        {
                            (topBannerItems.topBanner).map( (item, i) => <Item key={i} item={item} /> )
                        }
                    </Carousel>
                )}
            </HomeContext.Consumer>
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
                    <Button className={styles.topButton}>Contact Us</Button>
                </div>
            </div>
        </div>           
    )
}

export default TopBanner;