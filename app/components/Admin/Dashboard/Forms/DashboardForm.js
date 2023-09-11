import React, { Component, createRef } from 'react';
import styles from './DashboardForm.module.scss';
import TextField from '@mui/material/TextField';

class DashboardForm extends Component {
    constructor(props){
        super(props);

        this.inputTitleRef= createRef();
        this.inputDescriptionRef= createRef();

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
        const description  = this.inputDescriptionRef.current.value;


        if(!title || !description) {
            alert("Title and Describtion is required!");
        }

        const request = {
            method: 'POST',
            headers: { 'Content-Type' : 'application/json'},
            body: JSON.stringify({title : title, description: description})
        };

        try{
            const res = await fetch('/api/topbanner', request);

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
            <form className={styles.dashboardForm} onSubmit={this.handleSubmit}>
                <div className={styles.dashboardFormField}>
                    <TextField id="title" label="Title " variant="outlined" inputRef={this.inputTitleRef}/>
                </div>
                <div className={styles.dashboardFormField}>
                    <TextField id="describtion" label="Describtion " variant="outlined" inputRef={this.inputDescriptionRef}/>
                </div>
                <div className={styles.dashboardFormImage}>
                    <input type="file" onChange={this.onFileChange} />
                    <button onClick={this.onFileUpload}>Upload!</button>
                </div>
                <button type="submit">Submit</button>
            </form>
        );
    }
}

export default DashboardForm;