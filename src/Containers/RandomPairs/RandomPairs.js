import React, { useState } from 'react';
import { Paper } from '@material-ui/core';
import styles from './RandomPairs.module.css'
import PlayGround from './PlayGround/PlayGround';
import OutlinedBtn from '../../Components/OutlinedButton/OutlinedButton';
import { User } from '../../Models/User';
import { decouple } from './PlayGround/UniquePairs';
import { SomePair } from '../../Models/Pair';
import { loggedInUser } from '../../Utils/UserUtils';

const RandomPairs = (props) => {

    const [pairs, setPairs] = useState([])

    const pairNamefrom = (pairs, uName) =>
        pairs
            .filter(pair => pair.includes(uName))
            .flatMap(decouple)
            .filter(pair => !pair.includes(uName))[0]


    const onAllMembersPaired = () => {
        const user = loggedInUser()
        const pair = new SomePair(new User(3, pairNamefrom(pairs, user.name)))
        if (pair.name() !== "")
            user.setCurrentPairTo(pair)
            sessionStorage.setItem("user", JSON.stringify(user))
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