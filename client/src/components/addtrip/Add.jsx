import React, { useState } from 'react';
import "./add.css";
import { Link, useNavigate } from 'react-router-dom';
import axios from "axios";
import toast from 'react-hot-toast'; 

const Add = () => {
    
    const [trip, setTrip] = useState({
        destination: "",
        hotel: "",
        activities: "",
        date: "",
    });

    const navigate = useNavigate();

    const inputHandler = (e) =>{ 
        const {name, value} = e.target;
        setTrip({...trip, [name]: value});
    }

    const submitForm = async (e) =>{
        e.preventDefault();
        await axios.post("http://localhost:8000/api/create", trip)
        .then((response)=>{
            toast.success(response.data.msg, {position: "top-right"})
            navigate("/")
        }).catch(error => console.log(error))
    }

    return (
        <div className="addTrip">
            <Link to={"/"}>Back</Link>
            <h3>Add new trip</h3>
            <form className='addTripForm' onSubmit={submitForm}>
                <div className='inputGroup'>
                    <label htmlFor='destination'>Destination</label>
                    <select onChange={inputHandler} id='destination' name='destination' value={trip.destination}>
                        <option value="">Select destination</option>
                        <option value="Dubaj">Dubaj</option>
                        <option value="Londýn">Londýn</option>
                        <option value="New York">New York</option>
                    </select>
                </div>
                <div className='inputGroup'>
                    <label htmlFor='hotel'>Hotel</label>
                    <select onChange={inputHandler} id='hotel' name='hotel' value={trip.hotel}>
                        <option value="">Select hotel</option>
                        <option value="Plaza">Plaza</option>
                        <option value="Grand">Grand</option>
                        <option value="Tower">Tower</option>
                    </select>
                </div>
                <div className='inputGroup'>
                    <label htmlFor='activities'>Activities</label>
                    <select onChange={inputHandler} id='activities' name='activities' value={trip.activities}>
                        <option value="">Select activities</option>
                        <option value="Meeting">Meeting</option>
                        <option value="Job">Job</option>
                        <option value="Free time">Free time</option>
                    </select>
                </div>
                <div className='inputGroup'>
                    <label htmlFor='date'>Date</label>
                    <input type='text' onChange={inputHandler} id='date' name='date' autoComplete='off' placeholder='Date'/>
                </div>
                <div className='inputGroup'>
                    <button type='submit'>Add Trip</button>
                </div>
            </form>
        </div>
    )
}

export default Add;
