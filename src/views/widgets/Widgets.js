import React from 'react'
import Activity from './Activity'
import ChartWidget from './ChartWidget'
import DataTable from './DataTable'
import MonthlyEarning from './MonthlyEarning'
import Product from './Product'
import ProfileWidget from './ProfileWidget'
import Social from './Social'
import UtilityWidget from './UtilityWidget'
import ActivityContainer from './ActivityContainer'

const Widget = () => {
  return (
    <React.Fragment>
      <div className="row">
        <div className="col-xl-4">
          <ProfileWidget />
          <MonthlyEarning />
        </div>
        <div className="col-xl-8">
          <UtilityWidget />
          <div className="card">
            <ChartWidget />
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-xl-4">
          <Social />
        </div>
        <div className="col-xl-4">
          <ActivityContainer />
        </div>
        <div className="col-xl-4">
          <Product />
        </div>
      </div>
      <div className="row">
        <DataTable />
      </div>
    </React.Fragment>
  )
}

export default Widget
