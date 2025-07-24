// import { createSlice } from '@reduxjs/toolkit';

// const bookingSlice = createSlice({
//   name: 'booking',
//   initialState: {
//     selectedSeats: [],
//   },
//   reducers: {
//     toggleSeat: (state, action) => {
//       const seat = action.payload;
//       const index = state.selectedSeats.findIndex(s => s.soGhe === seat.soGhe);
//       if (index !== -1) {
//         state.selectedSeats.splice(index, 1);
//       } else {
//         state.selectedSeats.push(seat);
//       }
//     },
//   },
// });

// export const { toggleSeat } = bookingSlice.actions;
// export default bookingSlice.reducer;
import { createSlice } from '@reduxjs/toolkit';

const DEFAULT_PRICE = 75000;

const bookingSlice = createSlice({
  name: 'booking',
  initialState: {
    selectedSeats: [],
  },
  reducers: {
    toggleSeat: (state, action) => {
      const seat = { ...action.payload };
      if (seat.gia == null) seat.gia = DEFAULT_PRICE;

      const index = state.selectedSeats.findIndex(s => s.soGhe === seat.soGhe);
      if (index !== -1) {
        state.selectedSeats.splice(index, 1);
      } else {
        state.selectedSeats.push(seat);
      }
    },
    removeSeat: (state, action) => {
      state.selectedSeats = state.selectedSeats.filter(s => s.soGhe !== action.payload);
    },
    clearSeats: (state) => {
      state.selectedSeats = [];
    }
  },
});

export const { toggleSeat, removeSeat, clearSeats } = bookingSlice.actions;
export default bookingSlice.reducer;
