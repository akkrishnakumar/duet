import React, { useState } from 'react'
import Ratings from '../../../Components/Ratings/Ratings'
import { loggedInUser } from '../../../Utils/UserUtils'
import { Typography, Button } from '@material-ui/core'

import styles from './CurrentFeedBack.module.css'

const CurrentFeedBack = (props) => {

  const [rating, setRating] = useState(3)
  const user = loggedInUser()
  const currPair = user?.currentPair

  const handleRating = (event, newRating) => {
    event.preventDefault()
    setRating(newRating)
  }

  const submitRating = e => {
    e.preventDefault()
    user.rateCurrentPair(rating)
    sessionStorage.setItem("user", JSON.stringify(user))
  }

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
                  rating={rating}
                  onChange={handleRating}
                />
              </td>
            </tr>
            <tr>
              <td colSpan="2">
                <Button
                  variant="contained"
                  color="primary"
                  onClick={submitRating}>
                  Submit
                </Button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>


  return ratings(currPair)

}

export default CurrentFeedBack