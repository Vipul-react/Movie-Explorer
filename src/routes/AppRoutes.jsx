import React from 'react'
import { Route, Routes } from 'react-router-dom'
import routesConfig from './routesConfig.jsx'

const AppRoutes = () => {
  return (
    <Routes>
        {routesConfig.map((route, index)=>(
            <Route key={index} path={route.path} element={route.element}/>
        ))}
    </Routes>
  )
}

export default AppRoutes