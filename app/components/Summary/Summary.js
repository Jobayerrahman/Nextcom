import React, { Component } from 'react';
import Grid from '@mui/material/Grid';
import styles from './Summary.module.scss';
import CountUp from 'react-countup';
import VisibilitySensor from "react-visibility-sensor";
class Summary extends Component {
    render() {
        return (
            <div className={styles.summaryWrapper}>
                <Grid container spacing={4}>
                    <Grid item xs={12} sm={6} md={3}>
                        <h1 className={styles.counterNumber}>
                            <CountUp start={0} end={4220}>
                            {({ countUpRef, start }) => (
                                <VisibilitySensor onChange={start} delayedCall>
                                <span ref={countUpRef} />
                                </VisibilitySensor>
                            )}
                            </CountUp>
                        </h1>
                        <h4 className={styles.counterTitle}>Working Hours</h4>
                        <hr className={styles.summaryUnderbar}/>
                    </Grid>
                    <Grid item xs={12} sm={6} md={3}>
                        <h1 className={styles.counterNumber}>
                            <CountUp start={0} end={290}>
                            {({ countUpRef, start }) => (
                                <VisibilitySensor onChange={start} delayedCall>
                                <span ref={countUpRef} />
                                </VisibilitySensor>
                            )}
                            </CountUp>
                        </h1>
                        <h4 className={styles.counterTitle}>Total Projects</h4>
                        <hr className={styles.summaryUnderbar}/>
                    </Grid>
                    <Grid item xs={12} sm={6} md={3}>
                        <h1 className={styles.counterNumber}>
                            <CountUp start={0} end={150}>
                            {({ countUpRef, start }) => (
                                <VisibilitySensor onChange={start} delayedCall>
                                <span ref={countUpRef} />
                                </VisibilitySensor>
                            )}
                            </CountUp>
                        </h1>
                        <h4 className={styles.counterTitle}>Work Completed</h4>
                        <hr className={styles.summaryUnderbar}/>
                    </Grid>
                    <Grid item xs={12} sm={6} md={3}>
                        <h1 className={styles.counterNumber}>
                            <CountUp start={0} end={67}>
                            {({ countUpRef, start }) => (
                                <VisibilitySensor onChange={start} delayedCall>
                                <span ref={countUpRef} />
                                </VisibilitySensor>
                            )}
                            </CountUp>
                        </h1>
                        <h4 className={styles.counterTitle}>Total Client</h4>
                        <hr className={styles.summaryUnderbar}/>
                    </Grid>
                </Grid>
            </div>
        );
    }
}

export default Summary;