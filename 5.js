const express = require('express');
const app = express();
app.use(express.json());
app.post('/login', (req, res) => {
const { user, pass } = req.body;
user === 'admin' && pass === '1234'
? res.send('Login Successful')
: res.send('Invalid Credentials');
});
app.listen(3000, () => console.log('Server running'));

// Create (Insert)
db.students.insert({ name: "Anjali", age: 21 });
// Read (Find)
db.students.find({ name: "Anjali" });
// Update
db.students.update({ name: "Anjali" }, { $set: { age: 22 } });
// Delete (Remove)
db.students.remove({ name: "Anjali" });
