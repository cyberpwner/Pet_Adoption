import { Link, Outlet } from 'react-router-dom';

function RootLayout() {
  return (
    <main>
      <header>
        <Link to="/">Adopt Me!</Link>
      </header>
      <Outlet />
    </main>
  );
}

export default RootLayout;
