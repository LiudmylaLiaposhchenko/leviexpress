import { SeatRow } from '../SeatRow';
import './style.css';

export const SeatPicker = ({ seats }) => {
  return (
    <div className="seat-picker container">
      <h2>Vyberte sedadlo</h2>
      <div className="seats">
        {seats.map((s, i) => (
          <SeatRow row={s} key={i} />
        ))}
      </div>
    </div>
  );
};
