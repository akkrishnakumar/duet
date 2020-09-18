import React from 'react'
import logo from '../../assets/images/duet-mics.png'
import styles from "./LargeLogo.module.css";

const LargeLogo = (props) => {
    return (
        <div
            className={styles.Logo}
            style={props.styles}
        >
            <img src={logo} alt="Duet"></img>
            <span className={styles.LogoText}>DUET</span>
        </div>
    )
}

export default LargeLogo