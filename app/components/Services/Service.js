import { Component } from "react";
import Image from "next/image";
import styles from './Service.module.scss';

class Service extends Component{
    render(){
        return(
            <div className={styles.serviceCard}>
                <Image className={styles.servicesImages} src={this.props.img}/>
                <h1 className={styles.serviceTitle}>Heading Title</h1>
                <p className={styles.servicesDescribtion}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
            </div>
        );
    }
}

export default Service;