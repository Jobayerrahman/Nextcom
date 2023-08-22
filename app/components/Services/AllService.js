import { Component, useState, useEffect } from "react";
import Service from "./Service";
import styles from './AllService.module.scss';
import serviceImage01 from '../../../public/Image/Banner-01.jpg'
import serviceImage02 from '../../../public/Image/Banner-02.jpg'
import serviceImage03 from '../../../public/Image/Banner-03.jpg'
function AllService({services}){
    // const [services, setServices] = useState([])
    // useEffect(() => {
    //     const fetchData = async()=>{
    //         const res = await fetch('/api/serviceapi');
    //         const data = await res.json()
    //         setServices(data);
    //     }

    //     fetchData()
    //         .catch(console.error);
    // }, []);
    return(
        <div className={styles.allServiceWrapper}>
            {services.map((service) => (
                <div>
                    <h2>{service.heading}</h2>
                    <div className={styles.allServiceDescribtion}>{service.description}</div>
                    <div className={styles.allService}>{service.service.map((s)=>(
                        <Service img={serviceImage01} service={s}/>
                    ))}</div>
                </div>
            ))}
        </div>
    );
}

export default AllService;

