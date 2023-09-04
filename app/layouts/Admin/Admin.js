import React, { Component } from 'react';
import Footer from "../../modules/Footer/Footer";
import styles from './Admin.module.scss';
class Admin extends Component {
    render() {
        return (
            <div className={styles.admin}>
                <div>{this.props.children}</div>
                <Footer/>
            </div>
        );
    }
}

export default Admin;