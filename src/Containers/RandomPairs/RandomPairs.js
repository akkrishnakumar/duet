import React from 'react';
import { Paper } from '@material-ui/core';
import styles from './RandomPairs.module.css'
import PlayGround from './PlayGround/PlayGround';

const RandomPairs = (props) => {
    return (
        <div className={styles.RandomPairs}>
            <Paper className={styles.Paper} elevation={3}>
                <PlayGround />
            </Paper>
        </div>
    )
}

export default RandomPairs