// import React from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { toggleSeat } from '../redux/reducers/bookingReducer';

// export default function Seat({ ghe }) {
//   const dispatch = useDispatch();
//   const { selectedSeats } = useSelector((state) => state.booking);

//   const isSelected = selectedSeats.some((item) => item.soGhe === ghe.soGhe);

//   let classes = "m-1 px-3 py-2 rounded text-white cursor-pointer";
//   if (ghe.daDat) {
//     classes += " bg-gray-500 cursor-not-allowed";
//   } else if (isSelected) {
//     classes += " bg-green-500";
//   } else {
//     classes += " bg-yellow-500 hover:bg-yellow-600";
//   }

//   const handleClick = () => {
//     if (!ghe.daDat) {
//       dispatch(toggleSeat(ghe));
//     }
//   };

//   return (
//     <button className={classes} onClick={handleClick}>
//       {ghe.soGhe}
//     </button>
//   );
// }
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleSeat } from '../redux/reducers/bookingReducer';

export default function Seat({ seat }) {
  const dispatch = useDispatch();
  const selectedSeats = useSelector((state) => state.booking.selectedSeats);
  const isSelected = selectedSeats.some(s => s.soGhe === seat.soGhe);

  const getColor = () => {
    if (seat.daDat) return 'bg-gray-400 cursor-not-allowed';
    if (isSelected) return 'bg-green-500';
    return 'bg-yellow-500';
  };

  return (
    <button
      disabled={seat.daDat}
      onClick={() => dispatch(toggleSeat(seat))}
      className={`w-10 h-10 rounded ${getColor()} text-white font-bold text-sm hover:scale-105 transition`}
    >
      {seat.soGhe.replace(/^[A-Z]/, '')}
    </button>
  );
}
