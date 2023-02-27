import { Header } from 'components/Header';
import { Button } from 'components/Button';
import NavBar from 'components/NavBar';
import { useState } from 'react';
import { ReactComponent as Logo } from 'assets/favicon.svg';
import { Outlet } from 'react-router-dom';

function App() {
  const [open, setOpen] = useState(false);
  return (
    <div className="App">
      <button className="nav-button main-button" onClick={() => setOpen(!open)}>
        Nav
      </button>
      <NavBar open={open} setOpen={setOpen} />
      <Outlet />
    </div>
  );
}

export default App;
