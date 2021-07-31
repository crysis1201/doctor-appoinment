import { Route, Switch } from 'react-router-dom';
import './App.css';
import HospitalPage from './pages/hospitalPage';

const App = () => {
  return (
    <div className="App max-w-screen-xl mx-auto">
          <Route path="/" component={HospitalPage} />
    </div>
  );
}

export default App;
