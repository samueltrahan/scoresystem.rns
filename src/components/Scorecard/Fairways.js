import React from "react";
import "./Fairways.css";

export default function Fairways({ fairways }) {
  return (
    <div>
      {fairways ? (
        <div>
          <i className="fas fa-check fa-2"></i>
        </div>
      ) : (
        <div>
          <i className="fas fa-horizontal-rule fa-2x"></i>
        </div>
      )}
    </div>
  );
}
