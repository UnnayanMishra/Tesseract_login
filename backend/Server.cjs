const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
// ✅ Use dynamic port from Railway or fallback to 3000 for local dev
const port = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json());

// MySQL connection
const db = mysql.createConnection({
  host: 'sql12.freesqldatabase.com',
  user: 'sql12771518',
  password: 'RARPZ8uhWN',
  database: 'sql12771518',
  port: 3306
});

db.connect((err) => {
  if (err) {
    console.error('Database connection error:', err.message);
  } else {
    console.log('Connected to MySQL database');
  }
});

// API to verify user
app.post('/verify-user', (req, res) => {
  const { username } = req.body;

  const query = 'SELECT link FROM user_credentials WHERE user_name = ?';
  db.query(query, [username], (err, results) => {
    if (err) {
      console.error('Query error:', err.message);
      return res.status(500).json({ error: 'Database error' });
    }

    if (results.length > 0) {
      res.json({ exists: true, link: results[0].link });
    } else {
      res.json({ exists: false });
    }
  });
});

// ✅ Dynamic server start message
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
