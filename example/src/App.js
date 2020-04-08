import React from 'react'
import Calendar from 'react-event-booker'
import 'react-event-booker/dist/style/styles.css'
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
      start: new Date('2020-04-13T11:50:00+03:00'),
      end: new Date('2020-04-14T17:30:00+03:00'),
      title: 'D Lorem Ipsum is simply '
    },
    {
      start: new Date('2020-04-14T11:50:00+03:00'),
      end: new Date('2020-04-15T17:30:00+03:00'),
      title: 'D Lorem Ipsum is simply '
    },
    {
      start: new Date('2020-04-15T11:50:00+03:00'),
      end: new Date('2020-04-15T17:30:00+03:00'),
      title: 'Z Lorem Ipsum is simply '
    },
    {
      start: new Date('2020-04-16T11:50:00+03:00'),
      end: new Date('2020-04-17T17:30:00+03:00'),
      title: 'F Lorem Ipsum is simply '
    },
    {
      start: new Date('2020-04-16T11:50:00+03:00'),
      end: new Date('2020-04-17T17:30:00+03:00'),
      title: 'G Lorem Ipsum is simply '
    },
    {
      start: new Date('2020-04-14T11:50:00+03:00'),
      end: new Date('2020-04-17T17:30:00+03:00'),
      title: 'G Lorem Ipsum is simply '
    },
    {
      start: new Date('2020-04-12T11:50:00+03:00'),
      end: new Date('2020-04-17T17:30:00+03:00'),
      title: 'F Lorem Ipsum is simply '
    },
    {
      start: new Date('2020-04-16T11:50:00+03:00'),
      end: new Date('2020-04-18T17:30:00+03:00'),
      title: 'G Lorem Ipsum is simply '
    },
    {
      start: new Date('2020-04-17T11:50:00+03:00'),
      end: new Date('2020-04-17T17:30:00+03:00'),
      title: 'G Lorem Ipsum is simply '
    },
    {
      start: new Date('2020-04-13T11:50:00+03:00'),
      end: new Date('2020-04-14T17:30:00+03:00'),
      title: 'D Lorem Ipsum is simply '
    },
    {
      start: new Date('2020-04-14T11:50:00+03:00'),
      end: new Date('2020-04-15T17:30:00+03:00'),
      title: 'D Lorem Ipsum is simply '
    },
    {
      start: new Date('2020-04-15T11:50:00+03:00'),
      end: new Date('2020-04-15T17:30:00+03:00'),
      title: 'Z Lorem Ipsum is simply '
    },
    {
      start: new Date('2020-04-16T11:50:00+03:00'),
      end: new Date('2020-04-17T17:30:00+03:00'),
      title: 'F Lorem Ipsum is simply '
    },
    {
      start: new Date('2020-04-16T11:50:00+03:00'),
      end: new Date('2020-04-17T17:30:00+03:00'),
      title: 'G Lorem Ipsum is simply '
    },
    {
      start: new Date('2020-04-14T11:50:00+03:00'),
      end: new Date('2020-04-19T17:30:00+03:00'),
      title: 'G Lorem Ipsum is simply '
    },
    {
      start: new Date('2020-04-12T11:50:00+03:00'),
      end: new Date('2020-04-30T17:30:00+03:00'),
      title: 'F Lorem Ipsum is simply '
    },
    {
      start: new Date('2020-04-18T11:50:00+03:00'),
      end: new Date('2020-04-26T17:30:00+03:00'),
      title: 'G Lorem Ipsum is simply '
    },
    {
      start: new Date('2020-04-17T11:50:00+03:00'),
      end: new Date('2020-04-25T17:30:00+03:00'),
      title: 'G Lorem Ipsum is simply '
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
