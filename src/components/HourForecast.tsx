import { useCallback, useState } from "react";

// icons
import Dropdown from "../assets/images/icon-dropdown.svg";
import Drizzle from "../assets/images/icon-drizzle.webp";
import Fog from "../assets/images/icon-fog.webp";
import Overcast from "../assets/images/icon-overcast.webp";
import PartlyCloudly from "../assets/images/icon-partly-cloudy.webp";
import Sunny from "../assets/images/icon-sunny.webp";

// import helper
import { getDayName } from "../helper/helper";

type TDays = boolean[];
type TWeather = {
  src: string;
  time: string;
  temp: string;
};

export default function HourForecast() {
  const [open, setOpen] = useState<boolean>(false);
  const [days, setDays] = useState<TDays>([
    true,
    false,
    false,
    false,
    false,
    false,
    false,
  ]);
  const dayNames = getDayName();
  const selectedDay = dayNames[days.findIndex(Boolean)] ?? "Select a day";

  const hourlyDayForecast = useCallback(
    (index: number) => {
      setDays((prev) => {
        if (prev[index]) return prev;
        return prev.map((_, i) => i === index);
      });
      setOpen(!open);
    },
    [open]
  );

  const weatherForecast: TWeather[] = [
    {
      src: Overcast,
      time: "3 PM",
      temp: "20°",
    },
    {
      src: PartlyCloudly,
      time: "4 PM",
      temp: "20°",
    },
    {
      src: Sunny,
      time: "5 PM",
      temp: "20°",
    },
    {
      src: Overcast,
      time: "6 PM",
      temp: "19°",
    },
    {
      src: Drizzle,
      time: "7 PM",
      temp: "18°",
    },
    {
      src: Fog,
      time: "8 PM",
      temp: "18°",
    },
    {
      src: Drizzle,
      time: "9 PM",
      temp: "17°",
    },
    {
      src: Overcast,
      time: "10 PM",
      temp: "17°",
    },
  ];

  return (
    <div className="h-container p-3 rounded-2">
      <div className="d-flex justify-content-between">
        <span className="">Hourly forecast</span>
        <div className="dropdown">
          <button
            onClick={() => setOpen(!open)}
            className="btn bg-neutral-600 text-white d-flex align-items-center gap-1"
            type="button"
            aria-expanded="false"
          >
            {selectedDay.name}
            <img src={Dropdown} alt="" />
          </button>

          <ul
            className={`dropdown-menu mt-1 bg-neutral-800 p-2 border border-secondary ${
              open ? "show" : ""
            }`}
          >
            {dayNames.map((day, index) => (
              <li
                key={index}
                onClick={() => hourlyDayForecast(index)}
                className="dropdown-item text-white cursor-pointer mb-2 rounded-3 l-off-margin"
              >
                {day.name}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="d-flex flex-column gap-2 mt-3">
        {weatherForecast.map((value, index) => (
          <div
            key={index}
            className="d-flex flex-row justify-content-between p-2 bg-forecast rounded-2 user-select-none"
          >
            <div className="d-flex flex-row gap-1 align-items-center">
              <img src={value.src} alt="" className="w-icon-sizes" />
              <span>{value.time}</span>
            </div>
            <span>{value.temp}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
