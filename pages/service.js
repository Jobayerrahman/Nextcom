import React from 'react';
import Default from '../app/layouts/Default/Default'
import ServicePage from '../app/templates/ServicePage/ServicePage';


export async function getServerSideProps(){
    const service_Response = await fetch('http://localhost:3000/api/services');
    const service_Data = await service_Response.json()

    return { 
        props:{
            services: service_Data.data,
        }, 
    }

}

const service = ({services}) => {
    return (
        <Default>
            <ServicePage services={services}/>
        </Default>
    );
};

export default service;