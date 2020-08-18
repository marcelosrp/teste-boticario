import React from "react";
import Container from '@material-ui/core/Container';
import Menu from './menu.js';
import Cart from './cart.js';

import './style.scss';

const Header = () => (
    <header className="header">
        <Container className="header__container">
            <div className="header__item">
                <h1 className="header__logo">minha loja</h1>
            </div>
            <div className="header__item">
                <Menu />
            </div>
            <div className="header__item">
                <Cart />
            </div>
        </Container>
    </header>
)

export default Header;
