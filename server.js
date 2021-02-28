const http = require('http');
const fs = require('fs');

const hostname = '192.168.2.20'; // IP
const port = 3000; // порт

const server = http.createServer((req, res) => {
    let url = req.url;
    if (url == '/') {
        url = '/index'
    }

    // console.log(url);
    if (url != '/favicon.ico') {

        fs.readFile(url.substr(1, url.length) + '.html', function (err, data) {
            if (!err) {
                res.writeHead(200, { 'Content-Type': 'text/html', });
                data = data.toString().replace("{{name}}", "Alexandr")
                res.write(data)
                res.end();
            } else {
                fs.readFile('404.html', function (err, data) {
                    res.writeHead(400, { 'Content-Type': 'text/html', });
                    // res.write(data)
                    res.end(data);
                }
                );
            }
        })

    }
}
);


server.listen(port, hostname, () => {
    console.log('Server is running!')
})