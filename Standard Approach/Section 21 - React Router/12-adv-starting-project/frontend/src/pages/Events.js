import { Link } from "react-router-dom";

const DUMMY_EVENTS = [
  { id: "e1", title: "one event" },
  {
    id: "e2",
    title: "two event",
  },
  {
    id: "e3",
    title: "three event",
  },
];

function EventsPage() {
  return (
    <>
      <h1>EventsPage</h1>
      <ul>
        {DUMMY_EVENTS.map((event) => (
          <li key={event.id}>
            <Link to={event.id}>{event.title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}

export default EventsPage;
