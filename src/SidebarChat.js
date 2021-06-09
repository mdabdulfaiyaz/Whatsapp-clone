import { Avatar } from '@material-ui/core';
import React from 'react'
import './sidebarchat.css';


function SidebarChat() {
    return (
        <div className='sidebar_chat'>
            <Avatar />
            <div className='sidebarchat_info'>
            <h2>Room Name</h2>
            <p>This is your last Massege</p>
            </div>
        </div>
    )
}

export default SidebarChat
