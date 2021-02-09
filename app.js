const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => res.send('Hello AWS, It's been a while!!'));

app.listen(port);
console.log(`App running on http://localhost:${port}`);
