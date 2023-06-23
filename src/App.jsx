import { GlobalStyle } from './styles/globalStyles'
import { Reset } from './styles/Reset'
import { RoutesMain } from './routes/RoutesMain'
import { ToastContainer } from 'react-toastify'
import "react-toastify/dist/ReactToastify.css"

function App() {
  return (
    <>
      <Reset />
      <GlobalStyle />
      <main>
        <ToastContainer autoClose={3000} />  
        <RoutesMain />
      </main>
    </>
  )
}

export default App
