import React, { Component } from 'react';
import Adminsidenavigation from '../../components/SideNavigation/Adminsidenavigation';
import Dashboard from '../../components/Admin/Dashboard';
import styles from './DashboardPage.module.scss';
class AdminPage extends Component {
    render() {
        return (
            <div className={styles.dashboardPageWrapper}>
                <Adminsidenavigation/>
                <Dashboard/>
            </div>
        );
    }
}

export default AdminPage;