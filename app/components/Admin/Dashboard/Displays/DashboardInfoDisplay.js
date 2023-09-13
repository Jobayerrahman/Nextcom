"use client"
import React, { Component } from 'react';
import styles from './DashboardInfoDisplay.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFile, faPenToSquare, faTrash } from '@fortawesome/free-solid-svg-icons';
import Displaymodal from '../Modal/Displaymodal';

class DashboardInfoDisplay extends Component {
    constructor(props){
        super(props);

        this.state = {
            topbanner: [],
            showModal: false,
            item: [],
        };
    }

    componentDidMount(){
        fetch('http://localhost:3000/api/topbanner')
            .then(response => response.json())
            .then(data => this.setState({ topbanner: data.data }));
    }

    handleDelete = async (id,event) => {
        event.preventDefault();
        const comfirmed = confirm("Are you sure?");

        const request = {
            method: 'DELETE',
        };
        if(comfirmed){
            const res = await fetch(`/api/topbanner/${id}`, request);

            if(res.ok){
                alert("Item Delete!")
            }else{
                alert("Something is wrong!")
            }
        }

    }

    handleModalOpen = async (id,event) =>{
        event.preventDefault();
        const request = { method: 'GET', };
        await fetch(`/api/topbanner/${id}`, request)
            .then(response => response.json())
            .then(data => this.setState({ showModal: true, item: data.data }));
    }
    
    handleModalClose = () =>{
        this.setState({ showModal: false });
    }
    
    render() {
        const { item, topbanner, showModal } = this.state;
        return (
            <div className={styles.infoDisplayWrapper}>
                {topbanner.map((t)=>(
                    <div className={styles.infoDisplayCard}>
                        <div className={styles.infoDisplay}>
                            <div className={styles.infoDisplayItem}>
                                <h4>Id : </h4>
                                <h6>{t._id}</h6>
                            </div>
                            <div className={styles.infoDisplayItem}>
                                <h4>Title : </h4>
                                <h6>{t.title}</h6>
                            </div>
                            <div className={styles.infoDisplayItem}>
                                <h4>Describtion : </h4>
                                <h6>{t.description}</h6>
                            </div>
                            <div className={styles.infoDisplayItem}>
                                <h4>Iamge_url : </h4>
                                <h6>{t.image_url}</h6>
                            </div>
                            <div className={styles.infoDisplayItem}>
                                <h4>Describtion : </h4>
                                <h6>{t.description}</h6>
                            </div>
                        </div>
                        <div className={styles.infoAction}>
                            <FontAwesomeIcon onClick={(event) => this.handleModalOpen(t._id, event)} className={styles.infoActionBtn} icon={faFile} />
                            <FontAwesomeIcon onClick={(event) => this.props.handleEdit(t._id, event)} className={styles.infoActionBtn} icon={faPenToSquare} />
                            <FontAwesomeIcon onClick={(event) => this.handleDelete(t._id, event)} className={styles.infoActionBtn} icon={faTrash} />
                        </div>
                    </div>
                ))}
                <Displaymodal banner={item} show={showModal} close={this.handleModalClose}/>     
            </div>
        );
    }
}

export default DashboardInfoDisplay;