import React from 'react'
import { GridRow, GridColumn } from 'semantic-ui-react'
import { daysInWeek } from '../../utils'
import { getDate, isSameDay, getDay } from 'date-fns'

const WeekRowWithDate = ({ allDates }) => {
  return (
    <GridRow className={'pb-0 pr-1 wk-day-name-row'}>
      <GridColumn className={'day-in-week'}>
        <b>Times</b>
      </GridColumn>
      {allDates.map((day, i) => {
        return (
          <GridColumn
            key={day}
            className={`day-in-week ${
              isSameDay(day, new Date()) ? 'same-day-wk-header' : ''
            }`}
          >
            <b>
              {getDate(day) < 10 ? `0${getDate(day)}` : getDate(day)}{' '}
              {daysInWeek[getDay(day)]}
            </b>
          </GridColumn>
        )
      })}
    </GridRow>
  )
}

export default WeekRowWithDate
