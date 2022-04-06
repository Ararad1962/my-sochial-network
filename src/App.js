
import './App.css';
import Header from './components/header';
import MyProfile from './components/my-profile';
import Sidebar from './components/sidebar';

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
