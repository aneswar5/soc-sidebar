import React from 'react';
import PersonSharpIcon from '@material-ui/icons/PersonSharp';
import AllInclusiveOutlinedIcon from '@material-ui/icons/AllInclusiveOutlined';
import ImportContactsRoundedIcon from '@material-ui/icons/ImportContactsRounded';
import SettingsRoundedIcon from '@material-ui/icons/SettingsRounded';
import './sidebarmain.css';
import { Link } from "react-router-dom";

function Sidebarmain() {
    return (
        <div className="sidebar">
            <div className="logo"><AllInclusiveOutlinedIcon style={{ fontSize: 60 }} /></div>
                <div className="btn-container">
                <Link to="/students" style={{textDecoration:"none"}}>
                    <button className="btn">
                        <PersonSharpIcon style={{ fontSize: 30 }}/>
                        <h6>Students</h6>
                    </button>
                </Link>
                <Link to="/lessionplans" style={{textDecoration:"none"}}>
                    <button className="btn">
                        <ImportContactsRoundedIcon style={{ fontSize: 30 }} />    
                        <h6>lession plans</h6>
                    </button>
                    </Link>
                    <Link to="/settings" style={{textDecoration:"none"}}>
                    <button className="btn">
                        <SettingsRoundedIcon className="innericon" style={{ fontSize: 30 }} />
                        <h6>settings</h6>
                    </button>
                    </Link>
                </div>
        </div>
    )
}

export default Sidebarmain