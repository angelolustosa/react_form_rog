import { useState } from 'react'
import { UsuarioForm } from './components/UsuarioForm'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <UsuarioForm />
    </>
  )
}

export default App
