
import './App.css';
import { EventCard } from './components/EventCard';
import { EVENTS } from './static';
import { findHour, findTotalMinutes } from './utils';
const SORTED_EVENTS = EVENTS.sort((a, b) => findTotalMinutes(a.start) - findTotalMinutes(b.start))

function App() {
  const map: [number, number][] = [];

  return (
    <div className='container'>
      {Array(24).fill(0).map((_i, idx) => {
        const time = findHour(idx)
        return <div className='container_row' >
          <time>{time}</time>
          <div className='events'></div>
        </div>
      })}
      {SORTED_EVENTS.map((event, idx) => {
        const startTime = findTotalMinutes(event.start)
        const endTime = findTotalMinutes(event.end)
        let zIndex = 1
        for (const [start, end] of map) {
          if (startTime >= start && startTime <= end) {
            zIndex++
          }
          else if (endTime <= end && endTime >= start) {
            zIndex++
          }
        }
        map.push([+startTime, +endTime])
        return (
          <EventCard key={idx} event={event} zIndex={zIndex} />
        )
      })}
    </div >
  )
}

export default App


// create a google calender
//single day only
// timestamp from 12am to 12pm 24 h
//1 hour slots, grid style,
// events should be color customized
//need to consider minutes when setting events
