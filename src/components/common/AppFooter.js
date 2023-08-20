import React from 'react'
import { CFooter } from '@coreui/react'

const AppFooter = () => {
  return (
    <CFooter>
      <div className="ms-auto">
        <a href="https://coreui.io" target="_blank" rel="noopener noreferrer">
          CoreUI
        </a>
        <span className="me-1"> 2022 trisys base app.</span>
      </div>
    </CFooter>
  )
}

export default React.memo(AppFooter)
