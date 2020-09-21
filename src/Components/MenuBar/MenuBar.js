import React from 'react'
import { NavLink } from 'react-router-dom'
import { Button } from '@material-ui/core';

import styles from './MenuBar.module.css';

const MenuBar = (props) => {

    const navLinkFrom = (path, text) =>
        <NavLink to={"/".concat(path)}>
            <Button>{text}</Button>
        </NavLink>

    return (
        <nav className={styles.MenuBar}>
            {navLinkFrom("pairing", "Pairing")}
            {navLinkFrom("feedback", "Pairing FeedBack")}
            {navLinkFrom("store", "Rewards Store")}
        </nav>
    )
}

export default MenuBar