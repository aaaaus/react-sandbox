import React from 'react';

const getSeason = (lat, month) => {
  if (month > 2 && month < 9) {
    return lat > 0 ? 'summer' : 'winter';
  } else {
    return lat > 0 ? 'winter' : 'summer';
  }
}

const SeasonDisplay = (props) => {

  const season = getSeason(props.lat, new Date().getMonth())
  const text = season === 'summer' ? "Let's hit the beach!" : "Brr, it's chilly."
  const iconType = season === 'summer' ? 'sun' : 'snowflake';

  return (
    <div>
      <i className={`sun icon`} /> {/* interpolation tics must be in brackets */}
      {text}
      <i className={`sun icon`} />
    </div>
  )
}

export default SeasonDisplay;
