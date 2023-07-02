import React from 'react';

function Exhibit({ heading, children }) {
  return (
    <div className="exhibit">
      <h2>{heading}</h2>
      <div className="content">{children}</div>
    </div>
  );
}

export default Exhibit;