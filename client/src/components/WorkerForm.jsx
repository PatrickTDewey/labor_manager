import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom'
import axios from 'axios';
import '../index.css'

const WorkerForm = (props) => {
    const { working } = props
    const [form, setForm] = useState({
        firstName: '',
        lastName: '',
        availability: Array(7).fill(true),
        working
    });
    useEffect(() => {
        axios.get("http://localhost:8000/api/one/worker")
          .then(res => {
              let keys = Object.keys(res.data.working)
              let clearObj = {} 
              keys.forEach(key => clearObj[key] = Array(7).fill(0))
              setForm({...form, working: {...clearObj}})
            })
          .catch(err => console.log(err))
      }, []);

    const changeHandler = (e) => {
        const { name, value } = e.target
        setForm({ ...form, [name]: value })
    }
    const onChangeBox = e => {
        const { name } = e.target;
        let index = parseInt(name)
        let newAvail = [...form.availability]
        newAvail[index] = !newAvail[index];
        setForm({ ...form, availability: newAvail })
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
            <h4>Availability:</h4>
            <div className="form-check">
                <label htmlFor='0' className='me-2 form-check-label'>Monday</label>
                <input type='checkbox' className='form-check-input' name='0' checked={form.availability[0]} onChange={onChangeBox} />
            </div>
            <div className="form-check">
                <label htmlFor='1' className='me-2 form-check-label'>Tuesday</label>
                <input type='checkbox' className='form-check-input' name='1' checked={form.availability[1]} onChange={onChangeBox} />
            </div>
            <div className="form-check">
                <label htmlFor='2' className='me-2 form-check-label'>Wednesday</label>
                <input type='checkbox' className='form-check-input' name='2' checked={form.availability[2]} onChange={onChangeBox} />
            </div>
            <div className="form-check">
                <label htmlFor='3' className='me-2 form-check-label'>Thursday</label>
                <input type='checkbox' className='form-check-input' name='3' checked={form.availability[3]} onChange={onChangeBox} />
            </div>
            <div className="form-check">
                <label htmlFor='4' className='me-2 form-check-label'>Friday</label>
                <input type='checkbox' className='form-check-input' name='4' checked={form.availability[4]} onChange={onChangeBox} />
            </div>
            <div className="form-check">
                <label htmlFor='5' className='me-2 form-check-label'>Saturday</label>
                <input type='checkbox' className='form-check-input' name='5' checked={form.availability[5]} onChange={onChangeBox} />
            </div>
            <div className="form-check">
                <label htmlFor='6' className='me-2 form-check-label'>Sunday</label>
                <input type='checkbox' className='form-check-input' name='6' checked={form.availability[6]} onChange={onChangeBox} />
            </div>
            <input type="submit" value="Add Worker" className="btn btn-primary" />
        </form>
    )
}

export default WorkerForm
