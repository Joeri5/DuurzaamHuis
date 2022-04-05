export interface IWeatherDay {
  temperature: {
    min: number;
    max: number;
  };
  wind_speed: {
    km: number;
    miles: number;
  };
  rain_expected: boolean;
  snow_expected: boolean;
  time: {
    date: string;
    time: number;
  };
  astro: {
    sunrise: string;
    sunset: string;
  };
}

export interface IWeatherAPIResult {
  error: boolean;
  data: IWeatherDay[];
}

export interface ILocationResult {
  error: boolean;
  data: ?{
    temperature: number;
    location: string;
  };
}
