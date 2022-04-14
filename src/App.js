
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Dialogs from './components/Dialogs/Dialogs';
import Header from './components/Header/header';
import MyProfile from './components/MyProfile/my-profile';
import Sidebar from './components/Sidebar/sidebar';

function App() {
  return (
<BrowserRouter>
    <div className="app-wrapper">
      <Header />
      <Sidebar />

      <div className='app-wrapper-content'>
        <Routes>
          <Route path="/myProfile/" element={<MyProfile/>} />
          <Route path="/Dialogs/" element={<Dialogs />} />
        </Routes>
      </div>

    </div>

    </BrowserRouter>
  );
}

export default App;
