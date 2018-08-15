import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
    <header>
        <h1>Expensify</h1>
        <NavLink to="/" activeClassName="is-active" exact >Go home </NavLink>
        <NavLink to="/create" activeClassName="is-active">Go create </NavLink>
        <NavLink to="/help" activeClassName="is-active">Go help </NavLink>
    </header>
);

export default Header;