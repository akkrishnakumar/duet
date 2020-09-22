import React from 'react'
import Ratings from '../../../Components/Ratings/Ratings'
import { loggedInUser } from '../../../Utils/UserUtils'

import styles from './CurrentFeedBack.module.css'
import { Typography } from '@material-ui/core'

const CurrentFeedBack = (props) => {

  const currPairName = loggedInUser()?.currentPair?.name ?? ""

  const ratings = pair =>
    pair === "" ?
      <Typography>You have not paired yet. Go enjoy some pairing first and come back after.</Typography> :
      <div className={styles.FeedBack}>
        <table className={styles.CurrentFeedback}>
          <tbody>
            <tr>
              <td>Pair</td>
              <td>{pair}</td>
            </tr>
            <tr>
              <td>Ratings</td>
              <td><Ratings /></td>
            </tr>
          </tbody>
        </table>
      </div>


  return ratings(currPairName)

}

export default CurrentFeedBack