import { Welcome } from '../components/Welcome/Welcome';
import { ColorSchemeToggle } from '../components/ColorSchemeToggle/ColorSchemeToggle';
import { Home } from './_maincomponents/HomePage';

export default function HomePage() {
  return (
    <>
      <Home />
      <ColorSchemeToggle />
    </>
  );
}
