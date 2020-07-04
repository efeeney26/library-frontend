import React from 'react'
import { PropTypes } from 'prop-types'

import style from './GroupCard.module.css'

const GroupCard = ({ children }) => (
  <div
    className={style.group}
  >
    {children}
  </div>
)

GroupCard.propTypes = {
  children: PropTypes.node
}

GroupCard.defaultProps = {
  children: null
}

export default GroupCard
