const express = require('express');
const path = require('path');

const app = express();
const publicPath = path.join(__dirname, '..', 'public');
// para passar a porta para o heroku
const port = process.env.PORT || 3000;
// customizar o middleware

app.use(express.static(publicPath));
// 
app.get('*', (req, res)=>{
    res.sendFile(path.join(publicPath, 'index.html'));
});
// startar o server
app.listen(port, ()=>{
    console.log(`Server is on port ${port}`);
});