import { createSlice } from "@reduxjs/toolkit";

// Ini adalah data koordinat absensi
// gunakan first dan second untuk membuat area absensi dengan bentuk persegi
// gunakan center untuk memusatkan map layar

// Kordinat masjid al ikhlas
// first: [-7.482044510981448, 110.22200388577714],
// second: [-7.482209927696517, 110.22228020994946],

// Koordinat aula smanaga


const coordinates = createSlice({
    name: 'coordinates',
    initialState: {
        first: [-7.4822071, 110.2223281],
        second: [-7.4826203, 110.2221863],
        center: [-7.482137557891397, 110.22213944103149],
        user: null,
    },
    reducers: {
        setUserCoordinate: (state, action) => {
            state.user = action.payload
        },
    }
})
export const { setUserCoordinate } = coordinates.actions
export default coordinates.reducer
