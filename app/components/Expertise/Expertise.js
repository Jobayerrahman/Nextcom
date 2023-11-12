import React, { Component } from 'react';
import styles from './Expertise.module.scss';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
class Expertise extends Component {
    render() {
        const percentage1 = 90;
        const percentage2 = 86;
        return (
            <div className={styles.expertiseWrapper}>
                <div className={styles.expertiseContainer}>
                    <div className={styles.expertiseIntroduction}>
                        <h4>Our Expertise</h4>
                        <h2>We design brand, digital experience that engage the right customers</h2>
                        <a>Discover Nextcom</a>
                    </div>
                    <div className={styles.expertiseContent}>
                        <div className={styles.expertiseContext} >
                            <div className={styles.expertiseProgressBar}>
                                <CircularProgressbar value={percentage1} text={`${percentage1}%`} />
                            </div>
                            <h2>Effective strategy</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipiscing elit do eiusmod tempor.</p>
                        </div>
                        <div className={styles.expertiseContext}>
                            <div className={styles.expertiseProgressBar}>
                                <CircularProgressbar value={percentage2} text={`${percentage2}%`} />
                            </div>
                            <h2>Effective strategy</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipiscing elit do eiusmod tempor.</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Expertise;