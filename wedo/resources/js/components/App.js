import React from 'react';
import ReactDOM from 'react-dom';
import '../../sass/app.scss';
import NavBar from "./NavBar";
function App() {
    return (
        <div>
        </div>
    );
}

export default App;

if (document.getElementById('content')) {
    ReactDOM.render(<App />, document.getElementById('content'));
}
