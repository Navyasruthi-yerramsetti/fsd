// App.js
import React, { Component } from 'react';
// Function component
function Child({ name }) {
return <h3>Child says: Hello {name}!</h3>;
}
// Class component
class Parent extends Component {
render() {
return (
<div>
<h2>Parent Component</h2>
<Child name="Anjali" />
</div>
);
}
}
function App() {
return <Parent />;
}
export default App;

// Sample collection: students
db.students.insertMany([
{ name: "Anjali", age: 21, grade: "A" },
{ name: "Ravi", age: 22, grade: "B" },
{ name: "Maya", age: 20, grade: "A" }
]);
// 1. find() - Retrieve all records
db.students.find({})
// 2. limit() - Retrieve first 2 records
db.students.find({}).limit(2)
// 3. sort() - Sort by age descending
db.students.find({}).sort({ age: -1 })
// 4. createIndex() - Create index on 'name' field
db.students.createIndex({ name: 1 })
// 5. aggregate() - Group by grade and count students
db.students.aggregate([
{ $group: { _id: "$grade", count: { $sum: 1 } } } ] )
