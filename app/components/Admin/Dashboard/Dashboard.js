import React, { Component } from 'react';
import styles from './Dashboard.module.scss';
import DashboardInfoDisplay from './Displays/DashboardInfoDisplay';
import DashboardForm from './Forms/DashboardForm';

class Dashboard extends Component {
    constructor(props){
        super(props)

        this.state = {
            showEditForm: false,
            banner : []
        }
    }

    handleEdit = async (id,event) =>{
        event.preventDefault();
        const request = { method: 'GET', };
        await fetch(`/api/topbanner/${id}`, request)
            .then(response => response.json())
            .then(data => this.setState({ showEditForm: true, banner: data.data }));
    }

    render() {
        const  { showEditForm, banner } = this.state;
        return (
            <div className={styles.dashboardWrapper}>
                <div className={styles.dashboardFormWrapper}>
                    <h2>Top Banner Information Create</h2>
                    <DashboardForm showEditForm={showEditForm} banner={banner}/>
                </div>
                <div className={styles.dashboardInfoWrapper}>
                    <h2>Created Information</h2>
                    <DashboardInfoDisplay handleEdit={this.handleEdit}/>
                </div>
            </div>
        );
    }
}

export default Dashboard;