import React from 'react'
import { Rating } from '@material-ui/core'
import {
  SentimentDissatisfiedIcon, SentimentVeryDissatisfiedIcon,
  SentimentSatisfiedIcon, SentimentVerySatisfiedIcon,
  SentimentSatisfiedAltIcon
} from '@material-ui/icons'

const Ratings = (props) => {

  const customIcons = {
    1: {
      icon: <SentimentVeryDissatisfiedIcon />,
      label: 'Very Dissatisfied',
    },
    2: {
      icon: <SentimentDissatisfiedIcon />,
      label: 'Dissatisfied',
    },
    3: {
      icon: <SentimentSatisfiedIcon />,
      label: 'Neutral',
    },
    4: {
      icon: <SentimentSatisfiedAltIcon />,
      label: 'Satisfied',
    },
    5: {
      icon: <SentimentVerySatisfiedIcon />,
      label: 'Very Satisfied',
    },
  };

  const IconContainer = ({ value, ...other }) =>
    <span {...other}>{customIcons[value].icon}</span>

  return (
    <Rating
      name="customized-icons"
      defaultValue={2}
      getLabelText={value => customIcons[value].label}
      IconContainerComponent={IconContainer}
    />
  )
}

export default Ratings