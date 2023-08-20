import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { CSidebar, CSidebarBrand, CSidebarNav, CSidebarToggler , CAvatar} from '@coreui/react'
import CIcon from '@coreui/icons-react'

import { AppSidebarNav } from './AppSidebarNav'

import TsLogo from '../../assets/images/favicon.png'
import TrisysLogo from '../../assets/images/trisys-logo.png'

import SimpleBar from 'simplebar-react'
import 'simplebar/dist/simplebar.min.css'
import { saveSidebar } from '../../storage/actions'

// sidebar nav config
import navigation from '../../_nav'

const AppSidebar = () => {
  const dispatch = useDispatch()
  const unfoldable = useSelector((state) => state.authReducer.sidebarShow)

  return (
    <CSidebar
      position="fixed"
      unfoldable={unfoldable}
      visible={unfoldable}
      onVisibleChange={(visible) => {
        dispatch(saveSidebar(visible))
      }}
    >
      <CSidebarBrand className="d-none d-md-flex" to="/">
        <CAvatar className="sidebar-brand-full" size="md" src={TsLogo} />
        <CAvatar style={{width: 100, marginLeft:10}} size="lg" src={TrisysLogo} />
      </CSidebarBrand>
      <CSidebarNav>
        <SimpleBar>
          <AppSidebarNav items={navigation} />
        </SimpleBar>
      </CSidebarNav>
      <CSidebarToggler
        className="d-none d-lg-flex"
        onClick={() => dispatch(saveSidebar(!unfoldable))}
      />
    </CSidebar>
  )
}

export default React.memo(AppSidebar)
