import React, { Component } from 'react';
import Default from '../app/layouts/Default/Default'
import ServicePage from '../app/templates/ServicePage/ServicePage';
import { loadService } from '../app/libs/loadApi/LoadServices';
import HomeContext from '../app/libs/contextApi/HomeContext';


class Service extends Component {
    render(){
        const {service} = this.props;
        return (
            <Default>
                <HomeContext.Provider value={{services:{service}}}>
                    <ServicePage />
                </HomeContext.Provider>
            </Default>
        );
    }
};

Service.defaultProps = {
    service: [],
}


export async function getServerSideProps(){
    const service = await loadService();

    return { 
        props:{
            service: service?.data || [],
        }, 
    }

}

export default Service;