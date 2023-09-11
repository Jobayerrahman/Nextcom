import React, { Component } from 'react';
import styles from './Dashboard.module.scss';
import DashboardInfoDisplay from './Displays/DashboardInfoDisplay';
import DashboardForm from './Forms/DashboardForm';

class Dashboard extends Component {
    constructor(props){
        super(props);
    }

    render() {
        const { showModal } = this.props;
        return (
            <div className={styles.dashboardWrapper}>
                <div className={styles.dashboardFormWrapper}>
                    <h2>Top Banner Information Create</h2>
                    <DashboardForm/>
                </div>
                <div className={styles.dashboardInfoWrapper}>
                    <h2>Created Information</h2>
                    <DashboardInfoDisplay/>
                </div>
            </div>
        );
    }
}

export default Dashboard;