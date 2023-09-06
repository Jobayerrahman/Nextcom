import React, { Component } from 'react';
import styles from './DashboardInfoDisplay.module.scss';

class DashboardInfoDisplay extends Component {
    constructor(props){
        super(props);

        this.state = {
            topbanner: [],
        };
    }

    componentDidMount(){
        fetch('http://localhost:3000/api/topbanner')
            .then(response => response.json())
            .then(data => this.setState({ topbanner: data.data }));
    }

    render() {
        const { topbanner } = this.state;

        return (
            <div className={styles.infoDisplayWrapper}>
                {topbanner.map((t)=>(
                    <div className={styles.infoDisplayCard}>
                        <div className={styles.infoDisplay}>
                            <h4>Id : </h4>
                            <h6>{t._id}</h6>
                        </div>
                        <div className={styles.infoDisplay}>
                            <h4>Title : </h4>
                            <h6>{t.title}</h6>
                        </div>
                        <div className={styles.infoDisplay}>
                            <h4>Describtion : </h4>
                            <h6>{t.description}</h6>
                        </div>
                        <div className={styles.infoDisplay}>
                            <h4>Iamge_url : </h4>
                            <h6>{t.image_url}</h6>
                        </div>
                        <div className={styles.infoDisplay}>
                            <h4>Describtion : </h4>
                            <h6>{t.description}</h6>
                        </div>
                    </div>
                ))}
            </div>
        );
    }
}

export default DashboardInfoDisplay;