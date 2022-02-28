import http from 'http';
import fs from 'fs';

// we can specify the port on which we want to listen our application
// this port has to be defined our environment variable
// || 3000 means if it is no defined at our evironment variable then use port 3000
const port = process.env.PORT || 3000;

const server = http.createServer((req, res)=>{
    // this statement will be printed eachtime we will hit our server
    console.log(req.url)
    res.setHeader('Content-Type', 'text/html')

    // routing by if else statments makes our code more prone to bugs
    // and it also makes it unreadable
    // so to handle routing we should use express js
    if (req.url == '/'){
        req.statusCode = 200
        const data = fs.readFileSync('index.html');
        res.end(data.toString())
    }else if(req.url == '/about'){
        res.statusCode = 200
        res.end('<h1> This is about page</h1> <p> This is sample response for about page</p>');
    }else {
        // this function is not avaialable
        // but this will not throw any compiletime exceptions
        // so our server will crash when this else condition is hit!
        // to resolve these kind of issues we use nodemon
        // res.harry()

        res.statusCode = 404
        res.end('<h1> 404 not found </h1>')
    }
    //setting respone to request
    res.statusCode = 200;
    // request will be served as html not as plain text
})

// to run our server we have to listen to our port
server.listen(port, ()=>{},console.log(`Server is listening on port ${port}`));