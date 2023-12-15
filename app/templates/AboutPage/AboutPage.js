import React from 'react';
import TopNagivation from '../../components/TopNavigation/TopNavigation';
import Expertise from '../../components/Expertise/Expertise';
import About from "../../components/About/About";
export default function AboutPage(){
    return(
        <>
            <TopNagivation/>
            <About/>
            <Expertise/>
        </>
    )
}