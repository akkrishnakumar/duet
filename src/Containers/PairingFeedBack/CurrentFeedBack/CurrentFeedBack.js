import React from 'react'
import Ratings from '../../../Components/Ratings/Ratings'
import { loggedInUser } from '../../../Utils/UserUtils'
import { Typography } from '@material-ui/core'

import styles from './CurrentFeedBack.module.css'

const CurrentFeedBack = (props) => {

  const currPair = loggedInUser()?.currentPair

  const ratings = pair =>
    pair.name() === "" ?
      <Typography>You have not paired yet. Go enjoy some pairing first and come back after.</Typography> :
      <div className={styles.FeedBack}>
        <table className={styles.CurrentFeedback}>
          <tbody>
            <tr>
              <td>Pair</td>
              <td>{pair.name()}</td>
            </tr>
            <tr>
              <td>Ratings</td>
              <td>
                <Ratings
                  rating={pair.rating} />
              </td>
            </tr>
          </tbody>
        </table>
      </div>


  return ratings(currPair)

}

export default CurrentFeedBack