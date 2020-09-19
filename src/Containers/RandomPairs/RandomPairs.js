import React, { useState } from 'react';
import { Paper } from '@material-ui/core';
import styles from './RandomPairs.module.css'
import PlayGround from './PlayGround/PlayGround';
import OutlinedBtn from '../../Components/OutlinedButton/OutlinedButton';
import { jsonToUser } from '../../Utils/JsonAdaptor';
import { User } from '../../Models/User';
import { decouple } from './PlayGround/UniquePairs';

const RandomPairs = (props) => {

    const [pairs, setPairs] = useState([])

    const pairNamefrom = (pairs, uName) =>
        pairs
            .filter(pair => pair.includes(uName))
            .flatMap(decouple)
            .filter(pair => !pair.includes(uName))[0]


    const onAllMembersPaired = () => {
        const user = jsonToUser(JSON.parse(sessionStorage.getItem("user")))
        const pairUser = new User(2, pairNamefrom(pairs, user.name))
        user.setCurrentPairTo(pairUser)
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