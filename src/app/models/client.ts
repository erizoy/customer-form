import { City } from './city';
import { Coordinator } from './coordinator';
import { Country } from './country';

export enum Gender {
  MALE = 'male',
  FEMALE = 'female'
}

export const GENDERS = {
  [Gender.MALE]: 'GENDERS.MALE',
  [Gender.FEMALE]: 'GENDERS.FEMALE',
}

export enum ClientGroup {
  VIP = 'vip',
  REGULAR = 'regular',
  NEW = 'new'
}

export const CLIENT_GROUPS = {
  [ClientGroup.VIP]: 'CLIENT_GROUPS.VIP',
  [ClientGroup.REGULAR]: 'CLIENT_GROUPS.REGULAR',
  [ClientGroup.NEW]: 'CLIENT_GROUPS.NEW',
}

export enum DocType {
  PASSPORT = 'passport',
  BIRTH_CERT = 'birth_cert',
  DRIVER_LICENSE = 'driver_license'
}

export const DOC_TYPES = {
  [DocType.PASSPORT]: 'DOC_TYPES.PASSPORT',
  [DocType.BIRTH_CERT]: 'DOC_TYPES.BIRTH_CERT',
  [DocType.DRIVER_LICENSE]: 'DOC_TYPES.DRIVER_LICENSE'
}

export interface ClientPersonal {
  lastName: string;
  firstName: string;
  patronymic?: string;
  birthDate: Date;
  phone: number;
  gender?: Gender;
  clientGroup: ClientGroup[];
  coordinator?: Coordinator;
  noSms?: boolean;
}

export interface ClientAddress {
  zip?: number;
  country: Country;
  region?: string;
  city: City;
  street?: string;
  house?: string;
}

export interface ClientDoc {
  type: DocType;
  series?: string;
  number: string;
  issuedBy?: string;
  issueDate: Date;
  file?: string;
}

export type Client = ClientPersonal & ClientAddress & ClientDoc;
