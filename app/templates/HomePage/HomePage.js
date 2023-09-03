import React, { Component } from "react";
import TopBanner from "../../components/Banner/TopBanner";
import AllService from "../../components/Services/AllService";
import Summary from "../../components/Summary/Summary";
import Videoplayer from "../../components/Video/Videoplayer";
import Partner from "../../components/Partner/Partner";
import Blog from "../../components/Blog/Blog";
import Testimonial from "../../components/Testimonial/Testimonial";
import Member from "../../components/Member/Member";
import About from "../../components/About/About";
import Expertise from "../../components/Expertise/Expertise";
import Process from "../../components/Process/Process";
import Projectcarousel from "../../components/Project/Projectcarousel";
class HomePage extends Component {
    render(){
        return (
            <>
                <TopBanner/>
                <AllService/>
                <About/>
                <Projectcarousel/>
                <Process/>
                <Expertise/>
                <Videoplayer/>
                <Summary/>
                <Blog/>
                <Testimonial/>
                <Member/>
                <Partner/>
            </>
        )
    }
}

export default HomePage;