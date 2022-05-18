
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import DialogsContainer from './components/Dialogs/Dialogs-Container';
import Header from './components/Header/header';
import MyProfile from './components/MyProfile/my-profile';
import Sidebar from './components/Sidebar/sidebar';

function App(props) {

  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Sidebar />

        <div className='app-wrapper-content'>
          <Routes>

            <Route path="/"
              element={<MyProfile
                store={props.store}
              // posts={props.state.myProfilePage}
              // dispatch = {props.dispatch}
              />}
            />
            <Route path="/myProfile/"
              element={<MyProfile
                store={props.store}
              // posts={props.state.myProfilePage}
              // dispatch = {props.dispatch}
              />}
            />
            <Route path="/Dialogs/"
              element={<DialogsContainer
                store={props.store}
              />}
            />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App;
