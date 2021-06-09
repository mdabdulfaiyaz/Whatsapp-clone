import React,{ useEffect, useState } from 'react';
import './App.css';
import Sidebar from './Sidebar';
import Chat from './Chat';
import Pusher from 'pusher-js';
import axios from './axios';


function App() {
  const [messages, setmessages] = useState([]);

  
  useEffect(() => { 
    axios.get('/messages/sync')
    .then(response => {
      setmessages(response.data)
    })
  }, [])
  useEffect(()=>{
    const pusher = new Pusher('d69ffc174f4a3be92fa5', {
      cluster: 'ap2'
    });

    const channel = pusher.subscribe('messages');
    channel.bind('inserted', (newMessage) => { 
      setmessages([...messages, newMessage])
    });

   return ()=> {
      channel.unbind_all();
      channel.unsubscribe();
    };
  }, [messages])

  console.log(messages)
  return (
    <div className="app"> 
      <div className='app_body'> 
        <Sidebar />
        <Chat messages={messages}/>
      </div>
    </div>
  );
}

export default App;
