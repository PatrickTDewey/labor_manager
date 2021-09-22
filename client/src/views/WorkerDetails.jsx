/* eslint-disable react-hooks/exhaustive-deps */
import { useParams } from "react-router-dom"
import { useState, useEffect } from 'react'
import axios from "axios"
// add if today shift has passed
let today = new Date().getDay()
// let testDate = new Date('September 19, 2021 23:15:30').getDay()
// console.log(testDate);
// testDate here to make sure this conditional is working the way intended
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
                // add multiple shift functionality
                for (let i = 0; i < days.length; i++) {
                    let count = 0.0;
                    for (const key in res.data.working) {
                        if (!weekCopy[i].start && res.data.working[key][i] === 1) {
                            weekCopy[i].day = days[i];
                            weekCopy[i].start = key;
                            weekCopy[i].end = key
                            count += 0.5
                        } else if (res.data.working[key][i] === 1) {
                            weekCopy[i].end = key
                            count += 0.5
                        }
                        weekCopy[i].hours = count
                    }
                    if (weekCopy[i].end) {
                        let [hours, minutes] = weekCopy[i].end.split(':');
                        parseInt(minutes) === 30 ? weekCopy[i].end = `${parseInt(hours) + 1}:00` : weekCopy[i].end = `${hours}:30`
                    }
                    setWeekBreakdown(weekCopy)
                }
                setWorker(res.data)
            })
            .catch(err => console.log(err))
    }, [id]);

    return (
        worker ?
            <div className="container my-4">
                <h1 className="text-center mt-2">Worker Name: {worker.firstName} {worker.lastName}</h1>
                <hr />
                <div className="row gx-4">
                    <div className="col-md-6">
                        <div className="bg-dark p-5 text-light">
                            <h3 className="h3">Days Worked This Week</h3>
                            <hr />
                            {weekBreakdown.filter((item, idx) => item.hours > 0 && today > idx).map((breakdown, i) => {
                                return <div key={i}>
                                    <p>Day: {breakdown.day}</p>
                                    <p>Start of Shift: {breakdown.start}</p>
                                    <p>End of Shift: {breakdown.end}</p>
                                    <p>Hours Worked: {breakdown.hours}</p>
                                    <hr />
                                </div>
                            })}
                        </div>

                    </div>
                    <div className="col-md-6">
                        <div className="bg-dark p-5 text-light">
                            <h3 className="h3">Upcoming Shifts This Week</h3>
                            <hr />
                            {weekBreakdown.filter((item, idx) => item.hours > 0 && today <= idx).map((breakdown, i) => {
                                return <div key={i}>
                                    <p>Day: {breakdown.day}</p>
                                    <p>Start of Shift: {breakdown.start}</p>
                                    <p>End of Shift: {breakdown.end}</p>
                                    <p>Hours Scheduled: {breakdown.hours}</p>
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
