import React from 'react'
import Modal from '../Modal/Modal'
import headphone from '../../assets/images/headphone.png'
import hoodie from '../../assets/images/hoodie.png'
import classes from './ViewDetails.module.css'

const ViewDetails = (props) => {
  const headerCls = `modal-header ${classes.modal_header}`
  return (
    <Modal onClose={props.onClose}>
      <div className="modal-content">
        <div className="modal-content">
          <div className={headerCls}>
            <h5 className="modal-title">Order Details</h5>
            <button
              type="button"
              className="btn-close"
              aria-label="Close"
              onClick={props.onClose}
            ></button>
          </div>
          <div className="modal-body" style={{ padding: '20px' }}>
            <p className="mb-2">
              Product id: <span className="text-primary">#SK2540</span>
            </p>
            <p className="mb-4">
              Billing Name: <span className="text-primary">Neal Matthews</span>
            </p>
            <div className="table-responsive">
              <table className="table align-middle table-nowrap table">
                <thead>
                  <tr>
                    <th scope="col">Product</th>
                    <th scope="col">Product Name</th>
                    <th scope="col">Price</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">
                      <div>
                        <img src={headphone} alt="" className="avatar-sm" />
                      </div>
                    </th>
                    <td>
                      <div>
                        <h5 className="text-truncate font-size-14">Wireless Headphone (Black)</h5>
                        <p className="text-muted mb-0">&#8377; 899 x 1</p>
                      </div>
                    </td>
                    <td>&#8377; 899</td>
                  </tr>
                  <tr>
                    <th scope="row">
                      <div>
                        <img src={hoodie} alt="" className="avatar-sm" />
                      </div>
                    </th>
                    <td>
                      <div>
                        <h5 className="text-truncate font-size-14">Hoodie (Blue)</h5>
                        <p className="text-muted mb-0">&#8377; 999 x 2</p>
                      </div>
                    </td>
                    <td>&#8377; 1998</td>
                  </tr>
                  <tr>
                    <td colSpan="2">
                      <h6 className="m-0 text-right">Sub Total:</h6>
                    </td>
                    <td>&#8377; 2897</td>
                  </tr>
                  <tr>
                    <td colSpan="2">
                      <h6 className="m-0 text-right">Shipping:</h6>
                    </td>
                    <td>Free</td>
                  </tr>
                  <tr>
                    <td colSpan="2">
                      <h6 className="m-0 text-right">Total:</h6>
                    </td>
                    <td>&#8377; 2897</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" onClick={props.onClose}>
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </Modal>
  )
}

export default ViewDetails
