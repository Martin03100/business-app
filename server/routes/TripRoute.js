import express from "express";
import { create, deleteTrip, getAll, getOne, update } from "../controller/TripController.js";

const route = express.Router();

route.post("/create", create);
route.get("/getall", getAll);
route.get("/getone/:id", getOne);
route.put("/update/:id", update);
route.delete("/delete/:id", deleteTrip);

export default route; 