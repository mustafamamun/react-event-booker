import React from 'react'
import { Container } from 'semantic-ui-react'
import PropTypes from 'prop-types'
import { Context } from './context/Context'
import Nav from './components/nav/Nav'
import Views from './components/views/IndexView'
import { getRandomColor, invertColor } from './components/utils'

import 'semantic-ui-css/semantic.min.css'
import './style/styles.css'

function Calendar({
  events = [],
  onClickedEvent,
  onSelect,
  onNavigation,
  onViewChange,
  defaultView = 'month',
  disabledDays = [],
  disabledHours = []
}) {
  const coloredEvent = events.map(e => {
    const color = getRandomColor()
    return {
      ...e,
      calprops: {
        bgColor: color,
        color: invertColor(color)
      }
    }
  })
  return (
    <Context defaultView={defaultView}>
      <Container className={'mt-5'}>
        <Nav onNavigation={onNavigation} onViewChange={onViewChange} />
        <Views
          events={coloredEvent}
          onSelect={onSelect}
          onClickedEvent={onClickedEvent}
          disabledDays={disabledDays}
          disabledHours={disabledHours}
        />
      </Container>
    </Context>
  )
}

Calendar.prototype = {
  events: PropTypes.array.isRequired,
  onClickedEvent: PropTypes.func.isRequired,
  onSelect: PropTypes.func.isRequired,
  onNavigation: PropTypes.func.isRequired,
  onViewChange: PropTypes.func.isRequired,
  defaultView: PropTypes.oneOf(['month', 'day', 'week', 'agenda']),
  disabledDays: PropTypes.oneOf([
    'Sun',
    'Mon',
    'Tue',
    'Wed',
    'Thu',
    'Fri',
    'Sat'
  ]),
  disabledHours: PropTypes.oneOf([
    0,
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11,
    12,
    13,
    14,
    15,
    16,
    17,
    18,
    19,
    20,
    21,
    22,
    23
  ])
}

export default Calendar
