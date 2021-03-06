import React, { useContext, useState } from 'react'
import {
  eachDayOfInterval,
  addMinutes,
  isBefore,
  isSameDay,
  endOfMinute,
  isValid
} from 'date-fns'
import { isEmpty, cloneDeep, sortBy } from 'lodash'
import { Grid, GridRow, GridColumn } from 'semantic-ui-react'
import { CalContext } from '../context/Context'
import WeekRowWithDate from '../components/week-row/WeekRowWithDate'
import {
  timeSlots,
  getEventsOfTheDay,
  getEventIndex,
  getHighestIndex
} from '../utils'
import TimeSlotsInDay from '../components/time-slots-in-day/TimeSlotsInDay'

const WorkWeek = ({
  weekends,
  events,
  currentTime,
  disabledDays,
  disabledHours,
  onSelect
}) => {
  const { viewWindow } = useContext(CalContext)
  const eachDayInWeek = eachDayOfInterval({
    ...viewWindow
  })
  const [selectedWindow, setSelectedWindow] = useState({})
  const [hoveredSlot, setHoverdSlot] = useState(null)
  const onMouseClick = e => {
    e.preventDefault()
    if (isEmpty(selectedWindow) && isValid(new Date(e.target.id))) {
      setSelectedWindow({
        start: new Date(e.target.id),
        end: endOfMinute(addMinutes(new Date(e.target.id), 29))
      })
    }
  }
  const onMouseUp = e => {
    if (!isEmpty(selectedWindow)) {
      onSelect(selectedWindow)
      setSelectedWindow({})
    }
  }
  const onMouseOut = () => {
    if (hoveredSlot) setHoverdSlot(null)
  }

  const onMouseOver = e => {
    if (isEmpty(selectedWindow)) {
      setHoverdSlot(e.target.id)
    }
    if (
      !isEmpty(selectedWindow) &&
      isValid(new Date(e.target.id)) &&
      !isBefore(new Date(e.target.id), selectedWindow.start)
    ) {
      setSelectedWindow({
        ...selectedWindow,
        end: endOfMinute(addMinutes(new Date(e.target.id), 29))
      })
    }
    if (
      !isEmpty(selectedWindow) &&
      isValid(new Date(e.target.id)) &&
      isBefore(new Date(e.target.id), selectedWindow.start)
    ) {
      setSelectedWindow({
        ...selectedWindow,
        end: endOfMinute(addMinutes(selectedWindow.start, 29))
      })
    }
  }
  const onClickEvent = e => {
    onClickedEvent(e)
  }

  return (
    <Grid columns={8 - weekends.length}>
      <WeekRowWithDate allDates={eachDayInWeek} />
      <GridRow className={'scroll-box pt-0 pb-0'}>
        <GridColumn className={'pr-0 pl-0'}>
          {timeSlots.map(time => {
            return (
              <GridRow key={time} className={'time-slot'}>
                <b>{time}</b>
              </GridRow>
            )
          })}
        </GridColumn>
        {eachDayInWeek.map(day => {
          const eventsOfTheDay = cloneDeep(
            sortBy(getEventsOfTheDay(day, events), 'start')
          )
          if (!isEmpty(eventsOfTheDay)) {
            getEventIndex(sortBy(eventsOfTheDay, 'start'), day)
          }
          const highestIndex = getHighestIndex(eventsOfTheDay)
          return (
            <GridColumn
              key={day.toISOString()}
              className={`p-0 day-column ${
                isSameDay(day, new Date()) ? 'same-day-wk' : ''
              }`}
            >
              <TimeSlotsInDay
                day={day}
                currentTime={currentTime}
                selectedWindow={selectedWindow}
                onMouseClick={onMouseClick}
                onMouseOver={onMouseOver}
                onMouseUp={onMouseUp}
                events={eventsOfTheDay}
                onClickEvent={onClickEvent}
                highestIndex={highestIndex}
                disabledDays={disabledDays}
                disabledHours={disabledHours}
                hoveredSlot={hoveredSlot}
                onMouseOut={onMouseOut}
              />
            </GridColumn>
          )
        })}
      </GridRow>
    </Grid>
  )
}

export default WorkWeek
