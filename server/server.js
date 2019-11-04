const express = require('express');
const path = require('path');

const app = express();
const publicPath = path.join(__dirname, '..', 'public');
// customizar o middleware

app.use(express.static(publicPath));
// 
app.get('*', (req, res)=>{
    res.sendFile(path.join(publicPath, 'index.html'));
});
// startar o server
app.listen(3000, ()=>{
    console.log('Server is up on port 3000. (http://localhost:3000)');
});