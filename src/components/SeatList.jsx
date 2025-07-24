// import React, { useEffect, useState } from 'react';
// import Seat from './Seat';
// import danhSachGhe from '../assets/danhSachGhe.json';

// export default function SeatList() {
//   return (
//     <div className="grid grid-cols-10 gap-2 mb-6">
//       {danhSachGhe.map((ghe, index) => (
//         <Seat ghe={ghe} key={index} />
//       ))}
//     </div>
//   );
// }
import React from 'react';
import danhSachGheData from '../assets/danhSachGhe.json';
import Seat from './Seat';

export default function SeatList() {
  return (
    <div className="flex flex-col gap-2 items-center">
      {danhSachGheData.map((row, index) => (
        <div key={index} className="flex gap-2 items-center">
          <span className="w-6 font-bold">{row.hang}</span>
          {row.danhSachGhe.map((seat) => (
            <Seat key={seat.soGhe} seat={seat} />
          ))}
        </div>
      ))}
    </div>
  );
}
