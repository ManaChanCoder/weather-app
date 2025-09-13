// components
import AdditionalForecast from "./AdditionalForecast";
import DailyForecast from "./DailyForecast";
import HourForecast from "./HourForecast";

import Sunny from "../assets/images/icon-sunny.webp";

export default function WeatherLayout() {
  return (
    <div className="container-fluid">
      <div className="row m-0">
        <div className="col-12 col-lg-8">
          <div className="row m-0 bg-large-today py-4 px-2 rounded-2 mb-3">
            <div className="d-flex flex-column flex-md-row justify-content-center justify-content-md-between align-items-center">
              <div className="">
                <p className="fs-5 m-0 p-0">Berlin, Germany</p>
                <span className="opacity-75 fs-6">Tuesday Aug 5, 2025</span>
              </div>
              <div className="d-flex align-items-center gap-1">
                <img src={Sunny} alt="" className="s-icon-size" />
                <span className="fs-96">20°</span>
              </div>
            </div>
          </div>

          <div className="row m-0 mb-3">
            <AdditionalForecast />
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
