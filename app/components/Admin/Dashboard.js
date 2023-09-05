import React, { Component, createRef } from 'react';
import styles from './Dashboard.module.scss';

class Dashboard extends Component {
    constructor(props){
        super(props);

        this.inputRef = createRef();
    }
    render() {
        return (
            <div className={styles.dashboardWrapper}>
                <div className={styles.dashboardFormWrapper}>
                    <h2>Top Banner Information Create</h2>
                    <form className={styles.dashboardForm} onSubmit={this.handleSubmit}>
                        <div className={styles.dashboardFormField}>
                            <label>Title :</label>
                            <input type="text" name="title" ref={this.inputRef} />
                        </div>
                        <div className={styles.dashboardFormField}>
                            <label>Describtion :</label>
                            <input type="text" name="describtion" ref={this.inputRef} />
                        </div>
                        <div className={styles.dashboardFormField}>
                            <label>Upload Image :</label>
                            <input type="" name="image" ref={this.inputRef} />
                        </div>
                        <button type="submit">Submit</button>
                    </form>
                </div>
                <div className={styles.dashboardInfoWrapper}>
                    <h2>Created Information</h2>
                </div>
            </div>
        );
    }
}

export default Dashboard;