const express = require('express');
const app = express();
const SERVER_PORT = 3000;

app.get('/hello', (req, res) => {
    res.send('<h1>Hello World!</h1>');
});

// GET /user: Accepts query parameters firstname and lastname. If they aren’t provided, it defaults to "Pritesh" and "Patel".
app.get('/user', (req, res) => {
    let firstname = req.query.firstname || "Pritesh";
    let lastname = req.query.lastname || "Patel";
    res.send(`<h1>Hello ${firstname} ${lastname}</h1>`);
});

// POST /user: Uses path parameters for firstname and lastname.
app.post('/user/:firstname/:lastname', (req, res) => {
    let firstname = req.params.firstname;
    let lastname = req.params.lastname;
    res.send(`<h1>Hello ${firstname} ${lastname}</h1>`);
});

app.listen(SERVER_PORT, () => {
    console.log(`Server is running on  http://localhost:${SERVER_PORT}`);
})