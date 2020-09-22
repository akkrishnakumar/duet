import React from 'react'
import Ratings from '../../../Components/Ratings/Ratings'

import styles from './CurrentFeedBack.module.css'


const CurrentFeedBack = (props) => (
  <div className={styles.FeedBack}>
    <table className={styles.CurrentFeedback}>
      <tbody>
        <tr>
          <td>Pair:</td>
          <td>Pair Name</td>
        </tr>
        <tr>
          <td>Ratings:</td>
          <td><Ratings /></td>
        </tr>
      </tbody>
    </table>
  </div>
)

export default CurrentFeedBack