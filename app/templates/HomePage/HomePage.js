import React, { Component } from "react";
import TopBanner from "../../components/Banner/TopBanner";
import AllService from "../../components/Services/AllService";
import Summary from "../../components/Summary/Summary";
import Videoplayer from "../../components/Video/Videoplayer";
class HomePage extends Component {
    render(){
        return (
            <>
                <TopBanner/>
                <AllService/>
                <Videoplayer/>
                <Summary/>
            </>
        )
    }
}

export default HomePage;