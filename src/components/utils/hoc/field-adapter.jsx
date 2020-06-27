import React from 'react'
import { memoize } from 'lodash'

export const fieldAdapter = memoize((Component) => (props) => <Component {...props}/>)
