import { useState } from 'react';
import './App.css';
import MainProfile from './components/profile/MainProfile';
import DeveloperProfile from './components/profile/DeveloperProfile';
import QAEngineerProfile from './components/profile/QAEngineerProfile';
import CreatorProfile from './components/profile/CreatorProfile';
import ExuberantProfile from './components/profile/ExuberantProfile';

function App() {
  const author = 'Jiwon';

  const [displayItem, setDisplayItem] = useState(null);

  const onClickHandler = (e) => {
    let item = e.target.value;
    console.log(item);
    // eslint-disable-next-line default-case
    switch (item) {
      case 'developer':
        setDisplayItem(<DeveloperProfile />);
        break;
      case 'qa':
        setDisplayItem(<QAEngineerProfile />);
        break;
      case 'creator':
        setDisplayItem(<CreatorProfile />);
        break;
      case 'exuberant':
        setDisplayItem(<ExuberantProfile />);
        break;
      case 'Main':
        setDisplayItem(<MainProfile />);
    }
  };

  return (
    <div>
      <h2 className="container1">Collection Of {author} in 2023.</h2>
      <div className="container1">
        <button className="button" onClick={onClickHandler} value="developer">
          Developer
        </button>
        <button className="button" onClick={onClickHandler} value="qa">
          QA Software Engineer
        </button>
        <button className="button" onClick={onClickHandler} value="creator">
          Creator
        </button>
        <button className="button" onClick={onClickHandler} value="exuberant">
          Exuberant
        </button>
      </div>
      <div className="container1">
        <button onClick={onClickHandler} value="Main">
          Get Started!
        </button>
      </div>
      <div>{displayItem}</div>
    </div>
  );
}

export default App;
