import { useState } from "react";

// icons
import Logo from "../../assets/images/logo.svg";
import Units from "../../assets/images/icon-units.svg";
import DropDown from "../../assets/images/icon-dropdown.svg";
import CheckIcon from "../../assets/images/icon-checkmark.svg";

export default function Navbar() {
  const [unit, setUnit] = useState<boolean>(false);
  const [checkTemperature, setCheckTemperature] = useState<boolean>(false);
  const [checkWindSpeed, setCheckWindSpeed] = useState<boolean>(false);
  const [checkPrecipitation, setCheckPrecipitation] = useState<boolean>(false);
  const [dropdown, setDropdown] = useState<boolean>(false);
  return (
    <div className="d-flex justify-content-between align-items-center py-3 px-5">
      <img src={Logo} alt="sunflower" />
      <div className="dropdown">
        <button
          onClick={() => setDropdown(!dropdown)}
          className="btn bg-neutral-800 text-white d-flex align-items-center gap-1"
          type="button"
          //   data-bs-toggle="dropdown"

          aria-expanded="false"
        >
          <img src={Units} alt="" />
          Units
          <img src={DropDown} alt="" />
        </button>

        <ul
          className={`dropdown-menu mt-1 bg-neutral-800 p-2 ${
            dropdown ? "show" : ""
          }`}
        >
          <li
            onClick={() => setUnit(!unit)}
            className="dropdown-item text-white cursor-pointer rounded-3"
          >
            Switch to {unit ? "Metric" : "Imperial"}
          </li>
          <li className="dropdown-item text-white cursor-pointer opacity-75">
            Temperature
          </li>
          <li
            onClick={() => setCheckTemperature(true)}
            className={`dropdown-item text-white cursor-pointer mb-1 rounded-3 d-flex justify-content-between align-items-center ${
              checkTemperature ? "dropdown-item-active" : ""
            }`}
          >
            Celcius (°C)
            {checkTemperature ? <img src={CheckIcon} alt="check icon" /> : null}
          </li>
          <li
            onClick={() => setCheckTemperature(false)}
            className={`dropdown-item text-white cursor-pointer rounded-3 d-flex justify-content-between align-items-center ${
              checkTemperature ? "" : "dropdown-item-active"
            }`}
          >
            Farenheit (°F)
            {checkTemperature ? null : <img src={CheckIcon} alt="check icon" />}
          </li>
          <li className="d-flex justify-content-center">
            <div className="dropdown-line"></div>
          </li>
          <li className="dropdown-item text-white cursor-pointer opacity-75">
            Wind Speed
          </li>
          <li
            onClick={() => setCheckWindSpeed(true)}
            className={`dropdown-item text-white cursor-pointer mb-1 rounded-3 d-flex justify-content-between align-items-center ${
              checkWindSpeed ? "dropdown-item-active" : ""
            }`}
          >
            km/h
            {checkWindSpeed ? <img src={CheckIcon} alt="check icon" /> : null}
          </li>
          <li
            onClick={() => setCheckWindSpeed(false)}
            className={`dropdown-item text-white cursor-pointer rounded-3 d-flex justify-content-between align-items-center ${
              checkWindSpeed ? "" : "dropdown-item-active"
            }`}
          >
            mph
            {checkWindSpeed ? null : <img src={CheckIcon} alt="check icon" />}
          </li>
          <li className="d-flex justify-content-center">
            <div className="dropdown-line"></div>
          </li>
          <li className="dropdown-item text-white cursor-pointer opacity-75">
            Precipitation
          </li>
          <li
            onClick={() => setCheckPrecipitation(true)}
            className={`dropdown-item text-white cursor-pointer mb-1 rounded-3 d-flex justify-content-between align-items-center ${
              checkPrecipitation ? "dropdown-item-active" : ""
            }`}
          >
            Millimeters (mm)
            {checkPrecipitation ? (
              <img src={CheckIcon} alt="check icon" />
            ) : null}
          </li>
          <li
            onClick={() => setCheckPrecipitation(false)}
            className={`dropdown-item text-white cursor-pointer rounded-3 d-flex justify-content-between align-items-center ${
              checkPrecipitation ? "" : "dropdown-item-active"
            }`}
          >
            Inches (in)
            {checkPrecipitation ? null : (
              <img src={CheckIcon} alt="check icon" />
            )}
          </li>
        </ul>
      </div>
    </div>
  );
}
