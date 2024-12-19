const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 5000;

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public')); // For serving static files like CSS
app.set('view engine', 'ejs'); // Using EJS for rendering views

// Temporary data storage (for simplicity, we're not using a database)
let students = [];

// Routes

// Home page with a form to add student details
app.get('/', (req, res) => {
    res.render('index', { students });
});

// Handle form submission
app.post('/add-student', (req, res) => {
    const { name, dob, age, rollNo, year, course, phoneNo, email } = req.body;

    // Add the new student to the list
    students.push({ name, dob, age, rollNo, year, course, phoneNo, email });

    res.redirect('/');
});

// Start the server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
