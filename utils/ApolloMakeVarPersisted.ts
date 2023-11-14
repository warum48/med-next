import { makeVar, ReactiveVar } from '@apollo/client';
import { isString } from 'lodash';

const getCleanValueForStorage = (value: unknown) => {
  return isString(value) ? value : JSON.stringify(value);
};

const makeVarPersisted = <T>(initialValue: T, storageName: string): ReactiveVar<T> => {
  let value = initialValue;

  // Try to fetch the value from local storage
  const previousValue = localStorage.getItem(storageName);
  if (previousValue !== null) {
    try {
      const parsed = JSON.parse(previousValue);
      value = parsed;
    } catch {
      // It wasn't JSON, assume a valid value
      value = (previousValue as unknown) as T;
    }
  }

  // Create a reactive var with stored/initial value
  const rv = makeVar<T>(value);

  const onNextChange = (newValue: T | undefined) => {
    try {
      // Try to add the value to local storage
      if (newValue === undefined) {
        localStorage.removeItem(storageName);
      } else {
        localStorage.setItem(storageName, getCleanValueForStorage(newValue));
      }
    } catch {
      // ignore
    }

    // Re-register for the next change
    rv.onNextChange(onNextChange);
  };

  // Register for the first change
  rv.onNextChange(onNextChange);

  return rv;
};

export default makeVarPersisted;

//source
//https://github.com/apollographql/apollo-cache-persist/issues/361#issuecomment-912545495