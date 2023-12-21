/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  /** Date (isoformat) */
  Date: { input: any; output: any; }
  /** Date with time (isoformat) */
  DateTime: { input: any; output: any; }
  /** Time (isoformat) */
  Time: { input: any; output: any; }
};

export type AccessTicket = {
  __typename?: 'AccessTicket';
  blStatus?: Maybe<Scalars['Int']['output']>;
  clientId?: Maybe<Scalars['Int']['output']>;
  doctorMcenters?: Maybe<DoctorMedicalCenter>;
  doctorMcentersId: Scalars['Int']['output'];
  expireDate?: Maybe<Scalars['DateTime']['output']>;
  firststatus?: Maybe<Scalars['Boolean']['output']>;
  fromInternetStatus?: Maybe<Scalars['Boolean']['output']>;
  id: Scalars['Int']['output'];
  isActive?: Maybe<Scalars['Boolean']['output']>;
  isReserv?: Maybe<Scalars['Boolean']['output']>;
  status?: Maybe<Scalars['Boolean']['output']>;
  ticketDatetime: Scalars['DateTime']['output'];
  ticketDuration?: Maybe<Scalars['Int']['output']>;
  ticketRoom?: Maybe<Scalars['String']['output']>;
  user?: Maybe<User>;
  userId: Scalars['Int']['output'];
};

export type AccessTicketIn = {
  blStatus?: InputMaybe<Scalars['Int']['input']>;
  clientId?: InputMaybe<Scalars['Int']['input']>;
  doctorMcentersId?: InputMaybe<Scalars['Int']['input']>;
  expireDate?: InputMaybe<Scalars['Date']['input']>;
  firststatus?: InputMaybe<Scalars['Boolean']['input']>;
  fromInternetStatus?: InputMaybe<Scalars['Boolean']['input']>;
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  isReserv?: InputMaybe<Scalars['Boolean']['input']>;
  status?: InputMaybe<Scalars['Boolean']['input']>;
  ticketDatetime?: InputMaybe<Scalars['Date']['input']>;
  ticketDuration?: InputMaybe<Scalars['Int']['input']>;
  ticketRoom?: InputMaybe<Scalars['String']['input']>;
  userId?: InputMaybe<Scalars['Int']['input']>;
};

export type AccessTicketInput = {
  blStatus?: InputMaybe<Scalars['Int']['input']>;
  clientId?: InputMaybe<Scalars['Int']['input']>;
  doctorMcenters?: InputMaybe<DoctorMedicalCenterIn>;
  doctorMcentersId?: InputMaybe<Scalars['Int']['input']>;
  expireDate?: InputMaybe<Scalars['Date']['input']>;
  firststatus?: InputMaybe<Scalars['Boolean']['input']>;
  fromInternetStatus?: InputMaybe<Scalars['Boolean']['input']>;
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  isReserv?: InputMaybe<Scalars['Boolean']['input']>;
  status?: InputMaybe<Scalars['Boolean']['input']>;
  ticketDatetime?: InputMaybe<Scalars['Date']['input']>;
  ticketDuration?: InputMaybe<Scalars['Int']['input']>;
  ticketRoom?: InputMaybe<Scalars['String']['input']>;
  user?: InputMaybe<UserIn>;
  userId?: InputMaybe<Scalars['Int']['input']>;
};

export type AccessTicketInputAdm = {
  blStatus?: InputMaybe<Scalars['Int']['input']>;
  clientId?: InputMaybe<Scalars['Int']['input']>;
  doctorMcentersId?: InputMaybe<Scalars['Int']['input']>;
  expireDate?: InputMaybe<Scalars['Date']['input']>;
  firststatus?: InputMaybe<Scalars['Boolean']['input']>;
  fromInternetStatus?: InputMaybe<Scalars['Boolean']['input']>;
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  isReserv?: InputMaybe<Scalars['Boolean']['input']>;
  status?: InputMaybe<Scalars['Boolean']['input']>;
  ticketDatetime?: InputMaybe<Scalars['Date']['input']>;
  ticketDuration?: InputMaybe<Scalars['Int']['input']>;
  ticketRoom?: InputMaybe<Scalars['String']['input']>;
  userId?: InputMaybe<Scalars['Int']['input']>;
};

export type AccessTicketResult = {
  __typename?: 'AccessTicketResult';
  data?: Maybe<Array<AccessTicket>>;
  details?: Maybe<Scalars['String']['output']>;
  statusCode?: Maybe<Scalars['Int']['output']>;
};

export type AddressMisKladrTable = {
  __typename?: 'AddressMisKladrTable';
  area?: Maybe<Scalars['String']['output']>;
  areaCode?: Maybe<Scalars['String']['output']>;
  city?: Maybe<Scalars['String']['output']>;
  cityCode?: Maybe<Scalars['String']['output']>;
  clientId?: Maybe<Scalars['Int']['output']>;
  clientUserId?: Maybe<Scalars['Int']['output']>;
  corp?: Maybe<Scalars['String']['output']>;
  flat?: Maybe<Scalars['String']['output']>;
  house?: Maybe<Scalars['String']['output']>;
  houseCode?: Maybe<Scalars['String']['output']>;
  id: Scalars['Int']['output'];
  livesLuId?: Maybe<Scalars['Int']['output']>;
  luid?: Maybe<Scalars['Int']['output']>;
  note?: Maybe<Scalars['String']['output']>;
  region?: Maybe<Scalars['String']['output']>;
  regionCode?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['Int']['output']>;
  street?: Maybe<Scalars['String']['output']>;
  streetCode?: Maybe<Scalars['String']['output']>;
  tag?: Maybe<Scalars['Int']['output']>;
  town?: Maybe<Scalars['String']['output']>;
  townCode?: Maybe<Scalars['String']['output']>;
};

export type City = {
  __typename?: 'City';
  clientId?: Maybe<Scalars['Int']['output']>;
  id: Scalars['Int']['output'];
  isActive?: Maybe<Scalars['Boolean']['output']>;
  name: Scalars['String']['output'];
};

