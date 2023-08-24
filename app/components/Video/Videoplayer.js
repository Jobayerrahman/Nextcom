import React, { Component } from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faPlayCircle} from '@fortawesome/free-solid-svg-icons';
import 'video-react/dist/video-react.css'
import { Player, BigPlayButton } from 'video-react';
import styles from './Videoplayer.module.scss';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 1200,
    border: '1px solid #000',
    boxShadow: 24,
  };

class Videoplayer extends Component {
    constructor(){
         super();
         this.state={
             open : false
         }
    }

    handleOpen=()=>this.setState({open:true});
    handleClose=()=>this.setState({open:false});
    render() {
        const { open } = this.state;
        return (
            <div className={styles.videoPlayer}>
                <div className={styles.videoPlayerWrapper}>
                    <div className={styles.videoPlayerCard}>
                        <FontAwesomeIcon onClick={this.handleOpen} className={styles.videoPlayerBtn} icon={faPlayCircle} />
                        <h2>Beautifully simple handcrafted templates for your website</h2>
                        <p>UNLIMITED POWER AND CUSTOMIZATION</p>
                    </div>
                </div>
                <Modal
                    open={open} onClose={this.handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <Box sx={style}>
                        <Player>
                            <source src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4" />
                            <BigPlayButton position="center" />
                        </Player>
                    </Box>
                </Modal>
            </div>
        );
    }
}

export default Videoplayer;