const e=require('express')();
e.use(require('express').urlencoded({extended:1}));
e.get('/',(r,s)=>s.send('<form method="POST"><input name="n"/><button>Go</button></form>'));
e.post('/',(r,s)=>s.send('Hello '+r.body.n));
e.listen(3000);

// App.js
import React from 'react';
function App() {
return (
<div>
<h1>Hello JSX!</h1>
<p>This is a paragraph written in JSX.</p>
</div>
);
}
export default App;
