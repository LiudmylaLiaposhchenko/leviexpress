import { BusStop } from '../BusStop';
import './style.css';

export const JourneyDetail = ({ journey }) => {
  console.log(journey);
  return (
    <div className="journey-detail container">
      <h2>Podrobnosti cesty</h2>
      <div className="stops">
        {journey.stops.map((s) => {
          return (
            <BusStop
              name={s.name}
              station={s.station}
              time={s.time}
              key={s.code}
            />
          );
        })}
      </div>
    </div>
  );
};
