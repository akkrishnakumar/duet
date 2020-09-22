import React from 'react'

import style from './Footer.module.css'
import { Typography } from '@material-ui/core'

const Footer = (props) => (
    <div className={style.Footer}>
        <Typography>© Copyright 2020 Akhil Krishnakumar</Typography>
        <Typography>GitHub: <a href="https://github.com/akkrishnakumar">akkrishnakumar </a></Typography>
    </div>
)

export default Footer