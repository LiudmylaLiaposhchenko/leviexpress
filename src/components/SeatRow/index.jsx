import './style.css';
import { Seat } from '../Seat';

export const SeatRow = ({ row }) => {
  return (
    <div className="seat-row">
      {row.map((r) => (
        <Seat key={r.number} number={r.number} isOccupied={r.isOccupied} />
      ))}
    </div>
  );
};
