
import './App.css';
import Header from './components/Header/header';
import MyProfile from './components/MyProfile/my-profile';
import Sidebar from './components/Sidebar/sidebar';

function App() {
  return (
    <div className="app-wrapper">
      <Header />
      <Sidebar />
      <MyProfile />
    </div>
  );
}

export default App;
