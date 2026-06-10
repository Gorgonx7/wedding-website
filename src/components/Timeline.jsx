import './Timeline.css';

function Timeline() {
  const events = [
    {
      id: 1,
      time: '12:00 PM',
      title: 'Guest Arrival',
      description: 'Please arrive at Orchardleigh House and make your way to the ceremony location'
    },
    {
      id: 2,
      time: '1:00 PM',
      title: 'Ceremony',
      description: 'The wedding ceremony begins at St Mary\'s Orchardleigh'
    },
    {
      id: 3,
      time: '2:00 PM',
      title: 'Drinks Reception',
      description: 'Join us for champagne and canapes on the terrace or in the Grand Hall'
    },
    {
      id: 4,
      time: '4:00 PM',
      title: 'Wedding Breakfast',
      description: 'Three-course wedding breakfast in the Ballroom'
    },
    {
      id: 5,
      time: '7:30 PM - 4:00 AM',
      title: 'Evening Reception',
      description: 'Cake cutting, first dance, and evening entertainment begins'
    }
  ];

  return (
    <section className="timeline">
      <div className="container">
        <h2 className="section-title">Order of the Day</h2>
        <div className="timeline-container">
          {events.map((event) => (
            <div key={event.id} className="timeline-box">
              <div className="timeline-time">{event.time}</div>
              <h3 className="timeline-title">{event.title}</h3>
              <p className="timeline-description">{event.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Timeline;
