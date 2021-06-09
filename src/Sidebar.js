import React from 'react'
import './sidebar.css';
import SidebarChat from './SidebarChat'
import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import AddIcon from '@material-ui/icons/Add';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import {Avatar, IconButton} from '@material-ui/core'
import {SearchOutlined} from '@material-ui/icons'

function Sidebar() {
    return (
        <div className='sidebar'> 
            <div className='sidebar_header'> 
            <IconButton>
              <Avatar src="\LOGO.jpg" />
            </IconButton>
                 <div className='sidebar_header_right '> 
                <IconButton>
                         <DonutLargeIcon /> 
                </IconButton>
                <IconButton>
                         <AddIcon /> 
                </IconButton>
                <IconButton>
                         <MoreHorizIcon /> 
                </IconButton>
                 </div>
            </div>
            
            <div className='sidebar_search'> 
                <div className='sidebar_searchContainer'>
                    <SearchOutlined />
                    <input placeholder="Search or start new chat" type='text'>
                    </input>
                </div> 
            </div> 
        <div className='sidebar_chats'>
            <SidebarChat />
            <SidebarChat />
            <SidebarChat />
            <SidebarChat />
            <SidebarChat /> 
        </div>
        </div>
    )
}

export default Sidebar
