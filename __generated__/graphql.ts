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
};

export type City = {
  __typename?: 'City';
  clientCityId?: Maybe<Scalars['Int']['output']>;
  id: Scalars['Int']['output'];
  isActive?: Maybe<Scalars['Boolean']['output']>;
  name: Scalars['String']['output'];
};

export type CityIn = {
  clientCityId?: InputMaybe<Scalars['Int']['input']>;
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

export type CityInput = {
  clientCityId?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

export type CityResult = {
  __typename?: 'CityResult';
  data?: Maybe<Array<City>>;
  details?: Maybe<Scalars['String']['output']>;
  statusCode?: Maybe<Scalars['Int']['output']>;
};

export type ComplexService = {
  __typename?: 'ComplexService';
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
  complexService?: InputMaybe<ComplexServiceIn>;
  complexServiceId?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  price?: InputMaybe<Scalars['Float']['input']>;
  quantity?: InputMaybe<Scalars['Int']['input']>;
  service?: InputMaybe<ServiceIn>;
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
  clientDoctorId?: Maybe<Scalars['Int']['output']>;
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
  clientDcategoryId?: Maybe<Scalars['Int']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['Int']['output'];
  isActive?: Maybe<Scalars['Boolean']['output']>;
  name: Scalars['String']['output'];
};

export type DoctorCategoryIn = {
  clientDcategoryId?: InputMaybe<Scalars['Int']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

export type DoctorCategoryInput = {
  clientDcategoryId?: InputMaybe<Scalars['Int']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
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
  clientDoctorId?: InputMaybe<Scalars['Int']['input']>;
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
  clientDoctorId?: InputMaybe<Scalars['Int']['input']>;
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

export type DoctorMedicalCenter = {
  __typename?: 'DoctorMedicalCenter';
  clientDoctorMcenterId?: Maybe<Scalars['Int']['output']>;
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
  clientDoctorMcenterId?: InputMaybe<Scalars['Int']['input']>;
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
  clientDoctorMcenterId?: InputMaybe<Scalars['Int']['input']>;
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

export type DoctorMspecialityResult = {
  __typename?: 'DoctorMspecialityResult';
  data?: Maybe<Array<DoctorMspeciality>>;
  details?: Maybe<Scalars['String']['output']>;
  statusCode?: Maybe<Scalars['Int']['output']>;
};

export type DoctorPatientType = {
  __typename?: 'DoctorPatientType';
  clientDpatientTypeId?: Maybe<Scalars['Int']['output']>;
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
  clientDpatientTypeId?: InputMaybe<Scalars['Int']['input']>;
  doctorMedicalCenter?: InputMaybe<DoctorMedicalCenterIn>;
  doctorMedicalCenterId?: InputMaybe<Scalars['Int']['input']>;
  endDate?: InputMaybe<Scalars['Date']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  patientType?: InputMaybe<PatientTypeIn>;
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
  clientDoctorReplacementId?: Maybe<Scalars['Int']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  doctor?: Maybe<Doctor>;
  doctorId: Scalars['Int']['output'];
  endDate: Scalars['DateTime']['output'];
  id: Scalars['Int']['output'];
  isActive?: Maybe<Scalars['Boolean']['output']>;
  startDate: Scalars['DateTime']['output'];
};

export type DoctorReplacementIn = {
  clientDoctorReplacementId?: InputMaybe<Scalars['Int']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  doctorId?: InputMaybe<Scalars['Int']['input']>;
  endDate?: InputMaybe<Scalars['Date']['input']>;
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  startDate?: InputMaybe<Scalars['Date']['input']>;
};

export type DoctorReplacementInput = {
  clientDoctorReplacementId?: InputMaybe<Scalars['Int']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  doctor?: InputMaybe<DoctorIn>;
  doctorId?: InputMaybe<Scalars['Int']['input']>;
  endDate?: InputMaybe<Scalars['Date']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
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

export type DoctorStatusResult = {
  __typename?: 'DoctorStatusResult';
  data?: Maybe<Array<DoctorStatus>>;
  details?: Maybe<Scalars['String']['output']>;
  statusCode?: Maybe<Scalars['Int']['output']>;
};

export type DoctorStatusType = {
  __typename?: 'DoctorStatusType';
  clientDstatusTypeId?: Maybe<Scalars['Int']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['Int']['output'];
  isActive?: Maybe<Scalars['Boolean']['output']>;
  name: Scalars['String']['output'];
};

export type DoctorStatusTypeIn = {
  clientDstatusTypeId?: InputMaybe<Scalars['Int']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

export type DoctorStatusTypeInput = {
  clientDstatusTypeId?: InputMaybe<Scalars['Int']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
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
  clientFinancialTypeId?: Maybe<Scalars['Int']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['Int']['output'];
  isActive?: Maybe<Scalars['Boolean']['output']>;
  name: Scalars['String']['output'];
};

export type FinancialTypeIn = {
  clientFinancialTypeId?: InputMaybe<Scalars['Int']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

export type FinancialTypeInput = {
  clientFinancialTypeId?: InputMaybe<Scalars['Int']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
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
  phoneNumber: Scalars['String']['input'];
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
  clientMcenterId?: Maybe<Scalars['Int']['output']>;
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
  clientMcenterId?: InputMaybe<Scalars['Int']['input']>;
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
  clientMcenterId?: InputMaybe<Scalars['Int']['input']>;
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

export type MedicalCenterResult = {
  __typename?: 'MedicalCenterResult';
  data?: Maybe<Array<MedicalCenter>>;
  details?: Maybe<Scalars['String']['output']>;
  statusCode?: Maybe<Scalars['Int']['output']>;
};

export type MedicalPosition = {
  __typename?: 'MedicalPosition';
  clientDoctorSpecialityId?: Maybe<Scalars['Int']['output']>;
  id: Scalars['Int']['output'];
  isActive?: Maybe<Scalars['Boolean']['output']>;
  searchDescription?: Maybe<Scalars['String']['output']>;
  searchName: Scalars['String']['output'];
  viewDescription?: Maybe<Scalars['String']['output']>;
  viewName: Scalars['String']['output'];
};

export type MedicalPositionIn = {
  clientDoctorSpecialityId?: InputMaybe<Scalars['Int']['input']>;
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  searchDescription?: InputMaybe<Scalars['String']['input']>;
  searchName?: InputMaybe<Scalars['String']['input']>;
  viewDescription?: InputMaybe<Scalars['String']['input']>;
  viewName?: InputMaybe<Scalars['String']['input']>;
};

export type MedicalPositionInput = {
  clientDoctorSpecialityId?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
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
  clientDoctorSpecialityId?: Maybe<Scalars['Int']['output']>;
  id: Scalars['Int']['output'];
  isActive?: Maybe<Scalars['Boolean']['output']>;
  searchDescription?: Maybe<Scalars['String']['output']>;
  searchName: Scalars['String']['output'];
  viewDescription?: Maybe<Scalars['String']['output']>;
  viewName: Scalars['String']['output'];
};

export type MedicalSpecialityIn = {
  clientDoctorSpecialityId?: InputMaybe<Scalars['Int']['input']>;
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  searchDescription?: InputMaybe<Scalars['String']['input']>;
  searchName?: InputMaybe<Scalars['String']['input']>;
  viewDescription?: InputMaybe<Scalars['String']['input']>;
  viewName?: InputMaybe<Scalars['String']['input']>;
};

export type MedicalSpecialityInput = {
  clientDoctorSpecialityId?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  searchDescription?: InputMaybe<Scalars['String']['input']>;
  searchName?: InputMaybe<Scalars['String']['input']>;
  viewDescription?: InputMaybe<Scalars['String']['input']>;
  viewName?: InputMaybe<Scalars['String']['input']>;
};

export type MedicalSpecialityResult = {
  __typename?: 'MedicalSpecialityResult';
  data?: Maybe<Array<MedicalSpeciality>>;
  details?: Maybe<Scalars['String']['output']>;
  statusCode?: Maybe<Scalars['Int']['output']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  addUserPurchase: UserPurchaseResult;
  changePasswordByPhone: RequestResult;
  changePasswordFlashCallCode: RequestResult;
  changePhoneByPhone: RequestResult;
  changePhoneFlashCallCode: RequestResult;
  deleteUserPurchase: RequestResult;
  patientRegistration: RequestResult;
  registrationFlashCallCode: LoginResult;
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


export type MutationChangePasswordByPhoneArgs = {
  newPassword: Scalars['String']['input'];
};


export type MutationChangePasswordFlashCallCodeArgs = {
  flashCallCode: FlashCallCode;
};


export type MutationChangePhoneByPhoneArgs = {
  newPhoneNumber: Scalars['String']['input'];
  oldPhoneNumber: Scalars['String']['input'];
};


export type MutationChangePhoneFlashCallCodeArgs = {
  flashCallCode: FlashCallCode;
};


export type MutationDeleteUserPurchaseArgs = {
  userPurchaseId: Scalars['Int']['input'];
};


export type MutationPatientRegistrationArgs = {
  patient: PatientRegistration;
};


export type MutationRegistrationFlashCallCodeArgs = {
  flashCallCode: FlashCallCode;
};

export type PackType = {
  __typename?: 'PackType';
  clientPackTypeId?: Maybe<Scalars['Int']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['Int']['output'];
  isActive?: Maybe<Scalars['Boolean']['output']>;
  name: Scalars['String']['output'];
};

export type PackTypeIn = {
  clientPackTypeId?: InputMaybe<Scalars['Int']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

export type PackTypeInput = {
  clientPackTypeId?: InputMaybe<Scalars['Int']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
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
  birthDate: Scalars['String']['input'];
  email: Scalars['String']['input'];
  firstName: Scalars['String']['input'];
  gender?: InputMaybe<Scalars['String']['input']>;
  lastName: Scalars['String']['input'];
  password: Scalars['String']['input'];
  patronymic?: InputMaybe<Scalars['String']['input']>;
  phoneNumber: Scalars['String']['input'];
};

export type PatientType = {
  __typename?: 'PatientType';
  clientPatientTypeId?: Maybe<Scalars['Int']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['Int']['output'];
  isActive?: Maybe<Scalars['Boolean']['output']>;
  name: Scalars['String']['output'];
};

export type PatientTypeIn = {
  clientPatientTypeId?: InputMaybe<Scalars['Int']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

export type PatientTypeInput = {
  clientPatientTypeId?: InputMaybe<Scalars['Int']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

export type PatientTypeResult = {
  __typename?: 'PatientTypeResult';
  data?: Maybe<Array<PatientType>>;
  details?: Maybe<Scalars['String']['output']>;
  statusCode?: Maybe<Scalars['Int']['output']>;
};

export type Policy = {
  __typename?: 'Policy';
  amount?: Maybe<Scalars['Float']['output']>;
  clientPolycyId?: Maybe<Scalars['Int']['output']>;
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
  clientPolycyId?: InputMaybe<Scalars['Int']['input']>;
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
  clientPolycyId?: InputMaybe<Scalars['Int']['input']>;
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

export type PolicyResult = {
  __typename?: 'PolicyResult';
  data?: Maybe<Array<Policy>>;
  details?: Maybe<Scalars['String']['output']>;
  statusCode?: Maybe<Scalars['Int']['output']>;
};

export type Query = {
  __typename?: 'Query';
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
  getPolicy: PolicyResult;
  getServiceGroup: ServiceGroupResult1;
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
  getUserData: UserData;
  getUserSubscribe: UserSubscribeResult;
  getUsersPurchases: UserPurchaseResult;
  loginFlashCallCode: LoginResult;
  patienLoginByPassword: LoginResult;
  patientLoginByPhone: LoginResult;
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


export type QueryGetPolicyArgs = {
  descSorting?: InputMaybe<Scalars['Boolean']['input']>;
  filteringAttrs?: InputMaybe<PolicyInput>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  orderingAttrs?: InputMaybe<PolicyInput>;
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
  password: Scalars['String']['input'];
  phoneNumber: Scalars['String']['input'];
};


export type QueryPatientLoginByPhoneArgs = {
  phoneNumber: Scalars['String']['input'];
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
  clientServiceCode?: Maybe<Scalars['String']['output']>;
  clientServiceId?: Maybe<Scalars['Int']['output']>;
  comment?: Maybe<Scalars['String']['output']>;
  executionTime?: Maybe<Scalars['Int']['output']>;
  fullDescription?: Maybe<Scalars['String']['output']>;
  gender?: Maybe<Scalars['String']['output']>;
  id: Scalars['Int']['output'];
  isActive?: Maybe<Scalars['Boolean']['output']>;
  isComplexService?: Maybe<Scalars['Boolean']['output']>;
  isForHomeOnly?: Maybe<Scalars['Boolean']['output']>;
  isUrgent?: Maybe<Scalars['Boolean']['output']>;
  maximalAge: Scalars['Int']['output'];
  minimalAge: Scalars['Int']['output'];
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
  clientServiceGroupCode?: Maybe<Scalars['String']['output']>;
  clientServiceGroupId?: Maybe<Scalars['Int']['output']>;
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
  clientServiceGroupCode?: InputMaybe<Scalars['String']['input']>;
  clientServiceGroupId?: InputMaybe<Scalars['Int']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  levelSortingCode?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  path?: InputMaybe<Scalars['String']['input']>;
  viewName?: InputMaybe<Scalars['String']['input']>;
};

export type ServiceGroupResult1 = {
  __typename?: 'ServiceGroupResult1';
  data?: Maybe<Array<ServiceGroup>>;
  details?: Maybe<Scalars['String']['output']>;
  statusCode?: Maybe<Scalars['Int']['output']>;
};

export type ServiceIn = {
  appliedMethod?: InputMaybe<Scalars['String']['input']>;
  clientServiceCode?: InputMaybe<Scalars['String']['input']>;
  clientServiceId?: InputMaybe<Scalars['Int']['input']>;
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
  clientServiceCode?: InputMaybe<Scalars['String']['input']>;
  clientServiceId?: InputMaybe<Scalars['Int']['input']>;
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
  clientServiceTypeId?: Maybe<Scalars['Int']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['Int']['output'];
  isActive?: Maybe<Scalars['Boolean']['output']>;
  name: Scalars['String']['output'];
};

export type ServiceTypeInput = {
  clientStypeId?: InputMaybe<Scalars['Int']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
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
  clientShifrId?: Maybe<Scalars['Int']['output']>;
  code?: Maybe<Scalars['String']['output']>;
  companyName?: Maybe<Scalars['String']['output']>;
  endDate: Scalars['DateTime']['output'];
  financialType?: Maybe<FinancialType>;
  financialTypeId: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  isActive?: Maybe<Scalars['Boolean']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  startDate: Scalars['DateTime']['output'];
  status: Scalars['Int']['output'];
};

export type ShifrDiscount = {
  __typename?: 'ShifrDiscount';
  clientShifrDiscountId?: Maybe<Scalars['Int']['output']>;
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
  clientShifrDiscountId?: InputMaybe<Scalars['Int']['input']>;
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

export type ShifrDiscountPeriod = {
  __typename?: 'ShifrDiscountPeriod';
  clientShifrDiscountPeriodId?: Maybe<Scalars['Int']['output']>;
  endDate: Scalars['DateTime']['output'];
  id: Scalars['Int']['output'];
  startDate: Scalars['DateTime']['output'];
};

export type ShifrDiscountPeriodIn = {
  clientShifrDiscountPeriodId?: InputMaybe<Scalars['Int']['input']>;
  endDate?: InputMaybe<Scalars['Date']['input']>;
  startDate?: InputMaybe<Scalars['Date']['input']>;
};

export type ShifrDiscountPeriodInput = {
  clientShifrDiscountPeriodId?: InputMaybe<Scalars['Int']['input']>;
  endDate?: InputMaybe<Scalars['Date']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
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
  clientShifrId?: InputMaybe<Scalars['Int']['input']>;
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
  clientShifrId?: InputMaybe<Scalars['Int']['input']>;
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

export type ShifrResult = {
  __typename?: 'ShifrResult';
  data?: Maybe<Array<Shifr>>;
  details?: Maybe<Scalars['String']['output']>;
  statusCode?: Maybe<Scalars['Int']['output']>;
};

export type StaffType = {
  __typename?: 'StaffType';
  clientStaffTypeId?: Maybe<Scalars['Int']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['Int']['output'];
  isActive?: Maybe<Scalars['Boolean']['output']>;
  name: Scalars['String']['output'];
};

export type StaffTypeIn = {
  clientStaffTypeId?: InputMaybe<Scalars['Int']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

export type StaffTypeInput = {
  clientStaffTypeId?: InputMaybe<Scalars['Int']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
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
  clientSubscribeDoctorId?: Maybe<Scalars['Int']['output']>;
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
  clientSubscribeDoctorId?: InputMaybe<Scalars['Int']['input']>;
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

export type SubscribeDoctorResult = {
  __typename?: 'SubscribeDoctorResult';
  data?: Maybe<Array<SubscribeDoctor>>;
  details?: Maybe<Scalars['String']['output']>;
  statusCode?: Maybe<Scalars['Int']['output']>;
};

export type SubscribeServicePack = {
  __typename?: 'SubscribeServicePack';
  clientSubscribeServicePackId?: Maybe<Scalars['Int']['output']>;
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
  clientSubscribeServicePackId?: InputMaybe<Scalars['Int']['input']>;
  code?: InputMaybe<Scalars['String']['input']>;
  maxQuantity?: InputMaybe<Scalars['Int']['input']>;
  minQuantity?: InputMaybe<Scalars['Int']['input']>;
  packTag?: InputMaybe<Scalars['Int']['input']>;
  packTypeId?: InputMaybe<Scalars['Int']['input']>;
  userSubscribeId?: InputMaybe<Scalars['Int']['input']>;
};

export type SubscribeServicePackInput = {
  clientSubscribeServicePackId?: InputMaybe<Scalars['Int']['input']>;
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

export type SubscribeServicePackResult = {
  __typename?: 'SubscribeServicePackResult';
  data?: Maybe<Array<SubscribeServicePack>>;
  details?: Maybe<Scalars['String']['output']>;
  statusCode?: Maybe<Scalars['Int']['output']>;
};

export type SubscribeSpackRecord = {
  __typename?: 'SubscribeSpackRecord';
  clientSubscribesSpacksRecordsId?: Maybe<Scalars['Int']['output']>;
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
  clientSubscribesSpacksRecordsId?: InputMaybe<Scalars['Int']['input']>;
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
  birthDate?: Maybe<Scalars['Date']['output']>;
  clientCardId?: Maybe<Scalars['Int']['output']>;
  clientPersonalAreaId?: Maybe<Scalars['Int']['output']>;
  clientUserId?: Maybe<Scalars['Int']['output']>;
  created?: Maybe<Scalars['DateTime']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  firstName?: Maybe<Scalars['String']['output']>;
  gender?: Maybe<Scalars['String']['output']>;
  id: Scalars['Int']['output'];
  isActive?: Maybe<Scalars['Boolean']['output']>;
  isVerified?: Maybe<Scalars['Boolean']['output']>;
  lastLogin?: Maybe<Scalars['DateTime']['output']>;
  lastName?: Maybe<Scalars['String']['output']>;
  lastVisit?: Maybe<Scalars['DateTime']['output']>;
  patronymic?: Maybe<Scalars['String']['output']>;
  phoneNumber: Scalars['String']['output'];
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
  clientPersonalAreaId?: InputMaybe<Scalars['Int']['input']>;
  clientUserId?: InputMaybe<Scalars['Int']['input']>;
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

export type UserPurchase = {
  __typename?: 'UserPurchase';
  amount?: Maybe<Scalars['Float']['output']>;
  clientUserPurchaseId?: Maybe<Scalars['Int']['output']>;
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
  serviceQuantity: Scalars['Int']['output'];
  shifr?: Maybe<Shifr>;
  shifrId?: Maybe<Scalars['Int']['output']>;
  user?: Maybe<User>;
  userId: Scalars['Int']['output'];
  userPaymentId?: Maybe<Scalars['Int']['output']>;
};

export type UserPurchaseInMut = {
  serviceId?: InputMaybe<Scalars['Int']['input']>;
  serviceQuantity?: InputMaybe<Scalars['Int']['input']>;
};

export type UserPurchaseInput = {
  amount?: InputMaybe<Scalars['Float']['input']>;
  clientUserPurchaseId?: InputMaybe<Scalars['Int']['input']>;
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

export type UserSubscribe = {
  __typename?: 'UserSubscribe';
  clientUserSubscribeId?: Maybe<Scalars['Int']['output']>;
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
  clientUserSubscribeId?: InputMaybe<Scalars['Int']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  policyId?: InputMaybe<Scalars['Int']['input']>;
  serviceId?: InputMaybe<Scalars['Int']['input']>;
};

export type UserSubscribeInput = {
  clientUserSubscribeId?: InputMaybe<Scalars['Int']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  policy?: InputMaybe<PolicyIn>;
  policyId?: InputMaybe<Scalars['Int']['input']>;
  service?: InputMaybe<ServiceIn>;
  serviceId?: InputMaybe<Scalars['Int']['input']>;
};

export type UserSubscribeResult = {
  __typename?: 'UserSubscribeResult';
  data?: Maybe<Array<UserSubscribe>>;
  details?: Maybe<Scalars['String']['output']>;
  statusCode?: Maybe<Scalars['Int']['output']>;
};

export type GetUserDataQueryVariables = Exact<{ [key: string]: never; }>;


export type GetUserDataQuery = { __typename?: 'Query', getUserData: { __typename?: 'UserData', details?: string | null, statusCode?: number | null, data?: { __typename?: 'User', additionalPhoneNumber?: string | null, birthDate?: any | null, clientCardId?: number | null, clientPersonalAreaId?: number | null, clientUserId?: number | null, created?: any | null, email?: string | null, firstName?: string | null, gender?: string | null, id: number, isActive?: boolean | null, isVerified?: boolean | null, lastLogin?: any | null, lastName?: string | null, lastVisit?: any | null, patronymic?: string | null, phoneNumber: string } | null } };

export type LoginFlashCallCodeQueryVariables = Exact<{
  phoneNumber: Scalars['String']['input'];
  code: Scalars['String']['input'];
}>;


export type LoginFlashCallCodeQuery = { __typename?: 'Query', loginFlashCallCode: { __typename?: 'LoginResult', details?: string | null, statusCode?: number | null, data?: { __typename?: 'Token', token: string } | null } };

export type ChangePhoneByPhoneMutationVariables = Exact<{ [key: string]: never; }>;


export type ChangePhoneByPhoneMutation = { __typename?: 'Mutation', changePhoneByPhone: { __typename?: 'RequestResult', data?: string | null, details?: string | null, statusCode?: number | null } };

export type PatientRegistrationMutationVariables = Exact<{
  patient: PatientRegistration;
}>;


export type PatientRegistrationMutation = { __typename?: 'Mutation', patientRegistration: { __typename?: 'RequestResult', statusCode?: number | null, details?: string | null, data?: string | null } };

export type RegistrationFlashCallCodeMutationVariables = Exact<{
  flashCallCode: FlashCallCode;
}>;


export type RegistrationFlashCallCodeMutation = { __typename?: 'Mutation', registrationFlashCallCode: { __typename?: 'LoginResult', details?: string | null, statusCode?: number | null, data?: { __typename?: 'Token', token: string } | null } };

export type PatienLoginByPasswordQueryVariables = Exact<{
  password: Scalars['String']['input'];
  phoneNumber: Scalars['String']['input'];
}>;


export type PatienLoginByPasswordQuery = { __typename?: 'Query', patienLoginByPassword: { __typename?: 'LoginResult', details?: string | null, statusCode?: number | null, data?: { __typename?: 'Token', token: string } | null } };

export type PatientLoginByPhoneQueryVariables = Exact<{
  phoneNumber: Scalars['String']['input'];
}>;


export type PatientLoginByPhoneQuery = { __typename?: 'Query', patientLoginByPhone: { __typename?: 'LoginResult', details?: string | null, statusCode?: number | null, data?: { __typename?: 'Token', token: string } | null } };

export type GetCitiesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetCitiesQuery = { __typename?: 'Query', getCities: { __typename?: 'CityResult', details?: string | null, statusCode?: number | null, data?: Array<{ __typename?: 'City', clientCityId?: number | null, id: number, isActive?: boolean | null, name: string }> | null } };

export type GetDoctorsQueryVariables = Exact<{
  filteringAttrs?: InputMaybe<DoctorInput>;
  orderingAttrs?: InputMaybe<DoctorInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  descSorting?: InputMaybe<Scalars['Boolean']['input']>;
}>;


export type GetDoctorsQuery = { __typename?: 'Query', getDoctors: { __typename?: 'DoctorResult', statusCode?: number | null, details?: string | null, data?: Array<{ __typename?: 'Doctor', id: number, clientDoctorId?: number | null, firstName: string, lastName: string, patronymic?: string | null, birthDate?: any | null, photo?: string | null, doctorCategoryId?: number | null, privatePhone?: string | null, workPhone?: string | null, email?: string | null, commonExperience?: number | null, isActive?: boolean | null, doctorCategory?: { __typename?: 'DoctorCategory', id: number, clientDcategoryId?: number | null, name: string, description?: string | null, isActive?: boolean | null } | null }> | null } };

export type GetDoctorsMspecialitiesQueryVariables = Exact<{
  filteringAttrs?: InputMaybe<DoctorMspecialityInput>;
  orderingAttrs?: InputMaybe<DoctorMspecialityInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  descSorting?: InputMaybe<Scalars['Boolean']['input']>;
}>;


export type GetDoctorsMspecialitiesQuery = { __typename?: 'Query', getDoctorsMspecialities: { __typename?: 'DoctorMspecialityResult', statusCode?: number | null, details?: string | null, data?: Array<{ __typename?: 'DoctorMspeciality', id: number, doctorId: number, mspecialityId: number, isActive?: boolean | null, doctor?: { __typename?: 'Doctor', id: number, clientDoctorId?: number | null, firstName: string, lastName: string, patronymic?: string | null, birthDate?: any | null, photo?: string | null, doctorCategoryId?: number | null, privatePhone?: string | null, workPhone?: string | null, email?: string | null, commonExperience?: number | null, isActive?: boolean | null, doctorCategory?: { __typename?: 'DoctorCategory', id: number, clientDcategoryId?: number | null, name: string, description?: string | null, isActive?: boolean | null } | null } | null, mspeciality?: { __typename?: 'MedicalSpeciality', id: number, clientDoctorSpecialityId?: number | null, viewName: string, searchName: string, viewDescription?: string | null, searchDescription?: string | null, isActive?: boolean | null } | null }> | null } };

export type GetMedicalCentersQueryVariables = Exact<{
  filteringAttrs?: InputMaybe<MedicalCenterInput>;
  orderingAttrs?: InputMaybe<MedicalCenterInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  descSorting?: InputMaybe<Scalars['Boolean']['input']>;
}>;


export type GetMedicalCentersQuery = { __typename?: 'Query', getMedicalCenters: { __typename?: 'MedicalCenterResult', statusCode?: number | null, details?: string | null, data?: Array<{ __typename?: 'MedicalCenter', id: number, clientMcenterId?: number | null, cityId: number, name: string, address: string, longitude?: number | null, latitude?: number | null, description?: string | null, inn: string, bankBic: string, settlementAccount: string, correspondentAccount: string, kpp: string, isActive?: boolean | null, logo?: string | null, websiteUrl?: string | null, phoneFax: string, dmsPhone?: string | null, workTime: string, collectionTestsTime?: string | null, vaccinationTime?: string | null, city?: { __typename?: 'City', id: number, clientCityId?: number | null, name: string, isActive?: boolean | null } | null }> | null } };

export type GetServicesQueryVariables = Exact<{
  filteringAttrs?: InputMaybe<ServiceInput>;
  orderingAttrs?: InputMaybe<ServiceInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  descSorting?: InputMaybe<Scalars['Boolean']['input']>;
}>;


export type GetServicesQuery = { __typename?: 'Query', getServices: { __typename?: 'ServiceResult', statusCode?: number | null, details?: string | null, data?: Array<{ __typename?: 'Service', id: number, clientServiceId?: number | null, serviceTypeId: number, serviceGroupId: number, nameForStaff: string, nameForMz: string, nameForLk: string, fullDescription?: string | null, appliedMethod?: string | null, preparationRules?: string | null, shortDescription?: string | null, comment?: string | null, mzCode?: string | null, executionTime?: number | null, nursesExecutionTime?: number | null, minimalAge: number, maximalAge: number, gender?: string | null, isUrgent?: boolean | null, isForHomeOnly?: boolean | null, selectedServiceNotification?: string | null, isComplexService?: boolean | null, clientServiceCode?: string | null, isActive?: boolean | null, serviceType?: { __typename?: 'ServiceType', id: number, clientServiceTypeId?: number | null, name: string, description?: string | null, isActive?: boolean | null } | null, serviceGroup?: { __typename?: 'ServiceGroup', id: number, clientServiceGroupId?: number | null, name: string, viewName?: string | null, description?: string | null, clientServiceGroupCode?: string | null, levelSortingCode?: number | null, isActive?: boolean | null, path?: Array<string> | null, xmembers?: Array<{ __typename?: 'ServiceGroup', id: number, clientServiceGroupId?: number | null, name: string, viewName?: string | null, description?: string | null, clientServiceGroupCode?: string | null, levelSortingCode?: number | null, isActive?: boolean | null, path?: Array<string> | null, xmembers?: Array<{ __typename?: 'ServiceGroup', id: number, clientServiceGroupId?: number | null, name: string, viewName?: string | null, description?: string | null, clientServiceGroupCode?: string | null, levelSortingCode?: number | null, isActive?: boolean | null, path?: Array<string> | null }> | null }> | null } | null }> | null } };

export type GetServicesTypesQueryVariables = Exact<{
  filteringAttrs?: InputMaybe<ServiceTypeInput>;
  orderingAttrs?: InputMaybe<ServiceTypeInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  descSorting?: InputMaybe<Scalars['Boolean']['input']>;
}>;


export type GetServicesTypesQuery = { __typename?: 'Query', getServicesTypes: { __typename?: 'ServiceTypeResult', statusCode?: number | null, details?: string | null, data?: Array<{ __typename?: 'ServiceType', id: number, clientServiceTypeId?: number | null, name: string, description?: string | null, isActive?: boolean | null }> | null } };


export const GetUserDataDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetUserData"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getUserData"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"details"}},{"kind":"Field","name":{"kind":"Name","value":"statusCode"}},{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"additionalPhoneNumber"}},{"kind":"Field","name":{"kind":"Name","value":"birthDate"}},{"kind":"Field","name":{"kind":"Name","value":"clientCardId"}},{"kind":"Field","name":{"kind":"Name","value":"clientPersonalAreaId"}},{"kind":"Field","name":{"kind":"Name","value":"clientUserId"}},{"kind":"Field","name":{"kind":"Name","value":"created"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"firstName"}},{"kind":"Field","name":{"kind":"Name","value":"gender"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"isActive"}},{"kind":"Field","name":{"kind":"Name","value":"isVerified"}},{"kind":"Field","name":{"kind":"Name","value":"lastLogin"}},{"kind":"Field","name":{"kind":"Name","value":"lastName"}},{"kind":"Field","name":{"kind":"Name","value":"lastVisit"}},{"kind":"Field","name":{"kind":"Name","value":"patronymic"}},{"kind":"Field","name":{"kind":"Name","value":"phoneNumber"}}]}}]}}]}}]} as unknown as DocumentNode<GetUserDataQuery, GetUserDataQueryVariables>;
export const LoginFlashCallCodeDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"LoginFlashCallCode"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"phoneNumber"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"code"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"loginFlashCallCode"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"flashCallCode"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"phoneNumber"},"value":{"kind":"Variable","name":{"kind":"Name","value":"phoneNumber"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"code"},"value":{"kind":"Variable","name":{"kind":"Name","value":"code"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"token"}}]}},{"kind":"Field","name":{"kind":"Name","value":"details"}},{"kind":"Field","name":{"kind":"Name","value":"statusCode"}}]}}]}}]} as unknown as DocumentNode<LoginFlashCallCodeQuery, LoginFlashCallCodeQueryVariables>;
export const ChangePhoneByPhoneDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"ChangePhoneByPhone"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"changePhoneByPhone"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"newPhoneNumber"},"value":{"kind":"StringValue","value":"","block":false}},{"kind":"Argument","name":{"kind":"Name","value":"oldPhoneNumber"},"value":{"kind":"StringValue","value":"","block":false}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"}},{"kind":"Field","name":{"kind":"Name","value":"details"}},{"kind":"Field","name":{"kind":"Name","value":"statusCode"}}]}}]}}]} as unknown as DocumentNode<ChangePhoneByPhoneMutation, ChangePhoneByPhoneMutationVariables>;
export const PatientRegistrationDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"PatientRegistration"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"patient"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"PatientRegistration"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"patientRegistration"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"patient"},"value":{"kind":"Variable","name":{"kind":"Name","value":"patient"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"statusCode"}},{"kind":"Field","name":{"kind":"Name","value":"details"}},{"kind":"Field","name":{"kind":"Name","value":"data"}}]}}]}}]} as unknown as DocumentNode<PatientRegistrationMutation, PatientRegistrationMutationVariables>;
export const RegistrationFlashCallCodeDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"RegistrationFlashCallCode"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"flashCallCode"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"FlashCallCode"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"registrationFlashCallCode"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"flashCallCode"},"value":{"kind":"Variable","name":{"kind":"Name","value":"flashCallCode"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"token"}}]}},{"kind":"Field","name":{"kind":"Name","value":"details"}},{"kind":"Field","name":{"kind":"Name","value":"statusCode"}}]}}]}}]} as unknown as DocumentNode<RegistrationFlashCallCodeMutation, RegistrationFlashCallCodeMutationVariables>;
export const PatienLoginByPasswordDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"PatienLoginByPassword"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"password"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"phoneNumber"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"patienLoginByPassword"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"password"},"value":{"kind":"Variable","name":{"kind":"Name","value":"password"}}},{"kind":"Argument","name":{"kind":"Name","value":"phoneNumber"},"value":{"kind":"Variable","name":{"kind":"Name","value":"phoneNumber"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"details"}},{"kind":"Field","name":{"kind":"Name","value":"statusCode"}},{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"token"}}]}}]}}]}}]} as unknown as DocumentNode<PatienLoginByPasswordQuery, PatienLoginByPasswordQueryVariables>;
export const PatientLoginByPhoneDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"PatientLoginByPhone"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"phoneNumber"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"patientLoginByPhone"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"phoneNumber"},"value":{"kind":"Variable","name":{"kind":"Name","value":"phoneNumber"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"token"}}]}},{"kind":"Field","name":{"kind":"Name","value":"details"}},{"kind":"Field","name":{"kind":"Name","value":"statusCode"}}]}}]}}]} as unknown as DocumentNode<PatientLoginByPhoneQuery, PatientLoginByPhoneQueryVariables>;
export const GetCitiesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetCities"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getCities"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"details"}},{"kind":"Field","name":{"kind":"Name","value":"statusCode"}},{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"clientCityId"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"isActive"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]}}]} as unknown as DocumentNode<GetCitiesQuery, GetCitiesQueryVariables>;
export const GetDoctorsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getDoctors"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"filteringAttrs"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"DoctorInput"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"orderingAttrs"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"DoctorInput"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"skip"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"limit"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"descSorting"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getDoctors"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"filteringAttrs"},"value":{"kind":"Variable","name":{"kind":"Name","value":"filteringAttrs"}}},{"kind":"Argument","name":{"kind":"Name","value":"orderingAttrs"},"value":{"kind":"Variable","name":{"kind":"Name","value":"orderingAttrs"}}},{"kind":"Argument","name":{"kind":"Name","value":"skip"},"value":{"kind":"Variable","name":{"kind":"Name","value":"skip"}}},{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"Variable","name":{"kind":"Name","value":"limit"}}},{"kind":"Argument","name":{"kind":"Name","value":"descSorting"},"value":{"kind":"Variable","name":{"kind":"Name","value":"descSorting"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"clientDoctorId"}},{"kind":"Field","name":{"kind":"Name","value":"firstName"}},{"kind":"Field","name":{"kind":"Name","value":"lastName"}},{"kind":"Field","name":{"kind":"Name","value":"patronymic"}},{"kind":"Field","name":{"kind":"Name","value":"birthDate"}},{"kind":"Field","name":{"kind":"Name","value":"photo"}},{"kind":"Field","name":{"kind":"Name","value":"doctorCategoryId"}},{"kind":"Field","name":{"kind":"Name","value":"privatePhone"}},{"kind":"Field","name":{"kind":"Name","value":"workPhone"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"commonExperience"}},{"kind":"Field","name":{"kind":"Name","value":"isActive"}},{"kind":"Field","name":{"kind":"Name","value":"doctorCategory"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"clientDcategoryId"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"isActive"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"statusCode"}},{"kind":"Field","name":{"kind":"Name","value":"details"}}]}}]}}]} as unknown as DocumentNode<GetDoctorsQuery, GetDoctorsQueryVariables>;
export const GetDoctorsMspecialitiesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getDoctorsMspecialities"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"filteringAttrs"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"DoctorMspecialityInput"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"orderingAttrs"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"DoctorMspecialityInput"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"skip"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"limit"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"descSorting"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getDoctorsMspecialities"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"filteringAttrs"},"value":{"kind":"Variable","name":{"kind":"Name","value":"filteringAttrs"}}},{"kind":"Argument","name":{"kind":"Name","value":"orderingAttrs"},"value":{"kind":"Variable","name":{"kind":"Name","value":"orderingAttrs"}}},{"kind":"Argument","name":{"kind":"Name","value":"skip"},"value":{"kind":"Variable","name":{"kind":"Name","value":"skip"}}},{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"Variable","name":{"kind":"Name","value":"limit"}}},{"kind":"Argument","name":{"kind":"Name","value":"descSorting"},"value":{"kind":"Variable","name":{"kind":"Name","value":"descSorting"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"doctorId"}},{"kind":"Field","name":{"kind":"Name","value":"mspecialityId"}},{"kind":"Field","name":{"kind":"Name","value":"isActive"}},{"kind":"Field","name":{"kind":"Name","value":"doctor"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"clientDoctorId"}},{"kind":"Field","name":{"kind":"Name","value":"firstName"}},{"kind":"Field","name":{"kind":"Name","value":"lastName"}},{"kind":"Field","name":{"kind":"Name","value":"patronymic"}},{"kind":"Field","name":{"kind":"Name","value":"birthDate"}},{"kind":"Field","name":{"kind":"Name","value":"photo"}},{"kind":"Field","name":{"kind":"Name","value":"doctorCategoryId"}},{"kind":"Field","name":{"kind":"Name","value":"privatePhone"}},{"kind":"Field","name":{"kind":"Name","value":"workPhone"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"commonExperience"}},{"kind":"Field","name":{"kind":"Name","value":"isActive"}},{"kind":"Field","name":{"kind":"Name","value":"doctorCategory"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"clientDcategoryId"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"isActive"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"mspeciality"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"clientDoctorSpecialityId"}},{"kind":"Field","name":{"kind":"Name","value":"viewName"}},{"kind":"Field","name":{"kind":"Name","value":"searchName"}},{"kind":"Field","name":{"kind":"Name","value":"viewDescription"}},{"kind":"Field","name":{"kind":"Name","value":"searchDescription"}},{"kind":"Field","name":{"kind":"Name","value":"isActive"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"statusCode"}},{"kind":"Field","name":{"kind":"Name","value":"details"}}]}}]}}]} as unknown as DocumentNode<GetDoctorsMspecialitiesQuery, GetDoctorsMspecialitiesQueryVariables>;
export const GetMedicalCentersDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getMedicalCenters"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"filteringAttrs"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"MedicalCenterInput"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"orderingAttrs"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"MedicalCenterInput"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"skip"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"limit"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"descSorting"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getMedicalCenters"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"filteringAttrs"},"value":{"kind":"Variable","name":{"kind":"Name","value":"filteringAttrs"}}},{"kind":"Argument","name":{"kind":"Name","value":"orderingAttrs"},"value":{"kind":"Variable","name":{"kind":"Name","value":"orderingAttrs"}}},{"kind":"Argument","name":{"kind":"Name","value":"skip"},"value":{"kind":"Variable","name":{"kind":"Name","value":"skip"}}},{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"Variable","name":{"kind":"Name","value":"limit"}}},{"kind":"Argument","name":{"kind":"Name","value":"descSorting"},"value":{"kind":"Variable","name":{"kind":"Name","value":"descSorting"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"clientMcenterId"}},{"kind":"Field","name":{"kind":"Name","value":"cityId"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"address"}},{"kind":"Field","name":{"kind":"Name","value":"longitude"}},{"kind":"Field","name":{"kind":"Name","value":"latitude"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"inn"}},{"kind":"Field","name":{"kind":"Name","value":"bankBic"}},{"kind":"Field","name":{"kind":"Name","value":"settlementAccount"}},{"kind":"Field","name":{"kind":"Name","value":"correspondentAccount"}},{"kind":"Field","name":{"kind":"Name","value":"kpp"}},{"kind":"Field","name":{"kind":"Name","value":"isActive"}},{"kind":"Field","name":{"kind":"Name","value":"logo"}},{"kind":"Field","name":{"kind":"Name","value":"websiteUrl"}},{"kind":"Field","name":{"kind":"Name","value":"phoneFax"}},{"kind":"Field","name":{"kind":"Name","value":"dmsPhone"}},{"kind":"Field","name":{"kind":"Name","value":"workTime"}},{"kind":"Field","name":{"kind":"Name","value":"collectionTestsTime"}},{"kind":"Field","name":{"kind":"Name","value":"vaccinationTime"}},{"kind":"Field","name":{"kind":"Name","value":"city"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"clientCityId"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"isActive"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"statusCode"}},{"kind":"Field","name":{"kind":"Name","value":"details"}}]}}]}}]} as unknown as DocumentNode<GetMedicalCentersQuery, GetMedicalCentersQueryVariables>;
export const GetServicesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getServices"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"filteringAttrs"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"ServiceInput"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"orderingAttrs"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"ServiceInput"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"skip"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"limit"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"descSorting"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getServices"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"filteringAttrs"},"value":{"kind":"Variable","name":{"kind":"Name","value":"filteringAttrs"}}},{"kind":"Argument","name":{"kind":"Name","value":"orderingAttrs"},"value":{"kind":"Variable","name":{"kind":"Name","value":"orderingAttrs"}}},{"kind":"Argument","name":{"kind":"Name","value":"skip"},"value":{"kind":"Variable","name":{"kind":"Name","value":"skip"}}},{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"Variable","name":{"kind":"Name","value":"limit"}}},{"kind":"Argument","name":{"kind":"Name","value":"descSorting"},"value":{"kind":"Variable","name":{"kind":"Name","value":"descSorting"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"clientServiceId"}},{"kind":"Field","name":{"kind":"Name","value":"serviceTypeId"}},{"kind":"Field","name":{"kind":"Name","value":"serviceGroupId"}},{"kind":"Field","name":{"kind":"Name","value":"nameForStaff"}},{"kind":"Field","name":{"kind":"Name","value":"nameForMz"}},{"kind":"Field","name":{"kind":"Name","value":"nameForLk"}},{"kind":"Field","name":{"kind":"Name","value":"fullDescription"}},{"kind":"Field","name":{"kind":"Name","value":"appliedMethod"}},{"kind":"Field","name":{"kind":"Name","value":"preparationRules"}},{"kind":"Field","name":{"kind":"Name","value":"shortDescription"}},{"kind":"Field","name":{"kind":"Name","value":"comment"}},{"kind":"Field","name":{"kind":"Name","value":"mzCode"}},{"kind":"Field","name":{"kind":"Name","value":"executionTime"}},{"kind":"Field","name":{"kind":"Name","value":"nursesExecutionTime"}},{"kind":"Field","name":{"kind":"Name","value":"minimalAge"}},{"kind":"Field","name":{"kind":"Name","value":"maximalAge"}},{"kind":"Field","name":{"kind":"Name","value":"gender"}},{"kind":"Field","name":{"kind":"Name","value":"isUrgent"}},{"kind":"Field","name":{"kind":"Name","value":"isForHomeOnly"}},{"kind":"Field","name":{"kind":"Name","value":"selectedServiceNotification"}},{"kind":"Field","name":{"kind":"Name","value":"isComplexService"}},{"kind":"Field","name":{"kind":"Name","value":"clientServiceCode"}},{"kind":"Field","name":{"kind":"Name","value":"isActive"}},{"kind":"Field","name":{"kind":"Name","value":"serviceType"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"clientServiceTypeId"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"isActive"}}]}},{"kind":"Field","name":{"kind":"Name","value":"serviceGroup"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"clientServiceGroupId"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"viewName"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"clientServiceGroupCode"}},{"kind":"Field","name":{"kind":"Name","value":"levelSortingCode"}},{"kind":"Field","name":{"kind":"Name","value":"isActive"}},{"kind":"Field","name":{"kind":"Name","value":"xmembers"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"clientServiceGroupId"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"viewName"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"clientServiceGroupCode"}},{"kind":"Field","name":{"kind":"Name","value":"levelSortingCode"}},{"kind":"Field","name":{"kind":"Name","value":"isActive"}},{"kind":"Field","name":{"kind":"Name","value":"xmembers"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"clientServiceGroupId"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"viewName"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"clientServiceGroupCode"}},{"kind":"Field","name":{"kind":"Name","value":"levelSortingCode"}},{"kind":"Field","name":{"kind":"Name","value":"isActive"}},{"kind":"Field","name":{"kind":"Name","value":"path"}}]}},{"kind":"Field","name":{"kind":"Name","value":"path"}}]}},{"kind":"Field","name":{"kind":"Name","value":"path"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"statusCode"}},{"kind":"Field","name":{"kind":"Name","value":"details"}}]}}]}}]} as unknown as DocumentNode<GetServicesQuery, GetServicesQueryVariables>;
export const GetServicesTypesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getServicesTypes"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"filteringAttrs"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"ServiceTypeInput"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"orderingAttrs"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"ServiceTypeInput"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"skip"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"limit"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"descSorting"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getServicesTypes"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"filteringAttrs"},"value":{"kind":"Variable","name":{"kind":"Name","value":"filteringAttrs"}}},{"kind":"Argument","name":{"kind":"Name","value":"orderingAttrs"},"value":{"kind":"Variable","name":{"kind":"Name","value":"orderingAttrs"}}},{"kind":"Argument","name":{"kind":"Name","value":"skip"},"value":{"kind":"Variable","name":{"kind":"Name","value":"skip"}}},{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"Variable","name":{"kind":"Name","value":"limit"}}},{"kind":"Argument","name":{"kind":"Name","value":"descSorting"},"value":{"kind":"Variable","name":{"kind":"Name","value":"descSorting"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"clientServiceTypeId"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"isActive"}}]}},{"kind":"Field","name":{"kind":"Name","value":"statusCode"}},{"kind":"Field","name":{"kind":"Name","value":"details"}}]}}]}}]} as unknown as DocumentNode<GetServicesTypesQuery, GetServicesTypesQueryVariables>;