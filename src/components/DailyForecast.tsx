import Drizzle from "../assets/images/icon-drizzle.webp";
import Rain from "../assets/images/icon-rain.webp";
import Sunny from "../assets/images/icon-sunny.webp";
import PartyCloudly from "../assets/images/icon-partly-cloudy.webp";
import Storm from "../assets/images/icon-storm.webp";
import Snow from "../assets/images/icon-snow.webp";
import Fog from "../assets/images/icon-fog.webp";

type TForecast = {
  src: string;
  day: string;
  fTemp: number;
  cTemp: number;
};

export default function DailyForecast() {
  const dailyForecast: TForecast[] = [
    {
      src: Rain,
      day: "Tuesday",
      fTemp: 20,
      cTemp: 14,
    },
    {
      src: Drizzle,
      day: "Wednesday",
      fTemp: 21,
      cTemp: 15,
    },
    {
      src: Sunny,
      day: "Thursday",
      fTemp: 24,
      cTemp: 14,
    },
    {
      src: PartyCloudly,
      day: "Friday",
      fTemp: 25,
      cTemp: 13,
    },
    {
      src: Storm,
      day: "Saturday",
      fTemp: 21,
      cTemp: 15,
    },
    {
      src: Snow,
      day: "Sunday",
      fTemp: 25,
      cTemp: 16,
    },
    {
      src: Fog,
      day: "Tuesday",
      fTemp: 24,
      cTemp: 15,
    },
  ];
  return (
    <div className="user-select-none m-0 p-0">
      <p>Daily forecast</p>
      <div className="d-flex flex-wrap gap-2 gap-lg-0 justify-content-center justify-content-lg-between">
        {dailyForecast.map((value, index) => (
          <div
            key={index}
            className="bg-neutral-800 rounded-2 f-container p-2 d-flex flex-column align-items-center gap-1"
          >
            <p className="p-0 m-0 fs-6">{value.day.slice(0, 3)}</p>
            <img src={value.src} alt="" className="w-icon-sizes" />
            <div className="d-flex gap-4 align-items-center fs-6">
              <div>{value.cTemp}°</div>
              <div>{value.fTemp}°</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
