import React from 'react'

import { GlobalProvider } from './context/Context'
import AdvancedHooks from './lesson/AdvancedHooks'

import Audio from './lesson/Audio'

export default function App() {

  return (
    <GlobalProvider>
      {/* <Audio/> */}
      <AdvancedHooks/>
      
    </GlobalProvider>
  )
}

