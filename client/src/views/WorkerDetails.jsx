/* eslint-disable react-hooks/exhaustive-deps */
import { useParams } from "react-router-dom"
import { useState, useEffect } from 'react'
import axios from "axios"
// add if today shift has passed
let today = new Date().getDay()
if (parseInt(today) === 0) {
    today = 6
}
else if (parseInt(today) === 6) {
    today = 0
}


const WorkerDetails = () => {
    const [worker, setWorker] = useState({})
    const { id } = useParams()
    const [weekBreakdown, setWeekBreakdown] = useState(Array.from({ length: 7 }, () => ({})))
    let days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
    useEffect(() => {
        axios.get("http://localhost:8000/api/workers/" + id)
            .then(res => {
                let weekCopy = [...weekBreakdown]
                for (let i = 0; i < days.length; i++) {
                    let count = 0.0;
                    weekCopy[i].shifts = []
                    let shiftIndex = 0
                    Object.keys(res.data.working).forEach(key => {
                        if (!weekCopy[i].shifts[shiftIndex] && res.data.working[key][i] === 1) {
                            weekCopy[i].shifts[shiftIndex] = {
                                start: key,
                                end: key,
                            }
                            weekCopy[i].day = days[i];
                            count = count + 0.5
                        }
                        else if (res.data.working[key][i] === 1 && weekCopy[i].shifts[shiftIndex]) {
                            weekCopy[i].shifts[shiftIndex].end = key
                            count = count + 0.5
                        }
                        else if (res.data.working[key][i] === 2 && weekCopy[i].shifts[shiftIndex]) {
                            weekCopy[i].shifts[shiftIndex].lunch = key
                        } else if (res.data.working[key][i] === 0 && weekCopy[i].shifts[shiftIndex]) {
                            shiftIndex++
                        }
                        console.log(key);
                    })
                    weekCopy[i].hours = count
                    weekCopy[i].shifts.map(item => {
                        let [hours, minutes] = item.end.split(':');
                        return parseInt(minutes) === 30 ? item.end = `${parseInt(hours) + 1}:00` : item.end = `${hours}:30`
                    })

                    setWeekBreakdown(weekCopy)
                }
                setWorker(res.data)
            })
            .catch(err => console.log(err))
    }, [id]);
    return (
        worker ?
            <div className="container my-4">
                <h1 className="text-center mt-2 display-2">Hour Breakdown For {worker.firstName} {worker.lastName}</h1>
                <hr />
                <div className="row gx-4">
                    <div className="col-lg-6">
                        <div className="bg-dark p-5 text-light">
                            <h3 className="h3 text-info">Days Worked This Week</h3>
                            <hr />
                            {weekBreakdown.filter((item, idx) => item.hours > 0 && today > idx).map((breakdown, i) => {
                                return <div key={i}>
                                    <h3 className="h4 text-info">{breakdown.day} </h3>{breakdown.shifts.length > 1 && <><small className="text-secondary">({breakdown.shifts.length} Total)</small><br /></>}
                                    <div className="row">
                                        {breakdown.shifts.map((shift, i) => {
                                            return <>
                                                {breakdown.shifts.length > 1 ? <div className={`col-sm-` + (Math.trunc(12 / breakdown.shifts.length))}>
                                                    <strong className="text-warning">Shift #{i + 1}:</strong>
                                                    <p className="mt-2">Start: {shift.start}</p>
                                                    <p className="">End: {shift.end}</p>
                                                    {shift.lunch ? <p>Lunch: {shift.lunch}</p> : null}
                                                </div> : <div className="col-sm-12">
                                                    <strong className="text-warning">Shift:</strong>
                                                    <p className=" mt-2">Start: {shift.start}</p>
                                                    <p className="">End: {shift.end}</p>
                                                    {shift.lunch ? <p>Lunch: {shift.lunch}</p> : null}
                                                </div>}
                                            </>
                                        })}
                                    </div>
                                    <strong className="text-info">Hours Worked: {breakdown.hours}</strong>
                                    <hr />
                                </div>
                            })}
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="bg-dark p-5 text-light">
                            <h3 className="h3 text-info">Upcoming Shifts This Week</h3>
                            <hr />
                            {weekBreakdown.filter((item, idx) => item.hours > 0 && today <= idx).map((breakdown, i) => {
                                return <div key={i}>
                                    <h3 className="h4 text-info">{breakdown.day} </h3>{breakdown.shifts.length > 1 && <><small className="text-secondary">({breakdown.shifts.length} Total)</small><br /></>}
                                    <div className="row">
                                        {breakdown.shifts.map((shift, i) => {
                                            return <>
                                                {breakdown.shifts.length > 1 ? <div className={`col-sm-` + (Math.trunc(12 / breakdown.shifts.length))}>
                                                    <strong className="text-warning">Shift #{i + 1}:</strong>
                                                    <p className="mt-2">Start: {shift.start}</p>
                                                    <p className="">End: {shift.end}</p>
                                                    {shift.lunch ? <p>Lunch: {shift.lunch}</p> : null}
                                                </div> : <div className="col-sm-12">
                                                    <strong className="text-warning">Shift:</strong>
                                                    <p className=" mt-2">Start: {shift.start}</p>
                                                    <p className="">End: {shift.end}</p>
                                                    {shift.lunch ? <p>Lunch: {shift.lunch}</p> : null}
                                                </div>}
                                            </>
                                        })}
                                    </div>
                                    <strong className="text-info">Hours Worked: {breakdown.hours}</strong>
                                    <hr />
                                </div>
                            })}
                        </div>
                    </div>
                </div>
            </div>
            : null
    )
}

export default WorkerDetails
