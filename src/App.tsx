import NavBar from 'components/NavBar';
import { useState } from 'react';
import { Outlet } from 'react-router-dom';

function App() {
  const [open, setOpen] = useState(false);
  return (
    <div className="App">
      <button id="top-nav" className="nav-button-main main-button" onClick={() => setOpen(!open)}>
        Nav
      </button>
      <NavBar open={open} setOpen={setOpen} />
      <Outlet />
    </div>
  );
}

export default App;
