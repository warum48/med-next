'use client'
import { Welcome } from '../components/Welcome/Welcome';
import { ColorSchemeToggle } from '../components/ColorSchemeToggle/ColorSchemeToggle';
import { Home } from '../components/_home/HomePage';
import { UserHomePage } from '@/components/_home/UserHomePage';
import { useCookies } from 'react-cookie';

export default function HomePage() {
  const [cookieToken, setCookieToken, removeCookieToken] = useCookies(['mednekot']);
  return (
    <>
    {cookieToken.mednekot ? 
      <UserHomePage /> :
      <Home />
    }
      {/*<ColorSchemeToggle />*/}
    </>
  );
}

/*
import { Welcome } from '../components/Welcome/Welcome';
import { ColorSchemeToggle } from '../components/ColorSchemeToggle/ColorSchemeToggle';

export default function HomePage() {
  return (
    <>
      <Welcome />
      <ColorSchemeToggle />
    </>
  );
}
*/
