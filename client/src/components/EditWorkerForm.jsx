import React, { useState, useEffect } from 'react';
import { useHistory, Link, useParams } from 'react-router-dom'
import axios from 'axios';
import '../index.css'

const EditWorkerForm = (props) => {
    const [worker, setWorker] = useState();
    const {id} = useParams();
    const submit = props;
    useEffect(() => {
        axios.get("http://localhost:8000/api/workers/" + id)
          .then(res => setWorker(res.data))
          .catch(err => console.log(err))
      }, []);

    const changeHandler = (e) =>{
        const {name, value} = e.target
        setWorker({...worker, [name]: value})
    }
    const onChangeBox = e => {
        const {name} = e.target;
        let index = parseInt(name)
        let newAvail = [...worker.availability]
        newAvail[index] = !newAvail[index];
        setWorker({...worker, availability: newAvail})
    }
    
    
    const history = useHistory();
    const onSubmitHandler = e => {
        // prevent default behavior of the submit
        e.preventDefault();
        // make a post request to create a new user\
        
        axios.put("http://localhost:8000/api/workers/update/" +id, worker)
            .then(res => history.push('/'))
            .catch(err => console.log(err))
        
    }
    return (
        <>
        { worker ?
        <form onSubmit={onSubmitHandler} >
            <div className="form-floating mb-3">
                <input type="text" className="form-control" name="firstName" id="firstName" placeholder="first name" value={worker.firstName} onChange={changeHandler} />
                <label htmlFor="firstName">First Name:</label>
            </div>
            <div className="form-floating mb-3">
                <input type="text" className="form-control" name="lastName" id="lastName" placeholder="last name" value={worker.lastName} onChange={changeHandler} />
                <label htmlFor="lastName">Last Name:</label>
            </div>
            {/* <div className="form-floating mb-3">
                <input type="text" className="form-control" name="position" id="position" placeholder="position" value={form.position} onChange={(e) => setForm({ ...form, position: e.target.value })} />
                <label htmlFor="position">Position:</label>
            </div> */}
            <input type="submit" value="Add Worker" className="btn btn-primary" />
            <Link className="ms-3" to='/'>Home</Link>
                   <div>
                   <label htmlFor='0'>Monday</label>
                   <input type='checkbox' name='0' checked={worker.availability[0]} onChange={onChangeBox}/>
                   </div>
                   <div>
                   <label htmlFor='1'>Tuesday</label>
                   <input type='checkbox' name='1' checked={worker.availability[1]} onChange={onChangeBox}/>
                   </div>
                   <div>
                   <label htmlFor='2'>Wednesday</label>
                   <input type='checkbox' name='2' checked={worker.availability[2]} onChange={onChangeBox}/>
                   </div>
                   <div>
                   <label htmlFor='3'>Thursday</label>
                   <input type='checkbox' name='3' checked={worker.availability[3]} onChange={onChangeBox}/>
                   </div>
                   <div>
                   <label htmlFor='4'>Friday</label>
                   <input type='checkbox' name='4' checked={worker.availability[4]} onChange={onChangeBox}/>
                   </div>
                   <div>
                   <label htmlFor='5'>Saturday</label>
                   <input type='checkbox' name='5' checked={worker.availability[5]} onChange={onChangeBox}/>
                   </div>
                   <label htmlFor='6'>Sunday</label>
                   <input type='checkbox' name='6' checked={worker.availability[6]} onChange={onChangeBox}/>
                   <div>
                   </div>
        </form> 
                   
        : null
        }
        </>
    )
}

export default EditWorkerForm
