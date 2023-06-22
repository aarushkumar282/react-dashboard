import { cilLocationPin } from '@coreui/icons'
import CIcon from '@coreui/icons-react'
import React from 'react'

const Product = () => {
  return (
    <div className="card">
      <div className="card-body">
        <div className="mb-4 card-title">Top Cities Selling Product</div>
        <div className="text-center">
          <div className="avatar-sm mx-auto mb-4">
            <span className="avatar-title rounded-circle">
              <CIcon icon={cilLocationPin} size="xxl"></CIcon>
            </span>
          </div>
          <h3>1,456</h3>
          <p>San Francisco</p>
        </div>
        <div className="table-responsive mt-4">
          <table className="table align-middle table-nowrap">
            <tbody>
              <tr>
                <td style={{ width: '30%' }}>
                  <p className="mb-0">San Francisco</p>
                </td>
                <td style={{ width: '25%' }}>
                  <h5 className="mb-0">1,456</h5>
                </td>
                <td>
                  <div className="bg-transparent progress-sm progress">
                    <div
                      className="progress-bar bg-primary"
                      role="progressbar"
                      aria-valuenow="94"
                      aria-valuemin="0"
                      aria-valuemax="100"
                      style={{ width: '94%' }}
                    ></div>
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <p className="mb-0">Los Angeles</p>
                </td>
                <td>
                  <h5 className="mb-0">1,123</h5>
                </td>
                <td>
                  <div className="bg-transparent progress-sm progress">
                    <div
                      className="progress-bar bg-success"
                      role="progressbar"
                      aria-valuenow="82"
                      aria-valuemin="0"
                      aria-valuemax="100"
                      style={{ width: '82%' }}
                    ></div>
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <p className="mb-0">San Diego</p>
                </td>
                <td>
                  <h5 className="mb-0">1,026</h5>
                </td>
                <td>
                  <div className="bg-transparent progress-sm progress">
                    <div
                      className="progress-bar bg-warning"
                      role="progressbar"
                      aria-valuenow="70"
                      aria-valuemin="0"
                      aria-valuemax="100"
                      style={{ width: '70%' }}
                    ></div>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default Product
