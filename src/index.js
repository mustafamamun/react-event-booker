import React, { useState } from 'react'
import { Container } from 'semantic-ui-react'
import { useInterval } from 'react-use'
import PropTypes from 'prop-types'
import { Context } from './context/Context'
import Nav from './components/nav/Nav'
import Views from './components/views/IndexView'

import 'semantic-ui-css/semantic.min.css'
import './styles.css'

function Calendar({
  events = [],
  onClickedEvent,
  onSelect,
  onNavigation,
  onViewChange,
  defaultView = 'month'
}) {
  const [currentTime, setCurrentTime] = useState(new Date())
  useInterval(() => {
    setCurrentTime(new Date())
  }, 5 * 60 * 1000)
  return (
    <Context defaultView={defaultView}>
      <Container className={'mt-5'}>
        <Nav onNavigation={onNavigation} onViewChange={onViewChange} />
        <Views
          currentTime={currentTime}
          events={events}
          onSelect={onSelect}
          onClickedEvent={onClickedEvent}
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
  prototype: PropTypes.string
}

export default Calendar
