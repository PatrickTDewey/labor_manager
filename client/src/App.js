import {BrowserRouter, Route, Switch} from 'react-router-dom'
import WorkerForm from './components/WorkerForm';
import Main from './views/Main';
import NavBar from './components/NavBar';
import WorkerSchedule from './views/WorkerSchedule'
import EditWorkerForm from './components/EditWorkerForm'
import TimeForm from './components/TimeForm';

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
  return (
    <div className="container">
      <BrowserRouter>
          <NavBar />
        <Switch>
          <Route exact path='/schedule/day/:day_id'> 
            <WorkerSchedule />
          </Route>
          <Route exact path='/adjust_hours'> 
            <TimeForm />
          </Route>
          <Route exact path='/workers/add'>
            <WorkerForm />
          </Route>
          <Route exact path='/workers/edit/:id'>
            <EditWorkerForm />
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
