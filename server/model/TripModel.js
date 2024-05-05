import mongoose from "mongoose";

const tripSchema = new mongoose.Schema({
    destination:{
        type: String,
        required: true,
    },
    hotel:{
        type: String,
        required: true,
    },
    activities:{
        type: String, 
        required: true,
    },
    date:{
        type: String,
        required: true
    },
})

export default mongoose.model("Trip", tripSchema);