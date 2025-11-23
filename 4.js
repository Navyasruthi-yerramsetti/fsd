const express = require('express');
const app = express();
app.use((req, res, next) => {
console.log('Middleware working');
next();
});
app.get('/', (req, res) => res.send('Hello from Express!'));
app.listen(3000, () => console.log('Server running'));

// App.js
import React from 'react';
function App() {
const handleClick = () => alert('Button Clicked!');
return <button onClick={handleClick}>Click Me</button>;
}
export default App;
