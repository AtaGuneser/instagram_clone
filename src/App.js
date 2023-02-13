import { useRoutes } from 'react-router-dom';
import routes from "./routes"
import { Toaster } from 'react-hot-toast'
import { useSelector } from 'react-redux'
import { useState, useEffect } from 'react'
import Loader from './components/Loader';

function App() {

  const user = useSelector(state => state.auth.user)
  const showRoutes = useRoutes(routes)
  const [redirect, setRedirect] = useState(false)


  if (user === null) {
    return <Loader></Loader>
  }

  return (
    <>
      <Toaster position="top-right" />
      {showRoutes}
    </>
  )
}

export default App;
