import { cilArrowRight, cilArrowTop } from '@coreui/icons'
import CIcon from '@coreui/icons-react'
import React from 'react'
import MonthChart from './MonthChart'
const MonthlyEarning = () => {
  return (
    <div className="card">
      <div className="card-body">
        <div className="mb-4 card-title">Monthly Earning</div>
        <div className="row">
          <div className="col-sm-6">
            <p className="text-muted">This month</p>
            <h3>$34,252</h3>
            <p className="text-muted">
              <span className="text-success me-2">
                12% <CIcon icon={cilArrowTop} />
              </span>
              From previous period
            </p>
            <div className="mt-4">
              <a className="btn btn-primary waves-effect waves-light btn-sm" href="/dashboard">
                View More
                <CIcon icon={cilArrowRight} style={{ paddingTop: '4px', paddingLeft: '4px' }} />
              </a>
            </div>
          </div>
          <div className="col-sm-6">
            <div className="mt-4 mt-sm-0">
              <MonthChart />
            </div>
          </div>
        </div>
        <p className="text-muted mb-0">We craft digital, graphic and dimensional thinking.</p>
      </div>
    </div>
  )
}

export default MonthlyEarning
