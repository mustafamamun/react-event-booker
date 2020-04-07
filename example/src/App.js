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
      start: new Date('2020-04-06T11:50:00+03:00'),
      end: new Date('2020-04-06T17:30:00+03:00'),
      title: 'A Lorem Ipsum is simply ',
    },
    {
      start: new Date('2020-04-06T11:50:00+03:00'),
      end: new Date('2020-04-07T17:30:00+03:00'),
      title: 'B Lorem Ipsum is simply ',
    },
    {
      start: new Date('2020-04-06T11:50:00+03:00'),
      end: new Date('2020-04-06T17:30:00+03:00'),
      title: 'C Lorem Ipsum is simply ',
    },
    {
      start: new Date('2020-04-06T11:50:00+03:00'),
      end: new Date('2020-04-13T17:30:00+03:00'),
      title: 'C Lorem Ipsum is simply ',
    },
    // {
    //   start: new Date('2020-04-11T11:50:00+03:00'),
    //   end: new Date('2020-04-28T17:30:00+03:00'),
    //   title: 'D Lorem Ipsum is simply ',
    // },
    // {
    //   start: new Date('2020-04-14T11:50:00+03:00'),
    //   title: 'E Lorem Ipsum is simply ',
    // },
    // {
    //   start: new Date('2020-04-15T11:50:00+03:00'),
    //   end: new Date('2020-04-25T17:30:00+03:00'),
    //   title: 'F Lorem Ipsum is simply ',
    // },
    // {
    //   start: new Date('2020-04-15T11:50:00+03:00'),
    //   end: new Date('2020-04-16T17:30:00+03:00'),
    //   title: 'G Lorem Ipsum is simply ',
    // },
    // {
    //   start: new Date('2020-04-16T11:50:00+03:00'),
    //   end: new Date('2020-04-17T17:30:00+03:00'),
    //   title: ' H Lorem Ipsum is simply ',
    // },
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
