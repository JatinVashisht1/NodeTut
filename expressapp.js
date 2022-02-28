import express from 'express';
import fs from 'fs';
const app = express();
const port = 3000;

// express handles alot of boilerplate for us
// for example content type, etc.

app.get('/', (req, res) => {
    const data = fs.readFileSync('index.html');
    // console.log(data.toString());
    res.send(data.toString())

})

app.get('/about', (req, res) => {
    // const data = fs.readFileSync('index.html');
    // console.log(data.toString());
    res.send("this is about page")

})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})