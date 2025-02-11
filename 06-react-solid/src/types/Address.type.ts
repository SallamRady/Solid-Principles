import { GeoLocation } from "./GeoLocation.type";

export interface Address {
  geolocation: GeoLocation;
  city: string;
  street: string;
  number: number;
  zipcode: string;
}
