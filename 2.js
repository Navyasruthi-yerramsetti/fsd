import React, { useState } from 'react';
function Child({ name }) {
return <h3>Hello, {name}!</h3>;
}
function App() {
const [count, setCount] = useState(0);
return (
<div>
<Child name="Anjali" />
<p>Count: {count}</p>
<button onClick={() => setCount(count + 1)}>Increase</button>
</div>
);
}
export default App;

//app.js
import React from 'react';
import './App.css';
import './App.scss';
function App() {
const user = { name: "Anjali", age: 21 };
return (
<div className="card">
<h2 className="title">User Info</h2>
<p>Name: {user.name}</p>
<p>Age: {user.age}</p>
</div>
);
}
export default App;
//app.css
.card {
border: 2px solid #4caf50;
padding: 10px;
width: 200px;
text-align: center;
}
//app.scss
$title-color: #2196f3;
.title {
color: $title-color;
font-family: Arial, sans-serif;
}
