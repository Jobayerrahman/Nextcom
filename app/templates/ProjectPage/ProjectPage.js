import React, { Component } from 'react';
import Project from '../../components/Project/Project';
import TopNagivation from '../../components/TopNavigation/TopNavigation';
import Summary from '../../components/Summary/Summary';

class ProjectPage extends Component {
    render() {
        return (
            <div>
                <TopNagivation/>
                <div className=''>
                    <Project/>
                </div>
                <Summary/>
            </div>
        );
    }
}

export default ProjectPage;