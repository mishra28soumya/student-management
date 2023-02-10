const express = require('express')
const app = express()
const port = 3000
const fs = require('fs')

app.get('/', (req, res) => {
  res.end('Welcome to Student Management portal!');
});

app.get("/list_students", (req, res) => {
    fs.readFile(__dirname + '/' + 'student-data.json', 'utf8', (err, data) => {
        res.send(data);
    });
});

app.post("/add_students", (req, res) => {
    const newStudent = `{
        "id": 6,
        "name": "Student6",
        "class": 7
    }`;
    fs.appendFile(__dirname + '/' + 'student-data.json', newStudent, (err) => {
        if(err){
            res.send("Student couldn't be added");
        } else {
            res.send("Student added successfully");
        }
    });
});

app.listen(port, () => {
    console.log(`app listening at http://localhost:${port}`)
  });