import React, { Component } from "react";
import styles from './HomePage.module.scss';

class HomePage extends Component {
    render(){
        return (
            <>
                <h2 className={styles.homeTitle}>Home Page Content</h2>
            </>
        )
    }
}

export default HomePage;