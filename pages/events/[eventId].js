import { useRouter } from "next/router";
import React from "react";
import EventSummary from "../../components/event-detail/event-summary";
import EventLogistics from "../../components/event-detail/event-logistics";
import EventContent from "../../components/event-detail/event-content";
import { getEventById } from "../../dummy-data";
import ErrorAlert from "../../components/ui/error-alert";
import { Fragment } from "react/cjs/react.production.min";
import Button from "../../components/ui/button";

const EventDetailPage = () => {
  const router = useRouter();

  const { eventId } = router.query;
  const event = getEventById(eventId);

  if (!event) {
    return (
      <Fragment>
        <ErrorAlert>No Event found</ErrorAlert>
        <Button link={`/events`}>Show All Events</Button>
      </Fragment>
    );
  }

  return (
    <React.Fragment>
      <EventSummary title={event.title} />
      <EventLogistics
        date={event.date}
        address={event.location}
        image={event.image}
        imageAlt={event.title}
      />
      <EventContent>
        <p>{event.description}</p>
      </EventContent>
    </React.Fragment>
  );
};

export default EventDetailPage;
