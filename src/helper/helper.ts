import Sunny from "../assets/images/icon-sunny.webp";
import PartlyCloud from "../assets/images/icon-partly-cloudy.webp";
import Drizzle from "../assets/images/icon-drizzle.webp";
import Fog from "../assets/images/icon-fog.webp";
import OverCast from "../assets/images/icon-overcast.webp";
import Rain from "../assets/images/icon-rain.webp";
import Snow from "../assets/images/icon-snow.webp";
import Storm from "../assets/images/icon-storm.webp";

export const getDayName = () => {
  const today: Date = new Date();

  return Array.from({ length: 7 }, (_, i: number) => {
    const date = new Date(today);
    date.setDate(today.getDate() + i);

    const dayName = date.toLocaleDateString("en-US", { weekday: "long" });

    return {
      name: dayName,
    };
  });
};
export const getWeather = (code: string): string => {
  switch (code) {
    case "01d":
    case "01n":
      return Sunny;
    case "02d":
    case "02n":
      return PartlyCloud;
    case "03d":
    case "03n":
      return OverCast;
    case "04d":
    case "04n":
      return PartlyCloud;
    case "09d":
    case "09n":
      return Drizzle;
    case "10d":
    case "10n":
      return Rain;
    case "11d":
    case "11n":
      return Storm;
    case "13d":
    case "13n":
      return Snow;
    case "50d":
    case "50n":
      return Fog;
    default:
      return "loading...";
  }
};

export const getTemp = (temp: number | undefined): number => {
  if (temp === undefined) return 0;

  const converStr = (temp / 10).toFixed(1);
  return Number(converStr);
};

export const getDate = (
  dt: number | undefined,
  timezone: number | undefined
): string => {
  if (dt === undefined || timezone === undefined) return "";
  return new Date((dt + timezone) * 1000).toLocaleDateString("en-US", {
    weekday: "long",
    month: "short",
    day: "2-digit",
    year: "numeric",
  });
};

export const windConvertion = (deg: number | undefined): number => {
  if (deg === undefined) return 0;
  const convertStr = (deg / 10).toFixed(1);
  return Number(convertStr);
};
export const feelConvertion = (feel_like: number | undefined): number => {
  if (feel_like === undefined) return 0;
  const convertStr = (feel_like / 10).toFixed(1);
  return Number(convertStr);
};
