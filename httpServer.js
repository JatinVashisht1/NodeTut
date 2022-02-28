import http from 'http';

// we can specify the port on which we want to listen our application
// this port has to be defined our environment variable
// || 3000 means if it is no defined at our evironment variable then use port 3000
const port = process.env.PORT || 3000;

const server = http.createServer((req, res)=>{
    // this statement will be printed eachtime we will hit our server
    console.log(req.url)
    //setting respone to request
    res.statusCode = 200;
    // request will be served as html not as plain text
    res.setHeader('Content-Type', 'text/html')
    res.end('<h1> This is CodeWithHarry</h1> <p> This is sample response </p>');
})

// to run our server we have to listen to our port
server.listen(port, ()=>{},console.log(`Server is listening on port ${port}`));