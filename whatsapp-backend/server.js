 // importing
import express from 'express'
import mongoose from 'mongoose'
import Messages from './dbMessages.js'
import Pusher from 'pusher'
import cors from 'cors'


//app config 
const app = express() 
const port = process.env.PORT || 3001

const pusher = new Pusher({
    appId: "1207601",
    key: "d69ffc174f4a3be92fa5",
    secret: "14ac2402e2149ce22a72",
    cluster: "ap2",
    useTLS: true
  });

//middleware
app.use(express.json())
app.use(cors()) 



//DB config
const connection_url = mongoose.connect('mongodb+srv://Admin:YDF4nsuGNliAqLNr@cluster0.b35cl.mongodb.net/whatsappclone?retryWrites=true&w=majority')

mongoose.connect(connection_url,{
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology:true,
})

const db=mongoose.connection

db.once('open', ()=> {
 console.log("DB connected")

 const msgCollection = db.collection("messagecontents");
 const changeStream= msgCollection.watch();

 changeStream.on('change', (change)=>{
    console.log(change)

    if(change.operationType === 'insert') {
        const messageDetails = change.fullDocument; 
    pusher.trigger('messages','inserted',
        {
            name: messageDetails.name,
            message: messageDetails.message,
            timestamp: new Date().toLocaleTimeString().toString().replace(/:[^:]*/,''),
            received:messageDetails.received,
        } 
    );
}else {
    console.log('Error triggering Pusher')
}
 })
}) 
//api routes 
app.get('/',(req,res) => res.status(200).send('Hello World'))

app.get('/messages/sync', (req,res)=>{

    Messages.find((err,data) => {
        if (err) {
            res.status(500).send(err)
        }else {
            res.status(200).send(data)
        }
    });
});

app.post('/messages/new', (req,res) => {
    const dbMessages = req.body

    Messages.create(dbMessages, (err,data) => {
        if (err) {
            res.status(500).send(err)
        }else {
            res.status(201).send(data)
        }
    })
})

//listen
app.listen(port,()=>console.log(`Listening on localhost:${port}`))


