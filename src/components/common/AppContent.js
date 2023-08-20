import React, { Suspense } from 'react'
import { Redirect, Route, Routes } from 'react-router-dom'
import { CContainer, CSpinner } from '@coreui/react'
import Dashboard from '../dashboard/Dashboard'
// routes config
import routes from './router'

const AppContent = () => {
  return (
    <CContainer lg>
      <Suspense fallback={<CSpinner color="primary" />}>
        <Routes>
          {/* {routes.map((route, idx) => {
            return (
              route.component && (
                <Route
                  key={idx}
                  path={route.path}
                  exact={route.exact}
                  name={route.name}
                  render={(props) => (
                    <>
                      <route.component {...props} />
                    </>
                  )}
                />
              )
            )
          })} */}
          <Route path="/" element={ <Dashboard/> }  />
        </Routes>
      </Suspense>
    </CContainer>
  )
}

export default React.memo(AppContent)
