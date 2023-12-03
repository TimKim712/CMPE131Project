const express = require('express');
const mysql = require('mysql')
const cors = require('cors')

const app = express()
app.use(cors()); 
// Middleware to parse JSON bodies
app.use(express.json());

const multer = require('multer');
const path = require('path');
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, 'uploads/');
    },
    filename: function(req, file, cb) {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
        cb(null, file.fieldname + '-' + uniqueSuffix + path.extname(file.originalname));
    }
});

const upload = multer({ storage: storage });

const db = mysql.createConnection({
    host: "localhost",
    user: 'root',
    password: 'arpita123',
    database: 'williamstondb'
})

app.get('/',(re, res) => {
    return res.json("From Backend Side");
})

app.get('/users',(req, res) => {
    const sql = "SELECT * FROM users;";
    db.query(sql, (err, data) => {
        if(err) return res.json(err);
        return res.json(data);
    })
})

app.post('/users', (req, res) => {
    const { username, password, email } = req.body;
    const sql = "INSERT INTO users (username, password, email) VALUES (?, ?, ?)";
    // Executing the query
    db.query(sql, [username, password, email], (err, data) => {
        if(err) {
            return res.status(400).json({ error: err.message });
        }
        res.status(201).json({ message: "User created successfully", userId: data.insertId });
    });
});



// Example POST endpoint for user sign-in
app.post('/signin', async (req, res) => {
    const { username, password } = req.body;
    const sql = "SELECT password FROM williamstondb.users WHERE username = ?;";
    db.query(sql, [username], (err, data) => {
        if (err) {
            return res.status(500).json({ message: "An error occurred" });
        }
        if (data.length === 0 || data[0].password !== password) {
            return res.status(401).json({ message: "Invalid credentials" });
        }
        return res.json({ message: "Sign in successful" });
    });
});


app.get('/posts',(req, res) => {
    const sql = "SELECT * FROM posts;";
    db.query(sql, (err, data) => {
        if(err) return res.json(err);
        return res.json(data);
    })
})


// app.post('/posts', upload.single('image'), (req, res) => {
//     const { username, title, type, description } = req.body;
//     const image = req.file; // This will contain your image dataimage' corresponds to the name in formData.append
//     console.log('requ', req.body, req.file)
//     const sql = "INSERT INTO posts (username, title, type, description, image) VALUES (?, ?, ?, ?, ?)";
//     // Executing the query
//     db.query(sql, [username, title, type, description, image], (err, data) => {
//         if(err) {
//             return res.status(400).json({ error: err.message });
//         }
//         return res.status(201).json({ message: "Post created successfully", userId: data.insertId });
//     });
// });

app.post('/posts', upload.single('image'), (req, res) => {
    const { username, title, type, description } = req.body;
    const image = req.file; // This will contain your image data

    // Use 'image.filename' to store just the filename
    const imageFilename = image ? image.filename : null;

    const sql = "INSERT INTO posts (username, title, type, description, image) VALUES (?, ?, ?, ?, ?)";
    db.query(sql, [username, title, type, description, imageFilename], (err, data) => {
        if(err) {
            return res.status(400).json({ error: err.message });
        }
        return res.status(201).json({ message: "Post created successfully", postId: data.insertId });
    });
});






app.listen(8081, () => {
    console.log("listening");
})