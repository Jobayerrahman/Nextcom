import React, { Component } from 'react';
import Projectpage from '../app/templates/ProjectPage/Projectpage';
import Default from '../app/layouts/Default/Default';

class project extends Component {
    render() {
        return (
            <Default>
                <Projectpage/>
            </Default>
        );
    }
}

export default project;