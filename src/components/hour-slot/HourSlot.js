import React from 'react'
import {
  addHours,
  startOfMinute,
  addMinutes,
  subHours,
  isSameMinute
} from 'date-fns'
import HalfAnHourSlot from './HalfAnHourSlot'
import { isSlotDisabled } from '../../utils'

const HourSlot = ({
  day,
  hour,
  onMouseClick,
  selectedWindow,
  currentTime,
  onMouseOver,
  onMouseUp,
  events,
  onClickEvent,
  highestIndex,
  disabledDays,
  disabledHours,
  hoveredSlot,
  onMouseOut
}) => {
  const startTZO = day.getTimezoneOffset()
  const endDate = addHours(day, hour)
  const endTZO = endDate.getTimezoneOffset()
  const zoneOffsetBefore = subHours(endDate, 1).getTimezoneOffset()

  let firstSlotStartHour
  if (startTZO > endTZO && zoneOffsetBefore === endTZO) {
    firstSlotStartHour = startOfMinute(addHours(day, hour - 1))
  } else if (startTZO < endTZO) {
    firstSlotStartHour = startOfMinute(addHours(day, hour + 1))
  } else {
    firstSlotStartHour = startOfMinute(addHours(day, hour))
  }
  const secondSlotStartHour = startOfMinute(addMinutes(firstSlotStartHour, 30))

  if (startTZO > endTZO && zoneOffsetBefore !== endTZO) {
    return <div className={'dst-div'}>DST HOUR</div>
  }
  const getClassName = (initial, startHour) => {
    return `${initial} ${
      isSlotDisabled(startHour, currentTime, disabledDays, disabledHours)
        ? 'disable'
        : ''
    } ${isSameMinute(startHour, new Date(hoveredSlot)) ? 'hovered' : ''}`
  }
  return (
    <div>
      <HalfAnHourSlot
        className={getClassName('first-half-an-hour', firstSlotStartHour)}
        id={firstSlotStartHour.toString()}
        onMouseDown={onMouseClick}
        onMouseOver={onMouseOver}
        onMouseUp={onMouseUp}
        slotStart={firstSlotStartHour}
        selectedWindow={selectedWindow}
        currentTime={currentTime}
        onClickEvent={onClickEvent}
        events={events}
        highestIndex={highestIndex}
        disabledDays={disabledDays}
        disabledHours={disabledHours}
        onMouseOut={onMouseOut}
      />
      <HalfAnHourSlot
        className={getClassName('last-half-an-hour', secondSlotStartHour)}
        id={secondSlotStartHour.toString()}
        onMouseDown={onMouseClick}
        onMouseOver={onMouseOver}
        onMouseUp={onMouseUp}
        slotStart={secondSlotStartHour}
        selectedWindow={selectedWindow}
        currentTime={currentTime}
        events={events}
        onClickEvent={onClickEvent}
        highestIndex={highestIndex}
        disabledDays={disabledDays}
        disabledHours={disabledHours}
        onMouseOut={onMouseOut}
      />
    </div>
  )
}

export default HourSlot
