import { useEffect, useState } from "react";
import "./tape.css";

function Tape() {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setDate(new Date());
    }, 1000 * 60);

    return () => clearInterval(interval);
  }, [date, setDate]);

  const dateString = date.toLocaleString("en-US", {
    timeZone: "CET",
    weekday: "short",
    hour: "2-digit",
    minute: "2-digit",
  });

  return (
    <div className="flex space-between">
      <div>CH 13</div>
      <div>{dateString}</div>
    </div>
  );
}

export default Tape;
