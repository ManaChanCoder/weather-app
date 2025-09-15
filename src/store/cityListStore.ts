import { create } from "zustand";

type City = {
  name: string;
  local_names?: Record<string, string>;
  lat: number;
  lon: number;
  country: string;
  state?: string;
};

type TCity = {
  cities: City[];
  setCity: (search: string) => Promise<void>;
};

export const cityListStore = create<TCity>((set) => ({
  cities: [],

  setCity: async (search: string) => {
    if (!search) return;
    try {
      const res = await fetch(
        `http://api.openweathermap.org/geo/1.0/direct?q=${search}&limit=5&appid=${
          import.meta.env.VITE_WEATHER_API_KEY
        }`
      );
      const data: City[] = await res.json();
      const uniqueCity = Array.from(
        new Map(data.map((d) => [d.name + d.country, d])).values()
      );
      return set({ cities: uniqueCity });
    } catch (error) {
      console.log((error as Error).message);
    }
  },
}));
