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

export type DateTimeFilteringInterval = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  less?: InputMaybe<Scalars['DateTime']['input']>;
  more?: InputMaybe<Scalars['Int']['input']>;
};

export type Doctor = {
  __typename?: 'Doctor';
  clientDoctorId?: Maybe<Scalars['Int']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  fio: Scalars['String']['output'];
  id: Scalars['Int']['output'];
  isActive?: Maybe<Scalars['Boolean']['output']>;
  medicalCenter?: Maybe<MedicalCenter>;
  medicalCenterId: Scalars['Int']['output'];
  medicalDepartment?: Maybe<MedicalDepartment>;
  medicalDepartmentId?: Maybe<Scalars['Int']['output']>;
  photo?: Maybe<Scalars['String']['output']>;
};

export type DoctorInput = {
  clientDoctorId?: InputMaybe<Scalars['Int']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  fio?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  medicalCenterId?: InputMaybe<Scalars['Int']['input']>;
  medicalDepartmentId?: InputMaybe<Scalars['Int']['input']>;
  photo?: InputMaybe<Scalars['String']['input']>;
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

export type DoctorResult = {
  __typename?: 'DoctorResult';
  data?: Maybe<Array<Doctor>>;
  details?: Maybe<Scalars['String']['output']>;
  statusCode?: Maybe<Scalars['Int']['output']>;
};

export type DoctorSchedule = {
  __typename?: 'DoctorSchedule';
  description?: Maybe<Scalars['String']['output']>;
  doctor?: Maybe<Doctor>;
  doctorId: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  isAvailable?: Maybe<Scalars['Boolean']['output']>;
  palnVisitDuration: Scalars['Int']['output'];
  planVisitTime?: Maybe<Scalars['DateTime']['output']>;
};

export type DoctorScheduleInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  doctorId?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  isAvailable?: InputMaybe<Scalars['Boolean']['input']>;
  palnVisitDuration?: InputMaybe<IntFilteringInterval>;
  planVisitTime?: InputMaybe<DateTimeFilteringInterval>;
};

export type DoctorScheduleResult = {
  __typename?: 'DoctorScheduleResult';
  data?: Maybe<Array<DoctorSchedule>>;
  details?: Maybe<Scalars['String']['output']>;
  statusCode?: Maybe<Scalars['Int']['output']>;
};

export type DoctorService = {
  __typename?: 'DoctorService';
  doctor?: Maybe<Doctor>;
  doctorId: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  isActive?: Maybe<Scalars['Boolean']['output']>;
  service?: Maybe<Service>;
  serviceId: Scalars['Int']['output'];
};

export type DoctorServiceInput = {
  doctorId?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  serviceId?: InputMaybe<Scalars['Int']['input']>;
};

