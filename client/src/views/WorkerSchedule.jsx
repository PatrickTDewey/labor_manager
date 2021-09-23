import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import '../index.css'

const WorkerSchedule = () => {

    const { day_id } = useParams();
    let day;
    switch (parseInt(day_id)) {
        case 1:
            day = 'Monday';
            break;

        case 2:
            day = 'Tuesday';
            break;

        case 3:
            day = 'Wednesday';
            break;

        case 4:
            day = 'Thursday';
            break;

        case 5:
            day = 'Friday';
            break;

        case 6:
            day = 'Saturday';
            break;
        case 7:
            day = 'Sunday';
            break;
        default:
            break;
    }
    const [workers, setWorkers] = useState();
    const [unavailable, setUnavailable] = useState([])
    const [time, setTime] = useState([])
    const [select, setSelect] = useState('24')
    const sortFunc = (a, b) => {
        let sortNum = a.lastName.localeCompare(b.lastName)
        if (sortNum !== 0) {
            return sortNum
        }
        if (a._id < b._id) {
            return -1
        }
        return 1;
    }
    useEffect(() => {
        axios.get("http://localhost:8000/api/workers")
            .then(res => {
                let unsorted = res.data
                // availability
                setWorkers(unsorted.filter(worker => worker.availability[day_id - 1]).sort((a, b) => sortFunc(a, b)))
                setUnavailable(unsorted.filter(worker => !(worker.availability[day_id - 1])))
                setTime(time.length > 1 ? time : Object.keys(res.data[0].working));
            })
            .catch(err => console.log(err))
    }, [day_id, time])
    const handleClick = (e, worker, key) => {
        let filteredWorkers = workers.filter(a => worker._id !== a._id)
        if (worker.working[key][day_id - 1] < 2) {
            worker.working[key][day_id - 1] += parseInt(e.target.value)
        } else {
            worker.working[key][day_id - 1] = 0
        }

        axios.put('http://localhost:8000/api/workers/update/' + worker._id, worker)
            .then(res => {
                let unsorted = [...filteredWorkers, worker]
                setWorkers(unsorted.sort((a, b) => sortFunc(a, b)))
            })
            .catch(err => console.log(err))
    }
    const handleSelect = (e) => {
        e.preventDefault()
        setSelect(e.target.value)
        let timeCopy = [...time]
        if (e.target.value === '12') {
            setTime(timeCopy.map(time => ((parseInt(time) + 11) % 12 + 1) + time.slice(time.indexOf(':')) + (parseInt(time) >= 12 ? ' PM' : ' AM')))
        } else {
            setTime(timeCopy.map(time => {
                const [timeStr, amPm] = time.split(' ');
                let [hours, minutes] = timeStr.split(':');
                if (amPm === 'AM' && hours.length === 1) {
                    hours = '0' + hours;
                }
                if (parseInt(hours) === 12) {
                    hours = '00'
                }
                if (amPm === 'PM') {
                    hours = parseInt(hours) + 12
                }
                return `${hours}:${minutes}`
            }))
        }
    }
    return (
        <div>
            {workers &&
                <>
                    <h1> Worker Status - {day} </h1>
                    <select name="time-format" id="time-format" value={select} onChange={e => handleSelect(e)}>
                        <option value="24">Military</option>
                        <option value="12" >12 Hour</option>
                    </select>
                    <div className="d-flex">
                        <Link className="me-2 " to='/schedule/day/1'>Mon</Link>
                        <Link className="me-2 " to='/schedule/day/2'>Tues</Link>
                        <Link className="me-2 " to='/schedule/day/3'>Wed</Link>
                        <Link className="me-2 " to='/schedule/day/4'>Thurs</Link>
                        <Link className="me-2 " to='/schedule/day/5'>Fri</Link>
                        <Link className="me-2 " to='/schedule/day/6'>Sat</Link>
                        <Link className="me-2" to='/schedule/day/7'>Sun</Link>
                    </div>
                    <div className="table-responsive">
                        <table className="table table-dark table-hover table-striped">
                            <thead>
                                <tr>
                                    <th>Worker Name</th>
                                    {
                                        time.map((key, i) => <th className="vertical-top" key={i}>{key}</th>)
                                    }
                                </tr>
                            </thead>
                            <tbody>
                                {workers && workers.map((worker, i) => {
                                    return <tr key={i}>
                                        <td><Link className="text-light"to={`/workers/details/${worker._id}`}>{worker.firstName} {worker.lastName}</Link></td>
                                        {Object.keys(worker.working).map((key, idx) => <td key={idx}><button onClick={(e) => { handleClick(e, worker, key) }} style={{width: '100%'}}className={parseInt(worker.working[key][day_id - 1]) === 0 ? 'btn btn-danger' : parseInt(worker.working[key][day_id - 1]) === 1 ? 'btn btn-primary' : 'btn btn-warning'} value={1}></button></td>)}
                                    </tr>
                                })}
                                {/* comment */}
                            </tbody>
                        </table>
                    </div>
                    <div className="legend d-flex align-items-center justify-content-center">
                        <span className='btn btn-primary me-2' style={{ 'cursor': 'auto' }} ></span>
                        <span className="me-2">Working</span>
                        <span className='btn btn-danger me-2' style={{ 'cursor': 'auto' }}></span>
                        <span className="me-2">Not scheduled</span>
                        <span className='btn btn-warning me-2' style={{ 'cursor': 'auto' }}></span>
                        <span>Lunch</span>
                    </div>
                    {unavailable.length >= 1 ?
                        <div className="table-responsive">
                            <table className="table table-hover table-striped">
                                <thead>
                                    <tr>
                                        <th>Unavailable Workers</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {unavailable.map((worker, i) => <tr key={i}>
                                    <td><Link className="btn-link"to={`/workers/details/${worker._id}`}>{worker.firstName} {worker.lastName}</Link></td>
                                    </tr>)}
                                </tbody>
                            </table>
                        </div>
                        : <h3 className="h5 text-success">*All Workers Available for {day}*</h3>}
                </>

            }


        </div>
    )
}

export default WorkerSchedule
