import React from 'react'
import { ModeContext } from '../../App'
import { useContext } from 'react'

const Checkbox = () => {
  const [mode, setMode] = useContext(ModeContext)

  return (
    <div style={{ position: 'absolute', top: '40px', left: '40px' }}>
      <p>Dark Mode</p>
      <input
        
        type="checkbox"
        onInput={() => setMode(prev => (prev = !prev))}
      />
    </div>
  )
}

export default Checkbox
