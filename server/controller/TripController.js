import Trip from "../model/TripModel.js";

export const create = async(req,res)=>{
    try {
        const tripData = new Trip (req.body);
        if(!tripData){
            return res.status(404).json({msg: "Error"});
        }    
        const saveData = await tripData.save();
        res.status(200).json({ message: "Trip created successfully" });   
    } catch (error) {
        res.status(500).json({error: error}); 
    }
}

export const getAll = async(req,res)=>{
    try {
        const tripData = await Trip.find();
        if(!tripData){
            return res.status(404).json({msg: "Trip data not found"});
        }    
        res.status(200).json(tripData);   
    } catch (error) {
        res.status(500).json({error: error});
    }
}

export const getOne = async(req,res)=>{
    try {
        const id = req.params.id;
        const tripExist = await Trip.findById(id);
        if(!tripExist){
            return res.status(404).json({msg: "Trip not found"});
        }
        res.status(200).json(tripExist);
          
    } catch (error) {
        res.status(500).json({error: error});
    }
}

export const update = async(req,res) =>{
    try {
        const id = req.params.id;
        const tripExist = await Trip.findById(id);
        if(!tripExist){
            return res.status(404).json({msg: "Trip not found"});
        }
        const updatedData = await Trip.findByIdAndUpdate(id, req.body, {new:true});
        res.status(200).json({msg:"Trip updated successfully"});
    } catch (error) {
        res.status(500).json({error: error});
    }
}

export const deleteTrip = async(req,res) =>{
    try {
        const id = req.params.id;
        const tripExist = await Trip.findById(id);
        if(!tripExist){
            return res.status(404).json({msg: "Trip not exist"});
        }
        await Trip.findByIdAndDelete(id);
        res.status(200).json({msg: "Trip deleted successfully"});
    } catch (error) {
        res.status(500).json({error: error});
    }
}