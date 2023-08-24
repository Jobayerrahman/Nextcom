import { Component } from "react";
import Image from "next/image";
import styles from './Service.module.scss';
import Button from '@mui/material/Button';

class Service extends Component{
    render(){
        const { title, description} = this.props.service;
        return(
            <div className={styles.serviceCard}>
                <Image className={styles.serviceImage} src={this.props.img} alt=""/>
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