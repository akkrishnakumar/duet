import React from 'react'

const TabPanel = ({
  value,
  index,
  children
}) => (
    <div
      hidden={value !== index}>
      {children}
    </div>
  )

export default TabPanel