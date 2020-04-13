import React, { createContext, useState } from 'react'
import {
  endOfMonth,
  startOfMonth,
  endOfWeek,
  startOfWeek,
  startOfDay,
  endOfDay,
  addDays
} from 'date-fns'
import { flow } from 'lodash/fp'
import { getFirstDayOfTheWeek } from '../utils'

export const CalContext = createContext({})
export const Context = ({ defaultView = 'month', weekends, ...rest }) => {
  const [view, setView] = useState(
    defaultView === 'agenda' ? 'agenda:month' : defaultView
  )
  let start
  let end
  switch (defaultView) {
    case 'day':
      start = startOfDay(new Date())
      end = endOfDay(new Date())
      break
    case 'week':
      start = startOfWeek(new Date())
      end = endOfWeek(new Date())
      break
    case 'work-week':
      start = startOfWeek(new Date(), {
        weekStartsOn: getFirstDayOfTheWeek(weekends)
      })
      end = endOfDay(addDays(start, 6 - weekends.length))
      break
    default:
      start = flow(startOfMonth, startOfWeek)(new Date())
      end = flow(endOfMonth, endOfWeek)(new Date())
      break
  }
  const [viewWindow, setViewWindow] = useState({
    start: start,
    end: end
  })

  return (
    <CalContext.Provider
      value={{ view, setView, viewWindow, setViewWindow }}
      {...rest}
    />
  )
}
