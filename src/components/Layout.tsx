import { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Header from './Header';

export default function Layout() {
  const { pathname, hash } = useLocation();

  // New page → start at the top (or at the #anchor if the link has one)
  useEffect(() => {
    if (hash) {
      document.getElementById(hash.slice(1))?.scrollIntoView();
    } else {
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' as ScrollBehavior });
    }
  }, [pathname, hash]);

  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}
