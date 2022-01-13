import EventItem from "./event-item";
import classes from "./event-list.module.css";

const EventList = (props) => {
  const { items } = props;
  return (
    <ul className={classes.list}>
      {(items || []).map((item) => {
        return <EventItem {...item} key={item.id} />;
      })}
    </ul>
  );
};

export default EventList;
