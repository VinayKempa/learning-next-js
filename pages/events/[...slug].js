import { useRouter } from "next/router";
import { Fragment } from "react/cjs/react.production.min";
import EventList from "../../components/events/event-list";
import ResultsTitle from "../../components/events/results-title";
import Button from "../../components/ui/button";
import { getFilteredEvents } from "../../dummy-data";
import ErrorAlert from "../../components/ui/error-alert";

const FilteredEventsPage = () => {
  const router = useRouter();

  const filteredData = router.query.slug;
  if (!filteredData) {
    return (
      <div>
        <p className="center">Loading...</p>
      </div>
    );
  }

  const [filteredYear, filteredMonth] = router.query.slug;
  const numYear = +filteredYear;
  const numMonth = +filteredMonth;

  if (
    isNaN(numYear) ||
    isNaN(numMonth) ||
    numYear > 2030 ||
    numYear < 2021 ||
    numMonth < 1 ||
    numMonth > 12
  ) {
    return (
      <Fragment>
        <ErrorAlert>Invalid filters. Please adjust your filter</ErrorAlert>
        <Button link="/events">Show All Events</Button>
      </Fragment>
    );
  }

  const filteredEvents = getFilteredEvents({
    year: numYear,
    month: numMonth,
  });

  if (!filteredEvents || filteredEvents.length === 0) {
    return (
      <Fragment>
        <ErrorAlert>No events found for the choosen filter</ErrorAlert>
        <Button link="/events">Show All Events</Button>
      </Fragment>
    );
  }

  const date = new Date(numYear, numMonth - 1);

  return (
    <div>
      <h1>Filtered Events Page</h1>
      <ResultsTitle date={date} />
      <EventList items={filteredEvents} />
    </div>
  );
};

export default FilteredEventsPage;
