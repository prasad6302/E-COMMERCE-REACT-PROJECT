import React from 'react'
import Header from './Components/Header'
import Footer from './Components/Footer'
import Navigation from './Navigation/Navigation'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export default function App() {
  return (
    <div>
      <Header />
      <Navigation/>
      <Footer />
<ToastContainer 
          position="top-right"
          autoClose={2000}
          hideProgressBar={false}
          closeOnClick
          pauseOnHover
        />
    </div>
  )
}
