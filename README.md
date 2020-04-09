# Intro

Event based calendar for react that allows disabling specific hour or day.

# Setup

    npm install react-event-booker
    yarn add react-event-booker

## Use

```js
import React from 'react'
import Calendar from 'react-event-booker'
import 'react-event-booker/dist/style/styles.css'

function App() {
  const onClickedEvent = (e) => {
    console.log(e)
  }
  const onSelect = (e) => {
    console.log(e)
  }
  const onNavigation = (e) => {
    console.log(e)
  }
  const onViewChange = (e) => {
    console.log(e)
  }
  const events = [
    {
      start: new Date('2020-03-31T19:50:00+03:00'),
      end: new Date('2020-03-31T21:10:00+03:00'),
      title: 'Example event'
    }
  ]
  return (
    <div className='App'>
      <Calendar
        defaultView={'month'}
        onNavigation={onNavigation}
        onViewChange={onViewChange}
        events={events}
        onSelect={onSelect}
        onClickedEvent={onClickedEvent}
      />
    </div>
  )
}
export default App
```

# Props

| Prop           | Required | Type     | Description                                                                                                                                                                                  |
| -------------- | -------- | -------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| onNavigation   | True     | Function | Callback funciton triggered when navigation happens                                                                                                                                          |
| onNavigation   | True     | Function | Callback funciton triggered when navigation happens                                                                                                                                          |
| onViewChange   | True     | Function | Callback funciton triggered on view change                                                                                                                                                   |
| onSelect       | True     | Function | Calback function triggered when selection ends                                                                                                                                               |
| onClickedEvent | True     | Function | Calback function triggered when selection ends                                                                                                                                               |
| events         | True     | Array    | Array of event object. Event object = {start: Date , end: Date, title: String }                                                                                                              |
| defaultView    | false    | Enum     | One of 'month', 'day', 'week', 'agenda'                                                                                                                                                      |
| disabledDays   | false    | Array    | Disables the given dates. Value is one or multiple of 'Sun', 'Mon', 'Tue','Wed','Thu','Fri','Sat'. Example: ['Sat', 'Sun']. Event on the disabled days are not shown in the calendar         |
| disabledHours  | false    | Array    | Disables the given hours of day. One or multiple of 0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23. Example: [1,2]. Event on the disabled hours are not shown in the calendar |

# TO DO

1. Add work week.
2. Take style input from user. However user can always overwrite the css classes.
3. Add type def for typescript

# Release Note

### Version 0.0.2

1. Moth view position calculation corrected
