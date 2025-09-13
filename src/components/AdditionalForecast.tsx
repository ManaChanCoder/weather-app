type TAdditionalForecast = {
  title: string;
  result: number;
};

export default function AdditionalForecast() {
  const elementForecast: TAdditionalForecast[] = [
    {
      title: "Feels Like",
      result: 18,
    },
    {
      title: "Humidity",
      result: 46,
    },
    {
      title: "Wind",
      result: 14,
    },
    {
      title: "Precipitation",
      result: 0,
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
          <p className="fs-5 p-0 m-0">{value.result}°</p>
        </div>
      ))}
    </div>
  );
}
