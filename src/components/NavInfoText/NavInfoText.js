import React from 'react'
import { getMonth, format, getDate, getDay, getYear } from 'date-fns'
import { daysFullInWeek, months, addOneWeek, addLeadingZero } from '../../utils'

const NavInfoText = ({ view, viewWindow }) => {
  return (
    <div>
      {view === 'month' && (
        <b>
          {months[getMonth(addOneWeek(viewWindow.start))]}{' '}
          {getYear(addOneWeek(viewWindow.start))}
        </b>
      )}
      {view.split(':')[0] === 'agenda' && view.split(':')[1] === 'month' && (
        <span>
          {format(viewWindow.start, 'dd/MM/yyyy')} -{' '}
          {format(viewWindow.end, 'dd/MM/yyyy')}
        </span>
      )}
      {(view === 'week' ||
        (view.split(':')[0] === 'agenda' && view.split(':')[1] === 'week')) && (
        <b>
          {months[getMonth(viewWindow.start)]}{' '}
          {addLeadingZero(getDate(viewWindow.start))} -{' '}
          {getMonth(viewWindow.start) !== getMonth(viewWindow.end) && (
            <span>{months[getMonth(viewWindow.end)]} </span>
          )}
          {addLeadingZero(getDate(viewWindow.end))}
        </b>
      )}
      {(view === 'day' ||
        (view.split(':')[0] === 'agenda' && view.split(':')[1] === 'day')) && (
        <b>
          {daysFullInWeek[getDay(viewWindow.start)]}{' '}
          {months[getMonth(viewWindow.start)]}{' '}
          {addLeadingZero(getDate(viewWindow.start))}
        </b>
      )}
    </div>
  )
}

export default NavInfoText
