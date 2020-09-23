import React, { useState } from 'react';
import { Paper, Tabs, Tab } from '@material-ui/core';
import TabPanel from '../../Components/TabPanel/TabPanel';
import CurrentFeedBack from './CurrentFeedBack/CurrentFeedBack';
import PreviousFeedBack from './PreviousFeedBack/PreviousFeedBack';

import styles from './PairingFeedBack.module.css'

const PairingFeedBack = (props) => {

    const [currTab, setCurrTab] = useState(0)

    const handleChange = (_, newValue) => setCurrTab(newValue)

    return (
        <div className={styles.PairingFeedBack}>
            <Paper className={styles.Paper} elevation={3}>
                <Tabs
                    value={currTab}
                    onChange={handleChange}>
                    <Tab label="Current Pairing" />
                    <Tab label="Previous Pairings" />
                </Tabs>
                <TabPanel value={currTab} index={0}>
                    <CurrentFeedBack />
                </TabPanel>
                <TabPanel value={currTab} index={1}>
                    <PreviousFeedBack />
                </TabPanel>
            </Paper>
        </div>
    )
}

export default PairingFeedBack