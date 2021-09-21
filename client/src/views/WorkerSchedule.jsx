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
    useEffect(() => {
        axios.get("http://localhost:8000/api/workers")
            .then(res => {
                let unsorted = res.data
                // availability
                setWorkers(unsorted.filter(worker => worker.availability[day_id - 1]).sort((a, b) => a.lastName.localeCompare(b.lastName)))
                setUnavailable(unsorted.filter(worker => !(worker.availability[day_id - 1])))
            })
            .catch(err => console.log(err))
    }, [day_id])
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
                setWorkers(unsorted.sort((a, b) => (a.lastName.localeCompare(b.lastName))))
            })
            .catch(err => console.log(err))
    }
    return (
        <div>
            {workers &&
                <>
                    <h1> Worker Status - Day {day} </h1>
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
                        <table className="table table-sm table-dark table-hover table-striped">
                            <thead>
                                <tr>
                                    <th>Worker Name</th>
                                    {
                                        Object.keys(workers[0].working).map((key, i) => <th key={i}>{key}</th>)
                                    }
                                </tr>
                            </thead>
                            <tbody>
                                {workers && workers.map((worker, i) => {
                                    return <tr key={i}>
                                        <td>{worker.firstName} {worker.lastName} </td>
                                        {Object.keys(worker.working).map((key, idx) => <td key={idx}><button onClick={(e) => { handleClick(e, worker, key) }} className={parseInt(worker.working[key][day_id - 1]) === 0 ? 'btn btn-danger' : parseInt(worker.working[key][day_id - 1]) === 1 ? 'btn btn-success' : 'btn btn-warning'} value={1}></button></td>)}
                                    </tr>
                                })}
                            </tbody>
                        </table>
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
                                    <td>{worker.firstName} {worker.lastName}</td>
                                </tr>)}
                            </tbody>
                        </table>
                    </div>
                    : <h3 className="h5 text-success">*All Workers Available for {day}*</h3>}
                    <Link to='/'>Home</Link>
                </>

            }


        </div>
    )
}

export default WorkerSchedule
