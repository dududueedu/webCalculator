import Dashboard from './components/Dashboard';
import './css/style.css'
import Nav from './components/navBar/Nav';
import 'bootstrap/dist/css/bootstrap.css';

function App() {
  return (
    <>
      <Nav />
      <div>
        <Dashboard />
      </div>
    </>
  );
}

export default App;