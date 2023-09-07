import React, { Component, createRef } from 'react';
import styles from './Dashboard.module.scss';
import TextField from '@mui/material/TextField';
import DashboardInfoDisplay from './DashboardInfoDisplay';

class Dashboard extends Component {
    constructor(props){
        super(props);

        this.inputTitleRef= createRef();
        this.inputDescribtionRef= createRef();

        this.state = {
            selectedFile: null,
        };
    }


    onFileChange = event => {
        this.setState({ selectedFile: event.target.files[0] });
    };
 
    // onFileUpload = () => {
    //     const formData = new FormData();

    //     formData.append(
    //         "myFile",
    //         this.state.selectedFile,
    //         this.state.selectedFile.name
    //     );

    //     console.log(this.state.selectedFile);
    // };

    handleSubmit = async (e) =>{
        e.preventDefault();
        
        const title         = this.inputTitleRef.current.value;
        const describtion   = this.inputDescribtionRef.current.value;


        if(!title || !describtion) {
            alert("Title and Describtion is required!");
        }

        try{
            const res = await fetch("/api/topbanner",{
                method: "POST",
                headers:{
                    "Content-type": "application/json",
                },
                body: JSON.stringify({ title, describtion }),
            });

            if(res.ok) {
                router.push("/admin");
            }else{
                console.log(res);
                throw new Error("Failed to create Banner")
            }
        } catch(error){ console.log(error); }
    }

    render() {
        return (
            <div className={styles.dashboardWrapper}>
                <div className={styles.dashboardFormWrapper}>
                    <h2>Top Banner Information Create</h2>
                    <form className={styles.dashboardForm} onSubmit={this.handleSubmit}>
                        <div className={styles.dashboardFormField}>
                            <TextField id="title" label="Title " variant="outlined" inputRef={this.inputTitleRef}/>
                        </div>
                        <div className={styles.dashboardFormField}>
                            <TextField id="describtion" label="Describtion " variant="outlined" inputRef={this.inputDescribtionRef}/>
                        </div>
                        <div className={styles.dashboardFormImage}>
                            <input type="file" onChange={this.onFileChange} />
                            <button onClick={this.onFileUpload}>Upload!</button>
                        </div>
                        <button type="submit">Submit</button>
                    </form>
                </div>
                <div className={styles.dashboardInfoWrapper}>
                    <h2>Created Information</h2>
                    <DashboardInfoDisplay/>
                </div>
            </div>
        );
    }
}

export default Dashboard;