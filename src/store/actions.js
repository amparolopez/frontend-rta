import axios from 'axios';
// import { FETCH_FILES_REQUEST, FETCH_FILES_SUCCESS, FETCH_FILES_FAILURE } from './types';
// import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchFiles = (fileName = null) => async (dispatch) => {
    console.log("fetchFiles action called with fileName:", fileName);
    dispatch({ type: 'FETCH_FILES_REQUEST' });

    try {
        const url = fileName 
            ? `http://localhost:3000/files/data?fileName=${fileName}`
            : 'http://localhost:3000/files/data';

        const response = await axios.get(url);
        console.log("Data fetched:", response.data);
        dispatch({ type: 'FETCH_FILES_SUCCESS', payload: response.data });
    } catch (error) {
        console.error("Error fetching data:", error.message);
        dispatch({ type: 'FETCH_FILES_FAILURE', error: error.message });
    }
};