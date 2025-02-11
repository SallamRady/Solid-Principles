import { Address } from "./Address.type";

export type UserFullName = { firstname: string; lastname: string };

export interface User {
  address: Address;
  id: number;
  email: string;
  username: string;
  password: string;
  name: UserFullName;
  phone: string;
  __v: number;
}
