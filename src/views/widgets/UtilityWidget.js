import { cilCart, cilCash, cilTag } from '@coreui/icons'
import CIcon from '@coreui/icons-react'
import React from 'react'
import './UtilityWidget.css'

const UtilityWidget = () => {
  return (
    <div className="row">
      <div className="col-md-4">
        <div className="mini-stats-wid card">
          <div className="card-body">
            <div className="d-flex">
              <div className="flex-grow-1">
                <p className="text-muted fw-medium">Orders</p>
                <h4 className="mb-0">1,235</h4>
              </div>
              <div className="avatar-sm rounded-circle bg-primary align-self-center mini-stat-icon">
                <span className="avatar-title rounded-circle bg-primary">
                  <CIcon icon={cilCart} style={{ height: '30px', width: '30px' }} />
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-md-4">
        <div className="mini-stats-wid card">
          <div className="card-body">
            <div className="d-flex">
              <div className="flex-grow-1">
                <p className="text-muted fw-medium">Revenue</p>
                <h4 className="mb-0">$35, 723</h4>
              </div>
              <div className="avatar-sm rounded-circle bg-primary align-self-center mini-stat-icon">
                <span className="avatar-title rounded-circle bg-primary">
                  <CIcon icon={cilCash} size="xxl" />
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-md-4">
        <div className="mini-stats-wid card">
          <div className="card-body">
            <div className="d-flex">
              <div className="flex-grow-1">
                <p className="text-muted fw-medium">Average Price</p>
                <h4 className="mb-0">$16.2</h4>
              </div>
              <div className="avatar-sm rounded-circle bg-primary align-self-center mini-stat-icon">
                <span className="avatar-title rounded-circle bg-primary">
                  <CIcon icon={cilTag} size="xxl" />
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default UtilityWidget
