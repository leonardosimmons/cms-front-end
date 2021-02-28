export type CityToken = 
{
  id: number;
  state: string;
  country: string;
  coord: 
  {
    lon: number;
    lat: number;
  }
};

export type WeatherContext = 
{
  currentCity: CityToken;
  search:
  {
    cityBuffer: string,
    stateBuffer: string,
    cityInquiry: string,
    stateInquiry: string,
    result: CityToken,
  }
};

export type WeatherSearchFormProps = {
  cityInput: string;
  stateInput: string;
  cityChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  stateChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  submitted: (e: React.FormEvent<HTMLFormElement>) => void;
};