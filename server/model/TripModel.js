import mongoose from "mongoose";

const tripSchema = new mongoose.Schema({
    Destination:{
        type: String,
        required: true,
        enum: ['China', 'London', 'Paris'] 
    },
    Hotel:{
        type: String,
        required: true,
        enum: ['Hotel 1', 'Hotel 2', 'Hotel 3']
    },
    Activity:{
        type: String, 
        required: true,
        enum: ['Aktivita 1', 'Aktivita 2', 'Aktivita 3']
    },
    validityFrom:{
        type: Date,
        required: true
    },
    validityTo:{
        type: Date,
        required: true
    }
})

export default mongoose.model("Trip", tripSchema);