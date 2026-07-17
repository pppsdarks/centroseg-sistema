import { useEffect, useState } from 'react';
import { useLocation, Outlet } from 'react-router-dom';
import Header from './Header';
import Sidebar from './Sidebar';

export default function Layout() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  return (
    <div className="app-shell">
      <Header onMenuClick={() => setMenuOpen((v) => !v)} />
      <div className="app-shell-body">
        <Sidebar open={menuOpen} onClose={() => setMenuOpen(false)} />
        {menuOpen && <div className="sidebar-overlay" onClick={() => setMenuOpen(false)} />}
        <main className="app-content">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
