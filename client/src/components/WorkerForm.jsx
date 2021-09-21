import React, { useState } from 'react';
import { useHistory, Link } from 'react-router-dom'
import axios from 'axios';
import '../index.css'

const WorkerForm = (props) => {
    const [form, setForm] = useState({
        firstName: '',
        lastName: '',
        availability: Array(7).fill(true)
    });
    
    const changeHandler = (e) =>{
        const {name, value} = e.target
        setForm({...form, [name]: value})
    }
    const onChangeBox = e => {
        const {name} = e.target;
        let index = parseInt(name)
        let newAvail = [...form.availability]
        newAvail[index] = !newAvail[index];
        setForm({...form, availability: newAvail})
    }
    
    const history = useHistory();
    const onSubmitHandler = e => {
        e.preventDefault();
        axios.post("http://localhost:8000/api/workers/new", form)
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
            <div>
            <label htmlFor='0'>Monday</label>
            <input type='checkbox' name='0' checked={form.availability[0]} onChange={onChangeBox}/>
            </div>
            <div>
            <label htmlFor='1'>Tuesday</label>
            <input type='checkbox' name='1' checked={form.availability[1]} onChange={onChangeBox}/>
            </div>
            <div>
            <label htmlFor='2'>Wednesday</label>
            <input type='checkbox' name='2' checked={form.availability[2]} onChange={onChangeBox}/>
            </div>
            <div>
            <label htmlFor='3'>Thursday</label>
            <input type='checkbox' name='3' checked={form.availability[3]} onChange={onChangeBox}/>
            </div>
            <div>
            <label htmlFor='4'>Friday</label>
            <input type='checkbox' name='4' checked={form.availability[4]} onChange={onChangeBox}/>
            </div>
            <div>
            <label htmlFor='5'>Saturday</label>
            <input type='checkbox' name='5' checked={form.availability[5]} onChange={onChangeBox}/>
            </div>
            <label htmlFor='6'>Sunday</label>
            <input type='checkbox' name='6' checked={form.availability[6]} onChange={onChangeBox}/>
            <div>
            </div>
            <input type="submit" value="Add Worker" className="btn btn-primary" />
            <Link className="ms-3" to='/'>Home</Link>
        </form>
    )
}

export default WorkerForm
