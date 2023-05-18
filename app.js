const express = require('express');

/* Creating server */

const app = express();

/* Adding routes */

app.get('/', function (request, response) {
    response.send('Bạn vừa yêu cầu xem Trang Chủ');
});


app.get('/ssr-link', function (req, res) {
    const response = {
        "applinks": {
            "apps": [],
            "details": [
                {
                    "appID": "M743AAW9KC.com.linkid.online.dev",
                    "paths": ["/*"]
                }
            ]
        }
    };
    res.setHeader('Content-Type', 'application/json');
    res.json(response);
});

/* Start running server */

app.listen(3000, function () {
    console.log('Server is running at...');
    console.log('http://127.0.0.1:3000');
});
