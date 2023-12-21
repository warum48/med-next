import { GET_USER_DATA } from '@/apollo/queries/accounts/getUserData';
import { useQuery } from '@apollo/client';
import * as React from 'react';

export const useUser = () => {
    const [curClinic, setCurClinic] = React.useState(null); //temp while server is developing
    function getCurClinic() {
        return curClinic;
    }
    
    const {
        data: data_config, //DoctorResult
        loading: loading_config,
        error: error_config,
        refetch: refetch_config,
        networkStatus: networkStatus_config,
      } = useQuery(GET_USER_DATA, {
        context: { clientName: 'admin' },
        notifyOnNetworkStatusChange: true,
      });

      return {
        getCurClinic,
        setCurClinic
      }
}