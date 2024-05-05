import React, { useEffect, useState } from 'react'
import "./trip.css";
import { Link } from 'react-router-dom'
import axios from 'axios';
import toast from 'react-hot-toast';

const Trip = () => {

    const[trips, setTrips] = useState([]);

useEffect(()=>{
    const fetchData = async()=>{
        const response = await axios.get("http://localhost:8000/api/getall")
        setTrips(response.data);
    }
    fetchData();
},[])

const deleteTrip = async(tripId) =>{
    await axios.delete(`http://localhost:8000/api/delete/${tripId}`)
    .then((respones)=>{
        setTrips((prevTrip)=> prevTrip.filter((trip)=> trip._id !== tripId))
        toast.success(respones.data.msg, {position:'top-right'})
    }).catch((error)=>{
        console.log(error);
    })
}

    
    return (

        <div>
            <div className='staticContent'>
                <h2>Business trip</h2>
                <Link to={"/add"} className='addButton'>Add Trip</Link>
            </div>

        <div className='tripTable'>
            
            <table border={1} cellPadding={10} cellSpacing={0}>
                <thead>
                    
                </thead>
                    <tbody>
                        {
                            trips.map((trip, index)=>{
                                return(
                                <tr key={trip._id}>
                                    <div className="tripWrapper">
                                        <div className='tripInfo'>
                                            <h3>{trip.destination}</h3>
                                            <p>Hotel: {trip.hotel}</p>
                                            <p>Activities: {trip.activities}</p>
                                            <p>Date: {trip.date}</p>
                                        </div>
                                            
                                            <div className='actionButtons'>
                                                <button onClick={()=> deleteTrip(trip._id)}><i className="fa-solid fa-trash"></i></button>
                                                <Link to={`/edit/${trip._id}`}>Edit</Link>
                                            </div>
                                            
                                    </div>  
                                </tr>
                                )
                            })
                        }
                    </tbody>
            </table>
        </div>
    </div>
    )
}

export default Trip