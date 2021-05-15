import Dashboard from './components/Dashboard';
import './css/style.css'
import Footer from './footer/Footer';
import 'bootstrap/dist/css/bootstrap.css';

function App() {
  return (
    <>
      <div className="App">
        <Dashboard />
      </div>
        <Footer />
    </>
  );
}

export default App;