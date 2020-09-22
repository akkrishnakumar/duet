import React from 'react'

import styles from './CurrentFeedBack.module.css'

const CurrentFeedBack = (props) => (
  <div className={styles.FeedBack}>
    <table>
      <tr>
        <td>Pair:</td>
        <td>Pair Name</td>
      </tr>
      <tr>
        <td>Ratings:</td>
        <td>
        Ratings
        </td>
      </tr>
    </table>
  </div>
)

export default CurrentFeedBack