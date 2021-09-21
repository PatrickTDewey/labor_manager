import axios from 'axios';
import React, {useState} from 'react'
import { useHistory } from 'react-router-dom';

const TimeForm = (props) => {
    const {setWorking} = props;
    const [form, setForm] = useState();
    const history = useHistory();

    const submitHandler = e => {
        e.preventDefault();
        let key = String(e.target.start.value)
        let start = new Date(0,0,0, e.target.start.value.slice(0,2), e.target.start.value.slice(3),0,0)
        let end = new Date(0,0,0, e.target.end.value.slice(0,2), e.target.end.value.slice(3),0,0)
        console.log(start)
        let obj = {}
        obj[key] = Array(7).fill(0)
        while (start < end){
            start.setMinutes( start.getMinutes() + 30)
            obj[String(start).slice(16,21)] = Array(7).fill(0)
        }
        setWorking(obj)
        axios.put('http://localhost:8000/api/workers/update_all', obj)
            .then(res => console.log(res))
            .catch(err => console.log(err))
        history.push('/')
    }
    const changeHandler = (e) =>{
        const {name, value} = e.target
        setForm({...form, [name]: value})
    }
    return (
        <div>
            <h1>Set Hours</h1>
            <h3>Warning: changing hours of operation will reset the schedule</h3>
            <form onSubmit={submitHandler}>
                <label htmlFor="start" className="me-2">Start Time:</label>
                <input type="time" name="start" onChange={changeHandler} step="1800"/>
                <label htmlFor="end" className="me-2">End Time:</label>
                <input type="time" name="end" onChange={changeHandler} step="1800"></input>
                <button className="btn btn-primary ms-2">Submit</button>
            </form>
        </div>
    )
}

export default TimeForm
