import React, { Component } from 'react';
import styles from './Process.module.scss';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import { useTheme } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Image from "next/image";
import processImage01 from '../../../public/Image/Banner-01.jpg';
import processImage02 from '../../../public/Image/Banner-02.jpg';
import processImage03 from '../../../public/Image/Banner-03.jpg';
function ProcessTab(props){
    const { children, value, index, ...other } = props;
    return (
        <div 
            className={styles.processContent}
            role='tappanel'
            hidden={value !== index}
            id={`full-width-tab-${index}`}
            aria-labelledby={`full-width-tabpanel-${index}`}
            {...other}
        >

            {value === index &&(
                <div>
                    {children}
                </div>
            )}
        </div>
    );
}

ProcessTab.prototypes ={
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function allProps(index){
    return{
        id: `full-width-tab-${index}`,
        'aria-controls': `full-width-tabpanel-${index}`,
    };
}

export default function FullWidthProcessTabs(){
    const theme = useTheme();
    const [ value, setValue ] = React.useState(0);

    const hanadleChange = (event, newValue) =>{
        setValue(newValue);
    }

    const hanadleChangeIndex = (index) =>{
        setValue(index);
    }

    return(
        <div className={styles.processWrapper}>
            <div>
                <Tabs
                    value={value}
                    onChange={hanadleChange}
                    indicatorColor="secondary"
                    textColor="inherit"
                    variant="fullWidth"
                    aria-label="full width tabs example"
                >
                    <Tab className={styles.processWrapperTab} label="Planning" {...allProps(0)}/>
                    <Tab className={styles.processWrapperTab} label="Researching" {...allProps(1)}/>
                    <Tab className={styles.processWrapperTab} label="Target" {...allProps(2)}/>
                    <Tab className={styles.processWrapperTab} label="Execution" {...allProps(3)}/>
                </Tabs>
            </div>
            <SwipeableViews
                axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                index={value}
                onChangeIndex={hanadleChangeIndex}
            >
                <ProcessTab value={value} index={0} dir={theme.direction}>
                    <div className={styles.processContentTab}>
                        <div className={styles.processTabImage}>
                            <Image className={styles.processImage} src={processImage01}/>
                        </div>
                        <div className={styles.processContext}>
                            <h4>Planning process</h4>
                            <h2>Business planning</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipiscing elit do eiusmod tempor incididunt ut labore et dolore magna ut enim ad minim veniam nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                            <a className={styles.processButton}>Discover more</a>
                        </div>
                    </div>
                </ProcessTab>
                <ProcessTab value={value} index={1} dir={theme.direction}>
                    <div className={styles.processContentTab}>
                        <div className={styles.processTabImage}>
                            <Image className={styles.processImage} src={processImage02}/>
                        </div>
                        <div className={styles.processContext}>
                            <h4>Researching process</h4>
                            <h2>Business planning</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipiscing elit do eiusmod tempor incididunt ut labore et dolore magna ut enim ad minim veniam nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                            <a className={styles.processButton}>Discover more</a>
                        </div>
                    </div>
                </ProcessTab>
                <ProcessTab value={value} index={2} dir={theme.direction}>
                    <div className={styles.processContentTab}>
                        <div className={styles.processTabImage}>
                            <Image className={styles.processImage} src={processImage01}/>
                        </div>
                        <div className={styles.processContext}>
                            <h4>Targeting process</h4>
                            <h2>Business planning</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipiscing elit do eiusmod tempor incididunt ut labore et dolore magna ut enim ad minim veniam nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                            <a className={styles.processButton}>Discover more</a>
                        </div>
                    </div>
                </ProcessTab>
                <ProcessTab value={value} index={3} dir={theme.direction}>
                    <div className={styles.processContentTab}>
                        <div className={styles.processTabImage}>
                            <Image className={styles.processImage} src={processImage03}/>
                        </div>
                        <div className={styles.processContext}>
                            <h4>Execution process</h4>
                            <h2>Business planning</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipiscing elit do eiusmod tempor incididunt ut labore et dolore magna ut enim ad minim veniam nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                            <a className={styles.processButton}>Discover more</a>
                        </div>
                    </div>
                </ProcessTab>
            </SwipeableViews>
        </div>
    )
}
