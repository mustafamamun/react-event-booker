import React, { useContext, useState } from 'react'
import { useInterval } from 'react-use'
import { CalContext } from '../context/Context'
import Month from './Month'
import Week from './Week'
import Day from './Day'
import Agenda from './Agenda'
import WorkWeek from './WorkWeek'
const IndexView = ({ ...props }) => {
  const [currentTime, setCurrentTime] = useState(new Date())
  useInterval(() => {
    setCurrentTime(new Date())
  }, 5 * 60 * 1000)
  const { view } = useContext(CalContext)

  if (view === 'month') {
    return <Month {...props} currentTime={currentTime} />
  }
  if (view === 'week') {
    return <Week {...props} currentTime={currentTime} />
  }
  if (view === 'day') {
    return <Day {...props} currentTime={currentTime} />
  }
  if (view === 'work-week') {
    return <WorkWeek {...props} />
  }
  if (view.split(':')[0] === 'agenda') {
    return <Agenda {...props} />
  }
  return <div>View not found</div>
}

export default IndexView
