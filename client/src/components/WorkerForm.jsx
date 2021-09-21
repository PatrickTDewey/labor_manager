import React, { useState } from 'react';
import { useHistory, Link } from 'react-router-dom'
import axios from 'axios';
import '../index.css'

const WorkerForm = (props) => {
    const [form, setForm] = useState({
        firstName: '',
        lastName: '',
    });
    
    const changeHandler = (e) =>{
        const {name, value} = e.target
        setForm({...form, [name]: value})
    }
    
    const history = useHistory();
    const onSubmitHandler = e => {
        // prevent default behavior of the submit
        e.preventDefault();
        // make a post request to create a new user\
        const { firstName, lastName} = form
        axios.post("http://localhost:8000/api/workers/new", { firstName, lastName})
            .then(res => console.log(res))
            .catch(err => console.log(err))
        history.push('/')
    }
    return (
        <form onSubmit={onSubmitHandler} >
            <div className="form-floating mb-3">
                <input type="text" className="form-control" name="firstName" id="firstName" placeholder="first name" value={form.firstName} onChange={changeHandler} />
                <label htmlFor="firstName">First Name:</label>
            </div>
            <div className="form-floating mb-3">
                <input type="text" className="form-control" name="lastName" id="lastName" placeholder="last name" value={form.lastName} onChange={changeHandler} />
                <label htmlFor="lastName">Last Name:</label>
            </div>
            {/* <div className="form-floating mb-3">
                <input type="text" className="form-control" name="position" id="position" placeholder="position" value={form.position} onChange={(e) => setForm({ ...form, position: e.target.value })} />
                <label htmlFor="position">Position:</label>
            </div> */}
            <input type="submit" value="Add Worker" className="btn btn-primary" />
            <Link className="ms-3" to='/'>Home</Link>
        </form>
    )
}

export default WorkerForm
