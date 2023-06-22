import React from 'react'
import Activity from './Activity'
import './ActivityContainer.css'
import TIMELINEDATA from 'src/data/TimelineData'

const ActivityContainer = () => {
  return (
    TIMELINEDATA.length > 0 && (
      <div className="card">
        <div className="timeline-container">
          {TIMELINEDATA.map((data, idx) => (
            <Activity data={data} key={idx} />
          ))}
        </div>
      </div>
    )
  )
}
export default ActivityContainer
