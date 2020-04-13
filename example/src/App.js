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
      title: 'A Lorem Ipsum is simply '
    },
    {
      start: new Date('2020-04-14T11:50:00+03:00'),
      end: new Date('2020-04-15T17:30:00+03:00'),
      title: 'B Lorem Ipsum is simply '
    },
    {
      start: new Date('2020-04-15T11:50:00+03:00'),
      end: new Date('2020-04-15T17:30:00+03:00'),
      title: 'C Lorem Ipsum is simply '
    },
    {
      start: new Date('2020-04-16T11:50:00+03:00'),
      end: new Date('2020-04-17T17:30:00+03:00'),
      title: 'D Lorem Ipsum is simply '
    },
    {
      start: new Date('2020-04-16T11:50:00+03:00'),
      end: new Date('2020-04-17T17:30:00+03:00'),
      title: 'E Lorem Ipsum is simply '
    },
    {
      start: new Date('2020-04-14T11:50:00+03:00'),
      end: new Date('2020-04-17T17:30:00+03:00'),
      title: 'F Lorem Ipsum is simply '
    },
    {
      start: new Date('2020-04-12T11:50:00+03:00'),
      end: new Date('2020-04-13T17:30:00+03:00'),
      title: 'G Lorem Ipsum is simply '
    },
    {
      start: new Date('2020-04-16T11:50:00+03:00'),
      end: new Date('2020-04-18T17:30:00+03:00'),
      title: 'H Lorem Ipsum is simply '
    },
    {
      start: new Date('2020-04-17T11:50:00+03:00'),
      end: new Date('2020-04-17T17:30:00+03:00'),
      title: 'I Lorem Ipsum is simply '
    },
    {
      start: new Date('2020-04-13T11:50:00+03:00'),
      end: new Date('2020-04-14T17:30:00+03:00'),
      title: 'J Lorem Ipsum is simply '
    },
    {
      start: new Date('2020-04-14T11:50:00+03:00'),
      end: new Date('2020-04-15T17:30:00+03:00'),
      title: 'K Lorem Ipsum is simply '
    },
    {
      start: new Date('2020-04-15T11:50:00+03:00'),
      end: new Date('2020-04-15T17:30:00+03:00'),
      title: 'L Lorem Ipsum is simply '
    },
    {
      start: new Date('2020-04-16T11:50:00+03:00'),
      end: new Date('2020-04-17T17:30:00+03:00'),
      title: 'M Lorem Ipsum is simply '
    },
    {
      start: new Date('2020-04-16T11:50:00+03:00'),
      end: new Date('2020-04-17T17:30:00+03:00'),
      title: 'N Lorem Ipsum is simply '
    },
    {
      start: new Date('2020-04-14T11:50:00+03:00'),
      end: new Date('2020-04-19T17:30:00+03:00'),
      title: 'O Lorem Ipsum is simply '
    },
    {
      start: new Date('2020-04-12T11:50:00+03:00'),
      end: new Date('2020-04-15T17:30:00+03:00'),
      title: 'P Lorem Ipsum is simply '
    },
    {
      start: new Date('2020-04-18T11:50:00+03:00'),
      end: new Date('2020-04-22T17:30:00+03:00'),
      title: 'Q Lorem Ipsum is simply '
    },
    {
      start: new Date('2020-04-17T11:50:00+03:00'),
      end: new Date('2020-04-25T17:30:00+03:00'),
      title: 'R Lorem Ipsum is simply '
    }
  ]
  return (
    <div className='App'>
      <Calendar
        defaultView={'work-week'}
        onNavigation={onNavigation}
        onViewChange={onViewChange}
        events={events}
        onSelect={onSelect}
        onClickedEvent={onClickedEvent}
        disabledDays={['Sat', 'Sun', 'Mon']}
        disabledHours={[0]}
        weekends={['Sun', 'Sat']}
      />
    </div>
  )
}

export default App
