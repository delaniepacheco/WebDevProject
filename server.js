//Code below imports express library , handles files and paths, holds express app and specifies port number
const express = require('express');
const path = require('path');
const app = express();
const port = 3003;

// Code will bring in any css and images
app.use(express.static(path.join(__dirname, 'public'))); 

// Middleware to parse form data
app.use(express.urlencoded({ extended: true }));

//Code below will serve the home,about and contact page
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html')); 
});

app.get('/about', (req, res) => {
    res.sendFile(path.join(__dirname, 'about.html')); 
});

app.get('/contact', (req, res) => {
    res.sendFile(path.join(__dirname, 'contact.html')); 
});
// Code below will handle the submission of the student survey
app.post('/submit-survey', (req, res) => {
    const feedback = req.body.feedback; 
    res.send(`Thank you for your feedback! You selected: ${feedback}`);
});

//Code below will allow server to run on port 3003
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
