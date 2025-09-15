import { create } from "zustand";
import type { TWeatherDatas } from "./weatherScheme";

type TWeatherApp = {
  data: TWeatherDatas | null;
  loading: boolean;
  error?: string | null;

  fetchingCity: (location?: string) => void;
};

export const weatherStore = create<TWeatherApp>((set) => ({
  data: null,
  loading: false,
  error: null,

  fetchingCity: async (location?: string) => {
    const city = location || "Manila";
    try {
      set({ loading: true, error: null });

      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${
          import.meta.env.VITE_WEATHER_API_KEY
        }`
      );
      const data = await res.json();
      set({ data: data, loading: false, error: null });
    } catch (error) {
      set({ loading: false, error: (error as Error).message });
    }
  },
}));
