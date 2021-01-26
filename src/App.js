import React, { useEffect, useState } from 'react'
import './App.css';

import MusicAppBar from './components/MusicAppBar'
import SignIn from './components/SignIn'
import MusicDashboard from './components/MusicDashboard'
import Notifications from './components/Notifications';

export default function App() {

  const [state, setState] = useState({
    loggedIn: false,
    online: true,
    masterVolume: 80,
    quality: 2,
  })


  const handleLogin = () => {
    setState({ ...state, loggedIn: state.loggedIn ? false : true })
  }

  const handleOnline = (event) => {
    setState({ ...state, [event.target.name]: state.online ? false : true });
  };

  const handleVolume = (event, newValue) => {
    setState({ ...state, masterVolume: newValue });
  }

  const handleQuality = (event, value) => {
    setState({ ...state, quality: event.target.value })
  }



  return (
    <div>

      <MusicAppBar
        state={state}
        loggedIn={state.loggedIn}
        handleLogin={handleLogin} />
      {state.loggedIn ?
        <div>
          <MusicDashboard
            state={state}
            handleOnline={handleOnline}
            handleVolume={handleVolume}
            handleQuality={handleQuality} />
        </div> :
        <SignIn
          handleLogin={handleLogin} />}

    </div>
  );
}


