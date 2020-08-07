import React from 'react'
import { memoize } from 'lodash'

export const fieldAdapter = memoize((Component) => ({ input, meta, ...restProps }) => <Component {...input} {...meta} {...restProps}/>)
