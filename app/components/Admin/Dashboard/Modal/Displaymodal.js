import React, { Component } from 'react';
import styles from './Displaymodal.module.scss';

class Displaymodal extends Component {
    render() {
        return (
            <div className={styles.modal}>
                <h2>Hello world</h2>
            </div>
        );
    }
}

export default Displaymodal;