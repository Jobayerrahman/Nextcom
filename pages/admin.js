import React, { Component } from 'react';
import DashboardPage from '../app/templates/AdminPage/DashboardPage';
import Admin from '../app/layouts/Admin/Admin';
class admin extends Component {
    render() {
        return (
            <Admin>
                <DashboardPage/>
            </Admin>
        );
    }
}

export default admin;