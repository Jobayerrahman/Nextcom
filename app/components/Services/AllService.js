import { Component } from "react";
import Service from "./Service";
import styles from './AllService.module.scss';
import serviceImage01 from '../../../public/Image/Banner-01.jpg'
import serviceImage02 from '../../../public/Image/Banner-02.jpg'
import serviceImage03 from '../../../public/Image/Banner-03.jpg'

class AllService extends Component{
    render(){
        return(
            <div className={styles.allServiceWrapper}>
                <h2>What We Do</h2>
                <div className={styles.allServiceDescribtion}>
                    Lorem ipsum is simply dummy text printing typesetting industry lorem ipsum has dummy.
                    Lorem ipsum is simply dummy text printing typesetting industry lorem ipsum has dummy.
                    Lorem ipsum is simply dummy text printing typesetting industry lorem ipsum has dummy.
                    Lorem ipsum is simply dummy text printing typesetting industry lorem ipsum has dummy.</div>
                <div className={styles.allService}>
                    <Service img={serviceImage01} />
                    <Service img={serviceImage02} />
                    <Service img={serviceImage03} />
                </div>
            </div>
        );
    }
}

export default AllService;