import { cilArrowRight } from '@coreui/icons'
import CIcon from '@coreui/icons-react'
import React from 'react'
import './ProfileWidget.css'

const ProfileWidget = () => {
  return (
    <div className="overflow-hidden card">
      <div className="bg-primary bg-soft">
        <div className="row">
          <div className="col-7">
            <div className="text-primary p-3">
              <h5 className="text-primary">Welcome Back !</h5>
              <p>Admin Dashboard</p>
            </div>
          </div>
          <div className="align-self-end col-5">
            <img
              src="http://skote-v-light.react.themesbrand.com/static/media/profile-img.43b59e598ba15abe6eab.png"
              alt=""
              className="img-fluid"
            />
          </div>
        </div>
      </div>
      <div className="pt-0 card-body">
        <div className="row">
          <div className="col-sm-4">
            <div className="avatar-md profile-user-wid mb-4">
              <img
                src="http://skote-v-light.react.themesbrand.com/static/media/avatar-1.3921191a8acf79d3e907.jpg"
                alt=""
                className="img-thumbnail rounded-circle"
              />
            </div>
            <h5 className="font-size-15 text-truncate">Gulshan</h5>
            <p className="text-muted mb-0 text-truncate">Frontend Developer</p>
          </div>
          <div className="col-sm-8">
            <div className="pt-4">
              <div className="row">
                <div className="col-6">
                  <h5 className="font-size-15">125</h5>
                  <p className="text-muted mb-0">Projects</p>
                </div>
                <div className="col-6">
                  <h5 className="font-size-15">$1245</h5>
                  <p className="text-muted mb-0">Revenue</p>
                </div>
              </div>
              <div className="mt-4">
                <a className="btn btn-primary  btn-sm" href="/dashboard">
                  View Profile
                  <CIcon icon={cilArrowRight} style={{ paddingLeft: '4px', paddingTop: '4px' }} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProfileWidget
