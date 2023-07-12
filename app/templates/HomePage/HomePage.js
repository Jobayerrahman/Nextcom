import React, { Component } from "react";
import styles from './HomePage.module.scss';
import TopBanner from "../../components/Banner/TopBanner";
import AllService from "../../components/Services/AllService";
import Summary from "../../components/Summary/Summary";
class HomePage extends Component {
    render(){
        return (
            <>
                <TopBanner/>
                <AllService/>
                <Summary/>
            </>
        )
    }
}

export default HomePage;