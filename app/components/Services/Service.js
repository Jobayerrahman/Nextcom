import { Component } from "react";
import Image from "next/image";
import styles from './Service.module.scss';
import Button from '@mui/material/Button';

class Service extends Component{
    render(){
        const { title, description, image_url } = this.props.service;
        return(
            <div className={styles.serviceCard}>
                <Image 
                    className={styles.serviceImage} 
                    src={image_url} 
                    alt="service image"
                    width={320} 
                    height={192}
                    style={{objectFit: 'cover'}}
                />
                <div className={styles.serviceCardBody}>
                    <h1 className={styles.serviceTitle}>{title}</h1>
                    <p className={styles.servicesDescribtion}>{description}</p>
                    <Button className={styles.serviceButton}>Read more</Button>
                </div>
            </div>
        );
    }
}

export default Service;