import './App.css';
import Clock from './Clock';
// import FirstComponent from './FirstComponent';
// import Tick from './Tick';

function App() {
  const value = 'this is me';
  const arr =['dhaka','tangail','rajshahi','dinajpur'];
  
  return (
    <div className="App">
      <h1>hi {value} trveling to {arr.join(', ') } of bangladesh</h1>
      <Clock />
      {/* <Tick />
      <FirstComponent name="tapash" />
      <FirstComponent name="paull" />

      <FirstComponent name="react" />
      <FirstComponent name="joss" /> */}
    </div>
  );
}

export default App;

