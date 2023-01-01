import { useState } from 'react';
import './App.css';
import Category from './components/Category';
import DeveloperProfile from './components/DeveloperProfile';
import QAEngineerProfile from './components/QAEngineerProfile';
import CreatorProfile from './components/CreatorProfile';
import ExuberantProfile from './components/ExuberantProfile';

function App() {
  const author = 'Jiwon';

  const [displayItem, setDisplayItem] = useState(null);
  const onClickHandler = (e) => {
    let item = e.target.value;
    console.log(item);
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
      default:
        setDisplayItem(<DeveloperProfile />);
        break;
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
      <div className="container2">{displayItem}</div>
    </div>
  );
}

export default App;