export type CityIn = {
  clientId?: InputMaybe<Scalars['Int']['input']>;
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

export type CityInput = {
  clientId?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

export type CityInputAdm = {
  clientId?: InputMaybe<Scalars['Int']['input']>;
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  name: Scalars['String']['input'];
};

export type CityResult = {
  __typename?: 'CityResult';
  data?: Maybe<Array<City>>;
  details?: Maybe<Scalars['String']['output']>;
  statusCode?: Maybe<Scalars['Int']['output']>;
};

export type ComplexService = {
  __typename?: 'ComplexService';
  clientId?: Maybe<Scalars['Int']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['Int']['output'];
  isActive?: Maybe<Scalars['Boolean']['output']>;
  service?: Maybe<Service>;
  serviceId: Scalars['Int']['output'];
};

export type ComplexServiceIn = {
  description?: InputMaybe<Scalars['String']['input']>;
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  serviceId?: InputMaybe<Scalars['Int']['input']>;
};

export type ComplexServiceInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  service?: InputMaybe<ServiceIn>;
  serviceId?: InputMaybe<Scalars['Int']['input']>;
};

export type ComplexServiceInputAdm = {
  description?: InputMaybe<Scalars['String']['input']>;
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  serviceId?: InputMaybe<Scalars['Int']['input']>;
};

export type ComplexServiceItem = {
  __typename?: 'ComplexServiceItem';
  coefficientToPrice?: Maybe<Scalars['Float']['output']>;
  comment?: Maybe<Scalars['String']['output']>;
  complexService?: Maybe<ComplexService>;
  complexServiceId: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  isActive?: Maybe<Scalars['Boolean']['output']>;
  price?: Maybe<Scalars['Float']['output']>;
  quantity: Scalars['Int']['output'];
  service?: Maybe<Service>;
  serviceId: Scalars['Int']['output'];
};

export type ComplexServiceItemInput = {
  coefficientToPrice?: InputMaybe<Scalars['Float']['input']>;
  comment?: InputMaybe<Scalars['String']['input']>;
  complexId?: InputMaybe<Scalars['Int']['input']>;
  complexService?: InputMaybe<ComplexServiceIn>;
  id?: InputMaybe<Scalars['Int']['input']>;
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  price?: InputMaybe<Scalars['Float']['input']>;
  quantity?: InputMaybe<Scalars['Int']['input']>;
  service?: InputMaybe<ServiceIn>;
  serviceId?: InputMaybe<Scalars['Int']['input']>;
};

export type ComplexServiceItemInputAdm = {
  coefficientToPrice?: InputMaybe<Scalars['Float']['input']>;
  comment?: InputMaybe<Scalars['String']['input']>;
  complexId?: InputMaybe<Scalars['Int']['input']>;
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  price?: InputMaybe<Scalars['Float']['input']>;
  quantity?: InputMaybe<Scalars['Int']['input']>;
  serviceId?: InputMaybe<Scalars['Int']['input']>;
};

export type ComplexServiceItemResult = {
  __typename?: 'ComplexServiceItemResult';
  data?: Maybe<Array<ComplexServiceItem>>;
  details?: Maybe<Scalars['String']['output']>;
  statusCode?: Maybe<Scalars['Int']['output']>;
};

export type ComplexServiceResult = {
  __typename?: 'ComplexServiceResult';
  data?: Maybe<Array<ComplexService>>;
  details?: Maybe<Scalars['String']['output']>;
  statusCode?: Maybe<Scalars['Int']['output']>;
};

export type Doctor = {
  __typename?: 'Doctor';
  birthDate?: Maybe<Scalars['Date']['output']>;
  clientId?: Maybe<Scalars['Int']['output']>;
  commonExperience?: Maybe<Scalars['Int']['output']>;
  doctorCategory?: Maybe<DoctorCategory>;
  doctorCategoryId?: Maybe<Scalars['Int']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  firstName: Scalars['String']['output'];
  id: Scalars['Int']['output'];
  isActive?: Maybe<Scalars['Boolean']['output']>;
  lastName: Scalars['String']['output'];
  patronymic?: Maybe<Scalars['String']['output']>;
  photo?: Maybe<Scalars['String']['output']>;
  privatePhone?: Maybe<Scalars['String']['output']>;
  workPhone?: Maybe<Scalars['String']['output']>;
};

export type DoctorCategory = {
  __typename?: 'DoctorCategory';
  clientId?: Maybe<Scalars['Int']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['Int']['output'];
  isActive?: Maybe<Scalars['Boolean']['output']>;
  name: Scalars['String']['output'];
};

export type DoctorCategoryIn = {
  clientId?: InputMaybe<Scalars['Int']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

export type DoctorCategoryInput = {
  clientId?: InputMaybe<Scalars['Int']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

export type DoctorCategoryInputAdm = {
  clientId?: InputMaybe<Scalars['Int']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

export type DoctorCategoryResult = {
  __typename?: 'DoctorCategoryResult';
  data?: Maybe<Array<DoctorCategory>>;
  details?: Maybe<Scalars['String']['output']>;
  statusCode?: Maybe<Scalars['Int']['output']>;
};

export type DoctorIn = {
  birthDate?: InputMaybe<Scalars['Date']['input']>;
  clientId?: InputMaybe<Scalars['Int']['input']>;
  commonExperience?: InputMaybe<Scalars['Int']['input']>;
  doctorCategoryId?: InputMaybe<Scalars['Int']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  firstName?: InputMaybe<Scalars['String']['input']>;
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  lastName?: InputMaybe<Scalars['String']['input']>;
  patronymic?: InputMaybe<Scalars['String']['input']>;
  photo?: InputMaybe<Scalars['String']['input']>;
  privatePhone?: InputMaybe<Scalars['String']['input']>;
  workPhone?: InputMaybe<Scalars['String']['input']>;
};

export type DoctorInput = {
  birthDate?: InputMaybe<Scalars['Date']['input']>;
  clientId?: InputMaybe<Scalars['Int']['input']>;
  commonExperience?: InputMaybe<Scalars['Int']['input']>;
  doctorCategory?: InputMaybe<DoctorCategoryIn>;
  doctorCategoryId?: InputMaybe<Scalars['Int']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  firstName?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  lastName?: InputMaybe<Scalars['String']['input']>;
  patronymic?: InputMaybe<Scalars['String']['input']>;
  photo?: InputMaybe<Scalars['String']['input']>;
  privatePhone?: InputMaybe<Scalars['String']['input']>;
  workPhone?: InputMaybe<Scalars['String']['input']>;
};

export type DoctorInputAdm = {
  birthDate?: InputMaybe<Scalars['Date']['input']>;
  clientId?: InputMaybe<Scalars['Int']['input']>;
  commonExperience?: InputMaybe<Scalars['Int']['input']>;
  doctorCategoryId?: InputMaybe<Scalars['Int']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  firstName: Scalars['String']['input'];
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  lastName: Scalars['String']['input'];
  patronymic?: InputMaybe<Scalars['String']['input']>;
  photo?: InputMaybe<Scalars['String']['input']>;
  privatePhone?: InputMaybe<Scalars['String']['input']>;
  workPhone?: InputMaybe<Scalars['String']['input']>;
};

export type DoctorMedicalCenter = {
  __typename?: 'DoctorMedicalCenter';
  clientId?: Maybe<Scalars['Int']['output']>;
  doctor?: Maybe<Doctor>;
  doctorId: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  isActive?: Maybe<Scalars['Boolean']['output']>;
  maximalAge: Scalars['Int']['output'];
  medicalCenter?: Maybe<MedicalCenter>;
  medicalCenterId: Scalars['Int']['output'];
  medicalPosition?: Maybe<MedicalPosition>;
  medicalPositionId: Scalars['Int']['output'];
  medicalSpeciality?: Maybe<MedicalSpeciality>;
  medicalSpecialityId: Scalars['Int']['output'];
  minimalAge: Scalars['Int']['output'];
  showInLk?: Maybe<Scalars['Boolean']['output']>;
  staffType?: Maybe<StaffType>;
  staffTypeId: Scalars['Int']['output'];
};

export type DoctorMedicalCenterIn = {
  clientId?: InputMaybe<Scalars['Int']['input']>;
  doctorId?: InputMaybe<Scalars['Int']['input']>;
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  maximalAge?: InputMaybe<Scalars['Int']['input']>;
  medicalCenterId?: InputMaybe<Scalars['Int']['input']>;
  medicalPositionId?: InputMaybe<Scalars['Int']['input']>;
  medicalSpecialityId?: InputMaybe<Scalars['Int']['input']>;
  minimalAge?: InputMaybe<Scalars['Int']['input']>;
  showInLk?: InputMaybe<Scalars['Boolean']['input']>;
  staffTypeId?: InputMaybe<Scalars['Int']['input']>;
};

export type DoctorMedicalCenterInput = {
  clientId?: InputMaybe<Scalars['Int']['input']>;
  doctor?: InputMaybe<DoctorInput>;
  doctorId?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  maximalAge?: InputMaybe<Scalars['Int']['input']>;
  medicalCenter?: InputMaybe<MedicalCenterIn>;
  medicalCenterId?: InputMaybe<Scalars['Int']['input']>;
  medicalPosition?: InputMaybe<MedicalPositionIn>;
  medicalPositionId?: InputMaybe<Scalars['Int']['input']>;
  medicalSpeciality?: InputMaybe<MedicalSpecialityIn>;
  medicalSpecialityId?: InputMaybe<Scalars['Int']['input']>;
  minimalAge?: InputMaybe<Scalars['Int']['input']>;
  showInLk?: InputMaybe<Scalars['Boolean']['input']>;
  staffType?: InputMaybe<StaffTypeIn>;
  staffTypeId?: InputMaybe<Scalars['Int']['input']>;
};

export type DoctorMedicalCenterInputAdm = {
  clientId?: InputMaybe<Scalars['Int']['input']>;
  doctorId?: InputMaybe<Scalars['Int']['input']>;
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  maximalAge?: InputMaybe<Scalars['Int']['input']>;
  medicalCenterId?: InputMaybe<Scalars['Int']['input']>;
  medicalPositionId?: InputMaybe<Scalars['Int']['input']>;
  medicalSpecialityId?: InputMaybe<Scalars['Int']['input']>;
  minimalAge?: InputMaybe<Scalars['Int']['input']>;
  showInLk?: InputMaybe<Scalars['Boolean']['input']>;
  staffTypeId?: InputMaybe<Scalars['Int']['input']>;
};

export type DoctorMedicalCenterResult = {
  __typename?: 'DoctorMedicalCenterResult';
  data?: Maybe<Array<DoctorMedicalCenter>>;
  details?: Maybe<Scalars['String']['output']>;
  statusCode?: Maybe<Scalars['Int']['output']>;
};

export type DoctorMspeciality = {
  __typename?: 'DoctorMspeciality';
  doctor?: Maybe<Doctor>;
  doctorId: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  isActive?: Maybe<Scalars['Boolean']['output']>;
  mspeciality?: Maybe<MedicalSpeciality>;
  mspecialityId: Scalars['Int']['output'];
};

export type DoctorMspecialityInput = {
  doctorId?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  mspecialityId?: InputMaybe<Scalars['Int']['input']>;
};

export type DoctorMspecialityInputAdm = {
  doctorId?: InputMaybe<Scalars['Int']['input']>;
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  mspecialityId?: InputMaybe<Scalars['Int']['input']>;
};

export type DoctorMspecialityResult = {
  __typename?: 'DoctorMspecialityResult';
  data?: Maybe<Array<DoctorMspeciality>>;
  details?: Maybe<Scalars['String']['output']>;
  statusCode?: Maybe<Scalars['Int']['output']>;
};

export type DoctorPatientType = {
  __typename?: 'DoctorPatientType';
  clientId?: Maybe<Scalars['Int']['output']>;
  doctorMedicalCenter?: Maybe<DoctorMedicalCenter>;
  doctorMedicalCenterId: Scalars['Int']['output'];
  endDate: Scalars['DateTime']['output'];
  id: Scalars['Int']['output'];
  isActive?: Maybe<Scalars['Boolean']['output']>;
  patientType?: Maybe<PatientType>;
  patientTypeId: Scalars['Int']['output'];
  startDate: Scalars['DateTime']['output'];
};

export type DoctorPatientTypeInput = {
  clientId?: InputMaybe<Scalars['Int']['input']>;
  doctorMedicalCenter?: InputMaybe<DoctorMedicalCenterIn>;
  doctorMedicalCenterId?: InputMaybe<Scalars['Int']['input']>;
  endDate?: InputMaybe<Scalars['Date']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  patientType?: InputMaybe<PatientTypeIn>;
  patientTypeId?: InputMaybe<Scalars['Int']['input']>;
  startDate?: InputMaybe<Scalars['Date']['input']>;
};

export type DoctorPatientTypeInputAdm = {
  clientId?: InputMaybe<Scalars['Int']['input']>;
  doctorMedicalCenterId?: InputMaybe<Scalars['Int']['input']>;
  endDate?: InputMaybe<Scalars['Date']['input']>;
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  patientTypeId?: InputMaybe<Scalars['Int']['input']>;
  startDate?: InputMaybe<Scalars['Date']['input']>;
};

export type DoctorPatientTypeResult = {
  __typename?: 'DoctorPatientTypeResult';
  data?: Maybe<Array<DoctorPatientType>>;
  details?: Maybe<Scalars['String']['output']>;
  statusCode?: Maybe<Scalars['Int']['output']>;
};

export type DoctorReplacement = {
  __typename?: 'DoctorReplacement';
  clientId?: Maybe<Scalars['Int']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  doctor?: Maybe<Doctor>;
  doctorId: Scalars['Int']['output'];
  endDate: Scalars['DateTime']['output'];
  id: Scalars['Int']['output'];
  isActive?: Maybe<Scalars['Boolean']['output']>;
  startDate: Scalars['DateTime']['output'];
};

export type DoctorReplacementIn = {
  clientId?: InputMaybe<Scalars['Int']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  doctorId?: InputMaybe<Scalars['Int']['input']>;
  endDate?: InputMaybe<Scalars['Date']['input']>;
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  startDate?: InputMaybe<Scalars['Date']['input']>;
};

export type DoctorReplacementInput = {
  clientId?: InputMaybe<Scalars['Int']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  doctor?: InputMaybe<DoctorIn>;
  doctorId?: InputMaybe<Scalars['Int']['input']>;
  endDate?: InputMaybe<Scalars['Date']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  startDate?: InputMaybe<Scalars['Date']['input']>;
};

export type DoctorReplacementInputAdm = {
  clientId?: InputMaybe<Scalars['Int']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  doctorId?: InputMaybe<Scalars['Int']['input']>;
  endDate?: InputMaybe<Scalars['Date']['input']>;
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  startDate?: InputMaybe<Scalars['Date']['input']>;
};

export type DoctorReplacementResult = {
  __typename?: 'DoctorReplacementResult';
  data?: Maybe<Array<DoctorReplacement>>;
  details?: Maybe<Scalars['String']['output']>;
  statusCode?: Maybe<Scalars['Int']['output']>;
};

export type DoctorResult = {
  __typename?: 'DoctorResult';
  data?: Maybe<Array<Doctor>>;
  details?: Maybe<Scalars['String']['output']>;
  statusCode?: Maybe<Scalars['Int']['output']>;
};

export type DoctorStatus = {
  __typename?: 'DoctorStatus';
  doctor: Doctor;
  doctorId: Scalars['Int']['output'];
  endDate: Scalars['DateTime']['output'];
  id: Scalars['Int']['output'];
  startDate: Scalars['DateTime']['output'];
  statusType: DoctorStatusType;
  statusTypeId: Scalars['Int']['output'];
};

export type DoctorStatusInput = {
  doctor?: InputMaybe<DoctorInput>;
  doctorId?: InputMaybe<Scalars['Int']['input']>;
  endDate?: InputMaybe<Scalars['Date']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  startDate?: InputMaybe<Scalars['Date']['input']>;
  statusType?: InputMaybe<DoctorStatusTypeIn>;
  statusTypeId?: InputMaybe<Scalars['Int']['input']>;
};

export type DoctorStatusInputAdm = {
  doctorId?: InputMaybe<Scalars['Int']['input']>;
  endDate?: InputMaybe<Scalars['Date']['input']>;
  startDate?: InputMaybe<Scalars['Date']['input']>;
  statusTypeId?: InputMaybe<Scalars['Int']['input']>;
};

export type DoctorStatusResult = {
  __typename?: 'DoctorStatusResult';
  data?: Maybe<Array<DoctorStatus>>;
  details?: Maybe<Scalars['String']['output']>;
  statusCode?: Maybe<Scalars['Int']['output']>;
};

export type DoctorStatusType = {
  __typename?: 'DoctorStatusType';
  clientId?: Maybe<Scalars['Int']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['Int']['output'];
  isActive?: Maybe<Scalars['Boolean']['output']>;
  name: Scalars['String']['output'];
};

export type DoctorStatusTypeIn = {
  clientId?: InputMaybe<Scalars['Int']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

export type DoctorStatusTypeInput = {
  clientId?: InputMaybe<Scalars['Int']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

export type DoctorStatusTypeInputAdm = {
  clientId?: InputMaybe<Scalars['Int']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

export type DoctorStatusTypeResult = {
  __typename?: 'DoctorStatusTypeResult';
  data?: Maybe<Array<DoctorStatusType>>;
  details?: Maybe<Scalars['String']['output']>;
  statusCode?: Maybe<Scalars['Int']['output']>;
};

export type FinancialType = {
  __typename?: 'FinancialType';
  clientId?: Maybe<Scalars['Int']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['Int']['output'];
  isActive?: Maybe<Scalars['Boolean']['output']>;
  name: Scalars['String']['output'];
};

export type FinancialTypeIn = {
  clientId?: InputMaybe<Scalars['Int']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

export type FinancialTypeInput = {
  clientId?: InputMaybe<Scalars['Int']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

export type FinancialTypeInputAdm = {
  clientId?: InputMaybe<Scalars['Int']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

export type FinancialTypeResult = {
  __typename?: 'FinancialTypeResult';
  data?: Maybe<Array<FinancialType>>;
  details?: Maybe<Scalars['String']['output']>;
  statusCode?: Maybe<Scalars['Int']['output']>;
};

export type FlashCallCode = {
  code: Scalars['String']['input'];
  loginPhoneNumber: Scalars['String']['input'];
};

export type InformationWay = {
  __typename?: 'InformationWay';
  clientId?: Maybe<Scalars['Int']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['Int']['output'];
  isActive?: Maybe<Scalars['Boolean']['output']>;
  name: Scalars['String']['output'];
};

export type IntFilteringInterval = {
  equals?: InputMaybe<Scalars['Int']['input']>;
  less?: InputMaybe<Scalars['Int']['input']>;
  more?: InputMaybe<Scalars['Int']['input']>;
};

export type LoginResult = {
  __typename?: 'LoginResult';
  data?: Maybe<Token>;
  details?: Maybe<Scalars['String']['output']>;
  statusCode?: Maybe<Scalars['Int']['output']>;
};

export type MedicalCenter = {
  __typename?: 'MedicalCenter';
  address: Scalars['String']['output'];
  bankBic: Scalars['String']['output'];
  city?: Maybe<City>;
  cityId: Scalars['Int']['output'];
  clientId?: Maybe<Scalars['Int']['output']>;
  collectionTestsTime?: Maybe<Scalars['String']['output']>;
  correspondentAccount: Scalars['String']['output'];
  description?: Maybe<Scalars['String']['output']>;
  dmsPhone?: Maybe<Scalars['String']['output']>;
  id: Scalars['Int']['output'];
  inn: Scalars['String']['output'];
  isActive?: Maybe<Scalars['Boolean']['output']>;
  kpp: Scalars['String']['output'];
  latitude?: Maybe<Scalars['Float']['output']>;
  logo?: Maybe<Scalars['String']['output']>;
  longitude?: Maybe<Scalars['Float']['output']>;
  name: Scalars['String']['output'];
  phoneFax: Scalars['String']['output'];
  settlementAccount: Scalars['String']['output'];
  vaccinationTime?: Maybe<Scalars['String']['output']>;
  websiteUrl?: Maybe<Scalars['String']['output']>;
  workTime: Scalars['String']['output'];
};

export type MedicalCenterIn = {
  address?: InputMaybe<Scalars['String']['input']>;
  bankBic?: InputMaybe<Scalars['String']['input']>;
  cityId?: InputMaybe<Scalars['Int']['input']>;
  clientId?: InputMaybe<Scalars['Int']['input']>;
  collectionTestsTime?: InputMaybe<Scalars['String']['input']>;
  correspondentAccount?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  dmsPhone?: InputMaybe<Scalars['String']['input']>;
  inn?: InputMaybe<Scalars['String']['input']>;
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  kpp?: InputMaybe<Scalars['String']['input']>;
  latitude?: InputMaybe<Scalars['Float']['input']>;
  logo?: InputMaybe<Scalars['String']['input']>;
  longitude?: InputMaybe<Scalars['Float']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  phoneFax?: InputMaybe<Scalars['String']['input']>;
  settlementAccount?: InputMaybe<Scalars['String']['input']>;
  vaccinationTime?: InputMaybe<Scalars['String']['input']>;
  websiteUrl?: InputMaybe<Scalars['String']['input']>;
  workTime?: InputMaybe<Scalars['String']['input']>;
};

export type MedicalCenterInput = {
  address?: InputMaybe<Scalars['String']['input']>;
  bankBic?: InputMaybe<Scalars['String']['input']>;
  city?: InputMaybe<CityIn>;
  cityId?: InputMaybe<Scalars['Int']['input']>;
  clientId?: InputMaybe<Scalars['Int']['input']>;
  collectionTestsTime?: InputMaybe<Scalars['String']['input']>;
  correspondentAccount?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  dmsPhone?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  inn?: InputMaybe<Scalars['String']['input']>;
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  kpp?: InputMaybe<Scalars['String']['input']>;
  latitude?: InputMaybe<Scalars['Float']['input']>;
  logo?: InputMaybe<Scalars['String']['input']>;
  longitude?: InputMaybe<Scalars['Float']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  phoneFax?: InputMaybe<Scalars['String']['input']>;
  settlementAccount?: InputMaybe<Scalars['String']['input']>;
  vaccinationTime?: InputMaybe<Scalars['String']['input']>;
  websiteUrl?: InputMaybe<Scalars['String']['input']>;
  workTime?: InputMaybe<Scalars['String']['input']>;
};

export type MedicalCenterInputAdm = {
  address: Scalars['String']['input'];
  bankBic: Scalars['String']['input'];
  cityId: Scalars['Int']['input'];
  clientId?: InputMaybe<Scalars['Int']['input']>;
  collectionTestsTime?: InputMaybe<Scalars['String']['input']>;
  correspondentAccount: Scalars['String']['input'];
  description?: InputMaybe<Scalars['String']['input']>;
  dmsPhone?: InputMaybe<Scalars['String']['input']>;
  inn: Scalars['String']['input'];
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  kpp: Scalars['String']['input'];
  latitude?: InputMaybe<Scalars['Float']['input']>;
  logo?: InputMaybe<Scalars['String']['input']>;
  longitude?: InputMaybe<Scalars['Float']['input']>;
  name: Scalars['String']['input'];
  phoneFax: Scalars['String']['input'];
  settlementAccount: Scalars['String']['input'];
  vaccinationTime?: InputMaybe<Scalars['String']['input']>;
  websiteUrl?: InputMaybe<Scalars['String']['input']>;
  workTime: Scalars['String']['input'];
};

export type MedicalCenterResult = {
  __typename?: 'MedicalCenterResult';
  data?: Maybe<Array<MedicalCenter>>;
  details?: Maybe<Scalars['String']['output']>;
  statusCode?: Maybe<Scalars['Int']['output']>;
};

export type MedicalPosition = {
  __typename?: 'MedicalPosition';
  clientId?: Maybe<Scalars['Int']['output']>;
  id: Scalars['Int']['output'];
  isActive?: Maybe<Scalars['Boolean']['output']>;
  searchDescription?: Maybe<Scalars['String']['output']>;
  searchName: Scalars['String']['output'];
  viewDescription?: Maybe<Scalars['String']['output']>;
  viewName: Scalars['String']['output'];
};

export type MedicalPositionIn = {
  clientId?: InputMaybe<Scalars['Int']['input']>;
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  searchDescription?: InputMaybe<Scalars['String']['input']>;
  searchName?: InputMaybe<Scalars['String']['input']>;
  viewDescription?: InputMaybe<Scalars['String']['input']>;
  viewName?: InputMaybe<Scalars['String']['input']>;
};

export type MedicalPositionInput = {
  clientId?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  searchDescription?: InputMaybe<Scalars['String']['input']>;
  searchName?: InputMaybe<Scalars['String']['input']>;
  viewDescription?: InputMaybe<Scalars['String']['input']>;
  viewName?: InputMaybe<Scalars['String']['input']>;
};

export type MedicalPositionInputAdm = {
  clientId?: InputMaybe<Scalars['Int']['input']>;
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  searchDescription?: InputMaybe<Scalars['String']['input']>;
  searchName?: InputMaybe<Scalars['String']['input']>;
  viewDescription?: InputMaybe<Scalars['String']['input']>;
  viewName?: InputMaybe<Scalars['String']['input']>;
};

export type MedicalPositionResult = {
  __typename?: 'MedicalPositionResult';
  data?: Maybe<Array<MedicalPosition>>;
  details?: Maybe<Scalars['String']['output']>;
  statusCode?: Maybe<Scalars['Int']['output']>;
};

export type MedicalSpeciality = {
  __typename?: 'MedicalSpeciality';
  clientId?: Maybe<Scalars['Int']['output']>;
  id: Scalars['Int']['output'];
  isActive?: Maybe<Scalars['Boolean']['output']>;
  searchDescription?: Maybe<Scalars['String']['output']>;
  searchName: Scalars['String']['output'];
  viewDescription?: Maybe<Scalars['String']['output']>;
  viewName: Scalars['String']['output'];
};

export type MedicalSpecialityIn = {
  clientId?: InputMaybe<Scalars['Int']['input']>;
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  searchDescription?: InputMaybe<Scalars['String']['input']>;
  searchName?: InputMaybe<Scalars['String']['input']>;
  viewDescription?: InputMaybe<Scalars['String']['input']>;
  viewName?: InputMaybe<Scalars['String']['input']>;
};

export type MedicalSpecialityInput = {
  clientId?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  searchDescription?: InputMaybe<Scalars['String']['input']>;
  searchName?: InputMaybe<Scalars['String']['input']>;
  viewDescription?: InputMaybe<Scalars['String']['input']>;
  viewName?: InputMaybe<Scalars['String']['input']>;
};

export type MedicalSpecialityInputAdm = {
  clientId?: InputMaybe<Scalars['Int']['input']>;
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  searchDescription?: InputMaybe<Scalars['String']['input']>;
  searchName: Scalars['String']['input'];
  viewDescription?: InputMaybe<Scalars['String']['input']>;
  viewName: Scalars['String']['input'];
};

export type MedicalSpecialityResult = {
  __typename?: 'MedicalSpecialityResult';
  data?: Maybe<Array<MedicalSpeciality>>;
  details?: Maybe<Scalars['String']['output']>;
  statusCode?: Maybe<Scalars['Int']['output']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  addUpdateAccessTicket: RequestResult;
  addUpdateCity: RequestResult;
  addUpdateComplexService: RequestResult;
  addUpdateComplexServiceItem: RequestResult;
  addUpdateDoctor: RequestResult;
  addUpdateDoctorCategory: RequestResult;
  addUpdateDoctorMedicalCenter: RequestResult;
  addUpdateDoctorMspecialities: RequestResult;
  addUpdateDoctorPatientType: RequestResult;
  addUpdateDoctorReplacement: RequestResult;
  addUpdateDoctorStatus: RequestResult;
  addUpdateDoctorStatusType: RequestResult;
  addUpdateFinancialType: RequestResult;
  addUpdateMedicalCenter: RequestResult;
  addUpdateMedicalPosition: RequestResult;
  addUpdateMedicalSpeciality: RequestResult;
  addUpdatePackType: RequestResult;
  addUpdatePatientType: RequestResult;
  addUpdatePaymentType: RequestResult;
  addUpdatePolicy: RequestResult;
  addUpdatePrice: RequestResult;
  addUpdatePriceName: RequestResult;
  addUpdatePricePeriod: RequestResult;
  addUpdateRefuseReason: RequestResult;
  addUpdateServiceMedicalSpeciality: RequestResult;
  addUpdateServiceType: RequestResult;
  addUpdateSevice: RequestResult;
  addUpdateShifr: RequestResult;
  addUpdateShifrDiscouont: RequestResult;
  addUpdateShifrDiscouontPeriod: RequestResult;
  addUpdateStaffType: RequestResult;
  addUpdateSubscribeDoctor: RequestResult;
  addUpdateSubscribeServicePack: RequestResult;
  addUpdateSubscribeSpackRecord: RequestResult;
  addUpdateUserPayment: RequestResult;
  addUpdateUserPurchaseReturn: RequestResult;
  addUpdateUserServiceCart: RequestResult;
  addUpdateUserServicePlan: RequestResult;
  addUpdateUserSuscribe: RequestResult;
  addUserPurchase: UserPurchaseResult;
  changeLoginPhoneByPhone: RequestResult;
  changePasswordByPhone: RequestResult;
  changePasswordFlashCallCode: RequestResult;
  changePhoneFlashCallCode: RequestResult;
  deleteAccessTicket: RequestResult;
  deleteCity: RequestResult;
  deleteComplexService: RequestResult;
  deleteComplexServiceItem: RequestResult;
  deleteDoctor: RequestResult;
  deleteDoctorCategory: RequestResult;
  deleteDoctorMedicalCenter: RequestResult;
  deleteDoctorMspeciality: RequestResult;
  deleteDoctorPatientType: RequestResult;
  deleteDoctorReplacement: RequestResult;
  deleteDoctorStatus: RequestResult;
  deleteDoctorStatusType: RequestResult;
  deleteFinancialType: RequestResult;
  deleteMedicalCenter: RequestResult;
  deleteMedicalPosition: RequestResult;
  deleteMedicalSpeciality: RequestResult;
  deletePackType: RequestResult;
  deletePatientType: RequestResult;
  deletePaymentType: RequestResult;
  deletePolicy: RequestResult;
  deletePrice: RequestResult;
  deletePriceName: RequestResult;
  deletePricePeriod: RequestResult;
  deleteRefuseReason: RequestResult;
  deleteService: RequestResult;
  deleteServiceMedicalSpeciality: RequestResult;
  deleteServiceType: RequestResult;
  deleteShifr: RequestResult;
  deleteShifrDiscouont: RequestResult;
  deleteShifrDiscouontPeriod: RequestResult;
  deleteStaffType: RequestResult;
  deleteSubscribeDoctor: RequestResult;
  deleteSubscribeServicePack: RequestResult;
  deleteSubscribeSpackRecord: RequestResult;
  deleteUserPayment: RequestResult;
  deleteUserPurchase: RequestResult;
  deleteUserPurchaseReturn: RequestResult;
  deleteUserServiceCart: RequestResult;
  deleteUserServicePlan: RequestResult;
  deleteUserSubscribe: RequestResult;
  guestRegistration: RequestResult;
  patientRegistration: RequestResult;
  registrationFlashCallCode: LoginResult;
};


export type MutationAddUpdateAccessTicketArgs = {
  accessTicket: AccessTicketInputAdm;
  accessTicketId?: InputMaybe<Scalars['Int']['input']>;
};


export type MutationAddUpdateCityArgs = {
  city: CityInputAdm;
  cityId?: InputMaybe<Scalars['Int']['input']>;
};


export type MutationAddUpdateComplexServiceArgs = {
  complexService: ComplexServiceInputAdm;
  complexServiceId?: InputMaybe<Scalars['Int']['input']>;
};


export type MutationAddUpdateComplexServiceItemArgs = {
  complexServiceItem: ComplexServiceItemInputAdm;
  complexServiceItemId?: InputMaybe<Scalars['Int']['input']>;
};


export type MutationAddUpdateDoctorArgs = {
  doctor: DoctorInputAdm;
  doctorId?: InputMaybe<Scalars['Int']['input']>;
};


export type MutationAddUpdateDoctorCategoryArgs = {
  doctorCategory: DoctorCategoryInputAdm;
  doctorCategoryId?: InputMaybe<Scalars['Int']['input']>;
};


export type MutationAddUpdateDoctorMedicalCenterArgs = {
  doctorMedicalCenter: DoctorMedicalCenterInputAdm;
  doctorMedicalCenterId?: InputMaybe<Scalars['Int']['input']>;
};


export type MutationAddUpdateDoctorMspecialitiesArgs = {
  doctorMspeciality: DoctorMspecialityInputAdm;
  doctorMspecialityId?: InputMaybe<Scalars['Int']['input']>;
};


export type MutationAddUpdateDoctorPatientTypeArgs = {
  doctorPatientType: DoctorPatientTypeInputAdm;
  doctorPatientTypeId?: InputMaybe<Scalars['Int']['input']>;
};


export type MutationAddUpdateDoctorReplacementArgs = {
  doctorReplacement: DoctorReplacementInputAdm;
  doctorReplacementId?: InputMaybe<Scalars['Int']['input']>;
};


export type MutationAddUpdateDoctorStatusArgs = {
  doctorStatus: DoctorStatusInputAdm;
  doctorStatusId?: InputMaybe<Scalars['Int']['input']>;
};


export type MutationAddUpdateDoctorStatusTypeArgs = {
  doctorStatusType: DoctorStatusTypeInputAdm;
  doctorStatusTypeId?: InputMaybe<Scalars['Int']['input']>;
};


export type MutationAddUpdateFinancialTypeArgs = {
  financialType: FinancialTypeInputAdm;
  financialTypeId?: InputMaybe<Scalars['Int']['input']>;
};


export type MutationAddUpdateMedicalCenterArgs = {
  medicalCenter: MedicalCenterInputAdm;
  medicalCenterId?: InputMaybe<Scalars['Int']['input']>;
};


export type MutationAddUpdateMedicalPositionArgs = {
  medicalPosition: MedicalPositionInputAdm;
  medicalPositionId?: InputMaybe<Scalars['Int']['input']>;
};


export type MutationAddUpdateMedicalSpecialityArgs = {
  medicalSpeciality: MedicalSpecialityInputAdm;
  medicalSpecialityId?: InputMaybe<Scalars['Int']['input']>;
};


export type MutationAddUpdatePackTypeArgs = {
  packType: PackTypeInputAdm;
  packTypeId?: InputMaybe<Scalars['Int']['input']>;
};


export type MutationAddUpdatePatientTypeArgs = {
  patientType: PatientTypeInputAdm;
  patientTypeId?: InputMaybe<Scalars['Int']['input']>;
};


export type MutationAddUpdatePaymentTypeArgs = {
  paymentType: PaymentTypeInputAdm;
  paymentTypeId?: InputMaybe<Scalars['Int']['input']>;
};


export type MutationAddUpdatePolicyArgs = {
  policy: PolicyInputAdm;
  policyId?: InputMaybe<Scalars['Int']['input']>;
};


export type MutationAddUpdatePriceArgs = {
  price: PriceInputAdm;
  priceId?: InputMaybe<Scalars['Int']['input']>;
};


export type MutationAddUpdatePriceNameArgs = {
  priceName: PriceNameInputAdm;
  priceNameId?: InputMaybe<Scalars['Int']['input']>;
};


export type MutationAddUpdatePricePeriodArgs = {
  pricePeriod: PricePeriodInputAdm;
  pricePeriodId?: InputMaybe<Scalars['Int']['input']>;
};


export type MutationAddUpdateRefuseReasonArgs = {
  refuseReason: RefuseReasonInputAdm;
  refuseReasonId?: InputMaybe<Scalars['Int']['input']>;
};


export type MutationAddUpdateServiceMedicalSpecialityArgs = {
  serviceMedicalSpeciality: ServiceMedicalSpecialityInputAdm;
  serviceMedicalSpecialityId?: InputMaybe<Scalars['Int']['input']>;
};


export type MutationAddUpdateServiceTypeArgs = {
  serviceType: ServiceTypeInputAdm;
  serviceTypeId?: InputMaybe<Scalars['Int']['input']>;
};


export type MutationAddUpdateSeviceArgs = {
  service: ServiceInputAdm;
  serviceId?: InputMaybe<Scalars['Int']['input']>;
};


export type MutationAddUpdateShifrArgs = {
  shifr: ShifrInputAdm;
  shifrId?: InputMaybe<Scalars['Int']['input']>;
};


export type MutationAddUpdateShifrDiscouontArgs = {
  shifrDiscount: ShifrDiscountInputAdm;
  shifrDiscountId?: InputMaybe<Scalars['Int']['input']>;
};


export type MutationAddUpdateShifrDiscouontPeriodArgs = {
  shifrDiscountPeriod: ShifrDiscountPeriodInputAdm;
  shifrDiscountPeriodId?: InputMaybe<Scalars['Int']['input']>;
};


export type MutationAddUpdateStaffTypeArgs = {
  staffType: StaffTypeInputAdm;
  staffTypeId?: InputMaybe<Scalars['Int']['input']>;
};


export type MutationAddUpdateSubscribeDoctorArgs = {
  subscribeDoctor: SubscribeDoctorInputAdm;
  subscribeDoctorId?: InputMaybe<Scalars['Int']['input']>;
};


export type MutationAddUpdateSubscribeServicePackArgs = {
  subscribeServicePack: SubscribeServicePackInputAdm;
  subscribeServicePackId?: InputMaybe<Scalars['Int']['input']>;
};


export type MutationAddUpdateSubscribeSpackRecordArgs = {
  subscribeSpackRecord: SubscribeSpackRecordInputAdm;
  subscribeSpackRecordId?: InputMaybe<Scalars['Int']['input']>;
};


export type MutationAddUpdateUserPaymentArgs = {
  userPayment: UserPaymentInputAdm;
  userPaymentId?: InputMaybe<Scalars['Int']['input']>;
};


export type MutationAddUpdateUserPurchaseReturnArgs = {
  userPurchaseReturn: UserPurchaseReturnInputAdm;
  userPurchaseReturnId?: InputMaybe<Scalars['Int']['input']>;
};


export type MutationAddUpdateUserServiceCartArgs = {
  userServiceCart: UserServiceCartInputAdm;
  userServiceCartId?: InputMaybe<Scalars['Int']['input']>;
};


export type MutationAddUpdateUserServicePlanArgs = {
  userServicePlan: UserServicePlanInputAdm;
  userServicePlanId?: InputMaybe<Scalars['Int']['input']>;
};


export type MutationAddUpdateUserSuscribeArgs = {
  userSubscribe: UserSubscribeInputAdm;
  userSubscribeId?: InputMaybe<Scalars['Int']['input']>;
};


export type MutationAddUserPurchaseArgs = {
  dataUserPurchase: UserPurchaseInMut;
  dataUserPurchaseId?: InputMaybe<Scalars['Int']['input']>;
  descSorting?: InputMaybe<Scalars['Boolean']['input']>;
  filteringAttrs?: InputMaybe<UserPurchaseInput>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  orderingAttrs?: InputMaybe<UserPurchaseInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type MutationChangeLoginPhoneByPhoneArgs = {
  newPhoneNumber: Scalars['String']['input'];
  oldPhoneNumber: Scalars['String']['input'];
};


export type MutationChangePasswordByPhoneArgs = {
  newPassword: Scalars['String']['input'];
};


export type MutationChangePasswordFlashCallCodeArgs = {
  flashCallCode: FlashCallCode;
};


export type MutationChangePhoneFlashCallCodeArgs = {
  flashCallCode: FlashCallCode;
};


export type MutationDeleteAccessTicketArgs = {
  accessTicketId: Scalars['Int']['input'];
};


export type MutationDeleteCityArgs = {
  cityId: Scalars['Int']['input'];
};


export type MutationDeleteComplexServiceArgs = {
  complexServiceId: Scalars['Int']['input'];
};


export type MutationDeleteComplexServiceItemArgs = {
  complexServiceItemId: Scalars['Int']['input'];
};


export type MutationDeleteDoctorArgs = {
  doctorId: Scalars['Int']['input'];
};


export type MutationDeleteDoctorCategoryArgs = {
  doctorCategoryId: Scalars['Int']['input'];
};


export type MutationDeleteDoctorMedicalCenterArgs = {
  doctorMedicalCenterId: Scalars['Int']['input'];
};


export type MutationDeleteDoctorMspecialityArgs = {
  doctorMspecialityId: Scalars['Int']['input'];
};


export type MutationDeleteDoctorPatientTypeArgs = {
  doctorPatientTypeId: Scalars['Int']['input'];
};


export type MutationDeleteDoctorReplacementArgs = {
  doctorReplacementId: Scalars['Int']['input'];
};


export type MutationDeleteDoctorStatusArgs = {
  doctorStatusId: Scalars['Int']['input'];
};


export type MutationDeleteDoctorStatusTypeArgs = {
  doctorStatusTypeId: Scalars['Int']['input'];
};


export type MutationDeleteFinancialTypeArgs = {
  financialTypeId: Scalars['Int']['input'];
};


export type MutationDeleteMedicalCenterArgs = {
  medicalCenterId: Scalars['Int']['input'];
};


export type MutationDeleteMedicalPositionArgs = {
  medicalPositionId: Scalars['Int']['input'];
};


export type MutationDeleteMedicalSpecialityArgs = {
  medicalSpecialityId: Scalars['Int']['input'];
};


export type MutationDeletePackTypeArgs = {
  packTypeId: Scalars['Int']['input'];
};


export type MutationDeletePatientTypeArgs = {
  patientTypeId: Scalars['Int']['input'];
};


export type MutationDeletePaymentTypeArgs = {
  paymentTypeId: Scalars['Int']['input'];
};


export type MutationDeletePolicyArgs = {
  policyId: Scalars['Int']['input'];
};


export type MutationDeletePriceArgs = {
  priceId: Scalars['Int']['input'];
};


export type MutationDeletePriceNameArgs = {
  priceNameId: Scalars['Int']['input'];
};


export type MutationDeletePricePeriodArgs = {
  pricePeriodId: Scalars['Int']['input'];
};


export type MutationDeleteRefuseReasonArgs = {
  refuseReasonId: Scalars['Int']['input'];
};


export type MutationDeleteServiceArgs = {
  serviceId: Scalars['Int']['input'];
};


export type MutationDeleteServiceMedicalSpecialityArgs = {
  serviceMedicalSpecialityId: Scalars['Int']['input'];
};


export type MutationDeleteServiceTypeArgs = {
  serviceTypeId: Scalars['Int']['input'];
};


export type MutationDeleteShifrArgs = {
  shifrId: Scalars['Int']['input'];
};


export type MutationDeleteShifrDiscouontArgs = {
  shifrDiscouontId: Scalars['Int']['input'];
};


export type MutationDeleteShifrDiscouontPeriodArgs = {
  shifrDiscouontPeriodId: Scalars['Int']['input'];
};


export type MutationDeleteStaffTypeArgs = {
  staffTypeId: Scalars['Int']['input'];
};


export type MutationDeleteSubscribeDoctorArgs = {
  subscribeDoctorId: Scalars['Int']['input'];
};


export type MutationDeleteSubscribeServicePackArgs = {
  subscribeServicePackId: Scalars['Int']['input'];
};


export type MutationDeleteSubscribeSpackRecordArgs = {
  subscribeSpackRecordId: Scalars['Int']['input'];
};


export type MutationDeleteUserPaymentArgs = {
  userPaymentId: Scalars['Int']['input'];
};


export type MutationDeleteUserPurchaseArgs = {
  userPurchaseId: Scalars['Int']['input'];
};


export type MutationDeleteUserPurchaseReturnArgs = {
  userPurchaseReturnId: Scalars['Int']['input'];
};


export type MutationDeleteUserServiceCartArgs = {
  userServiceCartId: Scalars['Int']['input'];
};


export type MutationDeleteUserServicePlanArgs = {
  userServicePlanId: Scalars['Int']['input'];
};


export type MutationDeleteUserSubscribeArgs = {
  userSubscribeId: Scalars['Int']['input'];
};


export type MutationPatientRegistrationArgs = {
  patient: PatientRegistration;
};


export type MutationRegistrationFlashCallCodeArgs = {
  flashCallCode: FlashCallCode;
};

export type PackType = {
  __typename?: 'PackType';
  clientId?: Maybe<Scalars['Int']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['Int']['output'];
  isActive?: Maybe<Scalars['Boolean']['output']>;
  name: Scalars['String']['output'];
};

export type PackTypeIn = {
  clientId?: InputMaybe<Scalars['Int']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

export type PackTypeInput = {
  clientId?: InputMaybe<Scalars['Int']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

export type PackTypeInputAdm = {
  clientId?: InputMaybe<Scalars['Int']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

export type PackTypeResult = {
  __typename?: 'PackTypeResult';
  data?: Maybe<Array<PackType>>;
  details?: Maybe<Scalars['String']['output']>;
  statusCode?: Maybe<Scalars['Int']['output']>;
};

export type PatientRegistration = {
  additionalPhoneNumber?: InputMaybe<Scalars['String']['input']>;
  addressMisKladrId?: InputMaybe<Scalars['Int']['input']>;
  birthDate?: InputMaybe<Scalars['String']['input']>;
  cityId?: InputMaybe<Scalars['Int']['input']>;
  clientId?: InputMaybe<Scalars['Int']['input']>;
  defaultMedicalCenterId?: InputMaybe<Scalars['Int']['input']>;
  docDate?: InputMaybe<Scalars['DateTime']['input']>;
  docGivingDepCode?: InputMaybe<Scalars['String']['input']>;
  docGivingDepName?: InputMaybe<Scalars['String']['input']>;
  docNumber?: InputMaybe<Scalars['String']['input']>;
  docRegAddress?: InputMaybe<Scalars['String']['input']>;
  docSeries?: InputMaybe<Scalars['String']['input']>;
  docType?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  firstName?: InputMaybe<Scalars['String']['input']>;
  gender?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  infoWayId?: InputMaybe<Scalars['Int']['input']>;
  inn?: InputMaybe<Scalars['String']['input']>;
  lastName?: InputMaybe<Scalars['String']['input']>;
  latitude?: InputMaybe<Scalars['Float']['input']>;
  loginPhoneNumber?: InputMaybe<Scalars['String']['input']>;
  longitude?: InputMaybe<Scalars['Float']['input']>;
  notificationTime?: InputMaybe<Scalars['Time']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
  patronymic?: InputMaybe<Scalars['String']['input']>;
  phoneNumber: Scalars['String']['input'];
  prefNotificationContactId?: InputMaybe<Scalars['Int']['input']>;
  relativeId?: InputMaybe<Scalars['Int']['input']>;
  relativeTypeId?: InputMaybe<Scalars['Int']['input']>;
  snils?: InputMaybe<Scalars['String']['input']>;
};

export type PatientType = {
  __typename?: 'PatientType';
  clientId?: Maybe<Scalars['Int']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['Int']['output'];
  isActive?: Maybe<Scalars['Boolean']['output']>;
  name: Scalars['String']['output'];
};

export type PatientTypeIn = {
  clientId?: InputMaybe<Scalars['Int']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

export type PatientTypeInput = {
  clientId?: InputMaybe<Scalars['Int']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

export type PatientTypeInputAdm = {
  clientId?: InputMaybe<Scalars['Int']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

export type PatientTypeResult = {
  __typename?: 'PatientTypeResult';
  data?: Maybe<Array<PatientType>>;
  details?: Maybe<Scalars['String']['output']>;
  statusCode?: Maybe<Scalars['Int']['output']>;
};

export type PaymentType = {
  __typename?: 'PaymentType';
  clientId?: Maybe<Scalars['Int']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['Int']['output'];
  isActive?: Maybe<Scalars['Boolean']['output']>;
  name: Scalars['String']['output'];
};

export type PaymentTypeIn = {
  clientId?: InputMaybe<Scalars['Int']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

export type PaymentTypeInput = {
  clientId?: InputMaybe<Scalars['Int']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

export type PaymentTypeInputAdm = {
  clientId?: InputMaybe<Scalars['Int']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

export type PaymentTypeResult = {
  __typename?: 'PaymentTypeResult';
  data?: Maybe<Array<PaymentType>>;
  details?: Maybe<Scalars['String']['output']>;
  statusCode?: Maybe<Scalars['Int']['output']>;
};

export type Policy = {
  __typename?: 'Policy';
  amount?: Maybe<Scalars['Float']['output']>;
  clientId?: Maybe<Scalars['Int']['output']>;
  contractDate: Scalars['DateTime']['output'];
  currentPaid?: Maybe<Scalars['Float']['output']>;
  discoumtCoefficient?: Maybe<Scalars['Float']['output']>;
  discount?: Maybe<Scalars['Float']['output']>;
  endDate: Scalars['DateTime']['output'];
  id: Scalars['Int']['output'];
  isActive?: Maybe<Scalars['Boolean']['output']>;
  number?: Maybe<Scalars['String']['output']>;
  price?: Maybe<Scalars['Float']['output']>;
  series?: Maybe<Scalars['String']['output']>;
  shifr?: Maybe<Shifr>;
  shifrId: Scalars['Int']['output'];
  startDate: Scalars['DateTime']['output'];
  status: Scalars['Int']['output'];
  user?: Maybe<User>;
  userId: Scalars['Int']['output'];
};

export type PolicyIn = {
  amount?: InputMaybe<Scalars['Float']['input']>;
  clientId?: InputMaybe<Scalars['Int']['input']>;
  contractDate?: InputMaybe<Scalars['Date']['input']>;
  currentPaid?: InputMaybe<Scalars['Float']['input']>;
  discoumtCoefficien?: InputMaybe<Scalars['Float']['input']>;
  discount?: InputMaybe<Scalars['Float']['input']>;
  endDate?: InputMaybe<Scalars['Date']['input']>;
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  number?: InputMaybe<Scalars['String']['input']>;
  price?: InputMaybe<Scalars['Float']['input']>;
  series?: InputMaybe<Scalars['String']['input']>;
  shifrId?: InputMaybe<Scalars['Int']['input']>;
  startDate?: InputMaybe<Scalars['Date']['input']>;
  status?: InputMaybe<Scalars['Int']['input']>;
  userId?: InputMaybe<Scalars['Int']['input']>;
};

export type PolicyInput = {
  amount?: InputMaybe<Scalars['Float']['input']>;
  clientId?: InputMaybe<Scalars['Int']['input']>;
  contractDate?: InputMaybe<Scalars['Date']['input']>;
  currentPaid?: InputMaybe<Scalars['Float']['input']>;
  discoumtCoefficien?: InputMaybe<Scalars['Float']['input']>;
  discount?: InputMaybe<Scalars['Float']['input']>;
  endDate?: InputMaybe<Scalars['Date']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  number?: InputMaybe<Scalars['String']['input']>;
  price?: InputMaybe<Scalars['Float']['input']>;
  series?: InputMaybe<Scalars['String']['input']>;
  shifr?: InputMaybe<ShifrIn>;
  shifrId?: InputMaybe<Scalars['Int']['input']>;
  startDate?: InputMaybe<Scalars['Date']['input']>;
  status?: InputMaybe<Scalars['Int']['input']>;
  user?: InputMaybe<UserIn>;
  userId?: InputMaybe<Scalars['Int']['input']>;
};

export type PolicyInputAdm = {
  amount?: InputMaybe<Scalars['Float']['input']>;
  clientId?: InputMaybe<Scalars['Int']['input']>;
  contractDate?: InputMaybe<Scalars['Date']['input']>;
  currentPaid?: InputMaybe<Scalars['Float']['input']>;
  discoumtCoefficien?: InputMaybe<Scalars['Float']['input']>;
  discount?: InputMaybe<Scalars['Float']['input']>;
  endDate?: InputMaybe<Scalars['Date']['input']>;
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  number?: InputMaybe<Scalars['String']['input']>;
  price?: InputMaybe<Scalars['Float']['input']>;
  series?: InputMaybe<Scalars['String']['input']>;
  shifrId?: InputMaybe<Scalars['Int']['input']>;
  startDate?: InputMaybe<Scalars['Date']['input']>;
  status?: InputMaybe<Scalars['Int']['input']>;
  userId?: InputMaybe<Scalars['Int']['input']>;
};

export type PolicyResult = {
  __typename?: 'PolicyResult';
  data?: Maybe<Array<Policy>>;
  details?: Maybe<Scalars['String']['output']>;
  statusCode?: Maybe<Scalars['Int']['output']>;
};

export type Price = {
  __typename?: 'Price';
  clientId?: Maybe<Scalars['Int']['output']>;
  id: Scalars['Int']['output'];
  priceBeznal?: Maybe<Scalars['Float']['output']>;
  priceNal?: Maybe<Scalars['Float']['output']>;
  priceName?: Maybe<PriceName>;
  priceNameId: Scalars['Int']['output'];
  pricePeriod?: Maybe<PricePeriod>;
  pricePeriodId?: Maybe<Scalars['Int']['output']>;
  service?: Maybe<Service>;
  serviceId: Scalars['Int']['output'];
};

export type PriceInput = {
  clientId?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  priceBeznal?: InputMaybe<IntFilteringInterval>;
  priceNal?: InputMaybe<IntFilteringInterval>;
  priceName?: InputMaybe<PriceNameIn>;
  priceNameId?: InputMaybe<Scalars['Int']['input']>;
  pricePeriod?: InputMaybe<PricePeriodIn>;
  pricePeriodId?: InputMaybe<Scalars['Int']['input']>;
  service?: InputMaybe<ServiceIn>;
  serviceId?: InputMaybe<Scalars['Int']['input']>;
};

export type PriceInputAdm = {
  clientId?: InputMaybe<Scalars['Int']['input']>;
  priceBeznal?: InputMaybe<Scalars['Float']['input']>;
  priceNal?: InputMaybe<Scalars['Float']['input']>;
  priceNameId?: InputMaybe<Scalars['Int']['input']>;
  pricePeriodId?: InputMaybe<Scalars['Int']['input']>;
  serviceId?: InputMaybe<Scalars['Int']['input']>;
};

export type PriceName = {
  __typename?: 'PriceName';
  clientId?: Maybe<Scalars['Int']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['Int']['output'];
  isActive?: Maybe<Scalars['Boolean']['output']>;
  name: Scalars['String']['output'];
};

export type PriceNameIn = {
  clientId?: InputMaybe<Scalars['Int']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

export type PriceNameInput = {
  clientId?: InputMaybe<Scalars['Int']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

export type PriceNameInputAdm = {
  clientId?: InputMaybe<Scalars['Int']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

export type PriceNameResult = {
  __typename?: 'PriceNameResult';
  data?: Maybe<Array<PriceName>>;
  details?: Maybe<Scalars['String']['output']>;
  statusCode?: Maybe<Scalars['Int']['output']>;
};

export type PricePeriod = {
  __typename?: 'PricePeriod';
  clientId?: Maybe<Scalars['Int']['output']>;
  endDate: Scalars['DateTime']['output'];
  id: Scalars['Int']['output'];
  isActive?: Maybe<Scalars['Boolean']['output']>;
  startDate: Scalars['DateTime']['output'];
};

export type PricePeriodIn = {
  clientId?: InputMaybe<Scalars['Int']['input']>;
  endDate?: InputMaybe<Scalars['Date']['input']>;
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  startDate?: InputMaybe<Scalars['Date']['input']>;
};

export type PricePeriodInput = {
  clientId?: InputMaybe<Scalars['Int']['input']>;
  endDate?: InputMaybe<Scalars['Date']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  startDate?: InputMaybe<Scalars['Date']['input']>;
};

export type PricePeriodInputAdm = {
  clientId?: InputMaybe<Scalars['Int']['input']>;
  endDate?: InputMaybe<Scalars['Date']['input']>;
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  startDate?: InputMaybe<Scalars['Date']['input']>;
};

export type PricePeriodResult = {
  __typename?: 'PricePeriodResult';
  data?: Maybe<Array<PricePeriod>>;
  details?: Maybe<Scalars['String']['output']>;
  statusCode?: Maybe<Scalars['Int']['output']>;
};

export type PriceResult = {
  __typename?: 'PriceResult';
  data?: Maybe<Array<Price>>;
  details?: Maybe<Scalars['String']['output']>;
  statusCode?: Maybe<Scalars['Int']['output']>;
};

export type Query = {
  __typename?: 'Query';
  adminLoginByPassword: LoginResult;
  getAccessTicket: AccessTicketResult;
  getCities: CityResult;
  getComplexService: ComplexServiceResult;
  getComplexServiceItem: ComplexServiceItemResult;
  getDoctorCategories: DoctorCategoryResult;
  getDoctorMedicalCenter: DoctorMedicalCenterResult;
  getDoctorPatientType: DoctorPatientTypeResult;
  getDoctorReplacement: DoctorReplacementResult;
  getDoctorStatus: DoctorStatusResult;
  getDoctorStatusTypes: DoctorStatusTypeResult;
  getDoctors: DoctorResult;
  getDoctorsMspecialities: DoctorMspecialityResult;
  getFinancialType: FinancialTypeResult;
  getMedicalCenters: MedicalCenterResult;
  getMedicalPositions: MedicalPositionResult;
  getMedicalSpecialities: MedicalSpecialityResult;
  getPackType: PackTypeResult;
  getPatientType: PatientTypeResult;
  getPaymentType: PaymentTypeResult;
  getPolicy: PolicyResult;
  getPrice: PriceResult;
  getPriceName: PriceNameResult;
  getPricePeriod: PricePeriodResult;
  getRefuseReason: RefuseReasonResult;
  getServiceGroup: ServiceGroupResult;
  getServiceMedicalSpeciality: ServiceMedicalSpecialityResult;
  getServices: ServiceResult;
  getServicesTypes: ServiceTypeResult;
  getShifr: ShifrResult;
  getShifrDiscount: ShifrDiscountResult;
  getShifrDiscountPeriod: ShifrDiscountPeriodResult;
  getStaffTypes: StaffTypeResult;
  getSubscribeServicePack: SubscribeServicePackResult;
  getSubscribeSpackRecord: SubscribeSpackRecordResult;
  getSuscribeDoctor: SubscribeDoctorResult;
  getTest: RequestResult;
  getUserAdminInfo: UserAdminResult;
  getUserData: UserData;
  getUserPayment: UserPaymentResult;
  getUserPurchaseReturn: UserPurchaseReturnResult;
  getUserServiceCart: UserServiceCartResult;
  getUserServicePlan: UserServicePlanResult;
  getUserSubscribe: UserSubscribeResult;
  getUsersPurchases: UserPurchaseResult;
  guestLogin: LoginResult;
  loginFlashCallCode: LoginResult;
  patienLoginByPassword: LoginResult;
  patientLoginByPhone: LoginResult;
};


export type QueryAdminLoginByPasswordArgs = {
  mobile: Scalars['String']['input'];
  password: Scalars['String']['input'];
};


export type QueryGetAccessTicketArgs = {
  descSorting?: InputMaybe<Scalars['Boolean']['input']>;
  filteringAttrs?: InputMaybe<AccessTicketInput>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  orderingAttrs?: InputMaybe<AccessTicketInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetCitiesArgs = {
  descSorting?: InputMaybe<Scalars['Boolean']['input']>;
  filteringAttrs?: InputMaybe<CityInput>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  orderingAttrs?: InputMaybe<CityInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetComplexServiceArgs = {
  descSorting?: InputMaybe<Scalars['Boolean']['input']>;
  filteringAttrs?: InputMaybe<ComplexServiceInput>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  orderingAttrs?: InputMaybe<ComplexServiceInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetComplexServiceItemArgs = {
  descSorting?: InputMaybe<Scalars['Boolean']['input']>;
  filteringAttrs?: InputMaybe<ComplexServiceItemInput>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  orderingAttrs?: InputMaybe<ComplexServiceItemInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetDoctorCategoriesArgs = {
  descSorting?: InputMaybe<Scalars['Boolean']['input']>;
  filteringAttrs?: InputMaybe<DoctorCategoryInput>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  orderingAttrs?: InputMaybe<DoctorCategoryInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetDoctorMedicalCenterArgs = {
  descSorting?: InputMaybe<Scalars['Boolean']['input']>;
  filteringAttrs?: InputMaybe<DoctorMedicalCenterInput>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  orderingAttrs?: InputMaybe<DoctorMedicalCenterInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetDoctorPatientTypeArgs = {
  descSorting?: InputMaybe<Scalars['Boolean']['input']>;
  filteringAttrs?: InputMaybe<DoctorPatientTypeInput>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  orderingAttrs?: InputMaybe<DoctorPatientTypeInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetDoctorReplacementArgs = {
  descSorting?: InputMaybe<Scalars['Boolean']['input']>;
  filteringAttrs?: InputMaybe<DoctorReplacementInput>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  orderingAttrs?: InputMaybe<DoctorReplacementInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetDoctorStatusArgs = {
  descSorting?: InputMaybe<Scalars['Boolean']['input']>;
  filteringAttrs?: InputMaybe<DoctorStatusInput>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  orderingAttrs?: InputMaybe<DoctorStatusInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetDoctorStatusTypesArgs = {
  descSorting?: InputMaybe<Scalars['Boolean']['input']>;
  filteringAttrs?: InputMaybe<DoctorStatusTypeInput>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  orderingAttrs?: InputMaybe<DoctorStatusTypeInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetDoctorsArgs = {
  descSorting?: InputMaybe<Scalars['Boolean']['input']>;
  filteringAttrs?: InputMaybe<DoctorInput>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  orderingAttrs?: InputMaybe<DoctorInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetDoctorsMspecialitiesArgs = {
  descSorting?: InputMaybe<Scalars['Boolean']['input']>;
  filteringAttrs?: InputMaybe<DoctorMspecialityInput>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  orderingAttrs?: InputMaybe<DoctorMspecialityInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetFinancialTypeArgs = {
  descSorting?: InputMaybe<Scalars['Boolean']['input']>;
  filteringAttrs?: InputMaybe<FinancialTypeInput>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  orderingAttrs?: InputMaybe<FinancialTypeInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetMedicalCentersArgs = {
  descSorting?: InputMaybe<Scalars['Boolean']['input']>;
  filteringAttrs?: InputMaybe<MedicalCenterInput>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  orderingAttrs?: InputMaybe<MedicalCenterInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetMedicalPositionsArgs = {
  descSorting?: InputMaybe<Scalars['Boolean']['input']>;
  filteringAttrs?: InputMaybe<MedicalPositionInput>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  orderingAttrs?: InputMaybe<MedicalPositionInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetMedicalSpecialitiesArgs = {
  descSorting?: InputMaybe<Scalars['Boolean']['input']>;
  filteringAttrs?: InputMaybe<MedicalSpecialityInput>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  orderingAttrs?: InputMaybe<MedicalSpecialityInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetPackTypeArgs = {
  descSorting?: InputMaybe<Scalars['Boolean']['input']>;
  filteringAttrs?: InputMaybe<PackTypeInput>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  orderingAttrs?: InputMaybe<PackTypeInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetPatientTypeArgs = {
  descSorting?: InputMaybe<Scalars['Boolean']['input']>;
  filteringAttrs?: InputMaybe<PatientTypeInput>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  orderingAttrs?: InputMaybe<PatientTypeInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetPaymentTypeArgs = {
  descSorting?: InputMaybe<Scalars['Boolean']['input']>;
  filteringAttrs?: InputMaybe<PaymentTypeInput>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  orderingAttrs?: InputMaybe<PaymentTypeInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetPolicyArgs = {
  descSorting?: InputMaybe<Scalars['Boolean']['input']>;
  filteringAttrs?: InputMaybe<PolicyInput>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  orderingAttrs?: InputMaybe<PolicyInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetPriceArgs = {
  descSorting?: InputMaybe<Scalars['Boolean']['input']>;
  filteringAttrs?: InputMaybe<PriceInput>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  orderingAttrs?: InputMaybe<PriceInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetPriceNameArgs = {
  descSorting?: InputMaybe<Scalars['Boolean']['input']>;
  filteringAttrs?: InputMaybe<PriceNameInput>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  orderingAttrs?: InputMaybe<PriceNameInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetPricePeriodArgs = {
  descSorting?: InputMaybe<Scalars['Boolean']['input']>;
  filteringAttrs?: InputMaybe<PricePeriodInput>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  orderingAttrs?: InputMaybe<PricePeriodInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetRefuseReasonArgs = {
  descSorting?: InputMaybe<Scalars['Boolean']['input']>;
  filteringAttrs?: InputMaybe<RefuseReasonInput>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  orderingAttrs?: InputMaybe<RefuseReasonInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetServiceGroupArgs = {
  name?: InputMaybe<Scalars['String']['input']>;
};


export type QueryGetServiceMedicalSpecialityArgs = {
  descSorting?: InputMaybe<Scalars['Boolean']['input']>;
  filteringAttrs?: InputMaybe<ServiceMedicalSpecialityInput>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  orderingAttrs?: InputMaybe<ServiceMedicalSpecialityInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetServicesArgs = {
  descSorting?: InputMaybe<Scalars['Boolean']['input']>;
  filteringAttrs?: InputMaybe<ServiceInput>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  orderingAttrs?: InputMaybe<ServiceInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetServicesTypesArgs = {
  descSorting?: InputMaybe<Scalars['Boolean']['input']>;
  filteringAttrs?: InputMaybe<ServiceTypeInput>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  orderingAttrs?: InputMaybe<ServiceTypeInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetShifrArgs = {
  descSorting?: InputMaybe<Scalars['Boolean']['input']>;
  filteringAttrs?: InputMaybe<ShifrInput>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  orderingAttrs?: InputMaybe<ShifrInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetShifrDiscountArgs = {
  descSorting?: InputMaybe<Scalars['Boolean']['input']>;
  filteringAttrs?: InputMaybe<ShifrDiscountInput>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  orderingAttrs?: InputMaybe<ShifrDiscountInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetShifrDiscountPeriodArgs = {
  descSorting?: InputMaybe<Scalars['Boolean']['input']>;
  filteringAttrs?: InputMaybe<ShifrDiscountPeriodInput>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  orderingAttrs?: InputMaybe<ShifrDiscountPeriodInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetStaffTypesArgs = {
  descSorting?: InputMaybe<Scalars['Boolean']['input']>;
  filteringAttrs?: InputMaybe<StaffTypeInput>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  orderingAttrs?: InputMaybe<StaffTypeInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetSubscribeServicePackArgs = {
  descSorting?: InputMaybe<Scalars['Boolean']['input']>;
  filteringAttrs?: InputMaybe<SubscribeServicePackInput>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  orderingAttrs?: InputMaybe<SubscribeServicePackInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetSubscribeSpackRecordArgs = {
  descSorting?: InputMaybe<Scalars['Boolean']['input']>;
  filteringAttrs?: InputMaybe<SubscribeSpackRecordInput>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  orderingAttrs?: InputMaybe<SubscribeSpackRecordInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetSuscribeDoctorArgs = {
  descSorting?: InputMaybe<Scalars['Boolean']['input']>;
  filteringAttrs?: InputMaybe<SubscribeDoctorInput>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  orderingAttrs?: InputMaybe<SubscribeDoctorInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetUserAdminInfoArgs = {
  descSorting?: InputMaybe<Scalars['Boolean']['input']>;
  filteringAttrs?: InputMaybe<UserAdminInputAdm>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  orderingAttrs?: InputMaybe<UserAdminInputAdm>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetUserPaymentArgs = {
  descSorting?: InputMaybe<Scalars['Boolean']['input']>;
  filteringAttrs?: InputMaybe<UserPaymentInput>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  orderingAttrs?: InputMaybe<UserPaymentInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetUserPurchaseReturnArgs = {
  descSorting?: InputMaybe<Scalars['Boolean']['input']>;
  filteringAttrs?: InputMaybe<UserPurchaseReturnInput>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  orderingAttrs?: InputMaybe<UserPurchaseReturnInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetUserServiceCartArgs = {
  descSorting?: InputMaybe<Scalars['Boolean']['input']>;
  filteringAttrs?: InputMaybe<UserServiceCartInput>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  orderingAttrs?: InputMaybe<UserServiceCartInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetUserServicePlanArgs = {
  descSorting?: InputMaybe<Scalars['Boolean']['input']>;
  filteringAttrs?: InputMaybe<UserServicePlanInput>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  orderingAttrs?: InputMaybe<UserServicePlanInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetUserSubscribeArgs = {
  descSorting?: InputMaybe<Scalars['Boolean']['input']>;
  filteringAttrs?: InputMaybe<UserSubscribeInput>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  orderingAttrs?: InputMaybe<UserSubscribeInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetUsersPurchasesArgs = {
  descSorting?: InputMaybe<Scalars['Boolean']['input']>;
  filteringAttrs?: InputMaybe<UserPurchaseInput>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  orderingAttrs?: InputMaybe<UserPurchaseInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryLoginFlashCallCodeArgs = {
  flashCallCode: FlashCallCode;
};


export type QueryPatienLoginByPasswordArgs = {
  loginPhoneNumber: Scalars['String']['input'];
  password: Scalars['String']['input'];
};


export type QueryPatientLoginByPhoneArgs = {
  loginPhoneNumber: Scalars['String']['input'];
};

export type RefuseReason = {
  __typename?: 'RefuseReason';
  clientId?: Maybe<Scalars['Int']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['Int']['output'];
  isActive?: Maybe<Scalars['Boolean']['output']>;
  text: Scalars['String']['output'];
};

export type RefuseReasonIn = {
  clientId?: InputMaybe<Scalars['Int']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  text?: InputMaybe<Scalars['String']['input']>;
};

export type RefuseReasonInput = {
  clientId?: InputMaybe<Scalars['Int']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  text?: InputMaybe<Scalars['String']['input']>;
};

export type RefuseReasonInputAdm = {
  clientId?: InputMaybe<Scalars['Int']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  text?: InputMaybe<Scalars['String']['input']>;
};

export type RefuseReasonResult = {
  __typename?: 'RefuseReasonResult';
  data?: Maybe<Array<RefuseReason>>;
  details?: Maybe<Scalars['String']['output']>;
  statusCode?: Maybe<Scalars['Int']['output']>;
};

export type RequestResult = {
  __typename?: 'RequestResult';
  data?: Maybe<Scalars['String']['output']>;
  details?: Maybe<Scalars['String']['output']>;
  statusCode?: Maybe<Scalars['Int']['output']>;
};

export type Service = {
  __typename?: 'Service';
  appliedMethod?: Maybe<Scalars['String']['output']>;
  clientId?: Maybe<Scalars['Int']['output']>;
  clientServiceCode?: Maybe<Scalars['String']['output']>;
  comment?: Maybe<Scalars['String']['output']>;
  executionTime?: Maybe<Scalars['Int']['output']>;
  fullDescription?: Maybe<Scalars['String']['output']>;
  gender?: Maybe<Scalars['String']['output']>;
  id: Scalars['Int']['output'];
  isActive?: Maybe<Scalars['Boolean']['output']>;
  isComplexService?: Maybe<Scalars['Boolean']['output']>;
  isForHomeOnly?: Maybe<Scalars['Boolean']['output']>;
  isUrgent?: Maybe<Scalars['Boolean']['output']>;
  maximalAge?: Maybe<Scalars['Int']['output']>;
  minimalAge?: Maybe<Scalars['Int']['output']>;
  mzCode?: Maybe<Scalars['String']['output']>;
  nameForLk: Scalars['String']['output'];
  nameForMz: Scalars['String']['output'];
  nameForStaff: Scalars['String']['output'];
  nursesExecutionTime?: Maybe<Scalars['Int']['output']>;
  preparationRules?: Maybe<Scalars['String']['output']>;
  selectedServiceNotification?: Maybe<Scalars['String']['output']>;
  serviceGroup?: Maybe<ServiceGroup>;
  serviceGroupId: Scalars['Int']['output'];
  serviceType?: Maybe<ServiceType>;
  serviceTypeId: Scalars['Int']['output'];
  shortDescription?: Maybe<Scalars['String']['output']>;
};

export type ServiceGroup = {
  __typename?: 'ServiceGroup';
  clientId?: Maybe<Scalars['Int']['output']>;
  clientServiceGroupCode?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['Int']['output'];
  isActive?: Maybe<Scalars['Boolean']['output']>;
  levelSortingCode?: Maybe<Scalars['Int']['output']>;
  name: Scalars['String']['output'];
  path?: Maybe<Array<Scalars['String']['output']>>;
  viewName?: Maybe<Scalars['String']['output']>;
  xmembers?: Maybe<Array<ServiceGroup>>;
};

export type ServiceGroupIn = {
  clientId?: InputMaybe<Scalars['Int']['input']>;
  clientServiceGroupCode?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  levelSortingCode?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  path?: InputMaybe<Scalars['String']['input']>;
  viewName?: InputMaybe<Scalars['String']['input']>;
};

export type ServiceGroupResult = {
  __typename?: 'ServiceGroupResult';
  data?: Maybe<Array<ServiceGroup>>;
  details?: Maybe<Scalars['String']['output']>;
  statusCode?: Maybe<Scalars['Int']['output']>;
};

export type ServiceIn = {
  appliedMethod?: InputMaybe<Scalars['String']['input']>;
  clientId?: InputMaybe<Scalars['Int']['input']>;
  clientServiceCode?: InputMaybe<Scalars['String']['input']>;
  comment?: InputMaybe<Scalars['String']['input']>;
  executionTime?: InputMaybe<Scalars['Int']['input']>;
  fullDescription?: InputMaybe<Scalars['String']['input']>;
  gender?: InputMaybe<Scalars['String']['input']>;
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  isComplexService?: InputMaybe<Scalars['Boolean']['input']>;
  isForHomeOnly?: InputMaybe<Scalars['Boolean']['input']>;
  isUrgent?: InputMaybe<Scalars['Boolean']['input']>;
  maximalAge?: InputMaybe<Scalars['Int']['input']>;
  minimalAge?: InputMaybe<Scalars['Int']['input']>;
  mzCode?: InputMaybe<Scalars['String']['input']>;
  nameForLk?: InputMaybe<Scalars['String']['input']>;
  nameForMz?: InputMaybe<Scalars['String']['input']>;
  nameForStaff?: InputMaybe<Scalars['String']['input']>;
  nursesExecutionTime?: InputMaybe<Scalars['Int']['input']>;
  preparationRules?: InputMaybe<Scalars['String']['input']>;
  selectedServiceNotification?: InputMaybe<Scalars['String']['input']>;
  serviceGroupId?: InputMaybe<Scalars['Int']['input']>;
  serviceTypeId?: InputMaybe<Scalars['Int']['input']>;
  shortDescription?: InputMaybe<Scalars['String']['input']>;
};

export type ServiceInput = {
  appliedMethod?: InputMaybe<Scalars['String']['input']>;
  clientId?: InputMaybe<Scalars['Int']['input']>;
  clientServiceCode?: InputMaybe<Scalars['String']['input']>;
  comment?: InputMaybe<Scalars['String']['input']>;
  executionTime?: InputMaybe<Scalars['Int']['input']>;
  fullDescription?: InputMaybe<Scalars['String']['input']>;
  gender?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  isComplexService?: InputMaybe<Scalars['Boolean']['input']>;
  isForHomeOnly?: InputMaybe<Scalars['Boolean']['input']>;
  isUrgent?: InputMaybe<Scalars['Boolean']['input']>;
  maximalAge?: InputMaybe<IntFilteringInterval>;
  minimalAge?: InputMaybe<IntFilteringInterval>;
  mzCode?: InputMaybe<Scalars['String']['input']>;
  nameForLk?: InputMaybe<Scalars['String']['input']>;
  nameForMz?: InputMaybe<Scalars['String']['input']>;
  nameForStaff?: InputMaybe<Scalars['String']['input']>;
  nursesExecutionTime?: InputMaybe<Scalars['Int']['input']>;
  preparationRules?: InputMaybe<Scalars['String']['input']>;
  selectedServiceNotification?: InputMaybe<Scalars['String']['input']>;
  serviceGroup?: InputMaybe<ServiceGroupIn>;
  serviceGroupId?: InputMaybe<Scalars['Int']['input']>;
  serviceTypeId?: InputMaybe<Scalars['Int']['input']>;
  shortDescription?: InputMaybe<Scalars['String']['input']>;
};

export type ServiceInputAdm = {
  appliedMethod?: InputMaybe<Scalars['String']['input']>;
  clientId?: InputMaybe<Scalars['Int']['input']>;
  clientServiceCode?: InputMaybe<Scalars['String']['input']>;
  comment?: InputMaybe<Scalars['String']['input']>;
  executionTime?: InputMaybe<Scalars['Int']['input']>;
  fullDescription?: InputMaybe<Scalars['String']['input']>;
  gender?: InputMaybe<Scalars['String']['input']>;
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  isComplexService?: InputMaybe<Scalars['Boolean']['input']>;
  isForHomeOnly?: InputMaybe<Scalars['Boolean']['input']>;
  isUrgent?: InputMaybe<Scalars['Boolean']['input']>;
  maximalAge?: InputMaybe<Scalars['Int']['input']>;
  minimalAge?: InputMaybe<Scalars['Int']['input']>;
  mzCode?: InputMaybe<Scalars['String']['input']>;
  nameForLk?: InputMaybe<Scalars['String']['input']>;
  nameForMz?: InputMaybe<Scalars['String']['input']>;
  nameForStaff?: InputMaybe<Scalars['String']['input']>;
  nursesExecutionTime?: InputMaybe<Scalars['Int']['input']>;
  preparationRules?: InputMaybe<Scalars['String']['input']>;
  selectedServiceNotification?: InputMaybe<Scalars['String']['input']>;
  serviceGroupId?: InputMaybe<Scalars['Int']['input']>;
  serviceTypeId?: InputMaybe<Scalars['Int']['input']>;
  shortDescription?: InputMaybe<Scalars['String']['input']>;
};

export type ServiceMedicalSpeciality = {
  __typename?: 'ServiceMedicalSpeciality';
  id: Scalars['Int']['output'];
  isActive?: Maybe<Scalars['Boolean']['output']>;
  medicalSpeciality?: Maybe<MedicalSpeciality>;
  medicalSpecialityId: Scalars['Int']['output'];
  service?: Maybe<Service>;
  serviceId: Scalars['Int']['output'];
};

export type ServiceMedicalSpecialityInput = {
  id?: InputMaybe<Scalars['Int']['input']>;
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  medicalSpeciality?: InputMaybe<MedicalSpecialityIn>;
  medicalSpecialityId?: InputMaybe<Scalars['Int']['input']>;
  service?: InputMaybe<ServiceIn>;
  serviceId?: InputMaybe<Scalars['Int']['input']>;
};

export type ServiceMedicalSpecialityInputAdm = {
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  medicalSpecialityId?: InputMaybe<Scalars['Int']['input']>;
  serviceId?: InputMaybe<Scalars['Int']['input']>;
};

export type ServiceMedicalSpecialityResult = {
  __typename?: 'ServiceMedicalSpecialityResult';
  data?: Maybe<Array<ServiceMedicalSpeciality>>;
  details?: Maybe<Scalars['String']['output']>;
  statusCode?: Maybe<Scalars['Int']['output']>;
};

export type ServiceResult = {
  __typename?: 'ServiceResult';
  data?: Maybe<Array<Service>>;
  details?: Maybe<Scalars['String']['output']>;
  statusCode?: Maybe<Scalars['Int']['output']>;
};

export type ServiceType = {
  __typename?: 'ServiceType';
  clientId?: Maybe<Scalars['Int']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['Int']['output'];
  isActive?: Maybe<Scalars['Boolean']['output']>;
  name: Scalars['String']['output'];
};

export type ServiceTypeInput = {
  clientId?: InputMaybe<Scalars['Int']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

export type ServiceTypeInputAdm = {
  clientId?: InputMaybe<Scalars['Int']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

export type ServiceTypeResult = {
  __typename?: 'ServiceTypeResult';
  data?: Maybe<Array<ServiceType>>;
  details?: Maybe<Scalars['String']['output']>;
  statusCode?: Maybe<Scalars['Int']['output']>;
};

export type Shifr = {
  __typename?: 'Shifr';
  clientId?: Maybe<Scalars['Int']['output']>;
  code?: Maybe<Scalars['String']['output']>;
  companyName?: Maybe<Scalars['String']['output']>;
  endDate: Scalars['DateTime']['output'];
  financialType?: Maybe<FinancialType>;
  financialTypeId: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  isActive?: Maybe<Scalars['Boolean']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  startDate: Scalars['DateTime']['output'];
};

export type ShifrDiscount = {
  __typename?: 'ShifrDiscount';
  clientId?: Maybe<Scalars['Int']['output']>;
  comment?: Maybe<Scalars['String']['output']>;
  discountCoefficientA?: Maybe<Scalars['Float']['output']>;
  discountCoefficientS?: Maybe<Scalars['Float']['output']>;
  id: Scalars['Int']['output'];
  service?: Maybe<Service>;
  serviceGroup?: Maybe<ServiceGroup>;
  serviceGroupId: Scalars['Int']['output'];
  serviceId: Scalars['Int']['output'];
  shifr?: Maybe<Shifr>;
  shifrId?: Maybe<Scalars['Int']['output']>;
  shiftDiscountPeriod?: Maybe<ShifrDiscountPeriod>;
  shiftDiscountPeriodId?: Maybe<Scalars['Int']['output']>;
};

export type ShifrDiscountInput = {
  clientId?: InputMaybe<Scalars['Int']['input']>;
  comment?: InputMaybe<Scalars['String']['input']>;
  discountCoefficientA?: InputMaybe<Scalars['Float']['input']>;
  discountCoefficientS?: InputMaybe<Scalars['Float']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  service?: InputMaybe<ServiceIn>;
  serviceGroup?: InputMaybe<ServiceGroupIn>;
  serviceGroupId?: InputMaybe<Scalars['Int']['input']>;
  serviceId?: InputMaybe<Scalars['Int']['input']>;
  shifr?: InputMaybe<ShifrIn>;
  shifrId?: InputMaybe<Scalars['Int']['input']>;
  shiftDiscountPeriod?: InputMaybe<ShifrDiscountPeriodIn>;
  shiftDiscountPeriodId?: InputMaybe<Scalars['Int']['input']>;
};

export type ShifrDiscountInputAdm = {
  clientId?: InputMaybe<Scalars['Int']['input']>;
  endDate?: InputMaybe<Scalars['Date']['input']>;
  startDate?: InputMaybe<Scalars['Date']['input']>;
};

export type ShifrDiscountPeriod = {
  __typename?: 'ShifrDiscountPeriod';
  clientId?: Maybe<Scalars['Int']['output']>;
  endDate: Scalars['DateTime']['output'];
  id: Scalars['Int']['output'];
  isActive?: Maybe<Scalars['Boolean']['output']>;
  startDate: Scalars['DateTime']['output'];
};

export type ShifrDiscountPeriodIn = {
  clientId?: InputMaybe<Scalars['Int']['input']>;
  endDate?: InputMaybe<Scalars['Date']['input']>;
  startDate?: InputMaybe<Scalars['Date']['input']>;
};

export type ShifrDiscountPeriodInput = {
  clientId?: InputMaybe<Scalars['Int']['input']>;
  endDate?: InputMaybe<Scalars['Date']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  startDate?: InputMaybe<Scalars['Date']['input']>;
};

export type ShifrDiscountPeriodInputAdm = {
  clientId?: InputMaybe<Scalars['Int']['input']>;
  endDate?: InputMaybe<Scalars['Date']['input']>;
  startDate?: InputMaybe<Scalars['Date']['input']>;
};

export type ShifrDiscountPeriodResult = {
  __typename?: 'ShifrDiscountPeriodResult';
  data?: Maybe<Array<ShifrDiscountPeriod>>;
  details?: Maybe<Scalars['String']['output']>;
  statusCode?: Maybe<Scalars['Int']['output']>;
};

export type ShifrDiscountResult = {
  __typename?: 'ShifrDiscountResult';
  data?: Maybe<Array<ShifrDiscount>>;
  details?: Maybe<Scalars['String']['output']>;
  statusCode?: Maybe<Scalars['Int']['output']>;
};

export type ShifrIn = {
  clientId?: InputMaybe<Scalars['Int']['input']>;
  code?: InputMaybe<Scalars['String']['input']>;
  companyName?: InputMaybe<Scalars['String']['input']>;
  endDate?: InputMaybe<Scalars['Date']['input']>;
  financialTypeId?: InputMaybe<Scalars['Int']['input']>;
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  startDate?: InputMaybe<Scalars['Date']['input']>;
  status?: InputMaybe<Scalars['Int']['input']>;
};

export type ShifrInput = {
  clientId?: InputMaybe<Scalars['Int']['input']>;
  code?: InputMaybe<Scalars['String']['input']>;
  companyName?: InputMaybe<Scalars['String']['input']>;
  endDate?: InputMaybe<Scalars['Date']['input']>;
  financialType?: InputMaybe<FinancialTypeIn>;
  financialTypeId?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  startDate?: InputMaybe<Scalars['Date']['input']>;
  status?: InputMaybe<Scalars['Int']['input']>;
};

export type ShifrInputAdm = {
  clientId?: InputMaybe<Scalars['Int']['input']>;
  code?: InputMaybe<Scalars['String']['input']>;
  companyName?: InputMaybe<Scalars['String']['input']>;
  endDate?: InputMaybe<Scalars['Date']['input']>;
  financialTypeId?: InputMaybe<Scalars['Int']['input']>;
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  startDate?: InputMaybe<Scalars['Date']['input']>;
  status?: InputMaybe<Scalars['Int']['input']>;
};

export type ShifrResult = {
  __typename?: 'ShifrResult';
  data?: Maybe<Array<Shifr>>;
  details?: Maybe<Scalars['String']['output']>;
  statusCode?: Maybe<Scalars['Int']['output']>;
};

export type StaffType = {
  __typename?: 'StaffType';
  clientId?: Maybe<Scalars['Int']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['Int']['output'];
  isActive?: Maybe<Scalars['Boolean']['output']>;
  name: Scalars['String']['output'];
};

export type StaffTypeIn = {
  clientId?: InputMaybe<Scalars['Int']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

export type StaffTypeInput = {
  clientId?: InputMaybe<Scalars['Int']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

export type StaffTypeInputAdm = {
  clientId?: InputMaybe<Scalars['Int']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

export type StaffTypeResult = {
  __typename?: 'StaffTypeResult';
  data?: Maybe<Array<StaffType>>;
  details?: Maybe<Scalars['String']['output']>;
  statusCode?: Maybe<Scalars['Int']['output']>;
};

export type SubscribeDoctor = {
  __typename?: 'SubscribeDoctor';
  clientId?: Maybe<Scalars['Int']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  doctor?: Maybe<Doctor>;
  doctorId: Scalars['Int']['output'];
  doctorReplacement?: Maybe<DoctorReplacement>;
  doctorReplacementId?: Maybe<Scalars['Int']['output']>;
  endDate: Scalars['DateTime']['output'];
  id: Scalars['Int']['output'];
  isActive?: Maybe<Scalars['Boolean']['output']>;
  roleId?: Maybe<Scalars['Int']['output']>;
  startDate: Scalars['DateTime']['output'];
  userSubscribe?: Maybe<UserSubscribe>;
  userSubscribeId: Scalars['Int']['output'];
};

export type SubscribeDoctorInput = {
  clientId?: InputMaybe<Scalars['Int']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  doctor?: InputMaybe<DoctorIn>;
  doctorId?: InputMaybe<Scalars['Int']['input']>;
  doctorReplacement?: InputMaybe<DoctorReplacementIn>;
  doctorReplacementId?: InputMaybe<Scalars['Int']['input']>;
  endDate?: InputMaybe<Scalars['Date']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  roleId?: InputMaybe<Scalars['Int']['input']>;
  startDate?: InputMaybe<Scalars['Date']['input']>;
  userSubscribe?: InputMaybe<UserSubscribeIn>;
  userSubscribeId?: InputMaybe<Scalars['Int']['input']>;
};

export type SubscribeDoctorInputAdm = {
  clientId?: InputMaybe<Scalars['Int']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  doctorId?: InputMaybe<Scalars['Int']['input']>;
  doctorReplacementId?: InputMaybe<Scalars['Int']['input']>;
  endDate?: InputMaybe<Scalars['Date']['input']>;
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  roleId?: InputMaybe<Scalars['Int']['input']>;
  startDate?: InputMaybe<Scalars['Date']['input']>;
  userSubscribeId?: InputMaybe<Scalars['Int']['input']>;
};

export type SubscribeDoctorResult = {
  __typename?: 'SubscribeDoctorResult';
  data?: Maybe<Array<SubscribeDoctor>>;
  details?: Maybe<Scalars['String']['output']>;
  statusCode?: Maybe<Scalars['Int']['output']>;
};

export type SubscribeServicePack = {
  __typename?: 'SubscribeServicePack';
  clientId?: Maybe<Scalars['Int']['output']>;
  code?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['Int']['output'];
  isActive?: Maybe<Scalars['Boolean']['output']>;
  maxQuantity?: Maybe<Scalars['Int']['output']>;
  minQuantity?: Maybe<Scalars['Int']['output']>;
  name: Scalars['String']['output'];
  packTag?: Maybe<Scalars['Int']['output']>;
  packType?: Maybe<PackType>;
  packTypeId: Scalars['Int']['output'];
  userSubscribe?: Maybe<UserSubscribe>;
  userSubscribeId: Scalars['Int']['output'];
};

export type SubscribeServicePackIn = {
  clientId?: InputMaybe<Scalars['Int']['input']>;
  code?: InputMaybe<Scalars['String']['input']>;
  maxQuantity?: InputMaybe<Scalars['Int']['input']>;
  minQuantity?: InputMaybe<Scalars['Int']['input']>;
  packTag?: InputMaybe<Scalars['Int']['input']>;
  packTypeId?: InputMaybe<Scalars['Int']['input']>;
  userSubscribeId?: InputMaybe<Scalars['Int']['input']>;
};

export type SubscribeServicePackInput = {
  clientId?: InputMaybe<Scalars['Int']['input']>;
  code?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  maxQuantity?: InputMaybe<Scalars['Int']['input']>;
  minQuantity?: InputMaybe<Scalars['Int']['input']>;
  packTag?: InputMaybe<Scalars['Int']['input']>;
  packType?: InputMaybe<PackTypeIn>;
  packTypeId?: InputMaybe<Scalars['Int']['input']>;
  userSubscribe?: InputMaybe<UserSubscribeIn>;
  userSubscribeId?: InputMaybe<Scalars['Int']['input']>;
};

export type SubscribeServicePackInputAdm = {
  clientId?: InputMaybe<Scalars['Int']['input']>;
  code?: InputMaybe<Scalars['String']['input']>;
  maxQuantity?: InputMaybe<Scalars['Int']['input']>;
  minQuantity?: InputMaybe<Scalars['Int']['input']>;
  packTag?: InputMaybe<Scalars['Int']['input']>;
  packTypeId?: InputMaybe<Scalars['Int']['input']>;
  userSubscribeId?: InputMaybe<Scalars['Int']['input']>;
};

export type SubscribeServicePackResult = {
  __typename?: 'SubscribeServicePackResult';
  data?: Maybe<Array<SubscribeServicePack>>;
  details?: Maybe<Scalars['String']['output']>;
  statusCode?: Maybe<Scalars['Int']['output']>;
};

export type SubscribeSpackRecord = {
  __typename?: 'SubscribeSpackRecord';
  clientId?: Maybe<Scalars['Int']['output']>;
  id: Scalars['Int']['output'];
  isActive?: Maybe<Scalars['Boolean']['output']>;
  quantity?: Maybe<Scalars['Int']['output']>;
  service?: Maybe<Service>;
  serviceGroup?: Maybe<ServiceGroup>;
  serviceGroupId: Scalars['Int']['output'];
  serviceId: Scalars['Int']['output'];
  status: Scalars['Int']['output'];
  subscribeServicesPack?: Maybe<SubscribeServicePack>;
  subscribeServicesPackId: Scalars['Int']['output'];
};

export type SubscribeSpackRecordInput = {
  clientId?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  quantity?: InputMaybe<Scalars['Int']['input']>;
  service?: InputMaybe<ServiceIn>;
  serviceGroup?: InputMaybe<ServiceGroupIn>;
  serviceGroupId?: InputMaybe<Scalars['Int']['input']>;
  serviceId?: InputMaybe<Scalars['Int']['input']>;
  status?: InputMaybe<Scalars['Int']['input']>;
  subscribeServicesPack?: InputMaybe<SubscribeServicePackIn>;
  subscribeServicesPackId?: InputMaybe<Scalars['Int']['input']>;
};

export type SubscribeSpackRecordInputAdm = {
  clientId?: InputMaybe<Scalars['Int']['input']>;
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  quantity?: InputMaybe<Scalars['Int']['input']>;
  serviceGroupId?: InputMaybe<Scalars['Int']['input']>;
  serviceId?: InputMaybe<Scalars['Int']['input']>;
  status?: InputMaybe<Scalars['Int']['input']>;
  subscribeServicesPackId?: InputMaybe<Scalars['Int']['input']>;
};

export type SubscribeSpackRecordResult = {
  __typename?: 'SubscribeSpackRecordResult';
  data?: Maybe<Array<SubscribeSpackRecord>>;
  details?: Maybe<Scalars['String']['output']>;
  statusCode?: Maybe<Scalars['Int']['output']>;
};

export type Token = {
  __typename?: 'Token';
  token: Scalars['String']['output'];
};

export type User = {
  __typename?: 'User';
  additionalPhoneNumber?: Maybe<Scalars['String']['output']>;
  addressFull?: Maybe<Scalars['String']['output']>;
  addressMisKladr?: Maybe<AddressMisKladrTable>;
  addressMisKladrId?: Maybe<Scalars['Int']['output']>;
  birthDate?: Maybe<Scalars['Date']['output']>;
  city?: Maybe<City>;
  cityId?: Maybe<Scalars['Int']['output']>;
  clientId?: Maybe<Scalars['Int']['output']>;
  created?: Maybe<Scalars['DateTime']['output']>;
  defaultMedicalCenter?: Maybe<MedicalCenter>;
  defaultMedicalCenterId?: Maybe<Scalars['Int']['output']>;
  docDate?: Maybe<Scalars['DateTime']['output']>;
  docGivingDepCode?: Maybe<Scalars['String']['output']>;
  docGivingDepName?: Maybe<Scalars['String']['output']>;
  docNumber?: Maybe<Scalars['String']['output']>;
  docRegAddress?: Maybe<Scalars['String']['output']>;
  docSeries?: Maybe<Scalars['String']['output']>;
  docType?: Maybe<Scalars['Int']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  firstName?: Maybe<Scalars['String']['output']>;
  gender?: Maybe<Scalars['String']['output']>;
  id: Scalars['Int']['output'];
  infoWay?: Maybe<InformationWay>;
  infoWayId?: Maybe<Scalars['Int']['output']>;
  inn?: Maybe<Scalars['String']['output']>;
  isActive?: Maybe<Scalars['Boolean']['output']>;
  isVerified?: Maybe<Scalars['Boolean']['output']>;
  lastName?: Maybe<Scalars['String']['output']>;
  latitude?: Maybe<Scalars['Float']['output']>;
  loginPhoneNumber?: Maybe<Scalars['String']['output']>;
  longitude?: Maybe<Scalars['Float']['output']>;
  notificationTime?: Maybe<Scalars['Time']['output']>;
  patronymic?: Maybe<Scalars['String']['output']>;
  phoneNumber: Scalars['String']['output'];
  prefNotificationContact?: Maybe<User>;
  prefNotificationContactId?: Maybe<Scalars['Int']['output']>;
  snils?: Maybe<Scalars['String']['output']>;
  zoneNumber?: Maybe<Scalars['Int']['output']>;
};

export type UserAdmin = {
  __typename?: 'UserAdmin';
  clientId?: Maybe<Scalars['Int']['output']>;
  id: Scalars['Int']['output'];
  registrationRequiredFields?: Maybe<Scalars['String']['output']>;
  registrationVisibleFields?: Maybe<Scalars['String']['output']>;
  userId?: Maybe<Scalars['Int']['output']>;
};

export type UserAdminInputAdm = {
  clientId?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  registrationRequiredFields?: InputMaybe<Scalars['String']['input']>;
  registrationVisibleFields?: InputMaybe<Scalars['String']['input']>;
  userId?: InputMaybe<Scalars['Int']['input']>;
};

export type UserAdminResult = {
  __typename?: 'UserAdminResult';
  data?: Maybe<Array<UserAdmin>>;
  details?: Maybe<Scalars['String']['output']>;
  statusCode?: Maybe<Scalars['Int']['output']>;
};

export type UserData = {
  __typename?: 'UserData';
  data?: Maybe<User>;
  details?: Maybe<Scalars['String']['output']>;
  statusCode?: Maybe<Scalars['Int']['output']>;
};

export type UserIn = {
  additionalPhoneNumber?: InputMaybe<Scalars['String']['input']>;
  birthDate?: InputMaybe<Scalars['Date']['input']>;
  clientCardId?: InputMaybe<Scalars['Int']['input']>;
  clientId?: InputMaybe<Scalars['Int']['input']>;
  clientPersonalAreaId?: InputMaybe<Scalars['Int']['input']>;
  created?: InputMaybe<Scalars['Date']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  firstName?: InputMaybe<Scalars['String']['input']>;
  gender?: InputMaybe<Scalars['String']['input']>;
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  isVerified?: InputMaybe<Scalars['Boolean']['input']>;
  lastLogin?: InputMaybe<Scalars['Date']['input']>;
  lastName?: InputMaybe<Scalars['String']['input']>;
  lastVisit?: InputMaybe<Scalars['Date']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
  patronymic?: InputMaybe<Scalars['String']['input']>;
  phoneNumber?: InputMaybe<Scalars['String']['input']>;
};

export type UserPayment = {
  __typename?: 'UserPayment';
  amount: Scalars['Float']['output'];
  avanceAmount?: Maybe<Scalars['Float']['output']>;
  avanceStatus?: Maybe<Scalars['Int']['output']>;
  cardAmount?: Maybe<Scalars['Float']['output']>;
  cashierId?: Maybe<Scalars['Int']['output']>;
  clientId?: Maybe<Scalars['Int']['output']>;
  debtAmount?: Maybe<Scalars['Float']['output']>;
  discountAmount?: Maybe<Scalars['Float']['output']>;
  editNowStatus?: Maybe<Scalars['Boolean']['output']>;
  fullAmount?: Maybe<Scalars['Float']['output']>;
  id: Scalars['Int']['output'];
  linkedUserPayment?: Maybe<UserPayment>;
  linkedUserPaymentId?: Maybe<Scalars['Int']['output']>;
  lpuId?: Maybe<Scalars['Int']['output']>;
  paymentDate: Scalars['DateTime']['output'];
  paymentStatus?: Maybe<Scalars['Int']['output']>;
  paymentType?: Maybe<PaymentType>;
  paymentTypeId?: Maybe<Scalars['Int']['output']>;
  policy?: Maybe<Policy>;
  policyId?: Maybe<Scalars['Int']['output']>;
  sbpAmount?: Maybe<Scalars['Float']['output']>;
  shifr?: Maybe<Shifr>;
  shifrId?: Maybe<Scalars['Int']['output']>;
  transactionCode?: Maybe<Scalars['String']['output']>;
  usedAmount?: Maybe<Scalars['Float']['output']>;
  user?: Maybe<User>;
  userId: Scalars['Int']['output'];
};

export type UserPaymentIn = {
  amount?: InputMaybe<Scalars['Float']['input']>;
  avanceAmount?: InputMaybe<Scalars['Float']['input']>;
  avanceStatus?: InputMaybe<Scalars['Int']['input']>;
  cardAmount?: InputMaybe<Scalars['Float']['input']>;
  cashierId?: InputMaybe<Scalars['Int']['input']>;
  clientId?: InputMaybe<Scalars['Int']['input']>;
  debtAmount?: InputMaybe<Scalars['Float']['input']>;
  discountAmount?: InputMaybe<Scalars['Float']['input']>;
  editNowStatus?: InputMaybe<Scalars['Boolean']['input']>;
  fullAmount?: InputMaybe<Scalars['Float']['input']>;
  linkedUserPaymentId?: InputMaybe<Scalars['Int']['input']>;
  lpuId?: InputMaybe<Scalars['Int']['input']>;
  paymentDate?: InputMaybe<Scalars['Date']['input']>;
  paymentStatus?: InputMaybe<Scalars['Int']['input']>;
  paymentTypeId?: InputMaybe<Scalars['Int']['input']>;
  policyId?: InputMaybe<Scalars['Int']['input']>;
  sbpAmount?: InputMaybe<Scalars['Float']['input']>;
  shifrId?: InputMaybe<Scalars['Int']['input']>;
  transactionCode?: InputMaybe<Scalars['String']['input']>;
  usedAmount?: InputMaybe<Scalars['Float']['input']>;
  userId?: InputMaybe<Scalars['Int']['input']>;
};

export type UserPaymentInput = {
  amount?: InputMaybe<Scalars['Float']['input']>;
  avanceAmount?: InputMaybe<Scalars['Float']['input']>;
  avanceStatus?: InputMaybe<Scalars['Int']['input']>;
  cardAmount?: InputMaybe<Scalars['Float']['input']>;
  cashierId?: InputMaybe<Scalars['Int']['input']>;
  clientId?: InputMaybe<Scalars['Int']['input']>;
  debtAmount?: InputMaybe<Scalars['Float']['input']>;
  discountAmount?: InputMaybe<Scalars['Float']['input']>;
  editNowStatus?: InputMaybe<Scalars['Boolean']['input']>;
  fullAmount?: InputMaybe<Scalars['Float']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  linkedUserPayment?: InputMaybe<UserPaymentInput>;
  linkedUserPaymentId?: InputMaybe<Scalars['Int']['input']>;
  lpuId?: InputMaybe<Scalars['Int']['input']>;
  paymentDate?: InputMaybe<Scalars['Date']['input']>;
  paymentStatus?: InputMaybe<Scalars['Int']['input']>;
  paymentType?: InputMaybe<PaymentTypeIn>;
  paymentTypeId?: InputMaybe<Scalars['Int']['input']>;
  policy?: InputMaybe<PolicyIn>;
  policyId?: InputMaybe<Scalars['Int']['input']>;
  sbpAmount?: InputMaybe<Scalars['Float']['input']>;
  shifr?: InputMaybe<ShifrIn>;
  shifrId?: InputMaybe<Scalars['Int']['input']>;
  transactionCode?: InputMaybe<Scalars['String']['input']>;
  usedAmount?: InputMaybe<Scalars['Float']['input']>;
  user?: InputMaybe<UserIn>;
  userId?: InputMaybe<Scalars['Int']['input']>;
};

export type UserPaymentInputAdm = {
  amount?: InputMaybe<Scalars['Float']['input']>;
  avanceAmount?: InputMaybe<Scalars['Float']['input']>;
  avanceStatus?: InputMaybe<Scalars['Int']['input']>;
  cardAmount?: InputMaybe<Scalars['Float']['input']>;
  cashierId?: InputMaybe<Scalars['Int']['input']>;
  clientId?: InputMaybe<Scalars['Int']['input']>;
  debtAmount?: InputMaybe<Scalars['Float']['input']>;
  discountAmount?: InputMaybe<Scalars['Float']['input']>;
  editNowStatus?: InputMaybe<Scalars['Boolean']['input']>;
  fullAmount?: InputMaybe<Scalars['Float']['input']>;
  linkedUserPaymentId?: InputMaybe<Scalars['Int']['input']>;
  lpuId?: InputMaybe<Scalars['Int']['input']>;
  paymentDate?: InputMaybe<Scalars['Date']['input']>;
  paymentStatus?: InputMaybe<Scalars['Int']['input']>;
  paymentTypeId?: InputMaybe<Scalars['Int']['input']>;
  policyId?: InputMaybe<Scalars['Int']['input']>;
  sbpAmount?: InputMaybe<Scalars['Float']['input']>;
  shifrId?: InputMaybe<Scalars['Int']['input']>;
  transactionCode?: InputMaybe<Scalars['String']['input']>;
  usedAmount?: InputMaybe<Scalars['Float']['input']>;
  userId?: InputMaybe<Scalars['Int']['input']>;
};

export type UserPaymentResult = {
  __typename?: 'UserPaymentResult';
  data?: Maybe<Array<UserPayment>>;
  details?: Maybe<Scalars['String']['output']>;
  statusCode?: Maybe<Scalars['Int']['output']>;
};

export type UserPurchase = {
  __typename?: 'UserPurchase';
  amount?: Maybe<Scalars['Float']['output']>;
  clientId?: Maybe<Scalars['Int']['output']>;
  discount?: Maybe<Scalars['Float']['output']>;
  discountKoef?: Maybe<Scalars['Float']['output']>;
  doctorExec?: Maybe<DoctorMedicalCenter>;
  doctorExecId?: Maybe<Scalars['Int']['output']>;
  doctorNurse?: Maybe<DoctorMedicalCenter>;
  doctorNurseId?: Maybe<Scalars['Int']['output']>;
  id: Scalars['Int']['output'];
  paymentDate?: Maybe<Scalars['DateTime']['output']>;
  policy?: Maybe<Policy>;
  policyId?: Maybe<Scalars['Int']['output']>;
  price?: Maybe<Scalars['Float']['output']>;
  service?: Maybe<Service>;
  serviceId: Scalars['Int']['output'];
  serviceQuantity?: Maybe<Scalars['Int']['output']>;
  shifr?: Maybe<Shifr>;
  shifrId?: Maybe<Scalars['Int']['output']>;
  user?: Maybe<User>;
  userId: Scalars['Int']['output'];
  userPaymentId?: Maybe<Scalars['Int']['output']>;
};

export type UserPurchaseIn = {
  amount?: InputMaybe<Scalars['Float']['input']>;
  clientId?: InputMaybe<Scalars['Int']['input']>;
  discount?: InputMaybe<Scalars['Float']['input']>;
  discountKoef?: InputMaybe<Scalars['Float']['input']>;
  doctorExecId?: InputMaybe<Scalars['Int']['input']>;
  doctorNurseId?: InputMaybe<Scalars['Int']['input']>;
  paymentDate?: InputMaybe<Scalars['DateTime']['input']>;
  policyId?: InputMaybe<Scalars['Int']['input']>;
  price?: InputMaybe<Scalars['Float']['input']>;
  serviceId?: InputMaybe<Scalars['Int']['input']>;
  serviceQuantity?: InputMaybe<Scalars['Int']['input']>;
  shifrId?: InputMaybe<Scalars['Int']['input']>;
  userId?: InputMaybe<Scalars['Int']['input']>;
  userPaymentId?: InputMaybe<Scalars['Int']['input']>;
};

export type UserPurchaseInMut = {
  serviceId?: InputMaybe<Scalars['Int']['input']>;
  serviceQuantity?: InputMaybe<Scalars['Int']['input']>;
};

export type UserPurchaseInput = {
  amount?: InputMaybe<Scalars['Float']['input']>;
  clientId?: InputMaybe<Scalars['Int']['input']>;
  discount?: InputMaybe<Scalars['Float']['input']>;
  discountKoef?: InputMaybe<Scalars['Float']['input']>;
  doctorExec?: InputMaybe<DoctorMedicalCenterIn>;
  doctorExecId?: InputMaybe<Scalars['Int']['input']>;
  doctorNurse?: InputMaybe<DoctorMedicalCenterIn>;
  doctorNurseId?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  paymentDate?: InputMaybe<Scalars['DateTime']['input']>;
  policy?: InputMaybe<PolicyIn>;
  policyId?: InputMaybe<Scalars['Int']['input']>;
  price?: InputMaybe<Scalars['Float']['input']>;
  service?: InputMaybe<ServiceIn>;
  serviceId?: InputMaybe<Scalars['Int']['input']>;
  serviceQuantity?: InputMaybe<Scalars['Int']['input']>;
  shifr?: InputMaybe<ShifrIn>;
  shifrId?: InputMaybe<Scalars['Int']['input']>;
  user?: InputMaybe<UserIn>;
  userId?: InputMaybe<Scalars['Int']['input']>;
  userPaymentId?: InputMaybe<Scalars['Int']['input']>;
};

export type UserPurchaseResult = {
  __typename?: 'UserPurchaseResult';
  data?: Maybe<Array<UserPurchase>>;
  details?: Maybe<Scalars['String']['output']>;
  statusCode?: Maybe<Scalars['Int']['output']>;
};

export type UserPurchaseReturn = {
  __typename?: 'UserPurchaseReturn';
  clientId?: Maybe<Scalars['Int']['output']>;
  id: Scalars['Int']['output'];
  quantity?: Maybe<Scalars['Int']['output']>;
  sum: Scalars['Float']['output'];
  sumAvance?: Maybe<Scalars['Float']['output']>;
  sumCard?: Maybe<Scalars['Float']['output']>;
  sumSbp?: Maybe<Scalars['Float']['output']>;
  userPayments?: Maybe<UserPayment>;
  userPaymentsId: Scalars['Int']['output'];
  userPurchase?: Maybe<UserPurchase>;
  userPurchaseId: Scalars['Int']['output'];
};

export type UserPurchaseReturnInput = {
  clientId?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  quantity?: InputMaybe<Scalars['Int']['input']>;
  sum?: InputMaybe<Scalars['Float']['input']>;
  sumAvance?: InputMaybe<Scalars['Float']['input']>;
  sumCard?: InputMaybe<Scalars['Float']['input']>;
  sumSbp?: InputMaybe<Scalars['Float']['input']>;
  userPayments?: InputMaybe<UserPaymentIn>;
  userPaymentsId?: InputMaybe<Scalars['Int']['input']>;
  userPurchase?: InputMaybe<UserPurchaseIn>;
  userPurchaseId?: InputMaybe<Scalars['Int']['input']>;
};

export type UserPurchaseReturnInputAdm = {
  clientId?: InputMaybe<Scalars['Int']['input']>;
  quantity?: InputMaybe<Scalars['Int']['input']>;
  sum?: InputMaybe<Scalars['Float']['input']>;
  sumAvance?: InputMaybe<Scalars['Float']['input']>;
  sumCard?: InputMaybe<Scalars['Float']['input']>;
  sumSbp?: InputMaybe<Scalars['Float']['input']>;
  userPaymentsId?: InputMaybe<Scalars['Int']['input']>;
  userPurchaseId?: InputMaybe<Scalars['Int']['input']>;
};

export type UserPurchaseReturnResult = {
  __typename?: 'UserPurchaseReturnResult';
  data?: Maybe<Array<UserPurchaseReturn>>;
  details?: Maybe<Scalars['String']['output']>;
  statusCode?: Maybe<Scalars['Int']['output']>;
};

export type UserServiceCart = {
  __typename?: 'UserServiceCart';
  accessTicket?: Maybe<AccessTicket>;
  accessTicketId?: Maybe<Scalars['Int']['output']>;
  citoStatus?: Maybe<Scalars['Boolean']['output']>;
  clientId?: Maybe<Scalars['Int']['output']>;
  complexService?: Maybe<ComplexService>;
  complexServiceId?: Maybe<Scalars['Int']['output']>;
  complexServiceStatus?: Maybe<Scalars['Int']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  discount?: Maybe<Scalars['Float']['output']>;
  discountCoefficient?: Maybe<Scalars['Float']['output']>;
  doctor?: Maybe<DoctorMedicalCenter>;
  doctorExec?: Maybe<DoctorMedicalCenter>;
  doctorExecId?: Maybe<Scalars['Int']['output']>;
  doctorId?: Maybe<Scalars['Int']['output']>;
  doctorNurse?: Maybe<DoctorMedicalCenter>;
  doctorNurseId?: Maybe<Scalars['Int']['output']>;
  doctorParamedic?: Maybe<DoctorMedicalCenter>;
  doctorParamedicId?: Maybe<Scalars['Int']['output']>;
  doctorSend?: Maybe<DoctorMedicalCenter>;
  doctorSendId?: Maybe<Scalars['Int']['output']>;
  endDate?: Maybe<Scalars['DateTime']['output']>;
  id: Scalars['Int']['output'];
  medicalCenter?: Maybe<MedicalCenter>;
  medicalCenterId: Scalars['Int']['output'];
  policy?: Maybe<Policy>;
  policyId?: Maybe<Scalars['Int']['output']>;
  quantity?: Maybe<Scalars['Int']['output']>;
  refuseDate?: Maybe<Scalars['DateTime']['output']>;
  refuseReason?: Maybe<RefuseReason>;
  refuseReasonId?: Maybe<Scalars['Int']['output']>;
  service?: Maybe<Service>;
  serviceId: Scalars['Int']['output'];
  serviceStatus?: Maybe<Scalars['Int']['output']>;
  shifr?: Maybe<Shifr>;
  shifrId?: Maybe<Scalars['Int']['output']>;
  stacSatus?: Maybe<Scalars['Boolean']['output']>;
  startDate?: Maybe<Scalars['DateTime']['output']>;
  user?: Maybe<User>;
  userId: Scalars['Int']['output'];
  userPurchase?: Maybe<UserPurchase>;
  userPurchaseId?: Maybe<Scalars['Int']['output']>;
};

export type UserServiceCartIn = {
  accessTicketId?: InputMaybe<Scalars['Int']['input']>;
  citoStatus?: InputMaybe<Scalars['Boolean']['input']>;
  clientId?: InputMaybe<Scalars['Int']['input']>;
  complexServiceId?: InputMaybe<Scalars['Int']['input']>;
  complexServiceStatus?: InputMaybe<Scalars['Int']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  discount?: InputMaybe<Scalars['Float']['input']>;
  discountCoefficient?: InputMaybe<Scalars['Float']['input']>;
  doctorExecId?: InputMaybe<Scalars['Int']['input']>;
  doctorId?: InputMaybe<Scalars['Int']['input']>;
  doctorNurseId?: InputMaybe<Scalars['Int']['input']>;
  doctorParamedicId?: InputMaybe<Scalars['Int']['input']>;
  doctorSendId?: InputMaybe<Scalars['Int']['input']>;
  endDate?: InputMaybe<Scalars['Date']['input']>;
  medicalCenterId?: InputMaybe<Scalars['Int']['input']>;
  policyId?: InputMaybe<Scalars['Int']['input']>;
  quantity?: InputMaybe<Scalars['Int']['input']>;
  refuseDate?: InputMaybe<Scalars['Date']['input']>;
  refuseReasonId?: InputMaybe<Scalars['Int']['input']>;
  serviceId?: InputMaybe<Scalars['Int']['input']>;
  serviceStatus?: InputMaybe<Scalars['Int']['input']>;
  shifrId?: InputMaybe<Scalars['Int']['input']>;
  stacSatus?: InputMaybe<Scalars['Boolean']['input']>;
  startDate?: InputMaybe<Scalars['Date']['input']>;
  userId?: InputMaybe<Scalars['Int']['input']>;
  userPurchaseId?: InputMaybe<Scalars['Int']['input']>;
};

export type UserServiceCartInput = {
  accessTicket?: InputMaybe<AccessTicketIn>;
  accessTicketId?: InputMaybe<Scalars['Int']['input']>;
  citoStatus?: InputMaybe<Scalars['Boolean']['input']>;
  clientId?: InputMaybe<Scalars['Int']['input']>;
  complexService?: InputMaybe<ComplexServiceIn>;
  complexServiceId?: InputMaybe<Scalars['Int']['input']>;
  complexServiceStatus?: InputMaybe<Scalars['Int']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  discount?: InputMaybe<Scalars['Float']['input']>;
  discountCoefficient?: InputMaybe<Scalars['Float']['input']>;
  doctor?: InputMaybe<DoctorMedicalCenterIn>;
  doctorExe?: InputMaybe<DoctorMedicalCenterIn>;
  doctorExecId?: InputMaybe<Scalars['Int']['input']>;
  doctorId?: InputMaybe<Scalars['Int']['input']>;
  doctorNurse?: InputMaybe<DoctorMedicalCenterIn>;
  doctorNurseId?: InputMaybe<Scalars['Int']['input']>;
  doctorParamedic?: InputMaybe<DoctorMedicalCenterIn>;
  doctorParamedicId?: InputMaybe<Scalars['Int']['input']>;
  doctorSend?: InputMaybe<DoctorMedicalCenterIn>;
  doctorSendId?: InputMaybe<Scalars['Int']['input']>;
  endDate?: InputMaybe<Scalars['Date']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  medicalCenter?: InputMaybe<MedicalCenterIn>;
  medicalCenterId?: InputMaybe<Scalars['Int']['input']>;
  policy?: InputMaybe<PolicyIn>;
  policyId?: InputMaybe<Scalars['Int']['input']>;
  quantity?: InputMaybe<Scalars['Int']['input']>;
  refuseDate?: InputMaybe<Scalars['Date']['input']>;
  refuseReason?: InputMaybe<RefuseReasonIn>;
  refuseReasonId?: InputMaybe<Scalars['Int']['input']>;
  service?: InputMaybe<ServiceIn>;
  serviceId?: InputMaybe<Scalars['Int']['input']>;
  serviceStatus?: InputMaybe<Scalars['Int']['input']>;
  shifr?: InputMaybe<ShifrIn>;
  shifrId?: InputMaybe<Scalars['Int']['input']>;
  stacSatus?: InputMaybe<Scalars['Boolean']['input']>;
  startDate?: InputMaybe<Scalars['Date']['input']>;
  user?: InputMaybe<UserIn>;
  userId?: InputMaybe<Scalars['Int']['input']>;
  userPurchase?: InputMaybe<UserPurchaseIn>;
  userPurchaseId?: InputMaybe<Scalars['Int']['input']>;
};

export type UserServiceCartInputAdm = {
  accessTicketId?: InputMaybe<Scalars['Int']['input']>;
  citoStatus?: InputMaybe<Scalars['Boolean']['input']>;
  clientId?: InputMaybe<Scalars['Int']['input']>;
  complexServiceId?: InputMaybe<Scalars['Int']['input']>;
  complexServiceStatus?: InputMaybe<Scalars['Int']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  discount?: InputMaybe<Scalars['Float']['input']>;
  discountCoefficient?: InputMaybe<Scalars['Float']['input']>;
  doctorExecId?: InputMaybe<Scalars['Int']['input']>;
  doctorId?: InputMaybe<Scalars['Int']['input']>;
  doctorNurseId?: InputMaybe<Scalars['Int']['input']>;
  doctorParamedicId?: InputMaybe<Scalars['Int']['input']>;
  doctorSendId?: InputMaybe<Scalars['Int']['input']>;
  endDate?: InputMaybe<Scalars['Date']['input']>;
  medicalCenterId?: InputMaybe<Scalars['Int']['input']>;
  policyId?: InputMaybe<Scalars['Int']['input']>;
  quantity?: InputMaybe<Scalars['Int']['input']>;
  refuseDate?: InputMaybe<Scalars['Date']['input']>;
  refuseReasonId?: InputMaybe<Scalars['Int']['input']>;
  serviceId?: InputMaybe<Scalars['Int']['input']>;
  serviceStatus?: InputMaybe<Scalars['Int']['input']>;
  shifrId?: InputMaybe<Scalars['Int']['input']>;
  stacSatus?: InputMaybe<Scalars['Boolean']['input']>;
  startDate?: InputMaybe<Scalars['Date']['input']>;
  userId?: InputMaybe<Scalars['Int']['input']>;
  userPurchaseId?: InputMaybe<Scalars['Int']['input']>;
};

export type UserServiceCartResult = {
  __typename?: 'UserServiceCartResult';
  data?: Maybe<Array<UserServiceCart>>;
  details?: Maybe<Scalars['String']['output']>;
  statusCode?: Maybe<Scalars['Int']['output']>;
};

export type UserServicePlan = {
  __typename?: 'UserServicePlan';
  clientId?: Maybe<Scalars['Int']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  doctorSend?: Maybe<DoctorMedicalCenter>;
  doctorSendId?: Maybe<Scalars['Int']['output']>;
  id: Scalars['Int']['output'];
  medicalCenter?: Maybe<MedicalCenter>;
  medicalCenterId: Scalars['Int']['output'];
  planDate: Scalars['DateTime']['output'];
  policy?: Maybe<Policy>;
  policyId?: Maybe<Scalars['Int']['output']>;
  quantity?: Maybe<Scalars['Int']['output']>;
  refuseDate?: Maybe<Scalars['DateTime']['output']>;
  refuseReason?: Maybe<RefuseReason>;
  refuseReasonId?: Maybe<Scalars['Int']['output']>;
  service?: Maybe<Service>;
  serviceId: Scalars['Int']['output'];
  shifr?: Maybe<Shifr>;
  shifrId?: Maybe<Scalars['Int']['output']>;
  status?: Maybe<Scalars['Int']['output']>;
  user?: Maybe<User>;
  userId: Scalars['Int']['output'];
  userServiceCartId?: Maybe<Scalars['Int']['output']>;
};

export type UserServicePlanInput = {
  clientId?: InputMaybe<Scalars['Int']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  doctorSend?: InputMaybe<DoctorMedicalCenterIn>;
  doctorSendId?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  medicalCenter?: InputMaybe<MedicalCenterIn>;
  medicalCenterId?: InputMaybe<Scalars['Int']['input']>;
  planDate?: InputMaybe<Scalars['Date']['input']>;
  policy?: InputMaybe<PolicyIn>;
  policyId?: InputMaybe<Scalars['Int']['input']>;
  quantity?: InputMaybe<Scalars['Int']['input']>;
  refuseDate?: InputMaybe<Scalars['Date']['input']>;
  refuseReason?: InputMaybe<RefuseReasonIn>;
  refuseReasonId?: InputMaybe<Scalars['Int']['input']>;
  service?: InputMaybe<ServiceIn>;
  serviceId?: InputMaybe<Scalars['Int']['input']>;
  shifr?: InputMaybe<ShifrIn>;
  shifrId?: InputMaybe<Scalars['Int']['input']>;
  status?: InputMaybe<Scalars['Int']['input']>;
  user?: InputMaybe<UserIn>;
  userId?: InputMaybe<Scalars['Int']['input']>;
  userServiceCart?: InputMaybe<UserServiceCartIn>;
  userServiceCartId?: InputMaybe<Scalars['Int']['input']>;
};

export type UserServicePlanInputAdm = {
  clientId?: InputMaybe<Scalars['Int']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  doctorSendId?: InputMaybe<Scalars['Int']['input']>;
  medicalCenterId?: InputMaybe<Scalars['Int']['input']>;
  planDate?: InputMaybe<Scalars['Date']['input']>;
  policyId?: InputMaybe<Scalars['Int']['input']>;
  quantity?: InputMaybe<Scalars['Int']['input']>;
  refuseDate?: InputMaybe<Scalars['Date']['input']>;
  refuseReasonId?: InputMaybe<Scalars['Int']['input']>;
  serviceId?: InputMaybe<Scalars['Int']['input']>;
  shifrId?: InputMaybe<Scalars['Int']['input']>;
  status?: InputMaybe<Scalars['Int']['input']>;
  userId?: InputMaybe<Scalars['Int']['input']>;
  userServiceCartId?: InputMaybe<Scalars['Int']['input']>;
};

export type UserServicePlanResult = {
  __typename?: 'UserServicePlanResult';
  data?: Maybe<Array<UserServicePlan>>;
  details?: Maybe<Scalars['String']['output']>;
  statusCode?: Maybe<Scalars['Int']['output']>;
};

export type UserSubscribe = {
  __typename?: 'UserSubscribe';
  clientId?: Maybe<Scalars['Int']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['Int']['output'];
  isActive?: Maybe<Scalars['Boolean']['output']>;
  name: Scalars['String']['output'];
  policy?: Maybe<Policy>;
  policyId: Scalars['Int']['output'];
  service?: Maybe<Service>;
  serviceId: Scalars['Int']['output'];
};

export type UserSubscribeIn = {
  clientId?: InputMaybe<Scalars['Int']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  policyId?: InputMaybe<Scalars['Int']['input']>;
  serviceId?: InputMaybe<Scalars['Int']['input']>;
};

export type UserSubscribeInput = {
  clientId?: InputMaybe<Scalars['Int']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  policy?: InputMaybe<PolicyIn>;
  policyId?: InputMaybe<Scalars['Int']['input']>;
  service?: InputMaybe<ServiceIn>;
  serviceId?: InputMaybe<Scalars['Int']['input']>;
};

export type UserSubscribeInputAdm = {
  clientId?: InputMaybe<Scalars['Int']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  policyId?: InputMaybe<Scalars['Int']['input']>;
  serviceId?: InputMaybe<Scalars['Int']['input']>;
};

export type UserSubscribeResult = {
  __typename?: 'UserSubscribeResult';
  data?: Maybe<Array<UserSubscribe>>;
  details?: Maybe<Scalars['String']['output']>;
  statusCode?: Maybe<Scalars['Int']['output']>;
};

export type GetUserDataQueryVariables = Exact<{ [key: string]: never; }>;


export type GetUserDataQuery = { __typename?: 'Query', getUserData: { __typename?: 'UserData', statusCode?: number | null, details?: string | null, data?: { __typename?: 'User', id: number, clientId?: number | null, firstName?: string | null, lastName?: string | null, patronymic?: string | null, birthDate?: any | null, gender?: string | null, email?: string | null, phoneNumber: string, additionalPhoneNumber?: string | null, docType?: number | null, docSeries?: string | null, docNumber?: string | null, docGivingDepName?: string | null, docGivingDepCode?: string | null, docDate?: any | null, docRegAddress?: string | null, snils?: string | null, inn?: string | null, cityId?: number | null, addressFull?: string | null, addressMisKladrId?: number | null, longitude?: number | null, latitude?: number | null, zoneNumber?: number | null, defaultMedicalCenterId?: number | null, loginPhoneNumber?: string | null, isVerified?: boolean | null, infoWayId?: number | null, notificationTime?: any | null, prefNotificationContactId?: number | null, isActive?: boolean | null, created?: any | null, city?: { __typename?: 'City', id: number, clientId?: number | null, name: string, isActive?: boolean | null } | null, defaultMedicalCenter?: { __typename?: 'MedicalCenter', id: number, clientId?: number | null, cityId: number, name: string, address: string, longitude?: number | null, latitude?: number | null, description?: string | null, inn: string, bankBic: string, settlementAccount: string, correspondentAccount: string, kpp: string, isActive?: boolean | null, logo?: string | null, websiteUrl?: string | null, phoneFax: string, dmsPhone?: string | null, workTime: string, collectionTestsTime?: string | null, vaccinationTime?: string | null, city?: { __typename?: 'City', id: number, clientId?: number | null, name: string, isActive?: boolean | null } | null } | null, infoWay?: { __typename?: 'InformationWay', id: number, clientId?: number | null, name: string, description?: string | null, isActive?: boolean | null } | null, prefNotificationContact?: { __typename?: 'User', id: number, clientId?: number | null, firstName?: string | null, lastName?: string | null, patronymic?: string | null, birthDate?: any | null, gender?: string | null, email?: string | null, phoneNumber: string, additionalPhoneNumber?: string | null, docType?: number | null, docSeries?: string | null, docNumber?: string | null, docGivingDepName?: string | null, docGivingDepCode?: string | null, docDate?: any | null, docRegAddress?: string | null, snils?: string | null, inn?: string | null, cityId?: number | null, addressFull?: string | null, addressMisKladrId?: number | null, longitude?: number | null, latitude?: number | null, zoneNumber?: number | null, defaultMedicalCenterId?: number | null, loginPhoneNumber?: string | null, isVerified?: boolean | null, infoWayId?: number | null, notificationTime?: any | null, prefNotificationContactId?: number | null, isActive?: boolean | null, created?: any | null, city?: { __typename?: 'City', id: number, clientId?: number | null, name: string, isActive?: boolean | null } | null, defaultMedicalCenter?: { __typename?: 'MedicalCenter', id: number, clientId?: number | null, cityId: number, name: string, address: string, longitude?: number | null, latitude?: number | null, description?: string | null, inn: string, bankBic: string, settlementAccount: string, correspondentAccount: string, kpp: string, isActive?: boolean | null, logo?: string | null, websiteUrl?: string | null, phoneFax: string, dmsPhone?: string | null, workTime: string, collectionTestsTime?: string | null, vaccinationTime?: string | null } | null, infoWay?: { __typename?: 'InformationWay', id: number, clientId?: number | null, name: string, description?: string | null, isActive?: boolean | null } | null, prefNotificationContact?: { __typename?: 'User', id: number, clientId?: number | null, firstName?: string | null, lastName?: string | null, patronymic?: string | null, birthDate?: any | null, gender?: string | null, email?: string | null, phoneNumber: string, additionalPhoneNumber?: string | null, docType?: number | null, docSeries?: string | null, docNumber?: string | null, docGivingDepName?: string | null, docGivingDepCode?: string | null, docDate?: any | null, docRegAddress?: string | null, snils?: string | null, inn?: string | null, cityId?: number | null, addressFull?: string | null, addressMisKladrId?: number | null, longitude?: number | null, latitude?: number | null, zoneNumber?: number | null, defaultMedicalCenterId?: number | null, loginPhoneNumber?: string | null, isVerified?: boolean | null, infoWayId?: number | null, notificationTime?: any | null, prefNotificationContactId?: number | null, isActive?: boolean | null, created?: any | null, addressMisKladr?: { __typename?: 'AddressMisKladrTable', id: number, clientId?: number | null, clientUserId?: number | null, tag?: number | null, luid?: number | null, region?: string | null, regionCode?: string | null, area?: string | null, areaCode?: string | null, city?: string | null, cityCode?: string | null, town?: string | null, townCode?: string | null, street?: string | null, streetCode?: string | null, house?: string | null, corp?: string | null, flat?: string | null, note?: string | null, status?: number | null, livesLuId?: number | null, houseCode?: string | null } | null } | null } | null, addressMisKladr?: { __typename?: 'AddressMisKladrTable', id: number, clientId?: number | null, clientUserId?: number | null, tag?: number | null, luid?: number | null, region?: string | null, regionCode?: string | null, area?: string | null, areaCode?: string | null, city?: string | null, cityCode?: string | null, town?: string | null, townCode?: string | null, street?: string | null, streetCode?: string | null, house?: string | null, corp?: string | null, flat?: string | null, note?: string | null, status?: number | null, livesLuId?: number | null, houseCode?: string | null } | null } | null } };

export type LoginFlashCallCodeQueryVariables = Exact<{
  flashCallCode: FlashCallCode;
}>;


export type LoginFlashCallCodeQuery = { __typename?: 'Query', loginFlashCallCode: { __typename?: 'LoginResult', statusCode?: number | null, details?: string | null, data?: { __typename?: 'Token', token: string } | null } };

export type ChangeLoginPhoneByPhoneMutationVariables = Exact<{
  oldPhoneNumber: Scalars['String']['input'];
  newPhoneNumber: Scalars['String']['input'];
}>;


export type ChangeLoginPhoneByPhoneMutation = { __typename?: 'Mutation', changeLoginPhoneByPhone: { __typename?: 'RequestResult', data?: string | null, statusCode?: number | null, details?: string | null } };

export type PatientRegistrationMutationVariables = Exact<{
  patient: PatientRegistration;
}>;


export type PatientRegistrationMutation = { __typename?: 'Mutation', patientRegistration: { __typename?: 'RequestResult', statusCode?: number | null, details?: string | null, data?: string | null } };

export type RegistrationFlashCallCodeMutationVariables = Exact<{
  flashCallCode: FlashCallCode;
}>;


export type RegistrationFlashCallCodeMutation = { __typename?: 'Mutation', registrationFlashCallCode: { __typename?: 'LoginResult', details?: string | null, statusCode?: number | null, data?: { __typename?: 'Token', token: string } | null } };

export type PatienLoginByPasswordQueryVariables = Exact<{
  loginPhoneNumber: Scalars['String']['input'];
  password: Scalars['String']['input'];
}>;


export type PatienLoginByPasswordQuery = { __typename?: 'Query', patienLoginByPassword: { __typename?: 'LoginResult', statusCode?: number | null, details?: string | null, data?: { __typename?: 'Token', token: string } | null } };

export type PatientLoginByPhoneQueryVariables = Exact<{
  loginPhoneNumber: Scalars['String']['input'];
}>;


export type PatientLoginByPhoneQuery = { __typename?: 'Query', patientLoginByPhone: { __typename?: 'LoginResult', statusCode?: number | null, details?: string | null, data?: { __typename?: 'Token', token: string } | null } };

export type GetUserAdminInfoQueryVariables = Exact<{
  filteringAttrs?: InputMaybe<UserAdminInputAdm>;
  orderingAttrs?: InputMaybe<UserAdminInputAdm>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  descSorting?: InputMaybe<Scalars['Boolean']['input']>;
}>;


export type GetUserAdminInfoQuery = { __typename?: 'Query', getUserAdminInfo: { __typename?: 'UserAdminResult', statusCode?: number | null, details?: string | null, data?: Array<{ __typename?: 'UserAdmin', id: number, clientId?: number | null, userId?: number | null, registrationVisibleFields?: string | null, registrationRequiredFields?: string | null }> | null } };

export type GetCitiesQueryVariables = Exact<{
  filteringAttrs?: InputMaybe<CityInput>;
  orderingAttrs?: InputMaybe<CityInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  descSorting?: InputMaybe<Scalars['Boolean']['input']>;
}>;


export type GetCitiesQuery = { __typename?: 'Query', getCities: { __typename?: 'CityResult', statusCode?: number | null, details?: string | null, data?: Array<{ __typename?: 'City', id: number, clientId?: number | null, name: string, isActive?: boolean | null }> | null } };

export type GetDoctorMedicalCenterQueryVariables = Exact<{
  filteringAttrs?: InputMaybe<DoctorMedicalCenterInput>;
  orderingAttrs?: InputMaybe<DoctorMedicalCenterInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  descSorting?: InputMaybe<Scalars['Boolean']['input']>;
}>;


export type GetDoctorMedicalCenterQuery = { __typename?: 'Query', getDoctorMedicalCenter: { __typename?: 'DoctorMedicalCenterResult', statusCode?: number | null, details?: string | null, data?: Array<{ __typename?: 'DoctorMedicalCenter', id: number, clientId?: number | null, doctorId: number, medicalSpecialityId: number, medicalCenterId: number, medicalPositionId: number, staffTypeId: number, showInLk?: boolean | null, minimalAge: number, maximalAge: number, isActive?: boolean | null, doctor?: { __typename?: 'Doctor', id: number, clientId?: number | null, firstName: string, lastName: string, patronymic?: string | null, birthDate?: any | null, photo?: string | null, doctorCategoryId?: number | null, privatePhone?: string | null, workPhone?: string | null, email?: string | null, commonExperience?: number | null, isActive?: boolean | null, doctorCategory?: { __typename?: 'DoctorCategory', id: number, clientId?: number | null, name: string, description?: string | null, isActive?: boolean | null } | null } | null, medicalSpeciality?: { __typename?: 'MedicalSpeciality', id: number, clientId?: number | null, viewName: string, searchName: string, viewDescription?: string | null, searchDescription?: string | null, isActive?: boolean | null } | null, medicalCenter?: { __typename?: 'MedicalCenter', id: number, clientId?: number | null, cityId: number, name: string, address: string, longitude?: number | null, latitude?: number | null, description?: string | null, inn: string, bankBic: string, settlementAccount: string, correspondentAccount: string, kpp: string, isActive?: boolean | null, logo?: string | null, websiteUrl?: string | null, phoneFax: string, dmsPhone?: string | null, workTime: string, collectionTestsTime?: string | null, vaccinationTime?: string | null, city?: { __typename?: 'City', id: number, clientId?: number | null, name: string, isActive?: boolean | null } | null } | null, medicalPosition?: { __typename?: 'MedicalPosition', id: number, clientId?: number | null, viewName: string, searchName: string, viewDescription?: string | null, searchDescription?: string | null, isActive?: boolean | null } | null, staffType?: { __typename?: 'StaffType', id: number, clientId?: number | null, name: string, description?: string | null, isActive?: boolean | null } | null }> | null } };

export type GetDoctorsQueryVariables = Exact<{
  filteringAttrs?: InputMaybe<DoctorInput>;
  orderingAttrs?: InputMaybe<DoctorInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  descSorting?: InputMaybe<Scalars['Boolean']['input']>;
}>;


export type GetDoctorsQuery = { __typename?: 'Query', getDoctors: { __typename?: 'DoctorResult', statusCode?: number | null, details?: string | null, data?: Array<{ __typename?: 'Doctor', id: number, clientId?: number | null, firstName: string, lastName: string, patronymic?: string | null, birthDate?: any | null, photo?: string | null, doctorCategoryId?: number | null, commonExperience?: number | null, isActive?: boolean | null, doctorCategory?: { __typename?: 'DoctorCategory', id: number, clientId?: number | null, name: string, description?: string | null, isActive?: boolean | null } | null }> | null } };

export type GetDoctorsMspecialitiesQueryVariables = Exact<{
  filteringAttrs?: InputMaybe<DoctorMspecialityInput>;
  orderingAttrs?: InputMaybe<DoctorMspecialityInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  descSorting?: InputMaybe<Scalars['Boolean']['input']>;
}>;


export type GetDoctorsMspecialitiesQuery = { __typename?: 'Query', getDoctorsMspecialities: { __typename?: 'DoctorMspecialityResult', statusCode?: number | null, details?: string | null, data?: Array<{ __typename?: 'DoctorMspeciality', id: number, doctorId: number, mspecialityId: number, isActive?: boolean | null, doctor?: { __typename?: 'Doctor', id: number, clientId?: number | null, firstName: string, lastName: string, patronymic?: string | null, birthDate?: any | null, photo?: string | null, doctorCategoryId?: number | null, privatePhone?: string | null, workPhone?: string | null, email?: string | null, commonExperience?: number | null, isActive?: boolean | null, doctorCategory?: { __typename?: 'DoctorCategory', id: number, clientId?: number | null, name: string, description?: string | null, isActive?: boolean | null } | null } | null, mspeciality?: { __typename?: 'MedicalSpeciality', id: number, clientId?: number | null, viewName: string, searchName: string, viewDescription?: string | null, searchDescription?: string | null, isActive?: boolean | null } | null }> | null } };

export type GetMedicalCentersQueryVariables = Exact<{
  filteringAttrs?: InputMaybe<MedicalCenterInput>;
  orderingAttrs?: InputMaybe<MedicalCenterInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  descSorting?: InputMaybe<Scalars['Boolean']['input']>;
}>;


export type GetMedicalCentersQuery = { __typename?: 'Query', getMedicalCenters: { __typename?: 'MedicalCenterResult', statusCode?: number | null, details?: string | null, data?: Array<{ __typename?: 'MedicalCenter', id: number, clientId?: number | null, cityId: number, name: string, address: string, longitude?: number | null, latitude?: number | null, description?: string | null, inn: string, bankBic: string, settlementAccount: string, correspondentAccount: string, kpp: string, isActive?: boolean | null, logo?: string | null, websiteUrl?: string | null, phoneFax: string, dmsPhone?: string | null, workTime: string, collectionTestsTime?: string | null, vaccinationTime?: string | null, city?: { __typename?: 'City', id: number, clientId?: number | null, name: string, isActive?: boolean | null } | null }> | null } };

export type GetServicesQueryVariables = Exact<{
  filteringAttrs?: InputMaybe<ServiceInput>;
  orderingAttrs?: InputMaybe<ServiceInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  descSorting?: InputMaybe<Scalars['Boolean']['input']>;
}>;


export type GetServicesQuery = { __typename?: 'Query', getServices: { __typename?: 'ServiceResult', statusCode?: number | null, details?: string | null, data?: Array<{ __typename?: 'Service', id: number, clientId?: number | null, serviceTypeId: number, serviceGroupId: number, nameForStaff: string, nameForMz: string, nameForLk: string, fullDescription?: string | null, appliedMethod?: string | null, preparationRules?: string | null, shortDescription?: string | null, comment?: string | null, mzCode?: string | null, executionTime?: number | null, nursesExecutionTime?: number | null, minimalAge?: number | null, maximalAge?: number | null, gender?: string | null, isUrgent?: boolean | null, isForHomeOnly?: boolean | null, selectedServiceNotification?: string | null, isComplexService?: boolean | null, clientServiceCode?: string | null, isActive?: boolean | null, serviceType?: { __typename?: 'ServiceType', id: number, clientId?: number | null, name: string, description?: string | null, isActive?: boolean | null } | null, serviceGroup?: { __typename?: 'ServiceGroup', id: number, clientId?: number | null, name: string, viewName?: string | null, description?: string | null, clientServiceGroupCode?: string | null, levelSortingCode?: number | null, isActive?: boolean | null, path?: Array<string> | null, xmembers?: Array<{ __typename?: 'ServiceGroup', id: number, clientId?: number | null, name: string, viewName?: string | null, description?: string | null, clientServiceGroupCode?: string | null, levelSortingCode?: number | null, isActive?: boolean | null, path?: Array<string> | null, xmembers?: Array<{ __typename?: 'ServiceGroup', id: number, clientId?: number | null, name: string, viewName?: string | null, description?: string | null, clientServiceGroupCode?: string | null, levelSortingCode?: number | null, isActive?: boolean | null, path?: Array<string> | null }> | null }> | null } | null }> | null } };

export type GetServiceGroupQueryVariables = Exact<{
  name?: InputMaybe<Scalars['String']['input']>;
}>;


export type GetServiceGroupQuery = { __typename?: 'Query', getServiceGroup: { __typename?: 'ServiceGroupResult', statusCode?: number | null, details?: string | null, data?: Array<{ __typename?: 'ServiceGroup', id: number, clientId?: number | null, name: string, viewName?: string | null, description?: string | null, clientServiceGroupCode?: string | null, levelSortingCode?: number | null, isActive?: boolean | null, path?: Array<string> | null, xmembers?: Array<{ __typename?: 'ServiceGroup', id: number, clientId?: number | null, name: string, viewName?: string | null, description?: string | null, clientServiceGroupCode?: string | null, levelSortingCode?: number | null, isActive?: boolean | null, path?: Array<string> | null, xmembers?: Array<{ __typename?: 'ServiceGroup', id: number, clientId?: number | null, name: string, viewName?: string | null, description?: string | null, clientServiceGroupCode?: string | null, levelSortingCode?: number | null, isActive?: boolean | null, path?: Array<string> | null, xmembers?: Array<{ __typename?: 'ServiceGroup', id: number, clientId?: number | null, name: string, viewName?: string | null, description?: string | null, clientServiceGroupCode?: string | null, levelSortingCode?: number | null, isActive?: boolean | null, path?: Array<string> | null, xmembers?: Array<{ __typename?: 'ServiceGroup', id: number, clientId?: number | null, name: string, viewName?: string | null, description?: string | null, clientServiceGroupCode?: string | null, levelSortingCode?: number | null, isActive?: boolean | null, path?: Array<string> | null, xmembers?: Array<{ __typename?: 'ServiceGroup', id: number, clientId?: number | null, name: string, viewName?: string | null, description?: string | null, clientServiceGroupCode?: string | null, levelSortingCode?: number | null, isActive?: boolean | null, path?: Array<string> | null, xmembers?: Array<{ __typename?: 'ServiceGroup', id: number, clientId?: number | null, name: string, viewName?: string | null, description?: string | null, clientServiceGroupCode?: string | null, levelSortingCode?: number | null, isActive?: boolean | null, path?: Array<string> | null, xmembers?: Array<{ __typename?: 'ServiceGroup', id: number, clientId?: number | null, name: string, viewName?: string | null, description?: string | null, clientServiceGroupCode?: string | null, levelSortingCode?: number | null, isActive?: boolean | null, path?: Array<string> | null }> | null }> | null }> | null }> | null }> | null }> | null }> | null }> | null } };

export type GetServicesTypesQueryVariables = Exact<{
  filteringAttrs?: InputMaybe<ServiceTypeInput>;
  orderingAttrs?: InputMaybe<ServiceTypeInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  descSorting?: InputMaybe<Scalars['Boolean']['input']>;
}>;


export type GetServicesTypesQuery = { __typename?: 'Query', getServicesTypes: { __typename?: 'ServiceTypeResult', statusCode?: number | null, details?: string | null, data?: Array<{ __typename?: 'ServiceType', id: number, name: string, description?: string | null, isActive?: boolean | null }> | null } };


export const GetUserDataDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getUserData"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getUserData"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"clientId"}},{"kind":"Field","name":{"kind":"Name","value":"firstName"}},{"kind":"Field","name":{"kind":"Name","value":"lastName"}},{"kind":"Field","name":{"kind":"Name","value":"patronymic"}},{"kind":"Field","name":{"kind":"Name","value":"birthDate"}},{"kind":"Field","name":{"kind":"Name","value":"gender"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"phoneNumber"}},{"kind":"Field","name":{"kind":"Name","value":"additionalPhoneNumber"}},{"kind":"Field","name":{"kind":"Name","value":"docType"}},{"kind":"Field","name":{"kind":"Name","value":"docSeries"}},{"kind":"Field","name":{"kind":"Name","value":"docNumber"}},{"kind":"Field","name":{"kind":"Name","value":"docGivingDepName"}},{"kind":"Field","name":{"kind":"Name","value":"docGivingDepCode"}},{"kind":"Field","name":{"kind":"Name","value":"docDate"}},{"kind":"Field","name":{"kind":"Name","value":"docRegAddress"}},{"kind":"Field","name":{"kind":"Name","value":"snils"}},{"kind":"Field","name":{"kind":"Name","value":"inn"}},{"kind":"Field","name":{"kind":"Name","value":"cityId"}},{"kind":"Field","name":{"kind":"Name","value":"addressFull"}},{"kind":"Field","name":{"kind":"Name","value":"addressMisKladrId"}},{"kind":"Field","name":{"kind":"Name","value":"longitude"}},{"kind":"Field","name":{"kind":"Name","value":"latitude"}},{"kind":"Field","name":{"kind":"Name","value":"zoneNumber"}},{"kind":"Field","name":{"kind":"Name","value":"defaultMedicalCenterId"}},{"kind":"Field","name":{"kind":"Name","value":"loginPhoneNumber"}},{"kind":"Field","name":{"kind":"Name","value":"isVerified"}},{"kind":"Field","name":{"kind":"Name","value":"infoWayId"}},{"kind":"Field","name":{"kind":"Name","value":"notificationTime"}},{"kind":"Field","name":{"kind":"Name","value":"prefNotificationContactId"}},{"kind":"Field","name":{"kind":"Name","value":"isActive"}},{"kind":"Field","name":{"kind":"Name","value":"created"}},{"kind":"Field","name":{"kind":"Name","value":"city"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"clientId"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"isActive"}}]}},{"kind":"Field","name":{"kind":"Name","value":"defaultMedicalCenter"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"clientId"}},{"kind":"Field","name":{"kind":"Name","value":"cityId"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"address"}},{"kind":"Field","name":{"kind":"Name","value":"longitude"}},{"kind":"Field","name":{"kind":"Name","value":"latitude"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"inn"}},{"kind":"Field","name":{"kind":"Name","value":"bankBic"}},{"kind":"Field","name":{"kind":"Name","value":"settlementAccount"}},{"kind":"Field","name":{"kind":"Name","value":"correspondentAccount"}},{"kind":"Field","name":{"kind":"Name","value":"kpp"}},{"kind":"Field","name":{"kind":"Name","value":"isActive"}},{"kind":"Field","name":{"kind":"Name","value":"logo"}},{"kind":"Field","name":{"kind":"Name","value":"websiteUrl"}},{"kind":"Field","name":{"kind":"Name","value":"phoneFax"}},{"kind":"Field","name":{"kind":"Name","value":"dmsPhone"}},{"kind":"Field","name":{"kind":"Name","value":"workTime"}},{"kind":"Field","name":{"kind":"Name","value":"collectionTestsTime"}},{"kind":"Field","name":{"kind":"Name","value":"vaccinationTime"}},{"kind":"Field","name":{"kind":"Name","value":"city"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"clientId"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"isActive"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"infoWay"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"clientId"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"isActive"}}]}},{"kind":"Field","name":{"kind":"Name","value":"prefNotificationContact"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"clientId"}},{"kind":"Field","name":{"kind":"Name","value":"firstName"}},{"kind":"Field","name":{"kind":"Name","value":"lastName"}},{"kind":"Field","name":{"kind":"Name","value":"patronymic"}},{"kind":"Field","name":{"kind":"Name","value":"birthDate"}},{"kind":"Field","name":{"kind":"Name","value":"gender"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"phoneNumber"}},{"kind":"Field","name":{"kind":"Name","value":"additionalPhoneNumber"}},{"kind":"Field","name":{"kind":"Name","value":"docType"}},{"kind":"Field","name":{"kind":"Name","value":"docSeries"}},{"kind":"Field","name":{"kind":"Name","value":"docNumber"}},{"kind":"Field","name":{"kind":"Name","value":"docGivingDepName"}},{"kind":"Field","name":{"kind":"Name","value":"docGivingDepCode"}},{"kind":"Field","name":{"kind":"Name","value":"docDate"}},{"kind":"Field","name":{"kind":"Name","value":"docRegAddress"}},{"kind":"Field","name":{"kind":"Name","value":"snils"}},{"kind":"Field","name":{"kind":"Name","value":"inn"}},{"kind":"Field","name":{"kind":"Name","value":"cityId"}},{"kind":"Field","name":{"kind":"Name","value":"addressFull"}},{"kind":"Field","name":{"kind":"Name","value":"addressMisKladrId"}},{"kind":"Field","name":{"kind":"Name","value":"longitude"}},{"kind":"Field","name":{"kind":"Name","value":"latitude"}},{"kind":"Field","name":{"kind":"Name","value":"zoneNumber"}},{"kind":"Field","name":{"kind":"Name","value":"defaultMedicalCenterId"}},{"kind":"Field","name":{"kind":"Name","value":"loginPhoneNumber"}},{"kind":"Field","name":{"kind":"Name","value":"isVerified"}},{"kind":"Field","name":{"kind":"Name","value":"infoWayId"}},{"kind":"Field","name":{"kind":"Name","value":"notificationTime"}},{"kind":"Field","name":{"kind":"Name","value":"prefNotificationContactId"}},{"kind":"Field","name":{"kind":"Name","value":"isActive"}},{"kind":"Field","name":{"kind":"Name","value":"created"}},{"kind":"Field","name":{"kind":"Name","value":"city"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"clientId"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"isActive"}}]}},{"kind":"Field","name":{"kind":"Name","value":"defaultMedicalCenter"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"clientId"}},{"kind":"Field","name":{"kind":"Name","value":"cityId"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"address"}},{"kind":"Field","name":{"kind":"Name","value":"longitude"}},{"kind":"Field","name":{"kind":"Name","value":"latitude"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"inn"}},{"kind":"Field","name":{"kind":"Name","value":"bankBic"}},{"kind":"Field","name":{"kind":"Name","value":"settlementAccount"}},{"kind":"Field","name":{"kind":"Name","value":"correspondentAccount"}},{"kind":"Field","name":{"kind":"Name","value":"kpp"}},{"kind":"Field","name":{"kind":"Name","value":"isActive"}},{"kind":"Field","name":{"kind":"Name","value":"logo"}},{"kind":"Field","name":{"kind":"Name","value":"websiteUrl"}},{"kind":"Field","name":{"kind":"Name","value":"phoneFax"}},{"kind":"Field","name":{"kind":"Name","value":"dmsPhone"}},{"kind":"Field","name":{"kind":"Name","value":"workTime"}},{"kind":"Field","name":{"kind":"Name","value":"collectionTestsTime"}},{"kind":"Field","name":{"kind":"Name","value":"vaccinationTime"}}]}},{"kind":"Field","name":{"kind":"Name","value":"infoWay"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"clientId"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"isActive"}}]}},{"kind":"Field","name":{"kind":"Name","value":"prefNotificationContact"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"clientId"}},{"kind":"Field","name":{"kind":"Name","value":"firstName"}},{"kind":"Field","name":{"kind":"Name","value":"lastName"}},{"kind":"Field","name":{"kind":"Name","value":"patronymic"}},{"kind":"Field","name":{"kind":"Name","value":"birthDate"}},{"kind":"Field","name":{"kind":"Name","value":"gender"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"phoneNumber"}},{"kind":"Field","name":{"kind":"Name","value":"additionalPhoneNumber"}},{"kind":"Field","name":{"kind":"Name","value":"docType"}},{"kind":"Field","name":{"kind":"Name","value":"docSeries"}},{"kind":"Field","name":{"kind":"Name","value":"docNumber"}},{"kind":"Field","name":{"kind":"Name","value":"docGivingDepName"}},{"kind":"Field","name":{"kind":"Name","value":"docGivingDepCode"}},{"kind":"Field","name":{"kind":"Name","value":"docDate"}},{"kind":"Field","name":{"kind":"Name","value":"docRegAddress"}},{"kind":"Field","name":{"kind":"Name","value":"snils"}},{"kind":"Field","name":{"kind":"Name","value":"inn"}},{"kind":"Field","name":{"kind":"Name","value":"cityId"}},{"kind":"Field","name":{"kind":"Name","value":"addressFull"}},{"kind":"Field","name":{"kind":"Name","value":"addressMisKladrId"}},{"kind":"Field","name":{"kind":"Name","value":"longitude"}},{"kind":"Field","name":{"kind":"Name","value":"latitude"}},{"kind":"Field","name":{"kind":"Name","value":"zoneNumber"}},{"kind":"Field","name":{"kind":"Name","value":"defaultMedicalCenterId"}},{"kind":"Field","name":{"kind":"Name","value":"loginPhoneNumber"}},{"kind":"Field","name":{"kind":"Name","value":"isVerified"}},{"kind":"Field","name":{"kind":"Name","value":"infoWayId"}},{"kind":"Field","name":{"kind":"Name","value":"notificationTime"}},{"kind":"Field","name":{"kind":"Name","value":"prefNotificationContactId"}},{"kind":"Field","name":{"kind":"Name","value":"isActive"}},{"kind":"Field","name":{"kind":"Name","value":"created"}},{"kind":"Field","name":{"kind":"Name","value":"addressMisKladr"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"clientId"}},{"kind":"Field","name":{"kind":"Name","value":"clientUserId"}},{"kind":"Field","name":{"kind":"Name","value":"tag"}},{"kind":"Field","name":{"kind":"Name","value":"luid"}},{"kind":"Field","name":{"kind":"Name","value":"region"}},{"kind":"Field","name":{"kind":"Name","value":"regionCode"}},{"kind":"Field","name":{"kind":"Name","value":"area"}},{"kind":"Field","name":{"kind":"Name","value":"areaCode"}},{"kind":"Field","name":{"kind":"Name","value":"city"}},{"kind":"Field","name":{"kind":"Name","value":"cityCode"}},{"kind":"Field","name":{"kind":"Name","value":"town"}},{"kind":"Field","name":{"kind":"Name","value":"townCode"}},{"kind":"Field","name":{"kind":"Name","value":"street"}},{"kind":"Field","name":{"kind":"Name","value":"streetCode"}},{"kind":"Field","name":{"kind":"Name","value":"house"}},{"kind":"Field","name":{"kind":"Name","value":"corp"}},{"kind":"Field","name":{"kind":"Name","value":"flat"}},{"kind":"Field","name":{"kind":"Name","value":"note"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"livesLuId"}},{"kind":"Field","name":{"kind":"Name","value":"houseCode"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"addressMisKladr"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"clientId"}},{"kind":"Field","name":{"kind":"Name","value":"clientUserId"}},{"kind":"Field","name":{"kind":"Name","value":"tag"}},{"kind":"Field","name":{"kind":"Name","value":"luid"}},{"kind":"Field","name":{"kind":"Name","value":"region"}},{"kind":"Field","name":{"kind":"Name","value":"regionCode"}},{"kind":"Field","name":{"kind":"Name","value":"area"}},{"kind":"Field","name":{"kind":"Name","value":"areaCode"}},{"kind":"Field","name":{"kind":"Name","value":"city"}},{"kind":"Field","name":{"kind":"Name","value":"cityCode"}},{"kind":"Field","name":{"kind":"Name","value":"town"}},{"kind":"Field","name":{"kind":"Name","value":"townCode"}},{"kind":"Field","name":{"kind":"Name","value":"street"}},{"kind":"Field","name":{"kind":"Name","value":"streetCode"}},{"kind":"Field","name":{"kind":"Name","value":"house"}},{"kind":"Field","name":{"kind":"Name","value":"corp"}},{"kind":"Field","name":{"kind":"Name","value":"flat"}},{"kind":"Field","name":{"kind":"Name","value":"note"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"livesLuId"}},{"kind":"Field","name":{"kind":"Name","value":"houseCode"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"statusCode"}},{"kind":"Field","name":{"kind":"Name","value":"details"}}]}}]}}]} as unknown as DocumentNode<GetUserDataQuery, GetUserDataQueryVariables>;
export const LoginFlashCallCodeDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"loginFlashCallCode"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"flashCallCode"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"FlashCallCode"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"loginFlashCallCode"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"flashCallCode"},"value":{"kind":"Variable","name":{"kind":"Name","value":"flashCallCode"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"token"}}]}},{"kind":"Field","name":{"kind":"Name","value":"statusCode"}},{"kind":"Field","name":{"kind":"Name","value":"details"}}]}}]}}]} as unknown as DocumentNode<LoginFlashCallCodeQuery, LoginFlashCallCodeQueryVariables>;
export const ChangeLoginPhoneByPhoneDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"changeLoginPhoneByPhone"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"oldPhoneNumber"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"newPhoneNumber"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"changeLoginPhoneByPhone"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"oldPhoneNumber"},"value":{"kind":"Variable","name":{"kind":"Name","value":"oldPhoneNumber"}}},{"kind":"Argument","name":{"kind":"Name","value":"newPhoneNumber"},"value":{"kind":"Variable","name":{"kind":"Name","value":"newPhoneNumber"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"}},{"kind":"Field","name":{"kind":"Name","value":"statusCode"}},{"kind":"Field","name":{"kind":"Name","value":"details"}}]}}]}}]} as unknown as DocumentNode<ChangeLoginPhoneByPhoneMutation, ChangeLoginPhoneByPhoneMutationVariables>;
export const PatientRegistrationDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"PatientRegistration"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"patient"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"PatientRegistration"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"patientRegistration"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"patient"},"value":{"kind":"Variable","name":{"kind":"Name","value":"patient"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"statusCode"}},{"kind":"Field","name":{"kind":"Name","value":"details"}},{"kind":"Field","name":{"kind":"Name","value":"data"}}]}}]}}]} as unknown as DocumentNode<PatientRegistrationMutation, PatientRegistrationMutationVariables>;
export const RegistrationFlashCallCodeDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"RegistrationFlashCallCode"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"flashCallCode"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"FlashCallCode"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"registrationFlashCallCode"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"flashCallCode"},"value":{"kind":"Variable","name":{"kind":"Name","value":"flashCallCode"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"token"}}]}},{"kind":"Field","name":{"kind":"Name","value":"details"}},{"kind":"Field","name":{"kind":"Name","value":"statusCode"}}]}}]}}]} as unknown as DocumentNode<RegistrationFlashCallCodeMutation, RegistrationFlashCallCodeMutationVariables>;
export const PatienLoginByPasswordDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"patienLoginByPassword"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"loginPhoneNumber"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"password"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"patienLoginByPassword"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"loginPhoneNumber"},"value":{"kind":"Variable","name":{"kind":"Name","value":"loginPhoneNumber"}}},{"kind":"Argument","name":{"kind":"Name","value":"password"},"value":{"kind":"Variable","name":{"kind":"Name","value":"password"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"token"}}]}},{"kind":"Field","name":{"kind":"Name","value":"statusCode"}},{"kind":"Field","name":{"kind":"Name","value":"details"}}]}}]}}]} as unknown as DocumentNode<PatienLoginByPasswordQuery, PatienLoginByPasswordQueryVariables>;
export const PatientLoginByPhoneDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"patientLoginByPhone"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"loginPhoneNumber"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"patientLoginByPhone"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"loginPhoneNumber"},"value":{"kind":"Variable","name":{"kind":"Name","value":"loginPhoneNumber"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"token"}}]}},{"kind":"Field","name":{"kind":"Name","value":"statusCode"}},{"kind":"Field","name":{"kind":"Name","value":"details"}}]}}]}}]} as unknown as DocumentNode<PatientLoginByPhoneQuery, PatientLoginByPhoneQueryVariables>;
export const GetUserAdminInfoDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getUserAdminInfo"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"filteringAttrs"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"UserAdminInputAdm"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"orderingAttrs"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"UserAdminInputAdm"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"skip"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"limit"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"descSorting"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getUserAdminInfo"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"filteringAttrs"},"value":{"kind":"Variable","name":{"kind":"Name","value":"filteringAttrs"}}},{"kind":"Argument","name":{"kind":"Name","value":"orderingAttrs"},"value":{"kind":"Variable","name":{"kind":"Name","value":"orderingAttrs"}}},{"kind":"Argument","name":{"kind":"Name","value":"skip"},"value":{"kind":"Variable","name":{"kind":"Name","value":"skip"}}},{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"Variable","name":{"kind":"Name","value":"limit"}}},{"kind":"Argument","name":{"kind":"Name","value":"descSorting"},"value":{"kind":"Variable","name":{"kind":"Name","value":"descSorting"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"clientId"}},{"kind":"Field","name":{"kind":"Name","value":"userId"}},{"kind":"Field","name":{"kind":"Name","value":"registrationVisibleFields"}},{"kind":"Field","name":{"kind":"Name","value":"registrationRequiredFields"}}]}},{"kind":"Field","name":{"kind":"Name","value":"statusCode"}},{"kind":"Field","name":{"kind":"Name","value":"details"}}]}}]}}]} as unknown as DocumentNode<GetUserAdminInfoQuery, GetUserAdminInfoQueryVariables>;
export const GetCitiesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getCities"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"filteringAttrs"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"CityInput"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"orderingAttrs"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"CityInput"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"skip"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"limit"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"descSorting"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getCities"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"filteringAttrs"},"value":{"kind":"Variable","name":{"kind":"Name","value":"filteringAttrs"}}},{"kind":"Argument","name":{"kind":"Name","value":"orderingAttrs"},"value":{"kind":"Variable","name":{"kind":"Name","value":"orderingAttrs"}}},{"kind":"Argument","name":{"kind":"Name","value":"skip"},"value":{"kind":"Variable","name":{"kind":"Name","value":"skip"}}},{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"Variable","name":{"kind":"Name","value":"limit"}}},{"kind":"Argument","name":{"kind":"Name","value":"descSorting"},"value":{"kind":"Variable","name":{"kind":"Name","value":"descSorting"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"clientId"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"isActive"}}]}},{"kind":"Field","name":{"kind":"Name","value":"statusCode"}},{"kind":"Field","name":{"kind":"Name","value":"details"}}]}}]}}]} as unknown as DocumentNode<GetCitiesQuery, GetCitiesQueryVariables>;
export const GetDoctorMedicalCenterDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getDoctorMedicalCenter"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"filteringAttrs"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"DoctorMedicalCenterInput"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"orderingAttrs"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"DoctorMedicalCenterInput"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"skip"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"limit"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"descSorting"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getDoctorMedicalCenter"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"filteringAttrs"},"value":{"kind":"Variable","name":{"kind":"Name","value":"filteringAttrs"}}},{"kind":"Argument","name":{"kind":"Name","value":"orderingAttrs"},"value":{"kind":"Variable","name":{"kind":"Name","value":"orderingAttrs"}}},{"kind":"Argument","name":{"kind":"Name","value":"skip"},"value":{"kind":"Variable","name":{"kind":"Name","value":"skip"}}},{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"Variable","name":{"kind":"Name","value":"limit"}}},{"kind":"Argument","name":{"kind":"Name","value":"descSorting"},"value":{"kind":"Variable","name":{"kind":"Name","value":"descSorting"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"clientId"}},{"kind":"Field","name":{"kind":"Name","value":"doctorId"}},{"kind":"Field","name":{"kind":"Name","value":"medicalSpecialityId"}},{"kind":"Field","name":{"kind":"Name","value":"medicalCenterId"}},{"kind":"Field","name":{"kind":"Name","value":"medicalPositionId"}},{"kind":"Field","name":{"kind":"Name","value":"staffTypeId"}},{"kind":"Field","name":{"kind":"Name","value":"showInLk"}},{"kind":"Field","name":{"kind":"Name","value":"minimalAge"}},{"kind":"Field","name":{"kind":"Name","value":"maximalAge"}},{"kind":"Field","name":{"kind":"Name","value":"isActive"}},{"kind":"Field","name":{"kind":"Name","value":"doctor"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"clientId"}},{"kind":"Field","name":{"kind":"Name","value":"firstName"}},{"kind":"Field","name":{"kind":"Name","value":"lastName"}},{"kind":"Field","name":{"kind":"Name","value":"patronymic"}},{"kind":"Field","name":{"kind":"Name","value":"birthDate"}},{"kind":"Field","name":{"kind":"Name","value":"photo"}},{"kind":"Field","name":{"kind":"Name","value":"doctorCategoryId"}},{"kind":"Field","name":{"kind":"Name","value":"privatePhone"}},{"kind":"Field","name":{"kind":"Name","value":"workPhone"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"commonExperience"}},{"kind":"Field","name":{"kind":"Name","value":"isActive"}},{"kind":"Field","name":{"kind":"Name","value":"doctorCategory"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"clientId"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"isActive"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"medicalSpeciality"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"clientId"}},{"kind":"Field","name":{"kind":"Name","value":"viewName"}},{"kind":"Field","name":{"kind":"Name","value":"searchName"}},{"kind":"Field","name":{"kind":"Name","value":"viewDescription"}},{"kind":"Field","name":{"kind":"Name","value":"searchDescription"}},{"kind":"Field","name":{"kind":"Name","value":"isActive"}}]}},{"kind":"Field","name":{"kind":"Name","value":"medicalCenter"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"clientId"}},{"kind":"Field","name":{"kind":"Name","value":"cityId"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"address"}},{"kind":"Field","name":{"kind":"Name","value":"longitude"}},{"kind":"Field","name":{"kind":"Name","value":"latitude"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"inn"}},{"kind":"Field","name":{"kind":"Name","value":"bankBic"}},{"kind":"Field","name":{"kind":"Name","value":"settlementAccount"}},{"kind":"Field","name":{"kind":"Name","value":"correspondentAccount"}},{"kind":"Field","name":{"kind":"Name","value":"kpp"}},{"kind":"Field","name":{"kind":"Name","value":"isActive"}},{"kind":"Field","name":{"kind":"Name","value":"logo"}},{"kind":"Field","name":{"kind":"Name","value":"websiteUrl"}},{"kind":"Field","name":{"kind":"Name","value":"phoneFax"}},{"kind":"Field","name":{"kind":"Name","value":"dmsPhone"}},{"kind":"Field","name":{"kind":"Name","value":"workTime"}},{"kind":"Field","name":{"kind":"Name","value":"collectionTestsTime"}},{"kind":"Field","name":{"kind":"Name","value":"vaccinationTime"}},{"kind":"Field","name":{"kind":"Name","value":"city"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"clientId"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"isActive"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"medicalPosition"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"clientId"}},{"kind":"Field","name":{"kind":"Name","value":"viewName"}},{"kind":"Field","name":{"kind":"Name","value":"searchName"}},{"kind":"Field","name":{"kind":"Name","value":"viewDescription"}},{"kind":"Field","name":{"kind":"Name","value":"searchDescription"}},{"kind":"Field","name":{"kind":"Name","value":"isActive"}}]}},{"kind":"Field","name":{"kind":"Name","value":"staffType"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"clientId"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"isActive"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"statusCode"}},{"kind":"Field","name":{"kind":"Name","value":"details"}}]}}]}}]} as unknown as DocumentNode<GetDoctorMedicalCenterQuery, GetDoctorMedicalCenterQueryVariables>;
export const GetDoctorsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getDoctors"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"filteringAttrs"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"DoctorInput"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"orderingAttrs"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"DoctorInput"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"skip"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"limit"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"descSorting"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getDoctors"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"filteringAttrs"},"value":{"kind":"Variable","name":{"kind":"Name","value":"filteringAttrs"}}},{"kind":"Argument","name":{"kind":"Name","value":"orderingAttrs"},"value":{"kind":"Variable","name":{"kind":"Name","value":"orderingAttrs"}}},{"kind":"Argument","name":{"kind":"Name","value":"skip"},"value":{"kind":"Variable","name":{"kind":"Name","value":"skip"}}},{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"Variable","name":{"kind":"Name","value":"limit"}}},{"kind":"Argument","name":{"kind":"Name","value":"descSorting"},"value":{"kind":"Variable","name":{"kind":"Name","value":"descSorting"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"clientId"}},{"kind":"Field","name":{"kind":"Name","value":"firstName"}},{"kind":"Field","name":{"kind":"Name","value":"lastName"}},{"kind":"Field","name":{"kind":"Name","value":"patronymic"}},{"kind":"Field","name":{"kind":"Name","value":"birthDate"}},{"kind":"Field","name":{"kind":"Name","value":"photo"}},{"kind":"Field","name":{"kind":"Name","value":"doctorCategoryId"}},{"kind":"Field","name":{"kind":"Name","value":"commonExperience"}},{"kind":"Field","name":{"kind":"Name","value":"isActive"}},{"kind":"Field","name":{"kind":"Name","value":"doctorCategory"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"clientId"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"isActive"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"statusCode"}},{"kind":"Field","name":{"kind":"Name","value":"details"}}]}}]}}]} as unknown as DocumentNode<GetDoctorsQuery, GetDoctorsQueryVariables>;
export const GetDoctorsMspecialitiesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getDoctorsMspecialities"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"filteringAttrs"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"DoctorMspecialityInput"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"orderingAttrs"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"DoctorMspecialityInput"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"skip"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"limit"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"descSorting"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getDoctorsMspecialities"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"filteringAttrs"},"value":{"kind":"Variable","name":{"kind":"Name","value":"filteringAttrs"}}},{"kind":"Argument","name":{"kind":"Name","value":"orderingAttrs"},"value":{"kind":"Variable","name":{"kind":"Name","value":"orderingAttrs"}}},{"kind":"Argument","name":{"kind":"Name","value":"skip"},"value":{"kind":"Variable","name":{"kind":"Name","value":"skip"}}},{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"Variable","name":{"kind":"Name","value":"limit"}}},{"kind":"Argument","name":{"kind":"Name","value":"descSorting"},"value":{"kind":"Variable","name":{"kind":"Name","value":"descSorting"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"doctorId"}},{"kind":"Field","name":{"kind":"Name","value":"mspecialityId"}},{"kind":"Field","name":{"kind":"Name","value":"isActive"}},{"kind":"Field","name":{"kind":"Name","value":"doctor"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"clientId"}},{"kind":"Field","name":{"kind":"Name","value":"firstName"}},{"kind":"Field","name":{"kind":"Name","value":"lastName"}},{"kind":"Field","name":{"kind":"Name","value":"patronymic"}},{"kind":"Field","name":{"kind":"Name","value":"birthDate"}},{"kind":"Field","name":{"kind":"Name","value":"photo"}},{"kind":"Field","name":{"kind":"Name","value":"doctorCategoryId"}},{"kind":"Field","name":{"kind":"Name","value":"privatePhone"}},{"kind":"Field","name":{"kind":"Name","value":"workPhone"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"commonExperience"}},{"kind":"Field","name":{"kind":"Name","value":"isActive"}},{"kind":"Field","name":{"kind":"Name","value":"doctorCategory"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"clientId"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"isActive"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"mspeciality"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"clientId"}},{"kind":"Field","name":{"kind":"Name","value":"viewName"}},{"kind":"Field","name":{"kind":"Name","value":"searchName"}},{"kind":"Field","name":{"kind":"Name","value":"viewDescription"}},{"kind":"Field","name":{"kind":"Name","value":"searchDescription"}},{"kind":"Field","name":{"kind":"Name","value":"isActive"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"statusCode"}},{"kind":"Field","name":{"kind":"Name","value":"details"}}]}}]}}]} as unknown as DocumentNode<GetDoctorsMspecialitiesQuery, GetDoctorsMspecialitiesQueryVariables>;
export const GetMedicalCentersDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getMedicalCenters"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"filteringAttrs"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"MedicalCenterInput"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"orderingAttrs"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"MedicalCenterInput"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"skip"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"limit"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"descSorting"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getMedicalCenters"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"filteringAttrs"},"value":{"kind":"Variable","name":{"kind":"Name","value":"filteringAttrs"}}},{"kind":"Argument","name":{"kind":"Name","value":"orderingAttrs"},"value":{"kind":"Variable","name":{"kind":"Name","value":"orderingAttrs"}}},{"kind":"Argument","name":{"kind":"Name","value":"skip"},"value":{"kind":"Variable","name":{"kind":"Name","value":"skip"}}},{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"Variable","name":{"kind":"Name","value":"limit"}}},{"kind":"Argument","name":{"kind":"Name","value":"descSorting"},"value":{"kind":"Variable","name":{"kind":"Name","value":"descSorting"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"clientId"}},{"kind":"Field","name":{"kind":"Name","value":"cityId"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"address"}},{"kind":"Field","name":{"kind":"Name","value":"longitude"}},{"kind":"Field","name":{"kind":"Name","value":"latitude"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"inn"}},{"kind":"Field","name":{"kind":"Name","value":"bankBic"}},{"kind":"Field","name":{"kind":"Name","value":"settlementAccount"}},{"kind":"Field","name":{"kind":"Name","value":"correspondentAccount"}},{"kind":"Field","name":{"kind":"Name","value":"kpp"}},{"kind":"Field","name":{"kind":"Name","value":"isActive"}},{"kind":"Field","name":{"kind":"Name","value":"logo"}},{"kind":"Field","name":{"kind":"Name","value":"websiteUrl"}},{"kind":"Field","name":{"kind":"Name","value":"phoneFax"}},{"kind":"Field","name":{"kind":"Name","value":"dmsPhone"}},{"kind":"Field","name":{"kind":"Name","value":"workTime"}},{"kind":"Field","name":{"kind":"Name","value":"collectionTestsTime"}},{"kind":"Field","name":{"kind":"Name","value":"vaccinationTime"}},{"kind":"Field","name":{"kind":"Name","value":"city"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"clientId"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"isActive"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"statusCode"}},{"kind":"Field","name":{"kind":"Name","value":"details"}}]}}]}}]} as unknown as DocumentNode<GetMedicalCentersQuery, GetMedicalCentersQueryVariables>;
export const GetServicesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getServices"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"filteringAttrs"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"ServiceInput"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"orderingAttrs"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"ServiceInput"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"skip"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"limit"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"descSorting"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getServices"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"filteringAttrs"},"value":{"kind":"Variable","name":{"kind":"Name","value":"filteringAttrs"}}},{"kind":"Argument","name":{"kind":"Name","value":"orderingAttrs"},"value":{"kind":"Variable","name":{"kind":"Name","value":"orderingAttrs"}}},{"kind":"Argument","name":{"kind":"Name","value":"skip"},"value":{"kind":"Variable","name":{"kind":"Name","value":"skip"}}},{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"Variable","name":{"kind":"Name","value":"limit"}}},{"kind":"Argument","name":{"kind":"Name","value":"descSorting"},"value":{"kind":"Variable","name":{"kind":"Name","value":"descSorting"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"clientId"}},{"kind":"Field","name":{"kind":"Name","value":"serviceTypeId"}},{"kind":"Field","name":{"kind":"Name","value":"serviceGroupId"}},{"kind":"Field","name":{"kind":"Name","value":"nameForStaff"}},{"kind":"Field","name":{"kind":"Name","value":"nameForMz"}},{"kind":"Field","name":{"kind":"Name","value":"nameForLk"}},{"kind":"Field","name":{"kind":"Name","value":"fullDescription"}},{"kind":"Field","name":{"kind":"Name","value":"appliedMethod"}},{"kind":"Field","name":{"kind":"Name","value":"preparationRules"}},{"kind":"Field","name":{"kind":"Name","value":"shortDescription"}},{"kind":"Field","name":{"kind":"Name","value":"comment"}},{"kind":"Field","name":{"kind":"Name","value":"mzCode"}},{"kind":"Field","name":{"kind":"Name","value":"executionTime"}},{"kind":"Field","name":{"kind":"Name","value":"nursesExecutionTime"}},{"kind":"Field","name":{"kind":"Name","value":"minimalAge"}},{"kind":"Field","name":{"kind":"Name","value":"maximalAge"}},{"kind":"Field","name":{"kind":"Name","value":"gender"}},{"kind":"Field","name":{"kind":"Name","value":"isUrgent"}},{"kind":"Field","name":{"kind":"Name","value":"isForHomeOnly"}},{"kind":"Field","name":{"kind":"Name","value":"selectedServiceNotification"}},{"kind":"Field","name":{"kind":"Name","value":"isComplexService"}},{"kind":"Field","name":{"kind":"Name","value":"clientServiceCode"}},{"kind":"Field","name":{"kind":"Name","value":"isActive"}},{"kind":"Field","name":{"kind":"Name","value":"serviceType"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"clientId"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"isActive"}}]}},{"kind":"Field","name":{"kind":"Name","value":"serviceGroup"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"clientId"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"viewName"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"clientServiceGroupCode"}},{"kind":"Field","name":{"kind":"Name","value":"levelSortingCode"}},{"kind":"Field","name":{"kind":"Name","value":"isActive"}},{"kind":"Field","name":{"kind":"Name","value":"xmembers"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"clientId"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"viewName"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"clientServiceGroupCode"}},{"kind":"Field","name":{"kind":"Name","value":"levelSortingCode"}},{"kind":"Field","name":{"kind":"Name","value":"isActive"}},{"kind":"Field","name":{"kind":"Name","value":"xmembers"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"clientId"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"viewName"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"clientServiceGroupCode"}},{"kind":"Field","name":{"kind":"Name","value":"levelSortingCode"}},{"kind":"Field","name":{"kind":"Name","value":"isActive"}},{"kind":"Field","name":{"kind":"Name","value":"path"}}]}},{"kind":"Field","name":{"kind":"Name","value":"path"}}]}},{"kind":"Field","name":{"kind":"Name","value":"path"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"statusCode"}},{"kind":"Field","name":{"kind":"Name","value":"details"}}]}}]}}]} as unknown as DocumentNode<GetServicesQuery, GetServicesQueryVariables>;
export const GetServiceGroupDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getServiceGroup"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"name"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getServiceGroup"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"name"},"value":{"kind":"Variable","name":{"kind":"Name","value":"name"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"clientId"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"viewName"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"clientServiceGroupCode"}},{"kind":"Field","name":{"kind":"Name","value":"levelSortingCode"}},{"kind":"Field","name":{"kind":"Name","value":"isActive"}},{"kind":"Field","name":{"kind":"Name","value":"xmembers"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"clientId"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"viewName"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"clientServiceGroupCode"}},{"kind":"Field","name":{"kind":"Name","value":"levelSortingCode"}},{"kind":"Field","name":{"kind":"Name","value":"isActive"}},{"kind":"Field","name":{"kind":"Name","value":"xmembers"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"clientId"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"viewName"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"clientServiceGroupCode"}},{"kind":"Field","name":{"kind":"Name","value":"levelSortingCode"}},{"kind":"Field","name":{"kind":"Name","value":"isActive"}},{"kind":"Field","name":{"kind":"Name","value":"xmembers"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"clientId"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"viewName"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"clientServiceGroupCode"}},{"kind":"Field","name":{"kind":"Name","value":"levelSortingCode"}},{"kind":"Field","name":{"kind":"Name","value":"isActive"}},{"kind":"Field","name":{"kind":"Name","value":"xmembers"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"clientId"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"viewName"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"clientServiceGroupCode"}},{"kind":"Field","name":{"kind":"Name","value":"levelSortingCode"}},{"kind":"Field","name":{"kind":"Name","value":"isActive"}},{"kind":"Field","name":{"kind":"Name","value":"xmembers"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"clientId"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"viewName"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"clientServiceGroupCode"}},{"kind":"Field","name":{"kind":"Name","value":"levelSortingCode"}},{"kind":"Field","name":{"kind":"Name","value":"isActive"}},{"kind":"Field","name":{"kind":"Name","value":"xmembers"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"clientId"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"viewName"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"clientServiceGroupCode"}},{"kind":"Field","name":{"kind":"Name","value":"levelSortingCode"}},{"kind":"Field","name":{"kind":"Name","value":"isActive"}},{"kind":"Field","name":{"kind":"Name","value":"xmembers"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"clientId"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"viewName"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"clientServiceGroupCode"}},{"kind":"Field","name":{"kind":"Name","value":"levelSortingCode"}},{"kind":"Field","name":{"kind":"Name","value":"isActive"}},{"kind":"Field","name":{"kind":"Name","value":"path"}}]}},{"kind":"Field","name":{"kind":"Name","value":"path"}}]}},{"kind":"Field","name":{"kind":"Name","value":"path"}}]}},{"kind":"Field","name":{"kind":"Name","value":"path"}}]}},{"kind":"Field","name":{"kind":"Name","value":"path"}}]}},{"kind":"Field","name":{"kind":"Name","value":"path"}}]}},{"kind":"Field","name":{"kind":"Name","value":"path"}}]}},{"kind":"Field","name":{"kind":"Name","value":"path"}}]}},{"kind":"Field","name":{"kind":"Name","value":"statusCode"}},{"kind":"Field","name":{"kind":"Name","value":"details"}}]}}]}}]} as unknown as DocumentNode<GetServiceGroupQuery, GetServiceGroupQueryVariables>;
export const GetServicesTypesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getServicesTypes"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"filteringAttrs"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"ServiceTypeInput"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"orderingAttrs"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"ServiceTypeInput"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"skip"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"limit"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"descSorting"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getServicesTypes"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"filteringAttrs"},"value":{"kind":"Variable","name":{"kind":"Name","value":"filteringAttrs"}}},{"kind":"Argument","name":{"kind":"Name","value":"orderingAttrs"},"value":{"kind":"Variable","name":{"kind":"Name","value":"orderingAttrs"}}},{"kind":"Argument","name":{"kind":"Name","value":"skip"},"value":{"kind":"Variable","name":{"kind":"Name","value":"skip"}}},{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"Variable","name":{"kind":"Name","value":"limit"}}},{"kind":"Argument","name":{"kind":"Name","value":"descSorting"},"value":{"kind":"Variable","name":{"kind":"Name","value":"descSorting"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"isActive"}}]}},{"kind":"Field","name":{"kind":"Name","value":"statusCode"}},{"kind":"Field","name":{"kind":"Name","value":"details"}}]}}]}}]} as unknown as DocumentNode<GetServicesTypesQuery, GetServicesTypesQueryVariables>;