// App.js
import React from 'react';
function App() {
const loggedIn = true;
return <h2>{loggedIn ? 'Welcome, Anjali!' : 'Please Login'}</h2>;
}
export default App;

// App.js
import React from 'react';
function App() {
const fruits = ['Apple', 'Banana', 'Mango'];
return (
<ul>
{fruits.map(f => <li key={f}>{f}</li>)}
</ul>
);
}
export default App;
