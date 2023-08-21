import { Component } from "react";
import Image from "next/image";
import styles from './Service.module.scss';
import Button from '@mui/material/Button';

class Service extends Component{
    render(){
        return(
            <div className={styles.serviceCard}>
                <Image className={styles.serviceImage} src={this.props.img}/>
                <div className={styles.serviceCardBody}>
                    <h1 className={styles.serviceTitle}>{this.props.service.title}</h1>
                    <p className={styles.servicesDescribtion}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                    <Button className={styles.serviceButton}>Read more</Button>
                </div>
            </div>
        );
    }
}

export default Service;