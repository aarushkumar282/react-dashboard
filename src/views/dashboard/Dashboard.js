import React from 'react'
import Widget from '../widgets/Widgets'
import './Dashboard.css'
const Dashboard = () => {
  return (
    <React.Fragment>
      <div className="container-fluid">
        <div className="row">
          <div className="col-12 col">
            <div className="page-title-box d-sm-flex align-items-center justify-content-between">
              <a className="title">DASHBOARD</a>
              <div className="page-title-right">
                <ol className="breadcrumb m-0">
                  <li className="breadcrumb-item">
                    <a>Dashboards</a>
                  </li>
                  <li className="active breadcrumb-item" aria-current="page">
                    <a>Dashboard</a>
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </div>
        <Widget />
      </div>
    </React.Fragment>
  )
}

export default Dashboard
