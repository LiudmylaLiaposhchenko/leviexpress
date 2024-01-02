import { useState } from 'react';
import { JourneyPicker } from '../../components/JourneyPicker';
import { JourneyDetail } from '../../components/JourneyDetail';
import { useNavigate } from 'react-router-dom';
import { SeatPicker } from '../../components/SeatPicker';

export const HomePage = () => {
  const [journey, setJourney] = useState(null);
  const [userSeat, setUserSeat] = useState(null);

  const handleJourneyChange = (j) => {
    setJourney(j);
    setUserSeat(j.autoSeat);
  };

  const handleBuy = async () => {
    const response = await fetch(
      'https://apps.kodim.cz/daweb/leviexpress/api/reservation',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          action: 'create',
          seat: userSeat,
          journeyId: journey.journeyId,
        }),
      },
    );
    const data = await response.json();
    navigate(`/reservation/${data.results.reservationId}`);
  };

  const navigate = useNavigate();

  return (
    <main>
      <JourneyPicker onJourneyChange={handleJourneyChange} />
      {journey ? (
        <>
          <JourneyDetail journey={journey} />
          <SeatPicker
            seats={journey.seats}
            selectedSeat={userSeat}
            onSeatSelected={setUserSeat}
          />
        </>
      ) : null}

      <div className="controls container">
        <button onClick={handleBuy} className="btn btn--big" type="button">
          Rezervovat
        </button>
      </div>
    </main>
  );
};
