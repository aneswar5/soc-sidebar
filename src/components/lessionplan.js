import React from 'react';
import PlayArrowRoundedIcon from '@material-ui/icons/PlayArrowRounded';
import './lessionplans.css';

function Mainbar() {
    return (
        <div className="main">
            <div className="maintext">
                <div className="aboutvideo">
                    <span className="mainicon"><PlayArrowRoundedIcon style={{ fontSize: 20 }} /></span>
                    <span className="maintitle"><h4>Videos</h4></span>
                </div>
                <div className="aboutsearch">
                    <input className="search" type="url" placeholder="Insert URL here" />
                </div>
                <p>or</p>
                <div className="aboutupload">
                    <input className="upload" type="upload" placeholder="Upload" />
                </div>
            </div>
        </div>
    )
}

export default Mainbar
