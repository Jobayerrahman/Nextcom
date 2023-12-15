import React, { Component } from 'react';
import TopNagivation from '../../components/TopNavigation/TopNavigation';
import AllService from "../../components/Services/AllService";

class ServicePage extends Component {
    render() {
        return (
            <div>
                <TopNagivation/>
                <AllService services={this.props.services}/>
            </div>
        );
    }
}

export default ServicePage;