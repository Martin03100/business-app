import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import "../addtrip/add.css";
import axios from "axios";
import toast from "react-hot-toast";

const Edit = () => {

const trips = {
    destination:"",
    hotel:"",
    activities:"",
}
const{id} = useParams();
const navigate = useNavigate();
const [trip, setTrip] = useState(trips);
const inputChangeHandler = (e) =>{
    const {name,value} = e.target;
    setTrip({...trip, [name]:value});
    console.log(trip);
}

useEffect(()=>{
    axios.get(`http://localhost:8000/api/getone/${id}`)
    .then((response)=>{
        setTrip(response.data)
    }).catch((error)=>{
        console.log(error);
    })
},[id])

const submitForm = async(e)=>{
    e.preventDefault();
    await axios.put(`http://localhost:8000/api/update/${id}`, trip)
    .then((response)=>{
        toast.success(response.data.msg, {position:"top-right"})
        navigate("/")
    }).catch(error => console.log(error))
}

    return (
        <div className="addTrip">
            <Link to={"/"}>Back</Link>
            <h3>Update trip</h3>
            <form className='addTripForm' onSubmit={submitForm}>
            <div className='inputGroup'>
                    <label htmlFor='destination'>Destination</label>
                    <select onChange={inputChangeHandler} id='destination' name='destination' value={trip.destination}>
                        <option value="">Select destination</option>
                        <option value="Dubaj">Dubaj</option>
                        <option value="Londýn">Londýn</option>
                        <option value="New York">New York</option>
                    </select>
                </div>
                <div className='inputGroup'>
                    <label htmlFor='hotel'>Hotel</label>
                    <select onChange={inputChangeHandler} id='hotel' name='hotel' value={trip.hotel}>
                        <option value="">Select hotel</option>
                        <option value="Plaza">Plaza</option>
                        <option value="Grand">Grand</option>
                        <option value="Tower">Tower</option>
                    </select>
                </div>
                <div className='inputGroup'>
                    <label htmlFor='activities'>Activities</label>
                    <select onChange={inputChangeHandler} id='activities' name='activities' value={trip.activities}>
                        <option value="">Select activities</option>
                        <option value="Meeting">Meeting</option>
                        <option value="Job">Job</option>
                        <option value="Free time">Free time</option>
                    </select>
                </div>
                <div className='inputGroup'>
                    <label htmlFor='date'>Date</label>
                    <input type='text' onChange={inputChangeHandler} id='date' name='date' autoComplete='off' placeholder='Date'/>
                </div>
                <div className='inputGroup'>
                    <button type='submit'>Update Trip</button>
                </div>
            </form>
        </div>
    )
}

export default Edit