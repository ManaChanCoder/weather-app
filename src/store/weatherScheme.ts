type TCoord = {
  lon: number;
  lat: number;
};
type TWeather = {
  id: number;
  main: string;
  description: string;
  icon: string;
};
type TMain = {
  temp: number;
  feels_like: number;
  temp_min: number;
  temp_max: number;
  pressure: number;
  humidity: number;
  sea_level?: number;
  grnd_level?: number;
};
type TWind = {
  speed: number;
  deg: number;
  gust?: number;
};
type TRain = {
  "1h"?: number;
};
type TClouds = {
  all: number;
};
type TSys = {
  country: string;
  sunrise: number;
  sunset: number;
};

export type TWeatherDatas = {
  coord: TCoord;
  weather: TWeather[];
  base: string;
  main: TMain;
  visibility: number;
  wind: TWind;
  rain?: TRain;
  clouds: TClouds;
  dt: number;
  sys: TSys;
  timezone: number;
  id: number;
  name: string;
  cod: number;
};
