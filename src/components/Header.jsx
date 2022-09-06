import logo from '../logo.svg';
import React from 'react';
import CartWidget from './CartWidget'

const Header = () => {
    return (
        <div>
            <header className="App-header">
                <div className="App-header brand col-3">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h2>MarketPlace</h2>
                </div>
                <nav className="navbar navbar-dark navbar-expand-lg App-header-options col-8">
                    <div className="container-fluid">
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <a className="nav-link active" aria-current="page" href="#">Home</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Cuenta</a>
                                </li>
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Categorías
                                    </a>
                                    <ul className="dropdown-menu">
                                        <li><a className="dropdown-item" href="#">Libros</a></li>
                                        <li><a className="dropdown-item" href="#">Mascotas</a></li>
                                        <li><hr className="dropdown-divider" /></li>
                                        <li><a className="dropdown-item" href="#">Tecnología</a></li>
                                    </ul>
                                </li>
                                {/* <li class="nav-item">
                                <a class="nav-link disabled">Disabled</a>
                                </li> */}
                            </ul>
                            <form className="d-flex" role="search">
                                <input className="form-control me-2" type="search" placeholder="Ingrese búsqueda" aria-label="Buscar" />
                                <button className="btn btn-outline-primary" type="submit">Buscar</button>
                            </form>
                        </div>
                    </div>
                </nav>
                <CartWidget />
            </header>
            <hr />
        </div>)
}

export default Header;