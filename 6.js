const express = require('express');
const app = express();
app.use(express.json());
let user = {};
app.post('/user', (r, s) => { user = r.body; s.send('Data Saved'); });
app.get('/user', (r, s) => s.json(user));
app.delete('/user', (r, s) => { user = {}; s.send('User Deleted'); });
app.listen(3000);

use myDatabase
db.createCollection("students")
db.students.drop()
db.dropDatabase()
