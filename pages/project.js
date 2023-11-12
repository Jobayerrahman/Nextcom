import React, { Component } from 'react';
import ProjectPage from '../app/templates/ProjectPage/ProjectPage';
import Default from '../app/layouts/Default/Default';

class project extends Component {
    render() {
        return (
            <Default>
                <ProjectPage/>
            </Default>
        );
    }
}

export default project;