import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import { ThemeProvider } from './components/theme/ThemeContext'

function App() {

  return (
    <ThemeProvider>
      <div className='flex flex-col items-center min-h-screen'>
        <Routes>
          <Route path='/' element={<HomePage />} />
        </Routes>
      </div>
    </ThemeProvider>
  )
}

export default App
