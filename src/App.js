import React from 'react'

import { GlobalProvider } from './context/Context'

import Audio from './Audio'

export default function App() {

  return (
    <GlobalProvider>
      <Audio/>
      
    </GlobalProvider>
  )
}

