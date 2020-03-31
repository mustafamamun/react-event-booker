# Intro

This is a event based calendar for react

# Setup

    npm install react-calendar-basic
    yarn add react-calendar-basic

## Use

    import React from  'react'
    import Calendar from  'react-calendar-basic'
    import  'react-calendar-basic/dist/style/styles.css'

    function  App() {
    	const  onClickedEvent  =  e  =>  {
    		console.log(e)
    	}
    	const  onSelect  =  e  =>  {
    		console.log(e)
    	}
    	const  onNavigation  =  e  =>  {
    		console.log(e)
    	}
    	const  onViewChange  =  e  =>  {
    		console.log(e)
    	}
    	const  events  =  [{
    		start:  new  Date('2020-03-31T19:50:00+03:00'),
    		end:  new  Date('2020-03-31T21:10:00+03:00'),
    		title:  'Example event'
    		}]
    	return (
    		<div  className='App'>
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
    export  default  App

# TO DO

    Disable days and hour from the calendar
