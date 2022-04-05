export interface IWeatherDay {
  temperature: number;
  wind_speed: number;
  precipitation: number;
  time: {
    date: string;
    time: string;
  };
}

export interface IWeatherAPIResult {
  error: boolean;
  data: IWeatherDay[];
}
