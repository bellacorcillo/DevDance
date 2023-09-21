import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';

function BreakPage() {
  const params = useParams();
  const breakDuration = params.duration;

  useEffect(() => {
    // Start your break countdown logic here
  }, [breakDuration]);

  return (
    <div>
      <h2>Break</h2>
      <p>Take a {breakDuration}-minute break!</p>
    </div>
  );
}

export default BreakPage;
