import {BrowserRouter, Route, Switch} from 'react-router-dom'
import WorkerForm from './components/WorkerForm';
import Main from './views/Main';
import NavBar from './components/NavBar';
import WorkerSchedule from './views/WorkerSchedule'
import EditWorkerForm from './components/EditWorkerForm'
import TimeForm from './components/TimeForm';
import React, {useState} from 'react'

//pair programmed by Patrick Dewey and Spencer Rauch
// const addSubmit = e => {
//   // prevent default behavior of the submit
//   e.preventDefault();
//   // make a post request to create a new user\
//   const { firstName, lastName} = form
//   axios.post("http://localhost:8000/api/workers/new", { firstName, lastName})
//       .then(res => console.log(res))
//       .catch(err => console.log(err))
//   history.push('/')
// }

// const editSubmit = e => {
//   e.preventDefault();
//   const { firstName, lastName} = form
// }

function App() {
  const [working, setWorking] = useState({
    '9:00': Array(7).fill(0),
    '9:30': Array(7).fill(0),
    '10:00': Array(7).fill(0),
    '10:30': Array(7).fill(0),
    '11:30': Array(7).fill(0),
    '11:30': Array(7).fill(0),
    '12:00': Array(7).fill(0),
    '12:30': Array(7).fill(0),
    '13:00': Array(7).fill(0),
    '13:30': Array(7).fill(0),
    '14:00': Array(7).fill(0),
    '14:30': Array(7).fill(0),
    '15:00': Array(7).fill(0),
    '15:30': Array(7).fill(0),
    '16:00': Array(7).fill(0),
    '16:30': Array(7).fill(0),
    '17:00': Array(7).fill(0),
    '17:30': Array(7).fill(0),
    '18:00': Array(7).fill(0),
    '18:30': Array(7).fill(0),
    '19:00': Array(7).fill(0),
    '19:30': Array(7).fill(0),
    '20:00': Array(7).fill(0),
    '20:30': Array(7).fill(0),
    '21:00': Array(7).fill(0),
    '21:30': Array(7).fill(0),
    '22:00': Array(7).fill(0),
})
  return (
    <div className="container">
      <BrowserRouter>
          <NavBar />
        <Switch>
          <Route exact path='/schedule/day/:day_id'> 
            <WorkerSchedule />
          </Route>
          <Route exact path='/adjust_hours'> 
            <TimeForm setWorking={setWorking}/>
          </Route>
          <Route exact path='/workers/add'>
            <WorkerForm working={working} />
          </Route>
          <Route exact path='/workers/edit/:id'>
            <EditWorkerForm/>
          </Route>
          <Route exact path='/'>
            <Main />
          </Route>

        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
