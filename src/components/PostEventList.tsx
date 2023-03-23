import React from "react";
import { Event } from "@/types";

type Props = {
  events: Event[];
};

const PostEventList: React.FC<Props> = ({ events }) => {
  return (
    <ul className="post-event-list">
      {events.map((event) => (
        <li key={event.date.toISOString()} className="post-event-list-item">
          <p>
            {event.name}{" "}
            {event.type === "created" ? "created the" : "removed the"}{" "}
            {event.date.toISOString()}
          </p>
        </li>
      ))}
    </ul>
  );
};

export default PostEventList;
