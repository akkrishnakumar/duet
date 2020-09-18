import React, { Component } from 'react';
import { Paper } from '@material-ui/core';
import styles from './RandomPairs.module.css'
import PlayGround from './PlayGround/PlayGround';

class RandomPairs extends Component {

    render() {
        return (
            <div className={styles.RandomPairs}>
                <Paper className={styles.Paper} elevation={3}>
                    <PlayGround />
                </Paper>
            </div>
        )
    }

}

export default RandomPairs