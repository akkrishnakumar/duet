import React, { useState } from 'react';
import { Paper } from '@material-ui/core';
import PlayGround from './PlayGround/PlayGround';
import OutlinedBtn from '../../Components/OutlinedButton/OutlinedButton';
import { User } from '../../Models/User';
import { decouple } from './PlayGround/UniquePairs';
import { SomePair } from '../../Models/Pair';
import { loggedInUser } from '../../Utils/UserUtils';
import SuccessAlert from '../../Components/Alert/SuccessAlert';

import styles from './RandomPairs.module.css'

const RandomPairs = (props) => {

    const [pairs, setPairs] = useState([])
    const [snackBarOpen, setSnackBarOpen] = useState(false)

    const successMessage =
        <SuccessAlert
            open={snackBarOpen}
            onClose={() => setSnackBarOpen(false)}>
            Let's Pair !!
        </SuccessAlert>

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
        setSnackBarOpen(true)
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
            {successMessage}
        </div>
    )
}

export default RandomPairs