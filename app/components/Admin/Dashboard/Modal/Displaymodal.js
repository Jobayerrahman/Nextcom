import React, { Component } from 'react';
import {displayModal, nonDisplayModal, mainModal} from './Displaymodal.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

class Displaymodal extends Component {
    constructor(props){
        super(props);
    }

    render() {
        const { show, close } = this.props;
        const showHiddenModal = show ? displayModal: nonDisplayModal;
        return (
            <div className={showHiddenModal}>
                <div className={mainModal}>
                    <h2>Hello world</h2>
                    <FontAwesomeIcon onClick={close} icon={faXmark} />
                </div>
            </div>
        );
    }
}

export default Displaymodal;