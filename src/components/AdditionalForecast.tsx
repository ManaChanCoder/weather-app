import { windConvertion, feelConvertion } from "../helper/helper";

type TAdditionalForecast = {
  humidity?: number;
  feels_like?: number;
  wind_deg?: number;
};

export default function AdditionalForecast({
  humidity,
  feels_like,
  wind_deg,
}: TAdditionalForecast) {
  const elementForecast = [
    {
      title: "Feels Like",
      result: `${feelConvertion(feels_like)}°`,
    },
    {
      title: "Humidity",
      result: `${humidity}%`,
    },
    {
      title: "Wind",
      result: `${windConvertion(wind_deg)} km/h`,
    },
    {
      title: "Precipitation",
      result: "0 mm",
    },
  ];
  return (
    <div className="d-flex flex-wrap gap-2 gap-lg-0 justify-content-center justify-content-lg-between m-0 p-0">
      {elementForecast.map((value, index) => (
        <div
          className="e-container bg-neutral-800 rounded-2 py-2 px-3"
          key={index}
        >
          <p className="fs-6 opacity-75">{value.title}</p>
          <p className="fs-5 p-0 m-0">{value.result}</p>
        </div>
      ))}
    </div>
  );
}
