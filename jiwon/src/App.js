import './App.css';
import Profile from './components/Profile';
function App() {
  return (
    <div>
      <Profile
        job="QA Software Engineer"
        img="https://avatars.githubusercontent.com/u/107325509?v=4"
        description="WebdriverIO | Mocha (Test framework with JS) | Linux"
      />
      <Profile
        job="Metaverse Creator"
        img=""
        description="Design 3D character clothing"
      />
      <Profile
        job="Freelancer Front-End Developer"
        img="https://jijijiwonton.github.io/jijiWebsite/images/normal-jiwon.jpg"
        description="Play around with code 24/7!"
      />
      <Profile
        job="Active Walker"
        img=""
        description="I walk 1 hour everyday that increases happiness level and work productivity!"
      />
    </div>
  );
}

export default App;
