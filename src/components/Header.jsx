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
                <nav class="navbar navbar-dark navbar-expand-lg App-header-options col-8">
                    <div class="container-fluid">
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                                <li class="nav-item">
                                    <a class="nav-link active" aria-current="page" href="#">Home</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#">Cuenta</a>
                                </li>
                                <li class="nav-item dropdown">
                                    <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Categorías
                                    </a>
                                    <ul class="dropdown-menu">
                                        <li><a class="dropdown-item" href="#">Libros</a></li>
                                        <li><a class="dropdown-item" href="#">Mascotas</a></li>
                                        <li><hr class="dropdown-divider" /></li>
                                        <li><a class="dropdown-item" href="#">Tecnología</a></li>
                                    </ul>
                                </li>
                                {/* <li class="nav-item">
                                <a class="nav-link disabled">Disabled</a>
                                </li> */}
                            </ul>
                            <form class="d-flex" role="search">
                                <input class="form-control me-2" type="search" placeholder="Ingrese búsqueda" aria-label="Buscar" />
                                <button class="btn btn-outline-primary" type="submit">Buscar</button>
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