import express from 'express';
import JOKES from './jokes.js';
console.log(JOKES);

let app = express();

app.get('/', (req, res)=>{
    res.send("THis code is working.");
})

app.get('/api/getJokes', (req, res)=>{
    res.json(JOKES[Math.floor(Math.random()*JOKES.length)]);
})

const PORT = 3000;
app.listen(PORT, ()=>{
    console.log("Server running on port" + PORT);
})