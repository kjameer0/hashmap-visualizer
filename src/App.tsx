import { Header } from 'components/Header';
import { Button } from 'components/Button';
import { ReactComponent as Logo } from 'assets/favicon.svg';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Header title="hola" />
      <Button onClick={() => alert('hola')}>hy</Button>
      <Outlet />
    </div>
  );
}

export default App;
