import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter as Router } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { Toaster } from 'react-hot-toast'
import { BookingProvider } from './context/BookingContext.jsx'
// import "./index.css"

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
})

createRoot(document.getElementById('root')).render(

  <QueryClientProvider client={queryClient}>
    <Router>
      <BookingProvider>
        <App />
      </BookingProvider>
      <Toaster position="top-center" toastOptions={{className:"text-lg", duration: 8000}}/>
    </Router>
  </QueryClientProvider>
)
