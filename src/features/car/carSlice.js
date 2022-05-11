import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cars: ["Model S", "Model 3", "Model X", "Model Y"]
}

const carSlice = createSlice({
    name: "car",
    initialState,
    reducers: {}
})

// car passed in name is used here to acess cars array 
export const selectCars = state => state.car.cars

// we need to export the reducers even though it's is empty
export default carSlice.reducer