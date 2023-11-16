import { UnstyledButton, Group, Avatar, Text, rem } from '@mantine/core';
import { IconChevronRight } from '@tabler/icons-react';
import classes from './UserButton.module.css';
import { RoutesTypes } from '@/global/ROUTES';
//import router from 'next/router';
import { useRouter } from 'next/navigation';

export function UserButton() {
  const router = useRouter();
  return (
    <UnstyledButton className={classes.user} onClick={() => {router.push(RoutesTypes.Profile)}}>
      <Group>
        <Avatar
          src="https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=255&q=80"
          radius="xl"
        />

        <div style={{ flex: 1 }}>
          <Text size="sm" fw={500}>
            Мария Ивановна 
          </Text>

          <Text c="dimmed" size="xs">
            verylongemaillalala@mail.ru
          </Text>

          <Text c="dimmed" size="xs">
            +7(925)987-65-43
          </Text>
        </div>

       {/* <IconChevronRight style={{ width: rem(14), height: rem(14) }} stroke={1.5} /> */}
      </Group>
    </UnstyledButton>
  );
}