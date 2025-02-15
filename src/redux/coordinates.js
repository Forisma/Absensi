import { createSlice } from "@reduxjs/toolkit";

// Ini adalah data koordinat absensi
// gunakan first dan second untuk membuat area absensi dengan bentuk persegi
// gunakan center untuk memusatkan map layar

// Smanaga
// first: [-7.4820215795622715, 110.2219734580599],
// second: [-7.482713015738791, 110.22282103612045],
// center: [-7.482137557891397, 110.22213944103149],

// Kordinat masjid al ikhlas
// first: [-7.482044510981448, 110.22200388577714],
// second: [-7.482209927696517, 110.22228020994946],
// center: [-7.482137557891397, 110.22213944103149],

// halol le

// const developerArea = JSON.parse(process.env.REACT_APP_DEVELOPER_AREA)
// console.log(developerArea);


const coordinates = createSlice({
    name: 'coordinates',
    initialState: {
        // first: developerArea[0],
        // second: developerArea[1],
        // center: developerArea[1],
        first: [-7.482044510981448, 110.22200388577714],
        second: [-7.482209927696517, 110.22228020994946],
        center: [-7.482137557891397, 110.22213944103149],
        user: null, // [latitude,longitude]
    },
    reducers: {
        setUserCoordinate: (state, action) => {
            state.user = action.payload
        },
    }
})
export const { setUserCoordinate } = coordinates.actions
export default coordinates.reducer
