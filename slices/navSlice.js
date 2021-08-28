import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    origin:null,
    destination:null,
    travelTimeInformation:null
}

export const navSlice = createSlice({
    name:'nav',
    initialState,
    reducers:{
        setOrign: (state,action) => {
            state.origin = action.payload;
        },
        setDestination : (state, action) =>{
            state.destination = action.payload;
        },
        setTravelInformation: (state, action)=>{
            state.travelTimeInformation = action.payload
        }
    }
});

export const { setOrign, setTravelInformation, setDestination} = navSlice;

//selector 
export const selectOrigin = (state) => state.nav.origin;
export const selectTravelTimeInformation = (state)=> state.nav.travelTimeInformation;
export const selectDestination = (state) => state.nav.destination;



export default navSlice.reducer;

