// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
export default () => (
<Router>
<Link to="/">Home</Link> | <Link to="/about">About</Link>
<Routes>
<Route path="/" element={<h2>Home</h2>} />
<Route path="/about" element={<h2>About</h2>} />
</Routes>
</Router>
);

// App.js
import React, { useState } from 'react';
function App() {
const [count, setCount] = useState(0);
return (
<div>
<h2>Count: {count}</h2>
<button onClick={() => setCount(count + 1)}>Increase</button>
</div>
); 
}
export default App;
