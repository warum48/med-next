import { UnstyledButton, Group, Avatar, Text, rem, ThemeIcon, Box, Tooltip } from '@mantine/core';
import { IconChevronRight, IconUserCircle } from '@tabler/icons-react';
import classes from './UserButton.module.css';
import { RoutesTypes } from '@/global/ROUTES';
//import router from 'next/router';
import { usePathname, useRouter } from 'next/navigation';
import { GlobalContext } from '@/context/ContextGlobal';
import React from 'react';
import { useQuery } from '@apollo/client';
import { GET_USER_DATA } from '@/apollo/queries/accounts/getUserData';
import { formatPhoneNumber } from '@/utils/formatPhone';
import { useFetch } from '@/services/useFetch';
import { GetUserDataQuery } from '@/__generated__/graphql';

export function UserButton() {
  const router = useRouter();
  const pathname = usePathname();
  const hasPhoto = false;
  const {navBarCollapsed, isDemo} = React.useContext(GlobalContext);
  const {
    data: data_user_info,
    loading: loading_user_info,
    error: error_user_info,
    refetch: refetch_user_info,
    networkStatus: networkStatus_user_info,
  } =
  isDemo
  ? useFetch<GetUserDataQuery>('/mock/getUserData.json')
  :
    useQuery(GET_USER_DATA, {
      context: { clientName: 'accounts' },
    });
  return (
    <Box className={
      //!!pathname == link 
     // pathname.replace('/','').includes(link.replace('/','')) 
     pathname == RoutesTypes.Profile//link 
     //|| pathname.substring(1, pathname.length).includes(link.substring(1, link.length)) && link.substring(1, link.length) != ''
      ? classes.active + ' ' + classes.level1link : classes.level1link
    }>
      <Tooltip label={"Профиль"} disabled={!navBarCollapsed}  offset={-5} transitionProps={{ transition: 'pop', duration: 300 }}>
    <UnstyledButton
      className={`active ${classes.user}`}
      
      onClick={() => {
        router.push(RoutesTypes.Profile);
      }}
    >
      <Group>
        {hasPhoto ? (
          <Avatar
            src="https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=255&q=80"
            radius="xl"
            ml={{ base: '0px', xs: 'md' }} 
          />
        ) : (
          <ThemeIcon variant="light" size={30} radius="xl" p={'0.1rem'} ml={{ base: '0px', xs: 'md' }} >
            <IconUserCircle />
          </ThemeIcon>
        )}
        {!navBarCollapsed &&
        <div style={{ flex: 1 }}>
          <Text size="sm" fw={500}>
            {data_user_info?.getUserData?.data?.firstName}
          </Text>

          <Text c="dimmed" size="xs">
          {data_user_info?.getUserData?.data?.email}
          </Text>

          <Text c="dimmed" size="xs">
          {formatPhoneNumber(data_user_info?.getUserData?.data?.phoneNumber)}
          </Text>
        </div>
}

        {/* <IconChevronRight style={{ width: rem(14), height: rem(14) }} stroke={1.5} /> */}
      </Group>
    </UnstyledButton>
    </Tooltip>
    </Box>
  );
}
