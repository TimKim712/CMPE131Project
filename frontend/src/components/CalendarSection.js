import {ReactComponentElement, useState, useEffect} from 'react';
import './CalendarSection.css';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css'; // Import CSS for calendar

const localizer = momentLocalizer(moment); // Create a localizer using moment

function CalendarSection() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await fetch('http://localhost:8081/events');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        console.log('Data ',data)
        setEvents(data);
      } catch (error) {
        console.error('Fetch error:', error);
      }
    };

    fetchEvents();
  }, []);

// Prepare the events for the calendar
const formattedEvents = events.map(event => ({
    title: event.title,
    start: moment(event.eventDate).toDate(),
    end: moment(event.eventDate).toDate(),
    allDay: true // allDay is a boolean, not a string
  }));
  

    return (
        <div className='calendar-section'>
            <Calendar
                localizer={localizer}
                startAccessor="start"
                endAccessor="end"
                events={formattedEvents} // You can pass your events here
                style={{ height: 500 }}
            />
        </div>
    );
}

export default CalendarSection;



//   const [events, setEvents] = useState([]);

//   useEffect(() => {
//     const fetchEvents = async () => {
//       try {
//         const response = await fetch('http://localhost:8081/events');
//         if (!response.ok) {
//           throw new Error('Network response was not ok');
//         }
//         const data = await response.json();
//         setEvents(data);
//       } catch (error) {
//         console.error('Fetch error:', error);
//       }
//     };

//     fetchEvents();
//   }, []);

//   return (
//     <div className="calendar-section">
//       <h2>Upcoming Events</h2>
//       <ul className="events-list">
//         {events.map((event, index) => (
//           <li key={index}>
//             <span className="event-title"> {event.title}</span>
//             <br/>
//             <span className="event-description">{event.description}</span>
//             <br/>
//             <span className="event-date">{event.eventDate}</span>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }