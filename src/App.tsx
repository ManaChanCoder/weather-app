import React, { useEffect } from "react";

import weatherStore from "./store/weatherStore";
import WeatherLayout from "./components/WeatherLayout";

export default function App() {
  const { data, setData } = weatherStore();

  useEffect(() => {
    setData("manila");
  }, []);
  // console.log(data);
  return (
    <div className="">
      <WeatherLayout />
    </div>
  );
}
