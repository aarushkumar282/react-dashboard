import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {
  CContainer,
  CHeader,
  CHeaderBrand,
  CHeaderNav,
  CHeaderToggler,
  CNavLink,
  CNavItem,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import {
  cibReact,
  cifIn,
  cilApplications,
  cilBell,
  cilMenu,
  cilSearch,
  cilSettings,
} from '@coreui/icons'

import { AppHeaderDropdown } from './header/index'

const AppHeader = () => {
  const deviceId = document.getElementById('root')
  const dispatch = useDispatch()
  const sidebarShow = useSelector((state) => state.sidebarShow)

  const onSearchHandler = (event) => {
    event.preventDefault()
  }

  const onFullscreenHandler = (event) => {
    event.preventDefault()
    deviceId.requestFullscreen()
  }

  return (
    <CHeader position="sticky">
      <CContainer fluid>
        <CHeaderToggler
          className="ps-1"
          onClick={() => dispatch({ type: 'set', sidebarShow: !sidebarShow })}
        >
          <CIcon icon={cilMenu} size="lg" />
        </CHeaderToggler>
        <CHeaderBrand className="mx-auto d-md-none" to="/">
          <CIcon icon={cibReact} height={48} alt="Logo" />
        </CHeaderBrand>
        <CHeaderNav className="d-none d-md-flex me-auto">
          <form className="app-search d-none d-lg-block" onSubmit={onSearchHandler}>
            <div className="position-relative">
              <input
                type="text"
                className="form-control"
                placeholder="Search..."
                style={{
                  borderRadius: '50px',
                  backgroundColor: '#f3f3f9',
                  outline: 'none',
                  position: 'absolute',
                  width: '230px',
                  top: '-17px',
                  paddingLeft: '35px',
                }}
              />
              <CIcon
                icon={cilSearch}
                size="lg"
                style={{ position: 'absolute', right: '-25px', top: '-8px' }}
              />
            </div>
          </form>
        </CHeaderNav>
        <CHeaderNav className="ms-4">
          <CNavItem>
            <CNavLink href="#">
              <CIcon icon={cifIn} size="xxl" />
            </CNavLink>
          </CNavItem>
        </CHeaderNav>
        <CHeaderNav className="ms-4">
          <CNavItem>
            <CNavLink href="#">
              <CIcon icon={cilApplications} size="lg" onClick={onFullscreenHandler} />
            </CNavLink>
          </CNavItem>
        </CHeaderNav>
        <CHeaderNav className="ms-4">
          <CNavItem>
            <CNavLink href="#">
              <CIcon icon={cilBell} size="lg" />
            </CNavLink>
          </CNavItem>
        </CHeaderNav>
        <CHeaderNav className="ms-4">
          <AppHeaderDropdown />
        </CHeaderNav>
        <CHeaderNav className="ms-4">
          <CNavItem>
            <CNavLink href="#">
              <CIcon icon={cilSettings} size="lg" />
            </CNavLink>
          </CNavItem>
        </CHeaderNav>
      </CContainer>
      {/* <CHeaderDivider /> */}
      {/* <CContainer fluid> */}
      {/* <AppBreadcrumb /> */}
      {/* </CContainer> */}
    </CHeader>
  )
}

export default AppHeader
