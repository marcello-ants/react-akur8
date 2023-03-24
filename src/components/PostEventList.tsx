import React from "react";
import { Event } from "@/types";
import { formatDate } from "@/utils";

type Props = {
  events: Event[];
};

const PostEventList: React.FC<Props> = ({ events }) => {
  return (
    <div>
      <h2 className="event-list-title">Event list</h2>
      <ul className="event-list">
        {events.map((event) => (
          <li key={event.date.toISOString()} className="event-list-item">
            <p>
              <span style={{ fontWeight: 700 }}>{event.name}</span>{" "}
              {event.type === "created" ? "created the" : "removed the"}{" "}
              {formatDate(event.date)}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PostEventList;
