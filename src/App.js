
import './App.css';
import Dialogs from './components/Dialogs/Dialogs';
import Header from './components/Header/header';
// import MyProfile from './components/MyProfile/my-profile';
import Sidebar from './components/Sidebar/sidebar';

function App() {
  return (
    <div className="app-wrapper">
      <Header />
      <Sidebar />
      {/* <MyProfile /> */}
      <Dialogs />
    </div>
  );
}

export default App;
