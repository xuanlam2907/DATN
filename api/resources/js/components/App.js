import React from 'react';
import ReactDOM from 'react-dom';
import '../../sass/app.scss';

function App() {
    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <div className="card">
                        <div className="card-header">Example Coadasdsmponent</div>
                        <div className="card-body">I'm an exasdasdasdsponent!</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;

if (document.getElementById('aa')) {
    ReactDOM.render(<App />, document.getElementById('aa'));
}
