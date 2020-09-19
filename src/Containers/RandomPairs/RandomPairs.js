import React, { useState, useEffect } from 'react';
import { Paper } from '@material-ui/core';
import styles from './RandomPairs.module.css'
import PlayGround from './PlayGround/PlayGround';
import OutlinedBtn from '../../Components/OutlinedButton/OutlinedButton';

const RandomPairs = (props) => {

    const [pairs, setPairs] = useState([])

    useEffect(() => {
        console.log("Pairs", pairs)
    }, [pairs])

    const onAllMembersPaired = () => {
        const user = JSON.parse(sessionStorage.getItem("user"))
        console.log(user);
        console.table(pairs)
        console.log(pairs.filter(pair => pair.includes(user.name)))
    }

    return (
        <div className={styles.RandomPairs}>
            <Paper className={styles.Paper} elevation={3}>
                <PlayGround
                    allPaired={setPairs}
                />
                <OutlinedBtn
                    text="Let's Pair"
                    handleDisabled={pairs.length === 0}
                    handleOnClick={onAllMembersPaired}
                />
            </Paper>
        </div>
    )
}

export default RandomPairs