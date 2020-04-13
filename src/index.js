import React from 'react'
import { Container } from 'semantic-ui-react'
import PropTypes from 'prop-types'
import { isEmpty, includes, indexOf } from 'lodash'
import { Context } from './context/Context'
import Nav from './nav/Nav'
import Views from './views/IndexView'
import { getRandomColor, invertColor, daysInWeek, hours } from './utils'

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
  disabledHours = [],
  weekends = ['Sat', 'Sun']
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
    <Context defaultView={defaultView} weekends={weekends}>
      <Container className={'mt-5'}>
        <Nav
          onNavigation={onNavigation}
          onViewChange={onViewChange}
          weekends={weekends}
        />
        <Views
          events={coloredEvent}
          onSelect={onSelect}
          onClickedEvent={onClickedEvent}
          disabledDays={disabledDays}
          disabledHours={disabledHours}
          weekends={weekends}
        />
      </Container>
    </Context>
  )
}

Calendar.propTypes = {
  events: PropTypes.array.isRequired,
  onClickedEvent: PropTypes.func.isRequired,
  onSelect: PropTypes.func.isRequired,
  onNavigation: PropTypes.func.isRequired,
  onViewChange: PropTypes.func.isRequired,
  defaultView: PropTypes.oneOf(['month', 'day', 'week', 'work-week', 'agenda']),
  disabledDays: (props, propName) => {
    if (!props[propName]) return
    if (!Array.isArray(props[propName]))
      return new Error(`${propName} is a array type props`)
    if (
      !isEmpty(
        props[propName].filter(day => {
          return !includes(daysInWeek, day)
        })
      )
    ) {
      return new Error(
        `${propName} array must be a sub set of [${daysInWeek.toString()}]`
      )
    }
  },
  weekends: (props, propName) => {
    if (!props[propName]) return
    if (!Array.isArray(props[propName]))
      return new Error(`${propName} is a array type props`)
    if (
      !isEmpty(
        props[propName].filter(day => {
          return !includes(daysInWeek, day)
        })
      )
    ) {
      return new Error(
        `${propName} array must be a sub set of [${daysInWeek.toString()}]`
      )
    }
    const indexes = props[propName].map(day => indexOf(daysInWeek, day))
    const incontinuousDays = indexes.sort().filter((element, i) => {
      if (i === 0) return
      if (
        element - indexes[i - 1] === 1 ||
        Math.abs(element - indexes[i - 1]) === 6
      )
        return
      else return true
    })

    if (!isEmpty(incontinuousDays)) {
      return new Error(`${propName} days should be in serial`)
    }
  },
  disabledHours: (props, propName) => {
    if (!props[propName]) return
    if (!Array.isArray(props[propName]))
      return new Error(`${propName} is a array type props`)
    if (
      !isEmpty(
        props[propName].filter(day => {
          return !includes(hours, day)
        })
      )
    ) {
      return new Error(
        `${propName} array must be a sub set of [${hours.toString()}]`
      )
    }
  }
}

export default Calendar
