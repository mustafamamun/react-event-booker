import React from 'react'
import Calendar from 'react-calendar-basic'
import 'react-calendar-basic/dist/style/styles.css'
function App() {
  const onClickedEvent = () => {
    console.log('onClickedEvent')
  }
  const onSelect = () => {
    console.log('onSelect')
  }
  const onNavigation = () => {}
  const onViewChange = () => {}
  const events = [
    {
      start: new Date('2020-03-29T19:50:00+03:00'),
      end: new Date('2020-03-29T20:10:00+03:00'),
      title: 'This is a event on mac sdsdfg asdfas asdfsa asfa asdfa asdfasdf'
    }
  ]
  return (
    <div className='App'>
      <Calendar
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
