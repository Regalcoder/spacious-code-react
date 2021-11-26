import Navbar from './Navbar';
import Planets from './Planets';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <div className="content">
        <Planets/>
      </div>
    </div>
  );
}

export default App;
