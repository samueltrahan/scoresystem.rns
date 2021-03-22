import React from 'react';
import './RecordFairways.css';

export default function RecordFairways({checkNo, checkYes}) {


   
    return (
        <div>
          <h1>Did you hit the fairway?</h1>
          <button  onClick={() => checkYes()}>Yes</button><button onClick={() => checkNo()}>No</button>
        </div>
    )
}
