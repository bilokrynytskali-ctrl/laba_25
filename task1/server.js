const http = require('http');

http.createServer((request, response) => {

    console.log('Url: ' + request.url);
    console.log('Тип запиту: ' + request.method);

    response.end('Server is running!');

}).listen(3000, () => {
    console.log('Server is running on http://127.0.0.1:3000/');
    console.log('Press CTRL+C to stop the server');
});
