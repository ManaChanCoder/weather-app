import { useEffect, useState } from "react";
// components
import AdditionalForecast from "./AdditionalForecast";
import DailyForecast from "./DailyForecast";
import HourForecast from "./HourForecast";
import Navbar from "./shared/Navbar";

// store
import { weatherStore } from "../store/weatherStore";
import { cityListStore } from "../store/cityListStore";

import { getWeather, getTemp, getDate } from "../helper/helper";
import Search from "../assets/images/icon-search.svg";

export default function WeatherLayout() {
  const [open, setOpen] = useState<boolean>(false);
  const [search, setSearch] = useState<string>("");
  const { fetchingCity, data } = weatherStore();
  const { cities, setCity } = cityListStore();

  useEffect(() => {
    if (search) setCity(search);
    // fetchingCity();
  }, [search]);

  useEffect(() => {
    fetchingCity();
  }, []);

  const searchButton = (seCity: string) => {
    setSearch("");
    fetchingCity(seCity);
    setOpen(!open);
  };

  return (
    <div className="container-fluid">
      <div className="row m-0">
        <div className="col-12">
          <Navbar />
        </div>
      </div>
      <div className="row mb-0 my-4">
        <div className="col-12">
          <h1 className="text-center fs-52 fw-semibold">
            How’s the sky looking today?
          </h1>
        </div>
      </div>
      <div className="row mb-0 mb-3">
        <div className="col-12 d-flex justify-content-center gap-2 flex-wrap">
          <div
            // onClick={() => setOpen(!open)}
            className="dropdown d-flex align-items-center bg-neutral-800 rounded-3 px-3 py-1 se-container"
          >
            <img src={Search} alt="" className="w-icon-size me-2" />
            <input
              type="text"
              className="outline-none border-0 bg-transparent text-white w-100"
              placeholder="Search for a place..."
              value={search}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                const value = e.target.value;
                setSearch(value);
                if (value === "") setOpen(false);
                else setOpen(true);
              }}
            />

            <ul
              className={`dropdown-menu w-100 mt-2 bg-neutral-800 p-2 ${
                open ? "show" : ""
              }`}
            >
              {cities.map((value) => (
                <li
                  key={value.name + value.country}
                  className="dropdown-item text-white cursor-pointer"
                  onClick={() => {
                    searchButton(value.name);
                  }}
                >
                  {value.name}, {value.country}
                </li>
              ))}
            </ul>
          </div>
          <button
            onClick={() => searchButton(search)}
            type="button"
            className="btn btn-primary se-btn"
          >
            Search
          </button>
        </div>
      </div>
      <div className="row m-0">
        <div className="col-12 col-lg-8">
          <div className="row m-0 bg-large-today py-4 px-2 rounded-2 mb-3">
            <div className="d-flex flex-column flex-md-row justify-content-center justify-content-md-between align-items-center">
              <div className="">
                <p className="fs-5 m-0 p-0">{`${data?.name}, ${data?.sys.country}`}</p>
                <span className="opacity-75 fs-6">
                  {getDate(data?.dt, data?.timezone)}
                </span>
              </div>
              <div className="d-flex align-items-center gap-1">
                {data?.weather.map((d_icon, index) => (
                  <img
                    key={index}
                    src={getWeather(d_icon.icon)}
                    alt=""
                    className="s-icon-size"
                  />
                ))}
                <span className="fs-96">{getTemp(data?.main.temp)}°</span>
              </div>
            </div>
          </div>

          <div className="row m-0 mb-3">
            <AdditionalForecast
              humidity={data?.main.humidity}
              feels_like={data?.main.feels_like}
              wind_deg={data?.wind.speed}
            />
          </div>

          <div className="row m-0">
            <DailyForecast />
          </div>
        </div>
        <div className="col-12 col-lg-4">
          <HourForecast />
        </div>
      </div>
    </div>
  );
}
