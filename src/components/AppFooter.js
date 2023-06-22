import React from 'react'
import { CFooter } from '@coreui/react'
import { Link } from 'react-router-dom'

const AppFooter = () => {
  return (
    <CFooter>
      <div>
        <Link rel="noopener noreferrer">React Assignment</Link>
        <span className="ms-1">&copy; 2023 Copyright</span>
      </div>
      <div className="ms-auto">
        <span className="me-1">Powered by</span>
        <div>Concentrix Catalyst</div>
      </div>
    </CFooter>
  )
}

export default React.memo(AppFooter)
