// import React from 'react';
// import { useSelector } from 'react-redux';

// export default function SeatInfo() {
//   const { selectedSeats } = useSelector((state) => state.booking);

//   return (
//     <div className="bg-gray-700 p-4 rounded-lg">
//       <h2 className="text-xl font-semibold mb-2 text-green-400">Ghế đã chọn:</h2>
//       <div className="flex flex-wrap gap-2">
//         {selectedSeats.length === 0 ? (
//           <p className="text-gray-300">Chưa chọn ghế nào.</p>
//         ) : (
//           selectedSeats.map((seat) => (
//             <span key={seat.soGhe} className="bg-green-500 px-3 py-1 rounded">
//               {seat.soGhe}
//             </span>
//           ))
//         )}
//       </div>
//     </div>
//   );
// }
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { clearSeats, removeSeat } from '../redux/reducers/bookingReducer';

export default function SeatInfo() {
  const dispatch = useDispatch();
  const { selectedSeats } = useSelector((state) => state.booking);
  const total = selectedSeats.reduce((sum, s) => sum + (s.gia ?? 75000), 0);

  const handleBook = () => {
    if (selectedSeats.length === 0) {
      alert('❌ Bạn chưa chọn ghế nào!');
      return;
    }
    alert('✅ Đặt vé thành công!');
    dispatch(clearSeats());
  };

  return (
    <div className="bg-gray-700 p-4 rounded-lg mt-8">
      <h2 className="text-xl font-semibold mb-3 text-yellow-300">Thông tin vé</h2>

      {selectedSeats.length === 0 ? (
        <p className="text-gray-300 italic">Chưa chọn ghế nào.</p>
      ) : (
        <table className="w-full text-left text-sm mb-4">
          <thead>
            <tr className="border-b border-gray-600">
              <th className="py-2">Ghế</th>
              <th className="py-2">Giá</th>
              <th className="py-2 text-right">Huỷ</th>
            </tr>
          </thead>
          <tbody>
            {selectedSeats.map((s) => (
              <tr key={s.soGhe} className="border-b border-gray-600">
                <td className="py-2">{s.soGhe}</td>
                <td className="py-2">{(s.gia ?? 75000).toLocaleString()}đ</td>
                <td className="py-2 text-right">
                  <button
                    onClick={() => dispatch(removeSeat(s.soGhe))}
                    className="text-red-400 hover:text-red-500"
                  >
                    ✕
                  </button>
                </td>
              </tr>
            ))}
            <tr>
              <td className="py-2 font-bold">Tổng tiền</td>
              <td colSpan={2} className="py-2 font-bold text-yellow-300">
                {total.toLocaleString()}đ
              </td>
            </tr>
          </tbody>
        </table>
      )}

      <button
        onClick={handleBook}
        className="w-full py-2 mt-2 bg-green-600 hover:bg-green-700 rounded text-white font-semibold transition"
      >
        🎟️ Đặt vé
      </button>
    </div>
  );
}
