
import './App.css';
import Color from './Color';
import Fetchdata from './data';
import Slider from './slidder';
import Default from './defaul'
import Chatboat from './chatboat';
import Rerendercheck from './checkrerender';

function App() {
  return (
    <div className="App">
      <Rerendercheck />
      <Default />
      <Color />
      <Fetchdata />
      <Slider />
      <Chatboat />
    </div>
  );
}

export default App;
