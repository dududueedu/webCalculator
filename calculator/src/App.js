import Dashboard from './components/Dashboard';
import './css/style.css'
import Footer from './components/footer/Footer';
import Nav from './components/navBar/Nav';
import 'bootstrap/dist/css/bootstrap.css';

function App() {
  return (
    <>
      <Nav />
      <div className="App">
        <Dashboard />
      </div>
      <Footer />
    </>
  );
}

export default App;