export type DoctorServiceResult = {
  __typename?: 'DoctorServiceResult';
  data?: Maybe<Array<DoctorService>>;
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

export type MedicalCenterInput = {
  address?: InputMaybe<Scalars['String']['input']>;
  bankBic?: InputMaybe<Scalars['String']['input']>;
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

export type MedicalDepartment = {
  __typename?: 'MedicalDepartment';
  clientDepartmentId?: Maybe<Scalars['Int']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['Int']['output'];
  isActive?: Maybe<Scalars['Boolean']['output']>;
  name: Scalars['String']['output'];
};

export type MedicalSpeciality = {
  __typename?: 'MedicalSpeciality';
  clientDoctorSpecialityId?: Maybe<Scalars['Int']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['Int']['output'];
  isActive?: Maybe<Scalars['Boolean']['output']>;
  name: Scalars['String']['output'];
};

export type MedicalSpecialityInput = {
  clientDoctorSpecialityId?: InputMaybe<Scalars['Int']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

export type MedicalSpecialityResult = {
  __typename?: 'MedicalSpecialityResult';
  data?: Maybe<Array<MedicalSpeciality>>;
  details?: Maybe<Scalars['String']['output']>;
  statusCode?: Maybe<Scalars['Int']['output']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  changePasswordByPhone: RequestResult;
  changePasswordFlashCallCode: RequestResult;
  changePhoneByPhone: RequestResult;
  changePhoneFlashCallCode: RequestResult;
  patientRegistration: RequestResult;
  registrationFlashCallCode: LoginResult;
  test: RequestResult;
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


export type MutationPatientRegistrationArgs = {
  patient: PatientRegistration;
};


export type MutationRegistrationFlashCallCodeArgs = {
  flashCallCode: FlashCallCode;
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

export type Price = {
  __typename?: 'Price';
  clientPriceId?: Maybe<Scalars['Int']['output']>;
  id: Scalars['Int']['output'];
  medicalCenter?: Maybe<MedicalCenter>;
  medicalCenterId: Scalars['Int']['output'];
  medicalDepartment?: Maybe<MedicalDepartment>;
  medicalDepartmentId?: Maybe<Scalars['Int']['output']>;
  price: Scalars['Float']['output'];
  service?: Maybe<Service>;
  serviceId: Scalars['Int']['output'];
};

export type PriceInput = {
  clientPriceId?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  medicalCenterId?: InputMaybe<Scalars['Int']['input']>;
  medicalDepartmentId?: InputMaybe<Scalars['Int']['input']>;
  price?: InputMaybe<IntFilteringInterval>;
  serviceId?: InputMaybe<Scalars['Int']['input']>;
};

export type PriceResult = {
  __typename?: 'PriceResult';
  data?: Maybe<Array<Price>>;
  details?: Maybe<Scalars['String']['output']>;
  statusCode?: Maybe<Scalars['Int']['output']>;
};

export type Query = {
  __typename?: 'Query';
  getCities: CityResult;
  getDoctors: DoctorResult;
  getDoctorsMspecialities: DoctorMspecialityResult;
  getDoctorsServices: DoctorServiceResult;
  getMedicalCenters: MedicalCenterResult;
  getMedicalSpecialities: MedicalSpecialityResult;
  getOdctorSchedule: DoctorScheduleResult;
  getPrices: PriceResult;
  getServices: ServiceResult;
  getServicesDirections: ServiceDirectionResult;
  getServicesTypes: ServiceTypeResult;
  getUserData: UserData;
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


export type QueryGetDoctorsServicesArgs = {
  descSorting?: InputMaybe<Scalars['Boolean']['input']>;
  filteringAttrs?: InputMaybe<DoctorServiceInput>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  orderingAttrs?: InputMaybe<DoctorServiceInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetMedicalCentersArgs = {
  descSorting?: InputMaybe<Scalars['Boolean']['input']>;
  filteringAttrs?: InputMaybe<MedicalCenterInput>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  orderingAttrs?: InputMaybe<MedicalCenterInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetMedicalSpecialitiesArgs = {
  descSorting?: InputMaybe<Scalars['Boolean']['input']>;
  filteringAttrs?: InputMaybe<MedicalSpecialityInput>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  orderingAttrs?: InputMaybe<MedicalSpecialityInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetOdctorScheduleArgs = {
  descSorting?: InputMaybe<Scalars['Boolean']['input']>;
  filteringAttrs?: InputMaybe<DoctorScheduleInput>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  orderingAttrs?: InputMaybe<DoctorScheduleInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetPricesArgs = {
  descSorting?: InputMaybe<Scalars['Boolean']['input']>;
  filteringAttrs?: InputMaybe<PriceInput>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  orderingAttrs?: InputMaybe<PriceInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetServicesArgs = {
  descSorting?: InputMaybe<Scalars['Boolean']['input']>;
  filteringAttrs?: InputMaybe<ServiceInput>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  orderingAttrs?: InputMaybe<ServiceInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetServicesDirectionsArgs = {
  descSorting?: InputMaybe<Scalars['Boolean']['input']>;
  filteringAttrs?: InputMaybe<ServiceDirectionInput>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  orderingAttrs?: InputMaybe<ServiceDirectionInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetServicesTypesArgs = {
  descSorting?: InputMaybe<Scalars['Boolean']['input']>;
  filteringAttrs?: InputMaybe<ServiceTypeInput>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  orderingAttrs?: InputMaybe<ServiceTypeInput>;
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
  clientServiceId?: Maybe<Scalars['Int']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['Int']['output'];
  isActive?: Maybe<Scalars['Boolean']['output']>;
  maximalAge: Scalars['Int']['output'];
  minimalAge: Scalars['Int']['output'];
  name: Scalars['String']['output'];
  price?: Maybe<Price>;
  priceId?: Maybe<Scalars['Int']['output']>;
  serviceDirection?: Maybe<ServiceDirection>;
  serviceDirectionId: Scalars['Int']['output'];
  serviceType?: Maybe<ServiceType>;
  serviceTypeId: Scalars['Int']['output'];
};

export type ServiceDirection = {
  __typename?: 'ServiceDirection';
  clientSdirectionId?: Maybe<Scalars['Int']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['Int']['output'];
  isActive?: Maybe<Scalars['Boolean']['output']>;
  name: Scalars['String']['output'];
};

export type ServiceDirectionInput = {
  clientSdirectionId?: InputMaybe<Scalars['Int']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

export type ServiceDirectionResult = {
  __typename?: 'ServiceDirectionResult';
  data?: Maybe<Array<ServiceDirection>>;
  details?: Maybe<Scalars['String']['output']>;
  statusCode?: Maybe<Scalars['Int']['output']>;
};

export type ServiceInput = {
  clientServiceId?: InputMaybe<Scalars['Int']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  maximalAge?: InputMaybe<IntFilteringInterval>;
  minimalAge?: InputMaybe<IntFilteringInterval>;
  name?: InputMaybe<Scalars['String']['input']>;
  priceId?: InputMaybe<Scalars['Int']['input']>;
  serviceDirectionId?: InputMaybe<Scalars['Int']['input']>;
  serviceTypeId?: InputMaybe<Scalars['Int']['input']>;
};

export type ServiceResult = {
  __typename?: 'ServiceResult';
  data?: Maybe<Array<Service>>;
  details?: Maybe<Scalars['String']['output']>;
  statusCode?: Maybe<Scalars['Int']['output']>;
};

export type ServiceType = {
  __typename?: 'ServiceType';
  clientStypeId?: Maybe<Scalars['Int']['output']>;
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
}>;


export type GetDoctorsQuery = { __typename?: 'Query', getDoctors: { __typename?: 'DoctorResult', statusCode?: number | null, details?: string | null, data?: Array<{ __typename?: 'Doctor', id: number, clientDoctorId?: number | null, medicalCenterId: number, medicalDepartmentId?: number | null, fio: string, description?: string | null, photo?: string | null, isActive?: boolean | null, medicalCenter?: { __typename?: 'MedicalCenter', id: number, clientMcenterId?: number | null, cityId: number, name: string, address: string, longitude?: number | null, latitude?: number | null, description?: string | null, inn: string, bankBic: string, settlementAccount: string, correspondentAccount: string, kpp: string, isActive?: boolean | null, logo?: string | null, websiteUrl?: string | null, phoneFax: string, dmsPhone?: string | null, workTime: string, collectionTestsTime?: string | null, vaccinationTime?: string | null, city?: { __typename?: 'City', id: number, clientCityId?: number | null, name: string, isActive?: boolean | null } | null } | null, medicalDepartment?: { __typename?: 'MedicalDepartment', id: number, clientDepartmentId?: number | null, name: string, description?: string | null, isActive?: boolean | null } | null }> | null } };

export type GetDoctorsServicesQueryVariables = Exact<{
  filteringAttrs?: InputMaybe<DoctorServiceInput>;
  orderingAttrs?: InputMaybe<DoctorServiceInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  descSorting?: InputMaybe<Scalars['Boolean']['input']>;
}>;


export type GetDoctorsServicesQuery = { __typename?: 'Query', getDoctorsServices: { __typename?: 'DoctorServiceResult', statusCode?: number | null, details?: string | null, data?: Array<{ __typename?: 'DoctorService', id: number, doctorId: number, serviceId: number, isActive?: boolean | null, doctor?: { __typename?: 'Doctor', id: number, clientDoctorId?: number | null, medicalCenterId: number, medicalDepartmentId?: number | null, fio: string, description?: string | null, photo?: string | null, isActive?: boolean | null } | null, service?: { __typename?: 'Service', id: number, clientServiceId?: number | null, serviceDirectionId: number, serviceTypeId: number, name: string, description?: string | null, isActive?: boolean | null, minimalAge: number, maximalAge: number, priceId?: number | null, price?: { __typename?: 'Price', id: number, clientPriceId?: number | null, serviceId: number, medicalCenterId: number, medicalDepartmentId?: number | null, price: number } | null } | null }> | null } };

export type GetMedicalCentersQueryVariables = Exact<{
  filteringAttrs?: InputMaybe<MedicalCenterInput>;
  orderingAttrs?: InputMaybe<MedicalCenterInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
}>;


export type GetMedicalCentersQuery = { __typename?: 'Query', getMedicalCenters: { __typename?: 'MedicalCenterResult', statusCode?: number | null, details?: string | null, data?: Array<{ __typename?: 'MedicalCenter', id: number, clientMcenterId?: number | null, cityId: number, name: string, address: string, longitude?: number | null, latitude?: number | null, description?: string | null, inn: string, bankBic: string, settlementAccount: string, correspondentAccount: string, kpp: string, isActive?: boolean | null, logo?: string | null, websiteUrl?: string | null, phoneFax: string, dmsPhone?: string | null, workTime: string, collectionTestsTime?: string | null, vaccinationTime?: string | null, city?: { __typename?: 'City', id: number, clientCityId?: number | null, name: string, isActive?: boolean | null } | null }> | null } };

export type GetServicesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetServicesQuery = { __typename?: 'Query', getServices: { __typename?: 'ServiceResult', details?: string | null, statusCode?: number | null, data?: Array<{ __typename?: 'Service', id: number, name: string, description?: string | null }> | null } };

export type GetServicesDirectionsQueryVariables = Exact<{
  filteringAttrs?: InputMaybe<ServiceDirectionInput>;
  orderingAttrs?: InputMaybe<ServiceDirectionInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
}>;


export type GetServicesDirectionsQuery = { __typename?: 'Query', getServicesDirections: { __typename?: 'ServiceDirectionResult', statusCode?: number | null, details?: string | null, data?: Array<{ __typename?: 'ServiceDirection', id: number, clientSdirectionId?: number | null, name: string, description?: string | null, isActive?: boolean | null }> | null } };

export type GetServicesTypesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetServicesTypesQuery = { __typename?: 'Query', getServicesTypes: { __typename?: 'ServiceTypeResult', details?: string | null, statusCode?: number | null, data?: Array<{ __typename?: 'ServiceType', name: string, isActive?: boolean | null, id: number, description?: string | null, clientStypeId?: number | null }> | null } };


export const GetUserDataDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetUserData"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getUserData"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"details"}},{"kind":"Field","name":{"kind":"Name","value":"statusCode"}},{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"additionalPhoneNumber"}},{"kind":"Field","name":{"kind":"Name","value":"birthDate"}},{"kind":"Field","name":{"kind":"Name","value":"clientCardId"}},{"kind":"Field","name":{"kind":"Name","value":"clientPersonalAreaId"}},{"kind":"Field","name":{"kind":"Name","value":"clientUserId"}},{"kind":"Field","name":{"kind":"Name","value":"created"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"firstName"}},{"kind":"Field","name":{"kind":"Name","value":"gender"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"isActive"}},{"kind":"Field","name":{"kind":"Name","value":"isVerified"}},{"kind":"Field","name":{"kind":"Name","value":"lastLogin"}},{"kind":"Field","name":{"kind":"Name","value":"lastName"}},{"kind":"Field","name":{"kind":"Name","value":"lastVisit"}},{"kind":"Field","name":{"kind":"Name","value":"patronymic"}},{"kind":"Field","name":{"kind":"Name","value":"phoneNumber"}}]}}]}}]}}]} as unknown as DocumentNode<GetUserDataQuery, GetUserDataQueryVariables>;
export const LoginFlashCallCodeDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"LoginFlashCallCode"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"phoneNumber"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"code"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"loginFlashCallCode"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"flashCallCode"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"phoneNumber"},"value":{"kind":"Variable","name":{"kind":"Name","value":"phoneNumber"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"code"},"value":{"kind":"Variable","name":{"kind":"Name","value":"code"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"token"}}]}},{"kind":"Field","name":{"kind":"Name","value":"details"}},{"kind":"Field","name":{"kind":"Name","value":"statusCode"}}]}}]}}]} as unknown as DocumentNode<LoginFlashCallCodeQuery, LoginFlashCallCodeQueryVariables>;
export const ChangePhoneByPhoneDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"ChangePhoneByPhone"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"changePhoneByPhone"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"newPhoneNumber"},"value":{"kind":"StringValue","value":"","block":false}},{"kind":"Argument","name":{"kind":"Name","value":"oldPhoneNumber"},"value":{"kind":"StringValue","value":"","block":false}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"}},{"kind":"Field","name":{"kind":"Name","value":"details"}},{"kind":"Field","name":{"kind":"Name","value":"statusCode"}}]}}]}}]} as unknown as DocumentNode<ChangePhoneByPhoneMutation, ChangePhoneByPhoneMutationVariables>;
export const PatientRegistrationDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"PatientRegistration"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"patient"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"PatientRegistration"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"patientRegistration"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"patient"},"value":{"kind":"Variable","name":{"kind":"Name","value":"patient"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"statusCode"}},{"kind":"Field","name":{"kind":"Name","value":"details"}},{"kind":"Field","name":{"kind":"Name","value":"data"}}]}}]}}]} as unknown as DocumentNode<PatientRegistrationMutation, PatientRegistrationMutationVariables>;
export const RegistrationFlashCallCodeDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"RegistrationFlashCallCode"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"flashCallCode"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"FlashCallCode"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"registrationFlashCallCode"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"flashCallCode"},"value":{"kind":"Variable","name":{"kind":"Name","value":"flashCallCode"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"token"}}]}},{"kind":"Field","name":{"kind":"Name","value":"details"}},{"kind":"Field","name":{"kind":"Name","value":"statusCode"}}]}}]}}]} as unknown as DocumentNode<RegistrationFlashCallCodeMutation, RegistrationFlashCallCodeMutationVariables>;
export const PatienLoginByPasswordDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"PatienLoginByPassword"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"password"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"phoneNumber"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"patienLoginByPassword"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"password"},"value":{"kind":"Variable","name":{"kind":"Name","value":"password"}}},{"kind":"Argument","name":{"kind":"Name","value":"phoneNumber"},"value":{"kind":"Variable","name":{"kind":"Name","value":"phoneNumber"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"details"}},{"kind":"Field","name":{"kind":"Name","value":"statusCode"}},{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"token"}}]}}]}}]}}]} as unknown as DocumentNode<PatienLoginByPasswordQuery, PatienLoginByPasswordQueryVariables>;
export const PatientLoginByPhoneDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"PatientLoginByPhone"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"phoneNumber"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"patientLoginByPhone"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"phoneNumber"},"value":{"kind":"Variable","name":{"kind":"Name","value":"phoneNumber"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"token"}}]}},{"kind":"Field","name":{"kind":"Name","value":"details"}},{"kind":"Field","name":{"kind":"Name","value":"statusCode"}}]}}]}}]} as unknown as DocumentNode<PatientLoginByPhoneQuery, PatientLoginByPhoneQueryVariables>;
export const GetCitiesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetCities"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getCities"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"details"}},{"kind":"Field","name":{"kind":"Name","value":"statusCode"}},{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"clientCityId"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"isActive"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]}}]} as unknown as DocumentNode<GetCitiesQuery, GetCitiesQueryVariables>;
export const GetDoctorsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getDoctors"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"filteringAttrs"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"DoctorInput"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"orderingAttrs"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"DoctorInput"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"skip"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"limit"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getDoctors"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"filteringAttrs"},"value":{"kind":"Variable","name":{"kind":"Name","value":"filteringAttrs"}}},{"kind":"Argument","name":{"kind":"Name","value":"orderingAttrs"},"value":{"kind":"Variable","name":{"kind":"Name","value":"orderingAttrs"}}},{"kind":"Argument","name":{"kind":"Name","value":"skip"},"value":{"kind":"Variable","name":{"kind":"Name","value":"skip"}}},{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"Variable","name":{"kind":"Name","value":"limit"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"clientDoctorId"}},{"kind":"Field","name":{"kind":"Name","value":"medicalCenterId"}},{"kind":"Field","name":{"kind":"Name","value":"medicalDepartmentId"}},{"kind":"Field","name":{"kind":"Name","value":"fio"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"photo"}},{"kind":"Field","name":{"kind":"Name","value":"isActive"}},{"kind":"Field","name":{"kind":"Name","value":"medicalCenter"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"clientMcenterId"}},{"kind":"Field","name":{"kind":"Name","value":"cityId"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"address"}},{"kind":"Field","name":{"kind":"Name","value":"longitude"}},{"kind":"Field","name":{"kind":"Name","value":"latitude"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"inn"}},{"kind":"Field","name":{"kind":"Name","value":"bankBic"}},{"kind":"Field","name":{"kind":"Name","value":"settlementAccount"}},{"kind":"Field","name":{"kind":"Name","value":"correspondentAccount"}},{"kind":"Field","name":{"kind":"Name","value":"kpp"}},{"kind":"Field","name":{"kind":"Name","value":"isActive"}},{"kind":"Field","name":{"kind":"Name","value":"logo"}},{"kind":"Field","name":{"kind":"Name","value":"websiteUrl"}},{"kind":"Field","name":{"kind":"Name","value":"phoneFax"}},{"kind":"Field","name":{"kind":"Name","value":"dmsPhone"}},{"kind":"Field","name":{"kind":"Name","value":"workTime"}},{"kind":"Field","name":{"kind":"Name","value":"collectionTestsTime"}},{"kind":"Field","name":{"kind":"Name","value":"vaccinationTime"}},{"kind":"Field","name":{"kind":"Name","value":"city"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"clientCityId"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"isActive"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"medicalDepartment"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"clientDepartmentId"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"isActive"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"statusCode"}},{"kind":"Field","name":{"kind":"Name","value":"details"}}]}}]}}]} as unknown as DocumentNode<GetDoctorsQuery, GetDoctorsQueryVariables>;
export const GetDoctorsServicesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getDoctorsServices"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"filteringAttrs"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"DoctorServiceInput"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"orderingAttrs"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"DoctorServiceInput"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"skip"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"limit"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"descSorting"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getDoctorsServices"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"filteringAttrs"},"value":{"kind":"Variable","name":{"kind":"Name","value":"filteringAttrs"}}},{"kind":"Argument","name":{"kind":"Name","value":"orderingAttrs"},"value":{"kind":"Variable","name":{"kind":"Name","value":"orderingAttrs"}}},{"kind":"Argument","name":{"kind":"Name","value":"skip"},"value":{"kind":"Variable","name":{"kind":"Name","value":"skip"}}},{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"Variable","name":{"kind":"Name","value":"limit"}}},{"kind":"Argument","name":{"kind":"Name","value":"descSorting"},"value":{"kind":"Variable","name":{"kind":"Name","value":"descSorting"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"doctorId"}},{"kind":"Field","name":{"kind":"Name","value":"serviceId"}},{"kind":"Field","name":{"kind":"Name","value":"isActive"}},{"kind":"Field","name":{"kind":"Name","value":"doctor"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"clientDoctorId"}},{"kind":"Field","name":{"kind":"Name","value":"medicalCenterId"}},{"kind":"Field","name":{"kind":"Name","value":"medicalDepartmentId"}},{"kind":"Field","name":{"kind":"Name","value":"fio"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"photo"}},{"kind":"Field","name":{"kind":"Name","value":"isActive"}}]}},{"kind":"Field","name":{"kind":"Name","value":"service"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"clientServiceId"}},{"kind":"Field","name":{"kind":"Name","value":"serviceDirectionId"}},{"kind":"Field","name":{"kind":"Name","value":"serviceTypeId"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"isActive"}},{"kind":"Field","name":{"kind":"Name","value":"minimalAge"}},{"kind":"Field","name":{"kind":"Name","value":"maximalAge"}},{"kind":"Field","name":{"kind":"Name","value":"priceId"}},{"kind":"Field","name":{"kind":"Name","value":"price"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"clientPriceId"}},{"kind":"Field","name":{"kind":"Name","value":"serviceId"}},{"kind":"Field","name":{"kind":"Name","value":"medicalCenterId"}},{"kind":"Field","name":{"kind":"Name","value":"medicalDepartmentId"}},{"kind":"Field","name":{"kind":"Name","value":"price"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"statusCode"}},{"kind":"Field","name":{"kind":"Name","value":"details"}}]}}]}}]} as unknown as DocumentNode<GetDoctorsServicesQuery, GetDoctorsServicesQueryVariables>;
export const GetMedicalCentersDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getMedicalCenters"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"filteringAttrs"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"MedicalCenterInput"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"orderingAttrs"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"MedicalCenterInput"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"skip"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"limit"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getMedicalCenters"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"filteringAttrs"},"value":{"kind":"Variable","name":{"kind":"Name","value":"filteringAttrs"}}},{"kind":"Argument","name":{"kind":"Name","value":"orderingAttrs"},"value":{"kind":"Variable","name":{"kind":"Name","value":"orderingAttrs"}}},{"kind":"Argument","name":{"kind":"Name","value":"skip"},"value":{"kind":"Variable","name":{"kind":"Name","value":"skip"}}},{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"Variable","name":{"kind":"Name","value":"limit"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"clientMcenterId"}},{"kind":"Field","name":{"kind":"Name","value":"cityId"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"address"}},{"kind":"Field","name":{"kind":"Name","value":"longitude"}},{"kind":"Field","name":{"kind":"Name","value":"latitude"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"inn"}},{"kind":"Field","name":{"kind":"Name","value":"bankBic"}},{"kind":"Field","name":{"kind":"Name","value":"settlementAccount"}},{"kind":"Field","name":{"kind":"Name","value":"correspondentAccount"}},{"kind":"Field","name":{"kind":"Name","value":"kpp"}},{"kind":"Field","name":{"kind":"Name","value":"isActive"}},{"kind":"Field","name":{"kind":"Name","value":"logo"}},{"kind":"Field","name":{"kind":"Name","value":"websiteUrl"}},{"kind":"Field","name":{"kind":"Name","value":"phoneFax"}},{"kind":"Field","name":{"kind":"Name","value":"dmsPhone"}},{"kind":"Field","name":{"kind":"Name","value":"workTime"}},{"kind":"Field","name":{"kind":"Name","value":"collectionTestsTime"}},{"kind":"Field","name":{"kind":"Name","value":"vaccinationTime"}},{"kind":"Field","name":{"kind":"Name","value":"city"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"clientCityId"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"isActive"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"statusCode"}},{"kind":"Field","name":{"kind":"Name","value":"details"}}]}}]}}]} as unknown as DocumentNode<GetMedicalCentersQuery, GetMedicalCentersQueryVariables>;
export const GetServicesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetServices"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getServices"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"details"}},{"kind":"Field","name":{"kind":"Name","value":"statusCode"}},{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}}]}}]}}]}}]} as unknown as DocumentNode<GetServicesQuery, GetServicesQueryVariables>;
export const GetServicesDirectionsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getServicesDirections"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"filteringAttrs"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"ServiceDirectionInput"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"orderingAttrs"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"ServiceDirectionInput"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"skip"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"limit"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getServicesDirections"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"filteringAttrs"},"value":{"kind":"Variable","name":{"kind":"Name","value":"filteringAttrs"}}},{"kind":"Argument","name":{"kind":"Name","value":"orderingAttrs"},"value":{"kind":"Variable","name":{"kind":"Name","value":"orderingAttrs"}}},{"kind":"Argument","name":{"kind":"Name","value":"skip"},"value":{"kind":"Variable","name":{"kind":"Name","value":"skip"}}},{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"Variable","name":{"kind":"Name","value":"limit"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"clientSdirectionId"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"isActive"}}]}},{"kind":"Field","name":{"kind":"Name","value":"statusCode"}},{"kind":"Field","name":{"kind":"Name","value":"details"}}]}}]}}]} as unknown as DocumentNode<GetServicesDirectionsQuery, GetServicesDirectionsQueryVariables>;
export const GetServicesTypesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetServicesTypes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getServicesTypes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"details"}},{"kind":"Field","name":{"kind":"Name","value":"statusCode"}},{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"isActive"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"clientStypeId"}}]}}]}}]}}]} as unknown as DocumentNode<GetServicesTypesQuery, GetServicesTypesQueryVariables>;