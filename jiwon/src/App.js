import './App.css';
import Category from './components/Category';
import DeveloperProfile from './components/DeveloperProfile';
function App() {
  return (
    <div>
      <h2 className="container1">Collection Of Jiwon in 2023</h2>
      <Category />
      <div className="container2">
        <DeveloperProfile />
      </div>
    </div>
  );
}

export default App;
