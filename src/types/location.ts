export type Coordinates = {
  latitude: number;
  longitude: number;
};

export type UseCoordinates = {
  coordinates: Coordinates | null;
  calculateCoordinates: () => any;
};

export type UseCity = {
  city: string | null;
  calculateCity: () => any;
};

export type LocationContextValues = UseCoordinates & UseCity & {};
