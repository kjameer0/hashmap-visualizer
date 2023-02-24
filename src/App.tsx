import { Header } from 'components/Header';
import { Button } from 'components/Button';
import NavBar from 'components/NavBar';
import { ReactComponent as Logo } from 'assets/favicon.svg';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Outlet />
    </div>
  );
}

export default App;
