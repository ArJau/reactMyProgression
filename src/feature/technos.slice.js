import { createSlice } from "@reduxjs/toolkit";
import {v4 as uuidv4} from 'uuid';

export const technosSlice = createSlice({
    name:"technos",
    initialState:{
        technos:[]
    },
    reducers:{
        setTechnosData(state, {payload}){
            state.technos = payload;
        },
        handleDeleteTechnoData(state, {payload}){
            state.technos = state.technos.filter((techno)=>techno.id !== payload);
        },
        handleAddTechnoData(state, {payload}){
            payload.id = uuidv4();
            state.technos.push(payload);
        },
    },
})

export const { setTechnosData, handleDeleteTechnoData,handleAddTechnoData } = technosSlice.actions;
export default technosSlice.reducer;