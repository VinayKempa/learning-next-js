import { useRouter } from "next/router";
import React from "react";
import EventList from "../../components/events/event-list";
import EventsSearch from "../../components/events/events-search";
import { getAllEvents } from "../../dummy-data";

const AllEvents = () => {
  const events = getAllEvents();
  const router = useRouter();
  const findEventHandler = (year, month) => {
    const fullPath = `/events/${year}/${month}`;
    router.push(fullPath);
  };
  if (events && events.length) {
    return (
      <React.Fragment>
        <EventsSearch onSearch={findEventHandler} />
        <EventList items={events} />
      </React.Fragment>
    );
  } else {
    return <div>No Events to display</div>;
  }
};

export default AllEvents;
