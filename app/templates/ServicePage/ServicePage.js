import React, { Component } from 'react';
import TopNagivation from '../../components/TopNavigation/TopNavigation';
import AllService from "../../components/Services/AllService";
import Process from "../../components/Process/Process";

class ServicePage extends Component {
    render() {
        return (
            <div>
                <TopNagivation/>
                <AllService/>
                <Process/>
            </div>
        );
    }
}

export default ServicePage;