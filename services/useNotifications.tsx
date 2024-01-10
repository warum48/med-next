import { ApolloError } from '@apollo/client';
import { notifications } from '@mantine/notifications';
import React from 'react';


type TProps = {
  text: string;
  data: unknown | null | undefined;
  data_code: number | null | undefined;
  data_details: string | null | undefined;
  error: ApolloError | undefined;
  onSuccess: () => void;
};

export const useMutationNotifications = ({ text, data, data_code, data_details, error, onSuccess }: TProps) => {
  React.useEffect(() => {
    if (data) {
      if (data_code == 200) {
        onSuccess();
        console.log('added');
        notifications.show({
          title: 'Готово',
          message: text,
        });
      } else {
        notifications.show({
          color: 'orange',
          title: 'Ошибка',
          message: data_details || 'Неизвестная ошибка',
        });
      }
    }
  }, [data]);

  React.useEffect(() => {
    if (error) {
      //    onAdd();
      notifications.show({
        color: 'red',
        title: 'Ошибка',
        message: error?.message || 'Неизвестная ошибка',
      });
    }
  }, [error]);
};
