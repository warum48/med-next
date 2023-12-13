import { Box, Burger, Image, useMantineTheme, Text, Title, Group } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import { IconPhone, IconSettings } from '@tabler/icons-react';
import * as React from 'react';
//import { DemoLogIn } from '../DemoLogin/DemoLogIn';
import dynamic from 'next/dynamic';

const DemoLogIn = dynamic(() => import('../DemoLogin/DemoLogIn').then((mod) => mod.DemoLogIn), {
  ssr: false,
});

type TProps = {
  opened: boolean;
  setOpened: React.Dispatch<React.SetStateAction<boolean>>;
  asideOpen: boolean;
  setAsideOpen: React.Dispatch<React.SetStateAction<boolean>>;
};
import styles from './Header.module.css';
import { ColorSchemeButton } from '../ColorSchemeButton/ColorSchemeButton';

export const Header = ({ opened, setOpened, asideOpen, setAsideOpen }: TProps) => {
  const theme = useMantineTheme();
  const largeScreen = useMediaQuery('(min-width: 88em)');
  const midUpScreen = useMediaQuery('(min-width: 75em)');
  const [showSettings, setShowSettings] = React.useState(false);

  return (
    <Box className={styles.container}>
      <Burger
        hiddenFrom="lg"
        opened={opened}
        onClick={() => setOpened((o) => !o)}
        size="sm"
        color={theme.colors.gray[6]}
        mr="xl"
        className={styles.burger}
      />
      <Box className={styles.logoContainer}>
        <Image className={styles.logo} fit="contain" src="/images/logo.svg" height={40} />
      </Box>
      {/*} <Text className={styles.title}>
        <i>ЛИЧНЫЙ КАБИНЕТ ПОЛЬЗОВАТЕЛЯ</i>
  </Text> */}
      {/* <Group className={styles.contactGroup}>
        <Box className={styles.contactIcon}>
          <IconPhone size={40} color="#e64980" />
</Box> */}
      <Box className={styles.contactGroup}>
        <Title order={4}>+7 (812) 424-64-74</Title>
        <Text fw={500} fz="xs" ml={'3px'}>
          Контактный центр 24 часа
        </Text>
      </Box>
      {/*}  </Group> */}
      <DemoLogIn suppressHydrationWarning={true} />
      <ColorSchemeButton />
        {showSettings && 
      <Box className={styles.settingsIcon} onClick={(e) => setAsideOpen(!asideOpen)} m="xs">
        <IconSettings />
      </Box>}
    </Box>
  );
};
