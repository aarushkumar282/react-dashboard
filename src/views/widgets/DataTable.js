import { cibMastercard, cibPaypal, cibVisa } from '@coreui/icons'
import CIcon from '@coreui/icons-react'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import ORDER from 'src/data/OrderData'
import ViewDetails from './ViewDetails'

const DataTable = () => {
  const [showDetails, setShowDetails] = useState(false)

  const showDetailsHandler = () => {
    setShowDetails(true)
  }

  const hideDetailHandler = () => {
    setShowDetails(false)
  }

  return (
    <React.Fragment>
      {showDetails && <ViewDetails onClose={hideDetailHandler} />}
      <div className="col-lg-12">
        <div className="card">
          <div className="card-body">
            <div className="mb-4 h4 card-title">Latest Transaction</div>
            {/* <div className="mb-2 row">
              <div className="col-md-1">
                <select className="form-select">
                  <option value="10">Show 10</option>
                  <option value="20">Show 20</option>
                  <option value="30">Show 30</option>
                  <option value="40">Show 40</option>
                  <option value="50">Show 50</option>
                </select>
              </div>
            </div> */}
            <div className="table-responsive react-table">
              <table role="table" className="table table-hover">
                <thead className="table-light table-nowrap">
                  <tr role="row">
                    <th>
                      <div className="mb-2">#</div>
                    </th>
                    <th>
                      <div className="mb-2" title="Toggle SortBy">
                        Order ID
                      </div>
                    </th>
                    <th>
                      <div className="mb-2" title="Toggle SortBy">
                        Billing Name
                      </div>
                    </th>
                    <th>
                      <div className="mb-2" title="Toggle SortBy">
                        Date
                      </div>
                    </th>
                    <th>
                      <div className="mb-2" title="Toggle SortBy">
                        Total
                      </div>
                    </th>
                    <th>
                      <div className="mb-2" title="Toggle SortBy">
                        Payment Status
                      </div>
                    </th>
                    <th>
                      <div className="mb-2" title="Toggle SortBy">
                        Payment Method
                      </div>
                    </th>
                    <th>
                      <div className="mb-2" title="Toggle SortBy">
                        View Details
                      </div>
                    </th>
                  </tr>
                </thead>
                <tbody role="rowgroup">
                  {ORDER.map((item) => (
                    <tr key={item.id} style={{ height: '55px', verticalAlign: 'middle' }}>
                      <td role="cell">
                        <input type="checkbox" className="form-check-input" />
                      </td>
                      <td role="cell">
                        <span className="text-body font-weight-bold">#SK{item.id}</span>
                      </td>
                      <td role="cell">{item.name}</td>
                      <td role="cell">{item.date}</td>
                      <td role="cell">
                        <span>&#8377; </span>
                        {item.total}
                      </td>
                      <td role="cell">
                        {item && item.status === 'Paid' ? (
                          <span
                            className="badge"
                            style={{
                              backgroundColor: '#f1b44c2e !important',
                              color: '#34c38f',
                            }}
                          >
                            {item.status}
                          </span>
                        ) : item.status === 'Chargeback' ? (
                          <span
                            className="badge"
                            style={{
                              backgroundColor: 'hsla(0,86%,69%,.18)!important',
                              color: '#f46a6a',
                            }}
                          >
                            {item.status}
                          </span>
                        ) : (
                          <span
                            className="badge"
                            style={{
                              backgroundColor: 'rgba(241,180,76,.18)!important',
                              color: '#f1b44c',
                            }}
                          >
                            {item.status}
                          </span>
                        )}
                      </td>
                      <td role="cell">
                        <span>
                          {item && item.method === 'Mastercard' ? (
                            <CIcon
                              icon={cibMastercard}
                              style={{ width: '25px', height: '20px', verticalAlign: 'middle' }}
                            />
                          ) : item.method === 'Visa' ? (
                            <CIcon
                              icon={cibVisa}
                              style={{ width: '25px', height: '20px', verticalAlign: 'middle' }}
                            />
                          ) : (
                            <CIcon
                              icon={cibPaypal}
                              style={{ width: '25px', height: '20px', verticalAlign: 'middle' }}
                            />
                          )}
                          {item.method}
                        </span>
                      </td>
                      <td role="cell">
                        <button
                          type="button"
                          className="btn-sm btn-rounded btn btn-primary"
                          style={{ borderRadius: '15px', padding: '7px 10px' }}
                          onClick={showDetailsHandler}
                        >
                          View Details
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="justify-content-md-end justify-content-center align-items-center row">
              <div className="col-md-auto col">
                <div className="d-flex gap-1">
                  <button type="button" disabled="" className="btn btn-primary disabled">
                    &lt;&lt;
                  </button>
                  <button type="button" disabled="" className="btn btn-primary disabled">
                    &lt;
                  </button>
                </div>
              </div>
              <div className="col-md-auto d-none d-md-block col">
                Page <strong>1 of 1</strong>
              </div>
              <div className="col-md-auto col">
                <input
                  min="1"
                  max="1"
                  type="number"
                  className="form-control"
                  value="1"
                  style={{ width: '70%' }}
                />
              </div>
              <div className="col-md-auto col">
                <div className="d-flex gap-1">
                  <button type="button" disabled="" className="btn btn-primary disabled">
                    &gt;
                  </button>
                  <button type="button" disabled="" className="btn btn-primary disabled">
                    &gt;&gt;
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default DataTable
