
import './App.css';
import './test/Example';
import Header from './components/Header/Header';
import Home from './components/view/Home';
import SideHelp from './components/view/sideHelp';
// import Example from './components/Example';
// import NameForm from './components/NameForm';

function App() {
  return (
    <div className="App">
        <Header/>
        <Home/>
        <SideHelp/>
    </div>
  );
}

export default App;
