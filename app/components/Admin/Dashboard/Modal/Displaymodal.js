"use client"
import React, { Component } from 'react';
import {displayModal, nonDisplayModal, mainModal, modalHeader, modalBody, displayItem} from './Displaymodal.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

class Displaymodal extends Component {
    constructor(props){
        super(props);
        this.state = {
            topbanner: [],
        };
    }

    // componentDidMount(){
    //     fetch(`http://localhost:3000/api/topbanner/${this.props.id}`)
    //         .then(response => response.json())
    //         .then(data => this.setState({ topbanner: data.data }));
    // }

    render() {
        const { banner, show, close } = this.props;
        const showHiddenModal = show ? displayModal: nonDisplayModal;
        return (
            <div className={showHiddenModal}>
                <div className={mainModal}>
                    <div className={modalHeader}>
                        <h2>{banner.title}</h2>
                        <FontAwesomeIcon onClick={close} icon={faXmark} />
                    </div>
                    <div className={modalBody}>
                        <div className={displayItem}>
                            <h4>"Id": </h4>
                            <h6>{banner._id}</h6>
                        </div>
                        <div className={displayItem}>
                            <h4>"Title": </h4>
                            <h6>{banner.title}</h6>
                        </div>
                        <div className={displayItem}>
                            <h4>"Description": </h4>
                            <h6>{banner.description}</h6>
                        </div>
                        <div className={displayItem}>
                            <h4>"CreatedAt": </h4>
                            <h6>{banner.createdAt}</h6>
                        </div>
                        <div className={displayItem}>
                            <h4>"UpdatedAt": </h4>
                            <h6>{banner.updatedAt}</h6>
                        </div>
                        <div className={displayItem}>
                            <h4>"image_url": </h4>
                            <h6>{banner.image_url}</h6>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Displaymodal;