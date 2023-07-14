import React, { Component } from "react";
import TopBanner from "../../components/Banner/TopBanner";
import AllService from "../../components/Services/AllService";
import Summary from "../../components/Summary/Summary";
import Videoplayer from "../../components/Video/Videoplayer";
import Partner from "../../components/Partner/Partner";
import Blog from "../../components/Blog/Blog";
class HomePage extends Component {
    render(){
        return (
            <>
                <TopBanner/>
                <AllService/>
                <Videoplayer/>
                <Summary/>
                <Blog/>
                <Partner/>
            </>
        )
    }
}

export default HomePage;