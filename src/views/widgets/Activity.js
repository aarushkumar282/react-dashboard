import React from 'react'
import './Activity.css'
import CIcon from '@coreui/icons-react'
import { cilArrowRight } from '@coreui/icons'

const Activity = ({ data }) => {
  // console.log(props.data, 'data')
  return (
    <div className="timeline-item">
      <div className="timeline-item-content">
        {/* <span className="tag" style={{ background: data.category.color }}>
          {data.category.tag}
        </span> */}
        <time>{data.date}</time>
        <p>{data.text}</p>
        {/* {data.link && (
          <a href={data.link.url} target="_blank" rel="noopener noreferrer">
            {data.link.text}
          </a>
        )} */}
        <span className="circle">
          <CIcon
            icon={cilArrowRight}
            style={{
              paddingTop: '0px',
              width: '12px',
              height: '16px',
              fontSize: '1rem',
              paddingLeft: '3px',
            }}
          />
        </span>
      </div>
    </div>
  )
}

export default Activity
