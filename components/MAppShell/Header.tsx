import { Box, Burger, Image, useMantineTheme, Text, Title, Group, Center } from '@mantine/core';
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
import { GlobalContext } from '@/context/ContextGlobal';
import { AuthContext } from '@/context/AuthContext';
import { guestHomePageMaxWidth } from '@/global/CONSTS';

export const Header = ({ opened, setOpened, asideOpen, setAsideOpen }: TProps) => {
  const theme = useMantineTheme();
  const { isDemo } = React.useContext(GlobalContext);
  const largeScreen = useMediaQuery('(min-width: 88em)');
  const midUpScreen = useMediaQuery('(min-width: 75em)');
  const [showSettings, setShowSettings] = React.useState(false);
  const { isLoggedIn, setIsLoggedIn, switchLogIn } = React.useContext(AuthContext);

  const demoInfo = {
    phone: '+7 (123) 456-78-90',
    logo: '/images/demologo.png',
  };

  const virilisInfo = {
    phone: '+7 (812) 424-64-74',
    logo: '/images/logo.svg',
  };

  const info = isDemo ? demoInfo : virilisInfo;

  return (
   
    <Box className={styles.container} w={isLoggedIn ? '100%' : guestHomePageMaxWidth}>
      <Group gap='0'>

      <Burger
        hiddenFrom="lg"
        opened={opened}
        onClick={() => setOpened((o) => !o)}
        size="sm"
        color={theme.colors.gray[6]}
        //mr="xl"
        className={styles.burger}
      />
     <Box className={styles.logoContainer}>
        <Image className={styles.logo} fit="contain" src={info.logo} height={40} />
  </Box> 
      </Group>
      
      <Box className={styles.contactGroup}>
        <Title order={4}>{info.phone}</Title>
        <Text fw={500} fz="xs" ml={'3px'}>
          Контактный центр 24 часа
        </Text>
      </Box>
      {/*}  </Group> */}
      <Group gap='0' >
      <DemoLogIn 
     // suppressHydrationWarning={true} 
      />
      <ColorSchemeButton /></Group>
      {showSettings && (
        <Box className={styles.settingsIcon} onClick={(e) => setAsideOpen(!asideOpen)} m="xs">
          <IconSettings />
        </Box>
      )}
    </Box>
    
  );
};
