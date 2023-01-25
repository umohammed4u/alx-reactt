import holbertonLogo from './Holberton-logo.jpg';
import './App.css';

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <img src={holbertonLogo} alt="holberton-logo"></img>
                <h1>School dashboard</h1>
            </header>
            <div className="App-body">
                <p>
                    Login to access the full dashboard
                </p>
                <form>
                    <div>
                        <label htmlFor="email">
                            Email
                            <input type="email" name="email" />
                        </label>
                    </div>
                    <div>
                        <label htmlFor="password">
                            Password
                            <input type="password" name="password" />
                        </label>
                    </div>
                    <button type="submit">OK</button>
                </form>
            </div>
            <div className="App-footer">
                <p>
                    Copyright 2020 - holberton School
                </p>
            </div>
        </div>
    );
}

export default App;