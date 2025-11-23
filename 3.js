//app.js
const express = require('express');
const app = express();
app.set('view engine', 'ejs');
app.get('/', (req, res) => res.render('index', { name: 'Anjali' }));
app.listen(3000, () => console.log('Running on http://localhost:3000'));
//views/index.ejs
<h2>Hello <%= name %>!</h2>

// App.js
import React from 'react';
function App() {
return (
<div>
<h2>Hello React!</h2>
<p>This is rendered HTML.</p>
</div>
);
}
export default App;
