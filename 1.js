const express = require('express');
const app = express();
app.get('/', (r, s) => s.send('Home'));
app.get('/user/:name', (r, s) => s.send(`Hi ${r.params.name}`));
app.get('/search', (r, s) => s.send(`Search: ${r.query.q}`));
app.get('/build', (r, s) => s.send(`/item/5?type=toy`));
app.listen(3000);


import React from 'react';
function Child({ message }) {
return <h3>Message from Parent: {message}</h3>;
}
function App() {
const data = "Hello from Parent Component!";
return (
<div>
<h2>React Data Sharing Example</h2>
<Child message={data} />
</div>
);
}
export default App;
