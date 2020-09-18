import React from 'react'
import { Button } from '@material-ui/core'
import styles from './MenuBar.module.css';

const MenuBar = (props) => (
    <nav className={styles.MenuBar}>
        <Button>Pairing</Button>
        <Button>Session Feedback</Button>
        <Button>Rewards Store</Button>
    </nav >
)

export default MenuBar