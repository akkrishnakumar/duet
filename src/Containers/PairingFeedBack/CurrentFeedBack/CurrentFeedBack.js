import React, { useState } from 'react'
import Ratings from '../../../Components/Ratings/Ratings'
import { loggedInUser } from '../../../Utils/UserUtils'
import { Typography, Button } from '@material-ui/core'

import styles from './CurrentFeedBack.module.css'
import SuccessAlert from '../../../Components/Alert/SuccessAlert'

const CurrentFeedBack = (props) => {

  const [rating, setRating] = useState(3)
  const [ratingsSubmitted, setRatingsSubmitted] = useState(false)
  const user = loggedInUser()
  const currPair = user?.currentPair

  const successMessage =
    <SuccessAlert
      open={ratingsSubmitted}
      onClose={() => setRatingsSubmitted(false)}>
      Pairing Session rated !!! Good Job !!!
    </SuccessAlert>

  const handleRating = (event, newRating) => {
    event.preventDefault()
    setRating(newRating)
  }

  const submitRating = e => {
    e.preventDefault()
    user.rateCurrentPair(rating)
    sessionStorage.setItem("user", JSON.stringify(user))
    setRatingsSubmitted(true)
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
        {successMessage}
      </div>

  return ratings(currPair)

}

export default CurrentFeedBack