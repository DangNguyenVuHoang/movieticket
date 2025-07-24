// import React from 'react';
// import SeatList from './components/SeatList';
// import SeatInfo from './components/SeatInfo';

// export default function App() {
//   return (
//     <div className="min-h-screen p-10 bg-gradient-to-b from-indigo-900 to-black text-white">
//       <div className="max-w-5xl mx-auto bg-gray-800 bg-opacity-80 p-8 rounded-lg shadow-lg">
//         <h1 className="text-3xl font-bold text-center mb-8 text-yellow-300 uppercase tracking-wide">Đặt Vé Xem Phim</h1>
//         <SeatList />
//         <SeatInfo />
//       </div>
//     </div>
//   );
// }
import React from 'react';
import SeatList from './components/SeatList';
import SeatInfo from './components/SeatInfo';

export default function App() {
  return (
    <div className="min-h-screen p-6 md:p-10 bg-gradient-to-b from-indigo-900 to-black text-white">
      <div className="max-w-6xl mx-auto bg-gray-800 bg-opacity-80 p-6 md:p-10 rounded-lg shadow-lg">
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-8 text-yellow-300 uppercase tracking-wide">
          Đặt Vé Xem Phim
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Vùng ghế */}
          <div className="md:col-span-2">
          {/* Bạn có thể bọc SeatList bằng một div có max-height và overflow-auto nếu nhiều ghế */}
            <SeatList />
          </div>

          {/* Thông tin */}
          <div>
            <SeatInfo />
          </div>
        </div>
      </div>
    </div>
  );
}
