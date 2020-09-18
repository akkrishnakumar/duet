import React, { useState } from 'react';
import { Paper } from '@material-ui/core';
import styles from './RandomPairs.module.css'
import PlayGround from './PlayGround/PlayGround';
import OutlinedBtn from '../../Components/OutlinedButton/OutlinedButton';

const RandomPairs = (props) => {

    const [canPair, setCanPair] = useState(false)

    const onceAllPaired = isPaired => setCanPair(isPaired)

    return (
        <div className={styles.RandomPairs}>
            <Paper className={styles.Paper} elevation={3}>
                <PlayGround
                    isAllPaired={onceAllPaired}
                />
                <OutlinedBtn
                    text="Let's Pair"
                    handleDisabled={!canPair}
                />
            </Paper>
        </div>
    )
}

export default RandomPairs