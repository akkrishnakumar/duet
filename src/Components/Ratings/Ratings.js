import React from 'react'
import Rating from '@material-ui/lab/Rating'
import {
  SentimentDissatisfied, SentimentVeryDissatisfied,
  SentimentSatisfied, SentimentVerySatisfied,
  SentimentSatisfiedAlt
} from '@material-ui/icons'

const Ratings = ({
  rating,
  onChange
}) => {

  const customIcons = {
    1: {
      icon: <SentimentVeryDissatisfied />,
      label: 'Very Dissatisfied',
    },
    2: {
      icon: <SentimentDissatisfied />,
      label: 'Dissatisfied',
    },
    3: {
      icon: <SentimentSatisfied />,
      label: 'Neutral',
    },
    4: {
      icon: <SentimentSatisfiedAlt />,
      label: 'Satisfied',
    },
    5: {
      icon: <SentimentVerySatisfied />,
      label: 'Very Satisfied',
    },
  };

  const IconContainer = ({ value, ...other }) =>
    <span {...other}>{customIcons[value].icon}</span>

  return (
    <Rating
      name="customized-icons"
      defaultValue={rating}
      getLabelText={value => customIcons[value].label}
      IconContainerComponent={IconContainer}
      onChange={onChange}
    />
  )
}

export default Ratings