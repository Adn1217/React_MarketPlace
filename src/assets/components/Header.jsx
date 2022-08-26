import logo from '../../logo.svg';
import React from 'react';

const Header = () => {
    return (
        <div>
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <h1>Este es el encabezado (NavBar)</h1>
            </header>
            <hr />
        </div>)
}

export default Header;