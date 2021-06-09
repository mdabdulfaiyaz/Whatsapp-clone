import { Avatar, IconButton } from '@material-ui/core';
import {AttachFile, Attachment, MoreVert, SearchOutlined} from '@material-ui/icons'
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon' 
import MicIcon from '@material-ui/icons/Mic' 
import React, { useState } from 'react'
import './chat.css'; 
import Chatsender from './Chatsender';
import axios from './axios'

function Chat({ messages }) { 
    const [input,setInput] = useState ('');

    const sendMessage= async (e) => {
        e.preventDefault();

      await  axios.post('/messages/new', { 
        message: input,
        name: "DEMO APP",
        timestamp: "",
        received: false,
        });

        setInput('');
    }
    return (
        <div className='chat'> 
             <div className="chat_header">
                <Avatar />
                <div className='header_info'>
                    <h3>Room Name</h3>
                    <p>Last seen at...</p>
                </div>
                <div className='chatheader_info'>
                <IconButton>
                         <SearchOutlined />
                </IconButton>
                <IconButton>
                       <AttachFile />   
                </IconButton>
                <IconButton>
                         <MoreVert />
                </IconButton>
                </div>
             </div>
             <div className='chat_body'>
                <Chatsender messages={messages} />
             </div> 
             <div className='chat_footer'>
              <IconButton>
                     <InsertEmoticonIcon />
              </IconButton>
              <IconButton>
                  <Attachment />
              </IconButton>
                <form>
                    <input value={input} onChange={(e) => setInput(e.target.value)} type='text' placeholder='Type a message' />
                    <button onClick={sendMessage} type='submit'>Send a massage</button>
                </form>
                <IconButton>
                     <MicIcon />
                </IconButton>
             </div>
        </div>
    )
}

export default Chat
