import React from 'react'
import './chat.css';

function Chatsender({ messages }) {
    return (
        <div>
            {messages.map((message) => { 
                 return   <p key={message._id} className={`chat_message ${message.received && 'chat_reciever'}`}>
                    <span className='chat_name'>{message.name}</span>
                                {message.message}
                    <span className="chat_timestamp">{new Date().toLocaleTimeString().toString().replace(/:[^:]*/,'')}</span> 
            </p>
            })}
            
        </div>
    )
}

export default Chatsender
