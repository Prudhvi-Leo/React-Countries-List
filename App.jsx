import Header from './components/Header'
import { Outlet } from 'react-router'
import { useState } from 'react'
import {ThemeProvider} from './contexts/ThemeContexts'

const App = () => {
  return (
    <ThemeProvider>
      <Header/>
      <Outlet/>
    </ThemeProvider>
  )
}

export default App